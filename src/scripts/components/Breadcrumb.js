import React from 'react';

class Breadcrumb extends React.Component {
  render() {
    return (
      <div id="breadcrumb" className="ui breadcrumb">
        <div className="section">{this.props.career.faction}</div>
        <i className="right angle icon divider"></i>
        <div className="section">{this.props.career.race}</div>
        <i className="right angle icon divider"></i>
        <div className="active section">{this.props.career.class}</div>
      </div>
    )
  }
}

export default Breadcrumb;
