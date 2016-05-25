import React from 'react';
import '../../scss/components/CareerTitle.scss';

class CareerTitle extends React.Component {
  render() {
    const url = `/images/icons/${this.props.careerShort}.png`;
    return (
      <div className="u-title-height u-margin__bottom--large">
        <img src={url} className="c-title__icon"></img>
        <h1 className="c-title">
          {this.props.career.name}
        </h1>
      </div>
    );
  }
}

CareerTitle.propTypes = {
  careerShort: React.PropTypes.string,
  career: React.PropTypes.object,
};

export default CareerTitle;
