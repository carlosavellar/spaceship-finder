import { render } from '@testing-library/react';
import React from 'react';
import { User, UserAttribute } from '../model/User';
import { AuthService } from '../service/AuthService';

interface ProfileState {
  userAttributes: UserAttribute[];
}

interface ProfileProps {
  user: User | undefined;
  authService: AuthService;
}

export class Profile extends React.Component<ProfileProps, ProfileState> {
  state: ProfileState = {
    userAttributes: [],
  };

  async componentDidMount() {
    if (this.props.user) {
      const attUser = await this.props.authService.getUserAttributes(this.props.user);
      this.setState({
        userAttributes: attUser,
      });
    }
  }

  private renderUserAttributes() {
    const rows = [];
    for (let attribute of this.state.userAttributes) {
      rows.push(
        <tr key={attribute.Name}>
          <td>{attribute.Name}</td>
          <td>{attribute.Value}</td>
        </tr>
      );
    }
    return (
      <table>
        <tbody>{rows}</tbody>
      </table>
    );
  }

  render() {
    let userProfile: any;
    if (this.props.user) {
      userProfile = (
        <div>
          <h1>{this.props.user.userName}</h1>
          {this.renderUserAttributes()}
        </div>
      );
    } else {
      userProfile = <div>Nenhum user</div>;
    }

    return (
      <div>
        <h1>Fucking profile</h1>
        <p>{userProfile}</p>
      </div>
    );
  }
}
