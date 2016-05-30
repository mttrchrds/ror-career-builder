import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import '../../scss/components/Sidebar.scss';

const SidebarItem = (props) => {
  const clickItem = () => {
    props.gaCareerSelected(props.shortName);
  };
  const url = `/career/${props.shortName}`;
  const imgUrl = `/images/icons/${props.shortName}.png`;
  return (
    <Link className="c-sidebar__item" to={url} onClick={clickItem}>
      <img src={imgUrl} className="c-title__icon c-title__icon--tiny" />{props.careerName}
    </Link>
  );
};

SidebarItem.propTypes = {
  careerName: React.PropTypes.string,
  shortName: React.PropTypes.string,
  gaCareerSelected: React.PropTypes.func,
};

const Sidebar = (props) => {
  const renderItem = (key) =>
    <SidebarItem key={key} gaCareerSelected={props.gaCareerSelected} shortName={key} careerName={props.careers[key].name} />;
  const sidebarClass = classNames({
    'c-sidebar': true,
    'c-sidebar--active': props.sidebar.visible,
  });
  return (
    <div className={sidebarClass}>
      <div className="c-sidebar__content">
        {Object.keys(props.careers).map(renderItem)}
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  careers: React.PropTypes.object,
  sidebar: React.PropTypes.object,
  gaCareerSelected: React.PropTypes.func,
};

export default Sidebar;
