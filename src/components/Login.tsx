import React from 'react';
import { User } from '../models/user';
import { AuthService } from '../auth/AuthServices';

interface LoginState {
  userName: string;
  password: string;
  isLoginAttempted: boolean;
  isLoginSuccesful: boolean;
}

interface LoginProps {
  authService: AuthService;
  user: User | undefined;
  setUser: (user: User) => void;
}

interface CustomEvent {
  target: HTMLInputElement;
}

export class Login extends React.Component<LoginProps, LoginState> {
  state: LoginState = {
    userName: '',
    password: '',
    isLoginAttempted: false,
    isLoginSuccesful: false,
  };

  private handlerUserName(event: CustomEvent) {
    this.setState({ userName: event.target.value });
  }
  private handlerPassword(event: CustomEvent) {
    this.setState({ password: event.target.value });
  }

  private clearInput() {
    this.setState({ userName: '', password: '' });
  }

  private async handlerSubmit(event: any) {
    event.preventDefault();
    const result = await this.props.authService.login(this.state.userName, this.state.password);
    this.setState({ isLoginAttempted: true });
    if (result) {
      this.setState({ isLoginSuccesful: true });
      this.props.setUser(result);
    } else {
      this.setState({ isLoginSuccesful: false });
    }
    this.clearInput();
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={(e) => this.handlerSubmit(e)}>
          <input type="text" value={this.state.userName} onChange={(e) => this.handlerUserName(e)} />
          <br />
          <input type="password" value={this.state.password} onChange={(e) => this.handlerPassword(e)} />
          <br />
          <button>Login</button>
        </form>
      </div>
    );
  }
}
