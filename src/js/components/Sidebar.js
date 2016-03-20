import React from 'react';

class Sidebar extends React.Component {

  componentDidMount() {
    // $('.ui.sidebar').first()
    //   .sidebar('attach events', '.changeCareer')
    // ;
  }

  renderCareers(key) {
    let career = this.props.careers[key];
    let url = `/career/${key}`;
    return (
      <a key={key} className="item" href={url} >{career.name}</a>
    )
  }

  render() {
    return (
      <div className="ui sidebar inverted vertical menu">
        {Object.keys(this.props.careers).map(this.renderCareers.bind(this))}
      </div>
    )
  }
}

export default Sidebar;
