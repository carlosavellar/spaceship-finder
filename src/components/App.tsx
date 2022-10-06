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

  render() {
    return (
      <div className="App">
        <Login authService={this.authService} />
      </div>
    );
  }
}