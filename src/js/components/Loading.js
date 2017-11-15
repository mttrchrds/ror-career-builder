import React from 'react';
import classNames from 'classnames';
import css from '../../css/components/Loading.css';

const Loading = (props) => {
  const containerClass = classNames({
    [css.container]: !props.sidebar.visible,
    [css.containerSidebar]: props.sidebar.visible,
  });
  return (
    <div className={containerClass}>
      <div className={css.icon}></div>
      <span className={css.title}>Loading...</span>
    </div>
  );
};

export default Loading;
