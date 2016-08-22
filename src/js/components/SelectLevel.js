import React from 'react';
import css from '../../css/components/SelectLevel.css';

class SelectLevel extends React.Component {

  constructor(props) {
    super(props);
    // Bind functions early. More performant. Upgrade to autobind when Babel6 sorts itself out
    this.changeLevel = this.changeLevel.bind(this);
  }

  generateLevels() {
    let start = 1;
    const end = 40;
    const optionList = [];
    for (start; start <= end; start++) {
      optionList.push(<option key={start} value={start}>{start}</option>);
    }
    return optionList;
  }

  changeLevel() {
    this.props.resetSelections();
    this.props.updateLevel(this.refs.level.value);
    this.props.setMasteryPoints(this.refs.level.value, this.props.currentRenown);
    this.props.setCurrentTacticLimit(this.refs.level.value);
  }

  render() {
    return (
      <div className={css.container}>
        <label className={css.label} htmlFor="levelSelect">Level</label>
        <select
          ref="level"
          onChange={this.changeLevel}
          className={css.select} id="levelSelect"
          value={this.props.currentLevel}
        >
          {this.generateLevels()}
        </select>
      </div>
    );
  }
}

SelectLevel.propTypes = {
  resetSelections: React.PropTypes.func,
  updateLevel: React.PropTypes.func,
  setMasteryPoints: React.PropTypes.func,
  currentRenown: React.PropTypes.number,
  setCurrentTacticLimit: React.PropTypes.func,
  currentLevel: React.PropTypes.number,
};

export default SelectLevel;
