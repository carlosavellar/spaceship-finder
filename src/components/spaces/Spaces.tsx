import React from 'react';
import { Space } from '../../model/user';
import { DataService } from '../../services/DataService';
import { SpacesComponent } from './SpacesComponent';
import { ConfirmModalComponent } from './ConfirmModalComponent';
import { throws } from 'assert';
interface SpacesState {
  spaces: Space[];
  showModal: boolean;
  modalContent: string;
}

interface SpacesProps {
  dataService: DataService;
}

export default class Spaces extends React.Component<SpacesProps, SpacesState> {
  constructor(props: SpacesProps) {
    super(props);
    this.state = {
      spaces: [],
      showModal: false,
      modalContent: '',
    };

    this.closeModal = this.closeModal.bind(this);
    this.reserveSpace = this.reserveSpace.bind(this);
  }

  async componentDidMount() {
    const spaces = await this.props.dataService.getSpaces();
    this.setState({
      spaces: spaces,
    });
  }

  private async reserveSpace(spaceId: string) {
    const spaces = await this.props.dataService.reserveSpace(spaceId);
    if (spaces) {
      this.setState({
        modalContent: `You selecte the space with the ${spaceId} id.`,
        showModal: true,
      });
    } else {
      this.setState({
        modalContent: `There is not  space with ${spaceId} id.`,
        showModal: true,
      });
    }
  }

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

  private closeModal() {
    this.setState({
      showModal: false,
    });
  }
  render() {
    return (
      <div>
        <div>
          <h2>Welcome to Spaces page</h2>
          {this.renderSpaces()}
          <ConfirmModalComponent
            close={this.closeModal}
            content={this.state.modalContent}
            show={this.state.showModal}
          />
        </div>
      </div>
    );
  }
}
