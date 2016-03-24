import React from 'react';

class Breadcrumb extends React.Component {
  render() {
    return (
      <div className="l-breadcrumbs t-secondary">
        <span className="c-breadcrumb">{this.props.career.faction}</span>
        <span className="c-breadcrumb__divider"><i className="fa fa-angle-right"></i></span>
        <span className="c-breadcrumb">{this.props.career.race}</span>
        <span className="c-breadcrumb__divider"><i className="fa fa-angle-right"></i></span>
        <span className="c-breadcrumb c-breadcrumb--active">{this.props.career.class}</span>
      </div>
    )
  }
}

export default Breadcrumb;
