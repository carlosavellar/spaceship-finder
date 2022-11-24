import React from 'react';
import './ConfirmationModalComponent.css';
interface ConfitmationModalProps {
  show: boolean;
  content: string;
  close: () => void;
}

export class ConfirmationModalComponent extends React.Component<ConfitmationModalProps> {
  render() {
    if (!this.props.show) {
      return null;
    } else {
      return (
        <div className="modal">
          <div className="modal-content">
            {this.props.content}
            <button onClick={() => this.props.close()}>Close</button>
          </div>
        </div>
      );
    }
  }
}
