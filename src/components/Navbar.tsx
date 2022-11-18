import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../models/user';

interface NavbarProps {
  user: User | undefined;
}

export class Navbar extends React.Component<NavbarProps> {
  render() {
    let loginLogout = undefined;
    if (this.props.user) {
      loginLogout = (
        <div>
          <Link to="profile">{this.props.user.userName}</Link>
          <Link to="logout">Lgout</Link>
        </div>
      );
    } else {
      loginLogout = <Link to="login">Login</Link>;
    }
    return (
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        {loginLogout}
      </nav>
    );
  }
}
