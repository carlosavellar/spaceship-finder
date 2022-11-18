import React from 'react';
import { User } from '../models/user';
import './App.css';
import { Login } from './Login';
import { AuthService } from './../service/authService';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Navbar } from './Navbar';
import { Profile } from './Profile';
import { Home } from './Home';

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

  private authService = new AuthService();

  private setUser(user: User) {
    this.setState({ user: user });
    console.log(user);
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Navbar user={this.state.user} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login setUser={this.setUser} authService={this.authService} />} />
              <Route path="/Profile" element={<Profile />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
