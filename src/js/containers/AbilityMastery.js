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
    this.processAbility = this.processAbility.bind(this);
  }

  processAbility (props) {

    // console.log('level', props.masteryLevel);
    console.log('data', props.data);
    // console.log('pathMeterA', props.pathMeterA);
    // console.log('pathMeterB', props.pathMeterB);
    // console.log('pathMeterC', props.pathMeterC);
    // console.log('path', props.path);
    // console.log('masteryAbilities', props.masteryAbilities);
    // console.log('masteryTactics', props.masteryTactics);
    // console.log('masteryMorales', props.masteryMorales);
    // console.log('currentPoints', props.currentPoints);

    let abilities = [];
    let pathMeter = '';

    switch (props.path) {
      case 'a':
        pathMeter = props.pathMeterA;
        break;
      case 'b':
        pathMeter = props.pathMeterB;
        break;
      case 'c':
        pathMeter = props.pathMeterC;
        break;
    }

    switch (props.data.abilityType) {
      case 'standard':
        abilities = props.masteryAbilities;
        break;
      case 'morale':
        abilities = props.masteryMorales;
        break;
      case 'tactic':
        abilities = props.masteryTactics;
        break;
    }

    // Determine if ability is selected (i.e. highlighted)
    if (abilities.indexOf(props.data.id) !== -1) {
      this.setState({
        selected: true,
      });
    } else {
      this.setState({
        selected: false,
      });
    }

    switch (props.masteryLevel) {
      case 1:
        if (Number(props.currentPoints) >= 4) {  
          this.setState({
            status: true,
          });
        } else {
          this.setState({
            status: false,
          });
        }
        break;
      case 2:
        if (Number(props.currentPoints) >= 6) {  
          this.setState({
            status: true,
          });
        } else {
          this.setState({
            status: false,
          });
        }
        break;
      case 3:
        if (Number(props.currentPoints) >= 8) {  
          this.setState({
            status: true,
          });
        } else {
          this.setState({
            status: false,
          });
        }
        break;
      case 4:
        if (Number(props.currentPoints) >= 10) {  
          this.setState({
            status: true,
          });
        } else {
          this.setState({
            status: false,
          });
        }
        break;
      case 5:
        if (Number(props.currentPoints) >= 12) {  
          this.setState({
            status: true,
          });
        } else {
          this.setState({
            status: false,
          });
        }
        break;
      case 6:
        if (Number(props.currentPoints) >= 14) {  
          this.setState({
            status: true,
          });
        } else {
          this.setState({
            status: false,
          });
        }
        break;
      case 7:
        if (Number(props.currentPoints) >= 16) {  
          this.setState({
            status: true,
          });
        } else {
          this.setState({
            status: false,
          });
        }
        break;
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
    this.processAbility(this.props);
  }

  // About to update because parent changed
  componentWillReceiveProps(nextProps) {
    this.processAbility(nextProps);
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
      [cssTactic.abilityMasterySelected]: this.state.selected && (this.props.data.abilityType === 'tactic'),
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

function mapStateToProps(
  { 
    masteryAbilities, 
    masteryTactics, 
    masteryMorales, 
    currentPoints,
    pathMeterA,
    pathMeterB,
    pathMeterC
  }
) 
  {
  return {
    masteryAbilities,
    masteryTactics,
    masteryMorales,
    currentPoints,
    pathMeterA,
    pathMeterB,
    pathMeterC
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
