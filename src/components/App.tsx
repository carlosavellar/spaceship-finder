import React from 'react';
import { User } from './../models/user';
import { AuthService } from './../services/auth';
import { Login } from './Login';

interface AppState {
  user: User;
}

export class App extends React.Component<{}, AppState> {
  private authService: AuthService = new AuthService();
  render() {
    return (
      <div>
        <h2>Please login</h2>
        <Login authService={this.authService} />
      </div>
    );
  }
}

export default App;
