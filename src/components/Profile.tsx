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
  state: ProfileState = {
    userAttributes: [],
  };

  async componentDidMount() {
    if (this.props.user) {
      const userAttr = await this.props.authService.getUserPrtofile(this.props.user);
      this.setState({
        userAttributes: userAttr,
      });
    }
  }

  private renderUserAttributes() {
    const rows = [];
    for (const attr of this.state.userAttributes) {
      rows.push(
        <tr key={attr.Name} style={{ textAlign: 'left' }}>
          <td>
            <strong>{attr.Name}</strong>
          </td>
          <td>{attr.Value}</td>
        </tr>
      );
    }
    return (
      <table style={{ alignContent: 'center', margin: '0 auto' }}>
        <tbody>{rows}</tbody>
      </table>
    );
  }
  render() {
    let loginProfile = undefined;
    if (this.props.user) {
      loginProfile = (
        <div>
          <h3>{this.props.user.userName}</h3>
          {this.renderUserAttributes()}
        </div>
      );
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
