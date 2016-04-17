import React from 'react';

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    // Bind functions early. More performant. Upgrade to autobind when Babel6 sorts itself out
    this.renderCareers = this.renderCareers.bind(this);
  }

  componentDidMount() {
    // $('.ui.sidebar').first()
    //   .sidebar('attach events', '.changeCareer')
    // ;
  }

  renderCareers(key) {
    return;
    let career = this.props.careers[key];
    let url = `/career/${key}`;
    return (
      <a key={key} className="item" href={url} >{career.name}</a>
    )
  }

  render() {
    return (
      <div className="ui sidebar inverted vertical menu">
        {Object.keys(this.props.careers).map(this.renderCareers)}
      </div>
    )
  }
}

export default Sidebar;
