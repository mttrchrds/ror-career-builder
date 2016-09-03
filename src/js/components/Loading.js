import React from 'react';
import css from '../../css/components/Loading.css';

const Loading = () =>
  <div className={css.container}>
    <img className={css.image} src="/images/gears.svg" alt="loading icon" />
    <span className={css.title}>Loading...</span>
  </div>;

export default Loading;
