import React from 'react';
import { AuthService } from '../services/auth';

interface LoginProps {
  authService: AuthService;
}

interface LoginState {
  name: string;
  password: string;
  isLoginAttempted: boolean;
  isLoginSuccessful: boolean;
}

export class Login extends React.Component<LoginProps, LoginState> {
  state: LoginState = {
    name: '',
    password: '',
    isLoginAttempted: false,
    isLoginSuccessful: false,
  };

  render() {
    return (
      <div>
        <form>
          <input value={this.state.name} type="text" />
          <br />
          <input value={this.state.password} type="password" />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}
