import React, { SyntheticEvent } from 'react';
import { AuthService } from '../services/auth';
import { User } from '../models/user';

interface LoginProps {
  authService: AuthService;
  setUser: (user: User) => void;
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
    this.setState({ isLoginAttempted: true });
    this.setState({ userName: '' });
    this.setState({ password: '' });
    if (result) {
      console.log(result);
      this.setState({ isLoginSuccessful: true });
      this.props.setUser(result);
    } else {
      this.setState({ isLoginSuccessful: false });
      console.log('Wrong login');
    }
  }

  render() {
    let isUserLoggededHTML = undefined;
    if (this.state.isLoginAttempted) {
      if (this.state.isLoginSuccessful) {
        isUserLoggededHTML = <label style={{ color: 'green' }}>User logged. Welcome {this.state.userName}.</label>;
      } else {
        isUserLoggededHTML = <label>Loggin failed</label>;
      }
    }
    return (
      <div>
        <form onSubmit={(e) => this.handlerSubmit(e)}>
          <input value={this.state.userName} type="text" onChange={(e) => this.handlerEnteredUserName(e)} />
          <br />
          <input value={this.state.password} type="password" onChange={(e) => this.handlerEnteredPassword(e)} />
          <br />
          <button type="submit">Login</button>
          <br />
          {isUserLoggededHTML}
        </form>
      </div>
    );
  }
}
