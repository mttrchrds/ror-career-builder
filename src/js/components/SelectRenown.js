import React from 'react';
import '../../scss/components/SelectLevel.scss';

class SelectRenown extends React.Component {

  constructor(props) {
    super(props);
    // Bind functions early. More performant. Upgrade to autobind when Babel6 sorts itself out
    this.changeRenown = this.changeRenown.bind(this);
  }

  changeRenown() {
    this.props.resetSelections();
    this.props.updateRenown(this.refs.renown.value);
    this.props.setMasteryPoints(this.props.currentLevel, this.refs.renown.value);
  }

  render() {
    return (
      <div className="u-title-height u-margin__bottom--large">
        <div className="c-level">
          <label className="c-level__label t-primary" htmlFor="renownSelect">Renown rank</label>
          <select 
            ref="renown"
            onChange={this.changeRenown}
            className="c-level__select" id="renownSelect"
            value={this.props.currentRenown}
          >
            <option value="10">&lt; 40</option>
            <option value="40">40+</option>
            <option value="50">50+</option>
            <option value="60">60+</option>
            <option value="70">70+</option>
          </select>
        </div>
      </div>
    );
  }
}

SelectRenown.propTypes = {
  resetSelections: React.PropTypes.func,
  updateRenown: React.PropTypes.func,
  setMasteryPoints: React.PropTypes.func,
  currentRenown: React.PropTypes.number,
  currentLevel: React.PropTypes.number,
};

export default SelectRenown;
