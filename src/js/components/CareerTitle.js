import React from 'react';
import CSSCareerTitle from '../../css/components/CareerTitle.css';

const CareerTitle = (props) => {
  const url = `/images/icons/${props.careerShort}.png`;
  return (
      <div className="u-title-height u-margin__bottom--large">
        <img src={url} className={CSSCareerTitle.CareerTitleIconBordered}></img>
        <h1 className={CSSCareerTitle.CareerTitle}>
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
