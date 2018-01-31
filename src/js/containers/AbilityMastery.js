import React, { Component } from 'react';
import { connect } from 'react-redux';
import css from '../../css/components/AbilityMastery.css';
import cssTactic from '../../css/components/AbilityTactic.css';
import classNames from 'classnames';

import Popover from '../components/Popover';
import PopoverAbility from '../components/PopoverAbility';

class AbilityMastery extends Component {

  /*
  status = enabled/disabled
  hovered = selected i.e. clicked
  selected = ability is currently in hover state
  */
  constructor(props) {
    super(props);
    this.state = {
      status: false,
      hovered: false,
      selected: false
    };
    this.hoverOut = this.hoverOut.bind(this);
    this.hoverOver = this.hoverOver.bind(this);
    this.clicked = this.clicked.bind(this);
  }

  setInitialStatus(currentLevel, minrank) {
    if (Number(currentLevel) >= Number(minrank)) {
      this.setState({ status: true });
    } else {
      this.setState({ status: false });
    }
  }

  hoverOver() {
    this.setState({
      hovered: true,
    });
  }

  hoverOut() {
    this.setState({
      hovered: false,
    });
  }

  clicked() {
    console.log('clicked');
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
      [css.abilityStandard]: !this.state.status && !this.state.selected && (this.props.data.abilityType === 'standard'),
      [css.abilityStandardActive]: this.state.status && !this.state.selected && (this.props.data.abilityType === 'standard'),
      [css.abilityStandardSelected]: this.state.selected && (this.props.data.abilityType === 'standard'),
      [css.abilityMorale]: !this.state.status && !this.state.selected && (this.props.data.abilityType === 'morale'),
      [css.abilityMoraleActive]: this.state.status && !this.state.selected && (this.props.data.abilityType === 'morale'),
      [css.abilityMoraleSelected]: this.state.selected && (this.props.data.abilityType === 'morale'),
      [cssTactic.ability]: !this.state.status && !this.state.selected && (this.props.data.abilityType === 'tactic'),
      [cssTactic.abilityMasteryActive]: this.state.status && !this.state.selected && (this.props.data.abilityType === 'tactic'),
      [cssTactic.abilityMasteryActive]: this.state.selected && (this.props.data.abilityType === 'tactic'),
      'is-hovered': this.state.hovered,
      popover__parent: true,
    });
    const abilityImageClass = classNames({
      [css.imageStandard]: !this.state.selected && (this.props.data.abilityType === 'standard'),
      [css.imageStandardSelected]: this.state.selected && (this.props.data.abilityType === 'standard'),
      [css.imageMorale]: !this.state.selected && (this.props.data.abilityType === 'morale'),
      [css.imageMoraleSelected]: this.state.selected && (this.props.data.abilityType === 'morale'),
      [css.imageTactic]: !this.state.selected && (this.props.data.abilityType === 'tactic'),
      [css.imageTacticSelected]: this.state.selected && (this.props.data.abilityType === 'tactic'),
    });

    // const abilityClass = classNames({
    //   [css.ability]: true,
    //   'is-hovered': this.state.hovered,
    //   popover__parent: true,
    // });
    // const abilityImageClass = classNames({
    //   [css.image]: this.state.status,
    //   [css.imageInactive]: !this.state.status,
    // });
    const imgSrc = `../../images/abilities/${this.props.data.image}.png`;
    const popoverContent = (
      <PopoverAbility data={this.props.data} imgSrc={imgSrc} />
    );
    return (
      <div className={abilityClass} ref="popoverParent">
        <img
          className={abilityImageClass}
          src={imgSrc}
          alt={this.props.data.name}
          onMouseOver={this.hoverOver}
          onMouseOut={this.hoverOut}
        />
        <Popover
          content={popoverContent}
          alignment="top"
          activate={this.state.hovered}
          abilityOptional={false}
          status={this.state.status}
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

export default connect(mapStateToProps, null)(AbilityMastery);
