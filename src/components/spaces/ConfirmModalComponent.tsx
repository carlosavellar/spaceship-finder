import React from 'react';
import './ConfirmModalComponent.css';

interface ConfirmModalProps {
  show: boolean;
  content: string;
  close: () => void;
}

export class ConfirmModalComponent extends React.Component<ConfirmModalProps> {
  render() {
    if (!this.props.show) {
      return null;
    } else {
      console.log('e');
      return (
        <div className="modal">
          <div className="modal-content">
            <div>{this.props.content}</div>
            <button onClick={this.props.close}>Ok, close.</button>
          </div>
        </div>
      );
    }
  }
}
