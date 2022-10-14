import React from 'react';
import './App.css';
import { Login } from './Login';
import { User } from './../model/User';
import { AuthService } from '../service/AuthService';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { NavBar } from './NavBar';
import { Profile } from './Profile';
import { Home } from './Home';

export interface AppState {
  user: User | undefined;
}

export class App extends React.Component<{}, AppState> {
  private authService = new AuthService();
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

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <NavBar user={this.state.user} />
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
