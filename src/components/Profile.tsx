import React from 'react';
import { User, UserAttributes } from '../models/user';
import { AuthService } from '../auth/AuthServices';

interface ProfileState {
  userAttributes: UserAttributes[];
}
interface ProfileProps {
  user: User | undefined;
  authService: AuthService;
}

export class Profile extends React.Component<ProfileProps, ProfileState> {
  state: ProfileState = {
    userAttributes: [],
  };
  render() {
    return (
      <div>
        <h1>Profile</h1>
      </div>
    );
  }
}
