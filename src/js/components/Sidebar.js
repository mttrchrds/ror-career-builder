import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import css from '../../css/components/Sidebar.css';

const Sidebar = (props) => {

  const renderCareers = () => {
    return (
      Object.keys(props.careers).map(
        (shortName) =>  {
          const career = props.careers[shortName];
          const clickItem = () => {
            props.gaCareerSelected(shortName);
          };
          const url = `/career/${shortName}`;
          const imgUrl = `/images/icons/${shortName}.png`;
          return (
            <Link key={shortName} className={css.item} to={url} onClick={clickItem}>
              <img src={imgUrl} className={css.icon} />{career.name}
            </Link>
          );
        }
      )
    );
  }

  const sidebarClass = classNames({
    [css.container]: !props.sidebar.visible,
    [css.containerActive]: props.sidebar.visible,
  });

  return (
    <div className={sidebarClass}>
      <div className={css.content}>
        {renderCareers()}
      </div>
    </div>
  );
};

export default Sidebar;
