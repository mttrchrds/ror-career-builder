import React from 'react';
import classNames from 'classnames';

require('../../scss/Sidebar.scss');

class Sidebar extends React.Component {

  constructor(props) { 
    super(props); 
    // Bind functions early. More performant. Upgrade to autobind when Babel6 sorts itself out
    this.renderCareers = this.renderCareers.bind(this);
    this.clickOverlay = this.clickOverlay.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.sidebar.visible) {
      document.querySelector('body').classList.add('sidebar');
      document.querySelector('#app').classList.add('sidebar');
    } else {
      document.querySelector('body').classList.remove('sidebar');
      document.querySelector('#app').classList.remove('sidebar');
    }
  }

  renderCareers(key) {
    let career = this.props.careers[key];
    let url = `/career/${key}`;
    return (
      <a key={key} className="c-sidebar__item" href={url} >{career.name}</a>
    )
  }

  clickOverlay() {
    this.props.updateSidebarVisibility(false);
  }

  render() {
    const sidebarClass = classNames({
      'c-sidebar': true,
      'c-sidebar--active': this.props.sidebar.visible,
    });
    return (
      <div className={sidebarClass}>
        <div className="c-sidebar__overlay" onClick={this.clickOverlay}></div>
        <div className="c-sidebar__content">
          {Object.keys(this.props.careers).map(this.renderCareers)}
        </div>
      </div>
    )
  }
}

export default Sidebar;
