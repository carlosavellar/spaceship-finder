import React from 'react';
import { User } from './../models/user';
import { AuthService } from './../services/auth';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { Login } from './Login';
import { NavBar } from './NavBar';
import { Home } from './Home';
import './App.css';
import { Profile } from './Profile';
import { Logout } from './Logout';
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
    if (user) {
      this.setState({ user: user });
    }
    console.log(`This is the user ${user.userName} ${user.email}`);
  }

  private authService: AuthService = new AuthService();

  render() {
    return (
      <div className="wrapper">
        <BrowserRouter>
          <NavBar user={this.state.user} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/login" element={<Login authService={this.authService} setUser={this.setUser} />} />
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
