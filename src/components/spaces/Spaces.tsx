import React from 'react';
import { Space } from '../../models/space';
import { DataService } from '../../service/dataService';
import { ConfirmationModalComponent } from './ConfirmationModalComponent';
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
    this.handlerReservSpace = this.handlerReservSpace.bind(this);
  }

  async componentDidMount() {
    const results = await this.props.dataService.getSpaces();
    if (results) this.setState({ spaces: results });
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
          renderSpace={this.handlerReservSpace}
        />
      );
    }
    return rows;
  }

  private handlerCloseModal() {
    this.setState({ showModal: false });
  }

  private async handlerReservSpace(spaceId: string) {
    const space = await this.props.dataService.reserveSpace(spaceId);
    if (space) {
      this.setState({ modalContent: `🙋You selected the space of id: ${spaceId}`, showModal: true });
    } else {
      this.setState({
        modalContent: `🌆There's no space of id: ${spaceId}`,
        showModal: true,
      });
    }
  }
  render() {
    return (
      <div>
        <div>
          <h1>Spaces</h1>
          <div>{this.renderSpaces()}</div>
          <ConfirmationModalComponent
            close={this.handlerCloseModal}
            show={this.state.showModal}
            content={this.state.modalContent}
          />
        </div>
      </div>
    );
  }
}
