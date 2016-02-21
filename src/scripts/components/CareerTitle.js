import React from 'react';

class CareerTitle extends React.Component {
  render() {
    let url = `/images/icons/${this.props.careerShort}.png`;
    return (
      <h1 className="ui header">
        <img id="classIcon" src={url} className="ui inline image" />
        {this.props.career.name}
      </h1>
    )
  }
}

export default CareerTitle;
