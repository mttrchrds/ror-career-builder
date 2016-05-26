import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import '../../scss/components/Sidebar.scss';

const Sidebar = (props) => {
  const renderCareer = (key) => {
    const career = props.careers[key];
    const url = `/career/${key}`;
    const imgUrl = `/images/icons/${key}.png`;
    return (
      <Link key={key} className="c-sidebar__item" to={url}><img src={imgUrl} className="c-title__icon c-title__icon--tiny" />{career.name}</Link>
    );
  };
  const sidebarClass = classNames({
    'c-sidebar': true,
    'c-sidebar--active': props.sidebar.visible,
  });
  return (
    <div className={sidebarClass}>
      <div className="c-sidebar__content">
        {Object.keys(props.careers).map(renderCareer)}
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  careers: React.PropTypes.object,
  sidebar: React.PropTypes.object,
};

export default Sidebar;
