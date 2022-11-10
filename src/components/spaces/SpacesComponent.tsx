import React from 'react';
import { Space } from '../../model/user';
import defaultImage from './../../assets/generic-image.jpg';

interface SpaceComponentProps {
  spaceId: string;
  name: string;
  location: string;
  photoUrl?: string;
  reserveSpace: (spaceId: string) => void;
}

export class SpacesComponent extends React.Component<SpaceComponentProps> {
  private renderImage() {
    if (this.props.photoUrl) {
      return <img src={this.props.photoUrl} alt={this.props.name} />;
    } else {
      return <img src={defaultImage} alt={this.props.name} />;
    }
  }

  render() {
    return (
      <div>
        {this.renderImage()}
        <label>{this.props.name}</label>
        <label>{this.props.spaceId}</label>
        <label>{this.props.location}</label>
        <button onClick={() => this.props.reserveSpace(this.props.spaceId)}>reserve</button>
      </div>
    );
  }
}
