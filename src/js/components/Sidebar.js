import React from 'react';
import classNames from 'classnames';

require('../../scss/Sidebar.scss');

class Sidebar extends React.Component {

  constructor(props) { 
    super(props); 
    // Bind functions early. More performant. Upgrade to autobind when Babel6 sorts itself out
    this.renderCareer = this.renderCareer.bind(this);
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

  renderCareer(key) {
    const career = this.props.careers[key];
    const url = `/career/${key}`;
    const imgUrl = `/images/icons/${key}.png`;
    return (
      <a key={key} className="c-sidebar__item" href={url}><img src={imgUrl} className="c-title__icon c-title__icon--tiny" />{career.name}</a>
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
          {Object.keys(this.props.careers).map(this.renderCareer)}
        </div>
      </div>
    )
  }
}

export default Sidebar;
