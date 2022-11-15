import React from 'react';
import './App.css';
import { Login } from './Login';
import { AuthService } from '../services/auth';
import { DataService } from '../services/DataService';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { User } from '../model/user';
import { Profile } from './Profile';
import { Home } from './Home';
import { Navbar } from './Navbar';
import { Logout } from './Logout';
import Spaces from './spaces/Spaces';

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

  private dataService: DataService = new DataService();

  render() {
    return (
      <div className="wrapper">
        <BrowserRouter>
          <div>
            <Navbar user={this.state.user} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login authService={this.authService} setUser={this.setUser} />} />
              <Route path="/profile" element={<Profile authService={this.authService} user={this.state.user} />} />
              <Route path="/logout" element={<Logout />} />
              <Route path="/spaces" element={<Spaces dataService={this.dataService} />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
