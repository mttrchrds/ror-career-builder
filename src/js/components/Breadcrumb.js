import React from 'react';
import { Link } from 'react-router';

require('../../scss/components/Breadcrumb.scss');

class Breadcrumb extends React.Component {

  constructor(props) {
    super(props);
    // Bind functions early. More performant. Upgrade to autobind when Babel6 sorts itself out
    this.clickBreadcrumb = this.clickBreadcrumb.bind(this);
  }

  clickBreadcrumb(e) {
    e.preventDefault();
    this.props.updateOverlayVisibility(true);
    this.props.updateSidebarVisibility(true);
  }

  render() {
    return (
      <div className="u-margin__bottom--large">
        <span className="c-breadcrumb">
          <Link to="/" className="c-breadcrumb__link">Home</Link>
        </span>
        <span className="c-breadcrumb c-breadcrumb__divider"><i className="fa fa-angle-right"></i></span>
        <span className="c-breadcrumb">
          <a href="#" onClick={this.clickBreadcrumb} className="c-breadcrumb__link">{this.props.career.faction}</a>
        </span>
        <span className="c-breadcrumb c-breadcrumb__divider"><i className="fa fa-angle-right"></i></span>
        <span className="c-breadcrumb">
          <a href="#" onClick={this.clickBreadcrumb} className="c-breadcrumb__link">{this.props.career.race}</a>
        </span>
        <span className="c-breadcrumb c-breadcrumb__divider"><i className="fa fa-angle-right"></i></span>
        <span className="c-breadcrumb c-breadcrumb--active">{this.props.career.class}</span>
      </div>
    )
  }
}

export default Breadcrumb;
