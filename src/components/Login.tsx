import React from 'react';
import { User } from '../models/user';
import { AuthService } from '../auth/authService';

interface LoginState {
  userName: string;
  password: string;
  isLogginAttempted: boolean;
  isLogginSuccessful: boolean;
}

interface LoginProps {
  setUser: (user: User) => void;
  authService: AuthService;
}

interface CustomInput {
  target: HTMLInputElement;
}

export class Login extends React.Component<LoginProps, LoginState> {
  state: LoginState = {
    userName: '',
    password: '',
    isLogginAttempted: false,
    isLogginSuccessful: false,
  };

  private handlerUserName(event: CustomInput) {
    this.setState({ userName: event.target.value });
  }

  private handlerPassword(event: CustomInput) {
    this.setState({ password: event.target.value });
  }

  private async handlerSubmit(event: any) {
    event.preventDefault();
    const result = await this.props.authService.login(this.state.userName, this.state.password);
    this.setState({ isLogginAttempted: true });
    if (result) {
      this.setState({ isLogginSuccessful: true });
      this.props.setUser(result);
    } else {
      this.setState({ isLogginSuccessful: false });
    }
  }

  render() {
    let loginLogout = undefined;
    if (this.state.isLogginAttempted) {
      if (this.state.isLogginSuccessful) {
        loginLogout = <div style={{ color: 'green', fontWeight: 'bold' }}>Login ok</div>;
      } else if (!this.state.isLogginSuccessful) {
        loginLogout = <div style={{ color: 'red', fontWeight: 'bold' }}>Login not ok</div>;
      }
    }

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={(e) => this.handlerSubmit(e)}>
          <br />
          <input type="text" value={this.state.userName} onChange={(e) => this.handlerUserName(e)} />
          <br />
          <input type="password" value={this.state.password} onChange={(e) => this.handlerPassword(e)} />
          <br />
          <button type="submit">Login</button>
          {loginLogout}
        </form>
      </div>
    );
  }
}
