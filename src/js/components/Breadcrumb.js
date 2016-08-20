import React from 'react';
import { Link } from 'react-router';
import CSSBreadcrumb from '../../css/components/Breadcrumb.css';

const Breadcrumb = (props) => {
  const clickBreadcrumb = (e) => {
    e.preventDefault();
    props.updateOverlayVisibility(true);
    props.updateSidebarVisibility(true);
    props.gaChangeCareer('Breadcrumb');
  };
  return (
    <div className="marginBottom--medium">
      <span className={CSSBreadcrumb.Breadcrumb}>
        <Link to="/" className={CSSBreadcrumb.BreadcrumbLink}>Home</Link>
      </span>
      <span className={CSSBreadcrumb.BreadcrumbDivider}><i className="fa fa-angle-right"></i></span>
      <span className={CSSBreadcrumb.Breadcrumb}>
        <a href="#" onClick={clickBreadcrumb} className={CSSBreadcrumb.BreadcrumbLink}>{props.career.faction}</a>
      </span>
      <span className={CSSBreadcrumb.BreadcrumbDivider}><i className="fa fa-angle-right"></i></span>
      <span className={CSSBreadcrumb.Breadcrumb}>
        <a href="#" onClick={clickBreadcrumb} className={CSSBreadcrumb.BreadcrumbLink}>{props.career.race}</a>
      </span>
      <span className={CSSBreadcrumb.BreadcrumbDivider}><i className="fa fa-angle-right"></i></span>
      <span className={CSSBreadcrumb.BreadcrumbActive}>{props.career.class}</span>
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
