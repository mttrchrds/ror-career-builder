import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import css from '../../css/components/CareerItem.css';
import { gaCareerSelected } from '../helpers/googleAnalytics';

import { toggleOverlayShow } from '../actions/actionOverlayShow';
import { toggleSidebar } from '../actions/actionSidebar';
import { resetLevel } from '../actions/actionLevel';
import { resetRenown } from '../actions/actionRenown';
import { resetTacticLimit } from '../actions/actionTacticLimit';

class CareerItem extends Component {
  
  constructor(props) {
    super(props);
    this.clickItem = this.clickItem.bind(this);
  }

  clickItem() {

    // Send event to Google Analytics
    gaCareerSelected(this.props.career.name, this.props.career.class, this.props.career.race);
    // Hide sidebar and overlay
    this.props.toggleSidebar(false);
    this.props.toggleOverlayShow(false);
    // Reset career selections
    this.props.resetLevel();
    this.props.resetRenown();
    this.props.resetTacticLimit();
  }

  render() {
    const url = `/career/${this.props.career.slug}`;
    const imgUrl = `/images/icons/${this.props.career.slug}.png`;
    return (
      <div className={css.item}>
        <Link to={url} onClick={this.clickItem}>
          <img src={imgUrl} className={css.icon} />
        </Link>
        <Link className={css.link} to={url} onClick={this.clickItem}>
          {this.props.career.name}
        </Link>
      </div>
    );
  }

}

function mapStateToProps({ sidebar, overlayShow }) {
  return {
    sidebar,
    overlayShow,
  };
}

export default connect(mapStateToProps,
  { toggleOverlayShow, 
    toggleSidebar, 
    resetRenown,
    resetLevel, 
    resetTacticLimit 
  }
)(CareerItem);