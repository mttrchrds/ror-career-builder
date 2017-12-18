import React, { Component } from 'react';
import { connect } from 'react-redux';
import classNames from 'classnames';
import css from '../../css/components/Mastery.css';

class Mastery extends Component {

  constructor(props) {
    super(props);
  }

  render() {

    const labelClass = classNames({
      [css.label]: true,
      'marginLeft--small': true,
      [css.labelActive]: this.props.points > 0,
    });

    return (
      <div className={css.container}>
        <h2 className={css.heading}>
          Mastery abilities <span className={labelClass}>{this.props.points } points</span>
        </h2>
      </div>
    );
  }
}

function mapStateToProps({ points }) {
  return {
    points
  };
}

export default connect(mapStateToProps, null)(Mastery);
