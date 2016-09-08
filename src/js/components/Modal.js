import React from 'react';
import classNames from 'classnames';
import css from '../../css/components/Modal.css';

const Modal = (props) => {
  const modalClass = classNames({
    [css.modal]: !props.modal.visible,
    [css.modalVisible]: props.modal.visible,
  });
  const closeModal = () => {
    props.updateOverlayVisibility(false);
    props.updateModalVisibility(false);
  };
  return (
    <div className={modalClass}>
      <div className={css.container}>
        <div>
          {props.modal.contentTitle}
        </div>
        <div className={css.content}>
          {props.modal.contentBody}
        </div>
        <div className={css.footer}>
          <button className={css.close} type="button" onClick={closeModal}>
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
