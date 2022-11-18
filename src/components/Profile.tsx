import React from 'react';
import { AuthService } from '../auth/authService';
import { User, UserAttributes } from '../models/user';

interface ProfileProps {
  authService: AuthService;
  user: User | undefined;
}

interface ProfileState {
  userAttributes: UserAttributes[];
}
export class Profile extends React.Component<ProfileProps, ProfileState> {
  state: ProfileState = {
    userAttributes: [],
  };

  async componentDidMount() {
    if (this.props.user) {
      this.setState({
        userAttributes: await this.props.authService.getUserProfile(this.props.user),
      });
    }
  }

  private renderUserAttributes() {
    const rows = [];
    for (const attr of this.state.userAttributes) {
      rows.push(
        <tr key={attr.name}>
          <td>{attr.name}</td>
          <td>{attr.value}</td>
          <td></td>
        </tr>
      );
    }

    const table = (
      <table style={{ alignContent: 'center', margin: '0 auto' }}>
        <tbody>{rows}</tbody>
      </table>
    );
    return table;
  }

  render() {
    return (
      <div>
        <h1>Profile</h1>
        {this.renderUserAttributes()}
      </div>
    );
  }
}
