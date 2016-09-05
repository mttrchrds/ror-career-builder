import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import css from '../../css/components/Sidebar.css';

const SidebarItem = (props) => {
  const clickItem = () => {
    props.gaCareerSelected(props.shortName);
  };
  const url = `/career/${props.shortName}`;
  const imgUrl = `/images/icons/${props.shortName}.png`;
  return (
    <Link className={css.item} to={url} onClick={clickItem}>
      <img src={imgUrl} className={css.icon} />{props.careerName}
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
    [css.container]: !props.sidebar.visible,
    [css.containerActive]: props.sidebar.visible,
  });
  return (
    <div className={sidebarClass}>
      <div className={css.content}>
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
