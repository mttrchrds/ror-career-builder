import React from 'react';
import css from '../../css/components/CareerTitle.css';

const CareerTitle = (props) => {
  const url = `/images/icons/${props.careerShort}.png`;
  return (
      <div className="row row--v-center">
        <img src={url} className={css.icon}></img>
        <h1 className={css.title}>
          {props.career.name}
        </h1>
      </div>
    );
};

CareerTitle.propTypes = {
  careerShort: React.PropTypes.string,
  career: React.PropTypes.object,
};

export default CareerTitle;
