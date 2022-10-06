import React from 'react';
import { AuthService } from '../services/AuthServices';

interface LoginProps {
  authService: AuthService;
}

interface LoginState {
  userName: string;
  password: string;
  loginAttempted: boolean;
  loginSuccesfull: boolean;
}

interface CustomEvent {
  target: HTMLInputElement;
}

export class Login extends React.Component<LoginProps, LoginState> {
  state: LoginState = {
    userName: '',
    password: '',
    loginAttempted: false,
    loginSuccesfull: false,
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
    this.setState({ loginAttempted: true });
    if (result) {
      this.setState({ loginSuccesfull: true });
    } else {
      this.setState({ loginSuccesfull: false });
    }
  }

  render() {
    let loginMessage: any;
    if (this.state.loginAttempted) {
      if (this.state.loginSuccesfull) {
        loginMessage = <div>Login Successful</div>;
      } else {
        loginMessage = <div>No login</div>;
      }
    }

    return (
      <div>
        <h2>Please login</h2>
        <form onSubmit={(e) => this.handlerSubmit(e)}>
          <input type="text" value={this.state.userName} onChange={(e) => this.setUserName(e)} />
          <br />
          <input type="password" value={this.state.password} onChange={(e) => this.setPassword(e)} />
          <br />
          <input type="submit" value="login" />
        </form>
        {loginMessage}
      </div>
    );
  }
}
