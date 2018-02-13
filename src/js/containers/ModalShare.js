import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import css from '../../css/components/Modal.css';

import Modal from './Modal';

class ModalShare extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Modal>
         <div>
          A title
        </div>
        <div className={css.content}>
          Some content
        </div>
      </Modal>
    );
  }
}

function mapStateToProps({ modal }) {
  return {
    modal
  };
}

export default connect(mapStateToProps, null)(ModalShare);
