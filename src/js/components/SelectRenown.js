import React from 'react';
import css from '../../css/components/SelectRenown.css';

class SelectRenown extends React.Component {

  constructor(props) {
    super(props);
    this.changeRenown = this.changeRenown.bind(this);
  }

  changeRenown() {
    this.props.resetSelections();
    this.props.updateRenown(this.refs.renown.value);
    this.props.updateMasteryPoints();
  }

  render() {
    return (
      <div className={css.container}>
        <label className={css.label} htmlFor="renownSelect">Renown rank</label>
        <select
          ref="renown"
          onChange={this.changeRenown}
          className={css.select} id="renownSelect"
          value={this.props.currentRenown}
        >
          <option value="10">&lt; 40</option>
          <option value="40">40+</option>
          <option value="50">50+</option>
          <option value="60">60+</option>
          <option value="70">70+</option>
        </select>
      </div>
    );
  }
}

export default SelectRenown;
