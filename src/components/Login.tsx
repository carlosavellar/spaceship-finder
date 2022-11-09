import React from 'react';
import { AuthService } from '../services/auth';
import { User } from './../model/user';

interface LoginProps {
  authService: AuthService;
  setUser: (user: User) => void;
}

interface LoginState {
  userName: string;
  password: string;
  isLogginAttempted: boolean;
  isLogginSuccessful: boolean;
}

interface EventType {
  target: HTMLInputElement;
}

export class Login extends React.Component<LoginProps, LoginState> {
  state: LoginState = {
    userName: '',
    password: '',
    isLogginAttempted: false,
    isLogginSuccessful: false,
  };

  private handlerInputPassword(event: EventType) {
    this.setState({ password: event.target.value });
  }

  private handlerInputUserName(event: EventType) {
    this.setState({ userName: event.target.value });
  }

  private async handlerSubmitUser(event: any) {
    event.preventDefault();
    const result = await this.props.authService.login(this.state.userName, this.state.password);
    this.setState({ isLogginAttempted: true });
    if (result) {
      this.setState({ isLogginSuccessful: true });
      this.props.setUser(result);
    } else {
      this.setState({ isLogginSuccessful: false });
    }
    this.setState({ userName: '' });
    this.setState({ password: '' });
  }

  render() {
    let logginStatus = undefined;

    if (this.state.isLogginAttempted) {
      if (this.state.isLogginSuccessful) {
        logginStatus = <div style={{ color: 'green', fontWeight: 'bold' }}>Welcome user 🎁</div>;
      } else {
        logginStatus = <div>Loggin failed 🚨</div>;
      }
    }

    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={(e) => this.handlerSubmitUser(e)}>
          <input type="text" value={this.state.userName} onChange={(e) => this.handlerInputUserName(e)} />
          <br />
          <input type="password" value={this.state.password} onChange={(e) => this.handlerInputPassword(e)} />
          <br />
          <input type="submit" value="Login" />
        </form>
        {logginStatus}
      </div>
    );
  }
}
