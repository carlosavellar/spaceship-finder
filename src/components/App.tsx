import React from 'react';
import { User } from './../models/user';
import { AuthService } from './../services/auth';
import { Login } from './Login';

interface AppState {
  user: User | undefined;
}

export class App extends React.Component<{}, AppState> {
  constructor(props: any) {
    super(props);
    this.setUser = this.setUser.bind(this);
  }

  private setUser(user: User) {
    if (user) {
      this.setState({ user: user });
    }
    console.log(`This is the user ${user.userName} ${user.email}`);
  }

  private authService: AuthService = new AuthService();
  render() {
    return (
      <div>
        <h2>Please login</h2>
        <Login authService={this.authService} setUser={this.setUser} />
      </div>
    );
  }
}

export default App;
