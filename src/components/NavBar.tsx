import React from 'react';
import { User } from '../model/Model';
import { Link } from 'react-router-dom';

export class NavBar extends React.Component<{ user: User | undefined }> {
  render() {
    let loginLogout: any;
    if (this.props.user) {
      loginLogout = <Link to="/logout">{this.props.user.userName}</Link>;
    } else {
      loginLogout = <Link to="/login">Login</Link>;
    }

    return (
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/profile">Profile</Link>
        {loginLogout}
      </div>
    );
  }
}
