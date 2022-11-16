import React from 'react';
import { Space } from '../../models/spaces';
import { DataService } from '../../service/dataService';
import { SpaceComponent } from './SpaceComponent';
import { ConfirmModalComponent } from './ConfirmModalComponent';
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
    this.reserveSpace = this.reserveSpace.bind(this);
  }

  async componentDidMount() {
    const spaces = await this.props.dataService.getSpaces();
    this.setState({
      spaces: spaces,
    });
  }

  private async reserveSpace(spaceId: string) {
    console.log(this.state.showModal);
    const spaces = await this.props.dataService.reserveSpace(spaceId);
    if (spaces) {
      this.setState({ modalContent: `You selected the Space of ID ${spaceId}`, showModal: true });
    } else {
      this.setState({ modalContent: `There is no Space of ID ${spaceId}`, showModal: true });
    }
  }

  private closeModal() {
    this.setState({ showModal: false });
  }

  private renderSpaces() {
    const rows = [];
    for (const space of this.state.spaces) {
      rows.push(
        <SpaceComponent
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
        {this.renderSpaces()}
        <ConfirmModalComponent show={this.state.showModal} close={this.closeModal} content={this.state.modalContent} />
      </div>
    );
  }
}
