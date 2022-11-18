import React from 'react';
import { Space } from '../../models/space';
import { DataService } from '../../service/dataService';
import { SpaceComponent } from './SpaceComponent';

interface SpaceState {
  spaces: Space[];
  showModal: boolean;
  modalContent: string;
}

interface SpaceProps {
  dataService: DataService;
}

export class Spaces extends React.Component<SpaceProps, SpaceState> {
  constructor(props: SpaceProps) {
    super(props);
    this.state = {
      spaces: [],
      showModal: false,
      modalContent: '',
    };
  }

  async componentDidMount() {
    const results = await this.props.dataService.getSpaces();
    if (results) this.setState({ spaces: results });
  }

  private renderSpaces() {
    const rows = [];
    for (const space of this.state.spaces) {
      rows.push(
        <SpaceComponent key={space.spaceId} name={space.name} spaceId={space.spaceId} location={space.location} />
      );
    }
    return rows;
  }

  render() {
    return (
      <div>
        <div>
          <h1>Spaces</h1>
          <div>{this.renderSpaces()}</div>
        </div>
      </div>
    );
  }
}
