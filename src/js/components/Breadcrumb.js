import React from 'react';
import { Link } from 'react-router';
import styles from '../../css/components/Breadcrumb.css';

const Breadcrumb = (props) => {
  const clickBreadcrumb = (e) => {
    e.preventDefault();
    props.updateOverlayVisibility(true);
    props.updateSidebarVisibility(true);
    props.gaChangeCareer('Breadcrumb');
  };
  return (
    <div className="u-margin__bottom--large">
      <span className={styles.Breadcrumb}>
        <Link to="/" className={styles.BreadcrumbLink}>Home</Link>
      </span>
      <span className={styles.BreadcrumbDivider}><i className="fa fa-angle-right"></i></span>
      <span className={styles.Breadcrumb}>
        <a href="#" onClick={clickBreadcrumb} className={styles.BreadcrumbLink}>{props.career.faction}</a>
      </span>
      <span className={styles.BreadcrumbDivider}><i className="fa fa-angle-right"></i></span>
      <span className={styles.Breadcrumb}>
        <a href="#" onClick={clickBreadcrumb} className={styles.BreadcrumbLink}>{props.career.race}</a>
      </span>
      <span className={styles.BreadcrumbDivider}><i className="fa fa-angle-right"></i></span>
      <span className={styles.BreadcrumbActive}>{props.career.class}</span>
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
