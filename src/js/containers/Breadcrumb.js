import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import css from '../../css/components/Breadcrumb.css';

import IconChevronRight from '../icons/IconChevronRight';

import { toggleOverlayShow } from '../actions/actionOverlayShow';
import { toggleSidebar } from '../actions/actionSidebar';

class Breadcrumb extends Component {

  constructor(props) {
    super(props);

    this.clickBreadcrumb = this.clickBreadcrumb.bind(this);
  }

  clickBreadcrumb(e) {

    e.preventDefault();
    this.props.toggleOverlayShow(!this.props.overlayShow);
    this.props.toggleSidebar(!this.props.sidebar);
  }

  render() {

    console.log('props in Breadcrumb', this.props);

    const career = this.props.careers[this.props.slug];

    return (
      <div>
        <span className={css.Breadcrumb}>
          <Link to="/" className={css.BreadcrumbLink}>Home</Link>
        </span>
        <span className={css.BreadcrumbDivider}>
          <IconChevronRight classes="icon--small" name="right chevron icon" nameSlug="right-chevron-icon" />
        </span>
        <span className={css.Breadcrumb}>
          <a href="#" onClick={this.clickBreadcrumb} className={css.BreadcrumbLink}>{career.faction}</a>
        </span>
        <span className={css.BreadcrumbDivider}>
          <IconChevronRight classes="icon--small" name="right chevron icon" nameSlug="right-chevron-icon" />
        </span>
        <span className={css.Breadcrumb}>
          <a href="#" onClick={this.clickBreadcrumb} className={css.BreadcrumbLink}>{career.race}</a>
        </span>
        <span className={css.BreadcrumbDivider}>
          <IconChevronRight classes="icon--small" name="right chevron icon" nameSlug="right-chevron-icon" />
        </span>
        <span className={css.BreadcrumbActive}>{career.class}</span>
      </div>
    );
  }
}

function mapStateToProps({ careers, sidebar, overlayShow, slug }) {
  return {
    careers,
    sidebar,
    overlayShow,
    slug
  };
}

export default connect(mapStateToProps, { toggleOverlayShow, toggleSidebar })(Breadcrumb);
