import React from 'react';
import classNames from 'classnames';
import Popover from './Popover';
import PopoverAbility from './PopoverAbility';

require('../../scss/Ability.scss');

class Ability extends React.Component {

  /*
  abilityStatus = enabled/disabled
  abilityHovered = ability is currently in hover state
  */
  constructor(props) {
    super(props);
    // Bind functions early. More performant. Upgrade to autobind when Babel6 sorts itself out
    this.abilityHoverOver = this.abilityHoverOver.bind(this);
    this.abilityHoverOut = this.abilityHoverOut.bind(this);

    this.state = {
      abilityStatus: false,
      abilityHovered: false,
    };
  }

  // Initial render
  componentDidMount() {
    this.setInitialStatus(
      this.props.currentLevel,
      this.props.details.minrank);
  }

  // About to update because parent changed
  componentWillReceiveProps(nextProps) {
    this.setInitialStatus(
      nextProps.currentLevel,
      nextProps.details.minrank);
  }

  setInitialStatus(currentLevel, minrank) {
    if (Number(currentLevel) >= Number(minrank)) {
      this.setState({ abilityStatus: true });
    } else {
      this.setState({ abilityStatus: false });
    }
  }

  abilityHoverOver() {
    this.setState({
      abilityHovered: true,
    });
  }

  abilityHoverOut() {
    this.setState({
      abilityHovered: false,
    });
  }

  render() {
    const abilityClass = classNames({
      [`c-ability c-ability--${this.props.details.abilityType}`]: true,
      'c-ability--optional': false,
      'c-ability--active': this.state.abilityStatus,
      'c-ability--inactive': !this.state.abilityStatus,
      'is-hovered': this.state.abilityHovered,
      'c-ability--mastery': false,
      'c-popover__parent': true
    });
    const imgSrc = `../../images/abilities/${this.props.details.image}.png`;
    const popoverContent = (
      <PopoverAbility details={this.props.details} />
    );
    return (
      <div
        className={abilityClass}
        onMouseOver={this.abilityHoverOver} 
        onMouseOut={this.abilityHoverOut} ref="popoverParent"
      >
        <img className="c-ability__image" src={imgSrc} alt={this.props.details.name} />
        <Popover content={popoverContent} alignment="top" activate={this.state.abilityHovered} />
      </div>
    );
  }
}

Ability.propTypes = {
  details: React.PropTypes.object,
  pathMeter: React.PropTypes.number,
  currentLevel: React.PropTypes.number,
};

export default Ability;
