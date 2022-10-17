import React from 'react';
import { AuthService } from '../service/AuthService';
import { User } from '../model/User';
import history from '../history';

interface LoginProps {
  authService: AuthService;
  setUser: (user: User) => void;
}

interface LoginState {
  userName: string;
  password: string;
  isLoginSuccessful: boolean;
  isLoginAttempt: boolean;
}

interface CustomEvent {
  target: HTMLInputElement;
}

export class Login extends React.Component<LoginProps, LoginState> {
  state: LoginState = {
    userName: '',
    password: '',
    isLoginSuccessful: false,
    isLoginAttempt: false,
  };

  private setUserName(event: CustomEvent) {
    this.setState({ userName: event.target.value });
  }
  private setPassword(event: CustomEvent) {
    this.setState({ password: event.target.value });
  }

  private async handlerSubmit(event: any) {
    event.preventDefault();
    const result = await this.props.authService.login(this.state.userName, this.state.password);
    this.setState({ isLoginAttempt: true });
    console.log(result);
    if (result) {
      debugger;
      this.setState({ isLoginSuccessful: true });
      this.props.setUser(result);
      history.push('/profile');
    } else {
      this.setState({ isLoginSuccessful: false });
    }
  }

  render() {
    let loginStatus: any;
    if (this.state.isLoginAttempt) {
      if (this.state.isLoginSuccessful) {
        loginStatus = <strong style={{ color: 'green' }}>Deu certo pra caralho</strong>;
      } else {
        loginStatus = <strong style={{ color: 'red' }}>Porríssima nenhuma</strong>;
      }
    }
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={(e) => this.handlerSubmit(e)}>
          <label>Username</label>
          <input type="text" value={this.state.userName} onChange={(e) => this.setUserName(e)} />
          <label>Password</label>
          <input type="text" value={this.state.password} onChange={(e) => this.setPassword(e)} />
          <input type="submit" value="Send" />
        </form>
        {loginStatus}
      </div>
    );
  }
}
