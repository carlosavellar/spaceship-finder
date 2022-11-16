import React from 'react';
import './App.css';
import { Login } from './Login';
import { AuthService } from '../auth/auth';
import { User } from './../models/user';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './Home';
import { Logout } from './Logout';
import { Navbar } from './Navbar';
import { Spaces } from './spaces/Spaces';
import { DataService } from '../service/dataService';
import { Profile } from './Profile';
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
    this.setState({
      user: user,
    });
    console.log(user);
  }

  private authService = new AuthService();
  private dataService = new DataService();

  render() {
    return (
      <div className="wrapper">
        <BrowserRouter>
          <Navbar user={this.state.user || undefined} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login setUser={this.setUser} authService={this.authService} />} />
            <Route path="/spaces" element={<Spaces dataService={this.dataService} />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/" element={<Logout />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}
