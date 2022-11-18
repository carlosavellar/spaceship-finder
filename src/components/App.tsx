import React from 'react';
import { User } from '../models/user';
import './App.css';
import { Login } from './Login';
import { AuthService } from '../auth/authService';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Profile } from './Profile';
import { Home } from './Home';
import { Spaces } from './spaces/Spaces';
import { DataService } from '../service/dataService';

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

  private dataService = new DataService();
  private authService = new AuthService();

  private setUser(user: User) {
    this.setState({ user: user });
    console.log(user);
  }

  render() {
    return (
      <div className="wrapper">
        <BrowserRouter>
          <div>
            <Navbar user={this.state.user} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login setUser={this.setUser} authService={this.authService} />} />
              <Route path="/Profile" element={<Profile authService={this.authService} user={this.state.user} />} />
              <Route path="/spaces" element={<Spaces dataService={this.dataService} />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
