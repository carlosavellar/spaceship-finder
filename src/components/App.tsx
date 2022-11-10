import React from 'react';
import './App.css';
import { Login } from './Login';
import { AuthService } from '../services/auth';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { User } from '../model/user';
import { Profile } from './Profile';
import { Home } from './Home';
import { Navbar } from './Navbar';

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
        <BrowserRouter>
          <div>
            <Navbar user={this.state.user} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login authService={this.authService} setUser={this.setUser} />} />
              <Route path="/profile" element={<Profile authService={this.authService} user={this.state.user} />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
