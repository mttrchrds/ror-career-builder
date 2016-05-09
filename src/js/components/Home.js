import React from 'react';
import h from '../helpers';
import classNames from 'classnames';
import { Link } from 'react-router';

require('../../scss/Home.scss');

class Home extends React.Component {

  constructor() {
    super();
    // Bind functions early. More performant. Upgrade to autobind when Babel6 sorts itself out
    this.renderCareers = this.renderCareers.bind(this);
    this.clickMasthead = this.clickMasthead.bind(this);
    this.state = {
      careers: {},
      mastheadActive: false,
    };
  }

  componentDidMount() {
    h.getJSON('/json/careers.json', (result) => {
      this.setState({
        careers: result,
      });
    });
  }

  renderCareers(key, faction) {
    const url = `/career/${key}`;
    const imgUrl = `/images/icons/${key}.png`;
    if (this.state.careers[key].race == faction) {
      return (
        <Link className="c-career__list__item" key={key} to={url}><img src={imgUrl} className="c-title__icon c-title__icon--tiny" />{this.state.careers[key].name}</Link>
      );
    }
  }

  clickMasthead(e) {
    e.preventDefault();
    this.setState({
      mastheadActive: !this.state.mastheadActive,
    });
  }

  render() {
    const mastheadClass = classNames({
      'c-masthead': true,
      'c-masthead--active': this.state.mastheadActive,
    });
    const careerClass = classNames({
      'c-career': true,
      'c-career--active': this.state.mastheadActive,
    });
    return (
      <div className="l-page-content">
        <div className="l-page-container">
          <div className={mastheadClass}>
            <div className="c-masthead__overlay">
              <div className="c-masthead__heading">RoR Career Builder</div>
              <div className="c-masthead__subheading">Online Career Builder for Return of Reckoning</div>
              <div className="c-masthead__cta l-spacing-top--large">
                <button className="pure-button c-button c-button--primary c-button--large" type="button" onClick={this.clickMasthead}>
                  Select career
                </button>
              </div>
              <a className="c-masthead__footer" href="#" onClick={this.clickMasthead}>Hide careers</a>
              <div className={careerClass}>
                <div className="c-career__item c-career__item--left">
                  <div className="c-career__heading l-spacing-bottom">Order</div>
                  
                  <div className="c-career__subheading l-spacing-bottom">Empire</div>
                  <div className="c-career__list">
                    {Object.keys(this.state.careers).map((key) => { return this.renderCareers(key, 'Empire') })}
                  </div>

                  <div className="c-career__subheading l-spacing-bottom">High Elves</div>
                  <div className="c-career__list">
                    {Object.keys(this.state.careers).map((key) => { return this.renderCareers(key, 'High Elf') })}
                  </div>

                  <div className="c-career__subheading l-spacing-bottom">Dwarves</div>
                  <div className="c-career__list">
                    {Object.keys(this.state.careers).map((key) => { return this.renderCareers(key, 'Dwarf') })}
                  </div>

                </div>
                <div className="c-career__item c-career__item--right">
                  <div className="c-career__heading">Destruction</div>
                  
                  <div className="c-career__subheading">Chaos</div>
                  <div className="c-career__list">
                    {Object.keys(this.state.careers).map((key) => { return this.renderCareers(key, 'Chaos') })}
                  </div>

                  <div className="c-career__subheading">Dark Elves</div>
                  <div className="c-career__list">
                    {Object.keys(this.state.careers).map((key) => { return this.renderCareers(key, 'Dark Elf') })}
                  </div>

                  <div className="c-career__subheading">Greenskins</div>
                  <div className="c-career__list">
                    {Object.keys(this.state.careers).map((key) => { return this.renderCareers(key, 'Greenskin') })}
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className="pure-g">
              <div className="pure-u-1-3">
                <p>Latest updates</p>
                <p>RoR Career Builder currently in beta</p>
              </div>
              <div className="pure-u-2-3">
                <p>About RoR Career Builder. Github link. Link to RoR.</p>

              </div>
          </div>
        </div>
      </div>
      
    );
  }
}

export default Home;
