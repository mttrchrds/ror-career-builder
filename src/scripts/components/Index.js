import React from 'react';
import h from '../helpers';

class Index extends React.Component {

  constructor() {
    super();
    this.state = {
      careers: {}
    }
  }

  componentDidMount() {
    h.getJSON('../../json/careers.json', (result) => {
        this.setState({
          careers: result
        });
    });
  }

  renderCareers(key) {
    const url = `career/${key}`;
    return (
      <li key={key}><a href={url}>{this.state.careers[key].name}</a></li>
    )
  }

  render() {
    return (
      <ul>
        {Object.keys(this.state.careers).map(this.renderCareers.bind(this))}
      </ul>
    )
  }
}

export default Index;
