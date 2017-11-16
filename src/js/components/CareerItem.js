import React from 'react';
import { Link } from 'react-router-dom';
import css from '../../css/components/CareerItem.css';
import { gaCareerSelected } from '../helpers/googleAnalytics';

const CareerItem = (props) => {
  const clickItem = () => {
    gaCareerSelected(props.career.name, props.career.class, props.career.race);
  };
  const url = `/career/${props.career.slug}`;
  const imgUrl = `/images/icons/${props.career.slug}.png`;
  return (
    <div className={css.item}>
      <Link to={url} onClick={clickItem}>
        <img src={imgUrl} className={css.icon} />
      </Link>
      <Link className={css.link} to={url} onClick={clickItem}>
        {props.career.name}
      </Link>
    </div>
  );
};

export default CareerItem;
