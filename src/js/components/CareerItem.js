import React from 'react';
import { Link } from 'react-router';
import css from '../../css/components/CareerItem.css';

const SidebarItem = (props) => {
  const clickItem = () => {
    props.gaCareerSelected(props.shortName);
  };
  const url = `/career/${props.shortName}`;
  const imgUrl = `/images/icons/${props.shortName}.png`;
  return (
    <div className={css.item}>
      <Link to={url} onClick={clickItem}>
        <img src={imgUrl} className={css.icon} />
      </Link>
      <Link className={css.link} to={url} onClick={clickItem}>
        {props.careerName}
      </Link>
    </div>
  );
};

export default SidebarItem;
