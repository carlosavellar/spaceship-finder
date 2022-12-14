import React from 'react';
import { User, UserAttributes } from '../models/user';
import { AuthService } from '../auth/AuthServices';

export class Profile extends React.Component<{ authSetrvice: AuthService }, { user: User | undefined }> {
  state: UserAttributes[] = {};
  render() {
    return (
      <div>
        <h1>Profile</h1>
      </div>
    );
  }
}
