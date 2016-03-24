import React from 'react';

class CareerTitle extends React.Component {
  render() {
    let url = `/images/icons/${this.props.careerShort}.png`;
    return (
      <div className="l-title">
        <img src={url} className="c-title__icon"></img>
        <h1 className="c-title t-primary t-primary__title">
          {this.props.career.name}
        </h1>
      </div>
    )
  }
}

export default CareerTitle;
