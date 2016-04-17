import React from 'react';
import classNames from 'classnames';

require('../../scss/Modal.scss');

class Modal extends React.Component {

  constructor(props) {
    super(props);
    // Bind functions early. More performant. Upgrade to autobind when Babel6 sorts itself out
    this.closeModal = this.closeModal.bind(this);
    this.state = {
      visible: false,
    };
  }

  closeModal() {
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
        <div className="c-modal__overlay" onClick={this.closeModal}></div>
        <div className="c-modal__window" onClick={this.clickWindow}>
          <div className="c-modal__title">
            {this.props.modal.contentTitle}
          </div>
          <div className="c-modal__content l-spacing-bottom--large">
            {this.props.modal.contentBody}
          </div>
          <div className="c-modal__footer l-row l-row--right">
            <button className="pure-button c-button c-button--primary" type="button" onClick={this.closeModal}>
              Close
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;