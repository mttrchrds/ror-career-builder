import React from 'react';
import { Link } from 'react-router';

const SidebarItem = (props) => {
  const clickItem = () => {
    props.gaCareerSelected(props.shortName);
  };
  const url = `/career/${props.shortName}`;
  const imgUrl = `/images/icons/${props.shortName}.png`;
  return (
    <Link className="c-career__list__item" to={url} onClick={clickItem}>
      <img src={imgUrl} className="c-title__icon c-title__icon--tiny" />{props.careerName}
    </Link>
  );
};

SidebarItem.propTypes = {
  careerName: React.PropTypes.string,
  shortName: React.PropTypes.string,
  gaCareerSelected: React.PropTypes.func,
};

export default SidebarItem;
