import React, { Component } from 'react';
import { connect } from 'react-redux';
import css from '../../css/components/AbilityMastery.css';
import cssTactic from '../../css/components/AbilityTactic.css';
import cssMorale from '../../css/components/AbilityMorale.css';
import classNames from 'classnames';

import Popover from '../components/Popover';
import PopoverAbility from '../components/PopoverAbility';

import { selectMasteryAbility, deselectMasteryAbility } from '../actions/actionMasteryAbilities';
import { selectMasteryMorale, deselectMasteryMorale } from '../actions/actionMasteryMorales';
import { selectMasteryTactic, deselectMasteryTactic } from '../actions/actionMasteryTactics';

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
    
  }

  // About to update because parent changed
  componentWillReceiveProps(nextProps) {
    
  }

  render() {
    const abilityClass = classNames({
      [css.abilityStandard]: !this.state.status && !this.state.selected && (this.props.data.abilityType === 'standard'),
      [css.abilityStandardActive]: this.state.status && !this.state.selected && (this.props.data.abilityType === 'standard'),
      [css.abilityStandardSelected]: this.state.selected && (this.props.data.abilityType === 'standard'),
      [cssMorale.ability]: !this.state.status && !this.state.selected && (this.props.data.abilityType === 'morale'),
      [cssMorale.abilityMasteryActive]: this.state.status && !this.state.selected && (this.props.data.abilityType === 'morale'),
      [cssMorale.abilityMasterySelected]: this.state.selected && (this.props.data.abilityType === 'morale'),
      [cssTactic.ability]: !this.state.status && !this.state.selected && (this.props.data.abilityType === 'tactic'),
      [cssTactic.abilityMasteryActive]: this.state.status && !this.state.selected && (this.props.data.abilityType === 'tactic'),
      [cssTactic.abilityMasteryActive]: this.state.selected && (this.props.data.abilityType === 'tactic'),
      'is-hovered': this.state.hovered,
      popover__parent: true,
    });
    const abilityImageClass = classNames({
      [css.imageStandard]: !this.state.selected && (this.props.data.abilityType === 'standard'),
      [css.imageStandardSelected]: this.state.selected && (this.props.data.abilityType === 'standard'),
      [cssMorale.imageInactive]: !this.state.selected && (this.props.data.abilityType === 'morale'),
      [cssMorale.image]: this.state.selected && (this.props.data.abilityType === 'morale'),
      [cssTactic.imageInactive]: !this.state.selected && (this.props.data.abilityType === 'tactic'),
      [cssTactic.image]: this.state.selected && (this.props.data.abilityType === 'tactic'),
    });

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

export default connect(mapStateToProps, {
  selectMasteryAbility,
  deselectMasteryAbility,
  selectMasteryMorale,
  deselectMasteryMorale,
  selectMasteryTactic,
  deselectMasteryTactic
})(AbilityMastery);
