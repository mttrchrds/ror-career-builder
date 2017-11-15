import React from 'react';
import { Link } from 'react-router-dom';
import IconChevronRight from '../icons/IconChevronRight';
import css from '../../css/components/Breadcrumb.css';

const Breadcrumb = (props) => {
  const clickBreadcrumb = (e) => {
    e.preventDefault();
    props.updateOverlayVisibility(true);
    props.updateSidebarVisibility(true);
    props.gaChangeCareer('Breadcrumb');
  };
  return (
    <div>
      <span className={css.Breadcrumb}>
        <Link to="/" className={css.BreadcrumbLink}>Home</Link>
      </span>
      <span className={css.BreadcrumbDivider}>
        <IconChevronRight classes="icon--small" name="right chevron icon" nameSlug="right-chevron-icon" />
      </span>
      <span className={css.Breadcrumb}>
        <a href="#" onClick={clickBreadcrumb} className={css.BreadcrumbLink}>{props.career.faction}</a>
      </span>
      <span className={css.BreadcrumbDivider}>
        <IconChevronRight classes="icon--small" name="right chevron icon" nameSlug="right-chevron-icon" />
      </span>
      <span className={css.Breadcrumb}>
        <a href="#" onClick={clickBreadcrumb} className={css.BreadcrumbLink}>{props.career.race}</a>
      </span>
      <span className={css.BreadcrumbDivider}>
        <IconChevronRight classes="icon--small" name="right chevron icon" nameSlug="right-chevron-icon" />
      </span>
      <span className={css.BreadcrumbActive}>{props.career.class}</span>
    </div>
  );
};

export default Breadcrumb;
