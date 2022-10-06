import React from 'react';
import './App.css';
import { User } from './../model/Model';
import { AuthService } from '../services/AuthServices';
import { Login } from './Login';

export interface AppState {
  user: User | undefined;
}

export class App extends React.Component<{}, AppState> {
  private authService = new AuthService();

  constructor(props: any) {
    super(props);
    this.setUser = this.setUser.bind(this);
  }

  private setUser(user: User) {
    this.setState({
      user: user,
    });
    console.log(user);
  }

  render() {
    console.log(this.authService);
    return (
      <div className="App">
        <Login authService={this.authService} setUser={this.setUser} />
      </div>
    );
  }
}
