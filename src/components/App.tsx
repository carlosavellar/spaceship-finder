import React from 'react';
import './App.css';
import { Login } from './Login';
import { User } from './../models/user';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Profile } from './Profile';
import { NavBar } from './NavBar';
import { AuthService } from '../auth/AuthServices';

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
      <div className="wrapper">
        <BrowserRouter>
          <div>
            <NavBar user={this.state.user} />
            <Routes>
              <Route path="/home" element={<Home />} />
              <Route path="/profile" element={<Profile user={this.state.user} authService={this.authService} />} />
              <Route
                path="/"
                element={<Login authService={this.authService} user={this.state.user} setUser={this.setUser} />}
              />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
