import React from 'react';
import genericImage from '../../assets/generic-image.jpg';
import './SpaceComponent.css';

interface SpaceComponentProps {
  name: string;
  location: string;
  spaceId: string;
  photoUrl?: string;
}

export class SpaceComponent extends React.Component<SpaceComponentProps> {
  private spaceImage() {
    if (this.props.photoUrl) {
      return <img src={this.props.photoUrl} alt="" />;
    } else {
      return <img src={genericImage} alt="" />;
    }
  }

  render() {
    return (
      <div className="spaceComponent">
        <div>
          <div>{this.spaceImage()}</div>
          <br />
          <label className="name">{this.props.name}</label>
          <br />
          <label className="location">{this.props.location}</label>
          <br />
          <label className="spaceId">{this.props.spaceId}</label>
        </div>
      </div>
    );
  }
}
