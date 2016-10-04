import React from 'react';
import css from '../../css/components/CareerTitle.css';

const CareerTitle = (props) => {
  const url = `/images/icons/${props.careerSlug}.png`;
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
  careerSlug: React.PropTypes.string,
  career: React.PropTypes.object,
};

export default CareerTitle;
