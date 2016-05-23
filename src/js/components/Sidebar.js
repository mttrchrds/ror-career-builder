import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import '../../scss/components/Sidebar.scss';

class Sidebar extends React.Component {

  constructor(props) { 
    super(props); 
    // Bind functions early. More performant. Upgrade to autobind when Babel6 sorts itself out
    this.renderCareer = this.renderCareer.bind(this);
  }

  renderCareer(key) {
    const career = this.props.careers[key];
    const url = `/career/${key}`;
    const imgUrl = `/images/icons/${key}.png`;
    return (
      <Link key={key} className="c-sidebar__item" to={url}><img src={imgUrl} className="c-title__icon c-title__icon--tiny" />{career.name}</Link>
    )
  }

  render() {
    const sidebarClass = classNames({
      'c-sidebar': true,
      'c-sidebar--active': this.props.sidebar.visible,
    });
    return (
      <div className={sidebarClass}>
        <div className="c-sidebar__content">
          {Object.keys(this.props.careers).map(this.renderCareer)}
        </div>
      </div>
    )
  }
}

export default Sidebar;
