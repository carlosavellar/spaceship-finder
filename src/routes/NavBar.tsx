import userEvent from '@testing-library/user-event';
import React from 'react';
import { Link } from 'react-router-dom';
import { User } from '../models/user';

export class NavBar extends React.Component<{
  user: User | undefined;
}> {
  render() {
    let isUserLogged: any;
    if (this.props.user) {
      isUserLogged = <Link to="/">Logout {this.props.user.userName}</Link>;
    } else {
      isUserLogged = <Link to="/">Login </Link>;
    }
    return (
      <div className="navbar">
        <nav>
          <Link to="/">Home</Link>
          <Link to="/profile">Home</Link>
          {isUserLogged}
        </nav>
      </div>
    );
  }
}
