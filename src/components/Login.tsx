import React from 'react';
import { User } from '../models/user';
import { AuthService } from '../auth/auth';

interface LoginState {
  userName: string;
  password: string;
  isLogginttempeted: boolean;
  isLogginSuccessfull: boolean;
  loginStatusMessage: string;
}

interface LoginProps {
  authService: AuthService;
  setUser: (user: User) => void;
}

interface CustomEvent {
  target: HTMLInputElement;
}

export class Login extends React.Component<LoginProps, LoginState> {
  state: LoginState = {
    userName: '',
    password: '',
    isLogginSuccessfull: false,
    isLogginttempeted: false,
    loginStatusMessage: '',
  };

  private handlerUserName(event: CustomEvent) {
    this.setState({
      userName: event.target.value,
    });
  }

  private handlerPassword(event: CustomEvent) {
    this.setState({
      password: event.target.value,
    });
  }

  private clearInputs() {
    this.setState({ userName: '' });
    this.setState({ password: '' });
  }

  private async submitHandler(event: any) {
    event.preventDefault();
    const result = await this.props.authService.login(this.state.userName, this.state.password);
    this.setState({ isLogginttempeted: true });
    if (result) {
      this.setState({ isLogginSuccessfull: true });
      this.props.setUser(result);
    } else {
      this.setState({ isLogginSuccessfull: false });
    }
    this.clearInputs();
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <form onSubmit={(e) => this.submitHandler(e)}>
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
