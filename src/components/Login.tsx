import React, { SyntheticEvent } from 'react';
import { AuthService } from '../services/auth';

interface LoginProps {
  authService: AuthService;
}

interface LoginState {
  userName: string;
  password: string;
  isLoginAttempted: boolean;
  isLoginSuccessful: boolean;
}

interface CustomEvent {
  target: HTMLInputElement;
}

export class Login extends React.Component<LoginProps, LoginState> {
  state: LoginState = {
    userName: '',
    password: '',
    isLoginAttempted: false,
    isLoginSuccessful: false,
  };

  private handlerEnteredUserName(event: CustomEvent) {
    this.setState({ userName: event.target.value });
  }

  private handlerEnteredPassword(event: CustomEvent) {
    this.setState({ password: event.target.value });
  }

  private async handlerSubmit(event: SyntheticEvent) {
    event.preventDefault();
    const result = await this.props.authService.login(this.state.userName, this.state.password);
    if (result) {
      console.log(result);
    } else {
      console.log('Wrong login');
    }
  }

  render() {
    return (
      <div>
        <form onSubmit={(e) => this.handlerSubmit(e)}>
          <input value={this.state.userName} type="text" onChange={(e) => this.handlerEnteredUserName(e)} />
          <br />
          <input value={this.state.password} type="password" onChange={(e) => this.handlerEnteredPassword(e)} />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
