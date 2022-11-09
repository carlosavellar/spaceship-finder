import userEvent from '@testing-library/user-event';
import React from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import { User } from '../models/user';
import history from '../history';

export class NavBar extends React.Component<{
  user: User | undefined;
}> {
  render() {
    let isUserLogged: any;
    if (this.props.user) {
      isUserLogged = (
        <div style={{ float: 'right' }}>
          <Link to="/profile">{this.props.user.userName}</Link>
          <Link to="/logout" style={{ float: 'right' }}>
            Logout
          </Link>
        </div>
      );
    } else {
      isUserLogged = <Link to="/login">Login </Link>;
    }
    return (
      <div className="navbar">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/profile">Profile</Link>
          {isUserLogged}
        </nav>
      </div>
    );
  }
}
