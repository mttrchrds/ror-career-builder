import React from 'react';
import '../../scss/components/CareerTitle.scss';

const CareerTitle = (props) => {
  const url = `/images/icons/${props.careerShort}.png`;
  return (
      <div className="u-title-height u-margin__bottom--large">
        <img src={url} className="c-title__icon"></img>
        <h1 className="c-title">
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
