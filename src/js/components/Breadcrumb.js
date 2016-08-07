import React from 'react';
import { Link } from 'react-router';
import styles from '../../css/components/breadcrumb.css';

const Breadcrumb = (props) => {
  const clickBreadcrumb = (e) => {
    e.preventDefault();
    props.updateOverlayVisibility(true);
    props.updateSidebarVisibility(true);
    props.gaChangeCareer('Breadcrumb');
  };
  return (
    <div className="u-margin__bottom--large">
      <span className={styles.breadcrumb}>
        <Link to="/" className={styles.breadcrumbLink}>Home</Link>
      </span>
      <span className={styles.breadcrumbDivider}><i className="fa fa-angle-right"></i></span>
      <span className={styles.breadcrumb}>
        <a href="#" onClick={clickBreadcrumb} className={styles.breadcrumbLink}>{props.career.faction}</a>
      </span>
      <span className={styles.breadcrumbDivider}><i className="fa fa-angle-right"></i></span>
      <span className={styles.breadcrumb}>
        <a href="#" onClick={clickBreadcrumb} className={styles.breadcrumbLink}>{props.career.race}</a>
      </span>
      <span className={styles.breadcrumbDivider}><i className="fa fa-angle-right"></i></span>
      <span className={styles.breadcrumbActive}>{props.career.class}</span>
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
