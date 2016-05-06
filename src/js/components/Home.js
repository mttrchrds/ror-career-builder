import React from 'react';
import h from '../helpers';
import { Link } from 'react-router';

class Home extends React.Component {

  constructor() {
    super();
    // Bind functions early. More performant. Upgrade to autobind when Babel6 sorts itself out
    this.renderCareers = this.renderCareers.bind(this);
    this.state = {
      careers: {},
    };
  }

  componentDidMount() {
    h.getJSON('/json/careers.json', (result) => {
      this.setState({
        careers: result,
      });
    });
  }

  renderCareers(key) {
    const url = `/career/${key}`;
    return (
      <li key={key}><Link to={url}>{this.state.careers[key].name}</Link></li>
    );
  }

  render() {
    return (
      <ul>
        {Object.keys(this.state.careers).map(this.renderCareers)}
      </ul>
    );
  }
}

export default Home;
