import React, { Component } from 'react';
import { connect } from 'react-redux';
import css from '../../css/components/Ability.css';
import classNames from 'classnames';


class Ability extends Component {

  constructor(props) {
    super(props);
    this.state = {
      status: false,
      hovered: false
    };
  }

  setInitialStatus(currentLevel, minrank) {
    if (Number(currentLevel) >= Number(minrank)) {
      this.setState({ status: true });
    } else {
      this.setState({ status: false });
    }
  }

  // Initial render
  componentDidMount() {
    this.setInitialStatus(
      this.props.level,
      this.props.data.minrank);
  }

  // About to update because parent changed
  componentWillReceiveProps(nextProps) {
    this.setInitialStatus(
      nextProps.level,
      nextProps.data.minrank);
  }

  render() {
    const abilityClass = classNames({
      [css.ability]: true,
      'is-hovered': this.state.hovered,
      popover__parent: true,
    });
    const abilityImageClass = classNames({
      [css.image]: this.state.status,
      [css.imageInactive]: !this.state.status,
    });
    const imgSrc = `../../images/abilities/${this.props.data.image}.png`;
    return (
      <div className={abilityClass} ref="popoverParent">
        <img
          className={abilityImageClass}
          src={imgSrc}
          alt={this.props.data.name}
        />
      </div>
    );
  }
}

function mapStateToProps({ level }) {
  return {
    level
  };
}

export default connect(mapStateToProps, null)(Ability);
