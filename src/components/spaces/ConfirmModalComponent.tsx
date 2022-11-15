import React from 'react';
import './ConfirmModalComponent.css';
interface ConfirmModalComnponentProps {
  show: boolean;
  content: string;
  close: () => void;
}

export class ConfirmModalComponent extends React.Component<ConfirmModalComnponentProps> {
  render() {
    if (!this.props.show) {
      return null;
    } else {
      return (
        <div className="modal">
          <div className="modal-content">
            <div>{this.props.content}</div>
            <button onClick={() => this.props.close()}>Ok, close.</button>
          </div>
        </div>
      );
    }
  }
}
