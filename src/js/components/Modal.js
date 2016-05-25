import React from 'react';
import classNames from 'classnames';
import '../../scss/components/Modal.scss';

const Modal = (props) => {
  const modalClass = classNames({
    'c-modal': true,
    'c-modal--visible': props.modal.visible,
  });
  const closeModal = () => {
    props.updateOverlayVisibility(false);
    props.updateModalVisibility(false);
  };
  return (
    <div className={modalClass}>
      <div className="c-modal__window">
        <div className="c-modal__title">
          {props.modal.contentTitle}
        </div>
        <div className="c-modal__content u-margin__bottom--large">
          {props.modal.contentBody}
        </div>
        <div className="c-modal__footer o-row o-row--right">
          <button className="pure-button c-button c-button--primary" type="button" onClick={closeModal}>
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  updateOverlayVisibility: React.PropTypes.func,
  updateModalVisibility: React.PropTypes.func,
  modal: React.PropTypes.object,
};

export default Modal;
