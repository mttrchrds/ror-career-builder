import React from 'react';
import classNames from 'classnames';

require('../../scss/Modal.scss');

class Modal extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }

  clickOverlay() {
    this.props.updateModalVisibility(false);
  }

  clickWindow() {
    console.log('window clicked');
  }

  render() {
    let modalClass = classNames({
      'c-modal': true,
      'c-modal--visible': this.props.modal.visible,
    });
    return (
      <div className={modalClass}>
        <div className="c-modal__overlay" onClick={this.clickOverlay.bind(this)}></div>
        <div className="c-modal__window" onClick={this.clickWindow}>
          {this.props.modal.contentBody}
        </div>
      </div>
    )
  }
}

export default Modal;