import React from 'react';
import './App.css';
import { Login } from './Login';
import { User } from './../models/user';
import { AuthService } from './../services/AuthServices';

interface AppState {
  user: User | undefined;
}
export class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      user: undefined,
    };
    this.setUser = this.setUser.bind(this);
  }

  private setUser(user: User) {
    this.setState({ user: user });
    console.log(user);
  }

  private authService = new AuthService();

  render() {
    return (
      <div className="App">
        <Login authService={this.authService} user={this.state.user} setUser={this.setUser} />
      </div>
    );
  }
}
