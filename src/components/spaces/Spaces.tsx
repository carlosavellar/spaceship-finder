import React from 'react';
import { Space } from '../../model/user';
import { DataService } from '../../services/DataService';
import { SpacesComponent } from './SpacesComponent';

interface SpacesState {
  spaces: Space[];
}

interface SpacesProps {
  dataService: DataService;
}

export default class Spaces extends React.Component<SpacesProps, SpacesState> {
  constructor(props: SpacesProps) {
    super(props);
    this.state = {
      spaces: [],
    };
  }

  async componentDidMount() {
    const spaces = await this.props.dataService.getSpaces();
    this.setState({
      spaces: spaces,
    });
  }

  private reserveSpace(spaceId: string) {}

  private renderSpaces() {
    const rows = [];
    for (const space of this.state.spaces) {
      rows.push(
        <SpacesComponent
          key={space.spaceId}
          name={space.name}
          spaceId={space.spaceId}
          location={space.location}
          reserveSpace={this.reserveSpace}
        />
      );
    }
    return rows;
  }
  render() {
    return (
      <div>
        <div>
          <h2>Welcome to Spaces page</h2>
          {this.renderSpaces()}
        </div>
      </div>
    );
  }
}
