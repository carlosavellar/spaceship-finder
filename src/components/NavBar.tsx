import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../models/user';

export class NavBar extends React.Component<{ user: User | undefined }> {
  render() {
    let loginLogout: any;
    if (this.props.user) {
      loginLogout = (
        <div style={{ float: 'right' }}>
          <Link to="/profile">{this.props.user.userName}</Link>
          <Link to="/logout">Logout</Link>
        </div>
      );
    } else {
      loginLogout = (
        <Link style={{ float: 'right' }} to="/profile">
          Login
        </Link>
      );
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
