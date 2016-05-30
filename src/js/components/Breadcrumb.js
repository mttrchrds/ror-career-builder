import React from 'react';
import { Link } from 'react-router';
import '../../scss/components/Breadcrumb.scss';

const Breadcrumb = (props) => {
  const clickBreadcrumb = (e) => {
    e.preventDefault();
    props.updateOverlayVisibility(true);
    props.updateSidebarVisibility(true);
    props.gaChangeCareer('Breadcrumb');
  };
  return (
    <div className="u-margin__bottom--large">
      <span className="c-breadcrumb">
        <Link to="/" className="c-breadcrumb__link">Home</Link>
      </span>
      <span className="c-breadcrumb c-breadcrumb__divider"><i className="fa fa-angle-right"></i></span>
      <span className="c-breadcrumb">
        <a href="#" onClick={clickBreadcrumb} className="c-breadcrumb__link">{props.career.faction}</a>
      </span>
      <span className="c-breadcrumb c-breadcrumb__divider"><i className="fa fa-angle-right"></i></span>
      <span className="c-breadcrumb">
        <a href="#" onClick={clickBreadcrumb} className="c-breadcrumb__link">{props.career.race}</a>
      </span>
      <span className="c-breadcrumb c-breadcrumb__divider"><i className="fa fa-angle-right"></i></span>
      <span className="c-breadcrumb c-breadcrumb--active">{props.career.class}</span>
    </div>
  );
};

Breadcrumb.propTypes = {
  gaChangeCareer: React.PropTypes.func,
  updateOverlayVisibility: React.PropTypes.func,
  updateSidebarVisibility: React.PropTypes.func,
  career: React.PropTypes.object,
};

export default Breadcrumb;
