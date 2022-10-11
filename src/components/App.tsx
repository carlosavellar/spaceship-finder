import React from 'react';
import './App.css';
import { User } from './../model/Model';
import { AuthService } from '../services/AuthServices';
import { Login } from './Login';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import history from './../utils/history';
import { Home } from './Home';
import { NavBar } from './NavBar';
import { Profile } from './Profile';
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
    this.setState({
      user: user,
    });
    console.log(user);
  }

  render() {
    console.log(this.authService);
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <NavBar user={this.state.user} />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login authService={this.authService} setUser={this.setUser} />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    );
  }
}
