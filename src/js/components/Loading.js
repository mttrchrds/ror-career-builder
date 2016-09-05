import React from 'react';
import css from '../../css/components/Loading.css';

const Loading = () =>
  <div className={css.container}>
    <div className={css.icon}></div>
    <span className={css.title}>Loading...</span>
  </div>;

export default Loading;
