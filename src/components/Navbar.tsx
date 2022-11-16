import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../models/user';

interface NavbarProps {
  user: User | undefined;
}

export class Navbar extends React.Component<NavbarProps> {
  private loginLogout() {
    if (this.props.user) {
      return (
        <div style={{ float: 'right' }}>
          <Link to="/profile">{this.props.user.userName}</Link>
          <Link to="/logout">Logout</Link>;
        </div>
      );
    } else {
      return (
        <Link style={{ float: 'right' }} to="/login">
          Login
        </Link>
      );
    }
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          <Link to="/spaces">Spaces</Link>
          {this.loginLogout()}
        </nav>
      </div>
    );
  }
}
