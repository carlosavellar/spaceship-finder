import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../model/user';

export class Navbar extends React.Component<{ user: User | undefined }> {
  render() {
    let loginLogout = undefined;
    if (this.props.user) {
      loginLogout = (
        <div style={{ float: 'right' }}>
          <Link to="/profile">{this.props.user.userName}</Link>
          <Link to="/logout">Logout</Link>
        </div>
      );
    } else {
      loginLogout = (
        <Link style={{ float: 'right' }} to="/login">
          Login
        </Link>
      );
    }
    return (
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/Profile">Profile</Link>
        {loginLogout}
      </nav>
    );
  }
}
