import React from 'react';
import { Link } from 'react-router-dom';
import { User, UserAttributes } from '../model/user';
import { AuthService } from '../services/auth';

interface ProfileState {
  userAttributes: UserAttributes[];
}

interface ProfileProps {
  authService: AuthService;
  user: User | undefined;
}

export class Profile extends React.Component<ProfileProps, ProfileState> {
  render() {
    let loginProfile = undefined;
    if (this.props.user) {
      loginProfile = <h3>{this.props.user.userName}</h3>;
    } else {
      loginProfile = <Link to="/login">Login</Link>;
    }
    return (
      <div>
        <h1>Profile</h1>
        {loginProfile}
      </div>
    );
  }
}
