import React from 'react';

require('../../scss/BarXp.scss');

class ActionButtons extends React.Component {

  clickReset() {
    this.props.resetCareer();
  }

  render() {
    return (
      <div className="l-box l-spacing-left l-row l-row--right">
        <button className="pure-button c-button c-button--tertiary" type="button" onHover={console.log('hover')} onClick={this.clickReset.bind(this)}>
          <i className="fa fa-refresh l-spacing-right--small"></i>
          Reset
        </button>
        <button className="pure-button l-spacing-left c-button c-button--secondary" type="button">
          <i className="fa fa-group l-spacing-right--small"></i>
          Change career
        </button>
        <button className="pure-button l-spacing-left c-button c-button--primary" type="button">
          <i className="fa fa-save l-spacing-right--small"></i>
          Save career
        </button>
      </div>
    )
  }
}

export default ActionButtons;