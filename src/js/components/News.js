import React from 'react';
import IconChevronRight from '../icons/IconChevronRight';
import css from '../../css/components/News.css';

const News = () =>
  <div className={css.container}>
    <div className={css.heading}>Latest updates</div>
    <div className={css.item}>
      <span className={css.itemIcon}><IconChevronRight classes="icon--small" name="right chevron icon" nameSlug="right-chevron-icon" /></span>
      <div className={css.itemDate}>12/6/2016</div>
      <span className={css.itemText}>A number of UI improvements to Mastery area.</span>
    </div>
    <div className={css.item}>
      <span className={css.itemIcon}><IconChevronRight classes="icon--small" name="right chevron icon" nameSlug="right-chevron-icon" /></span>
      <div className={css.itemDate}>10/6/2016</div>
      <span className={css.itemText}>First major update. Mastery abilities can now be activated independent of selection. Interface reskinned.</span>
    </div>
    <div className={css.item}>
      <span className={css.itemIcon}><IconChevronRight classes="icon--small" name="right chevron icon" nameSlug="right-chevron-icon" /></span>
      <div className={css.itemDate}>1/6/2016</div>
      <span className={css.itemText}>We are live :)</span>
    </div>
  </div>;

export default News;
