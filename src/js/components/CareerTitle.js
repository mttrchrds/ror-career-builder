import React from 'react';
import css from '../../css/components/CareerTitle.css';

const CareerTitle = (props) => {
  const url = `/images/icons/${props.careerShort}.png`;
  return (
      <div className="marginBottom--medium heightTitle">
        <img src={url} className={css.CareerTitleIconBordered}></img>
        <h1 className={css.CareerTitle}>
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
