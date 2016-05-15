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
        <div key={key}>
          <Link className="c-career__list__item" to={url}><img src={imgUrl} className="c-title__icon c-title__icon--tiny" />{this.state.careers[key].name}</Link>
        </div>
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
                  <div className="l-row l-row--justify l-row--wrap">
                    <div className="c-career__list">
                      <div className="c-career__subheading l-spacing-bottom">Empire</div>
                      {Object.keys(this.state.careers).map((key) => { return this.renderCareers(key, 'Empire') })}
                    </div>                    
                    <div className="c-career__list">
                      <div className="c-career__subheading l-spacing-bottom">High Elves</div>
                      {Object.keys(this.state.careers).map((key) => { return this.renderCareers(key, 'High Elf') })}
                    </div>
                    <div className="c-career__list">
                      <div className="c-career__subheading l-spacing-bottom">Dwarves</div>
                      {Object.keys(this.state.careers).map((key) => { return this.renderCareers(key, 'Dwarf') })}
                    </div>
                  </div>

                </div>
                <div className="c-career__item c-career__item--right">
                  <div className="c-career__heading l-spacing-bottom">Destruction</div>
                  <div className="l-row l-row--justify l-row--wrap">
                    <div className="c-career__list">
                      <div className="c-career__subheading l-spacing-bottom">Chaos</div>
                      {Object.keys(this.state.careers).map((key) => { return this.renderCareers(key, 'Chaos') })}
                    </div>
                    <div className="c-career__list">
                      <div className="c-career__subheading l-spacing-bottom">Dark Elves</div>
                      {Object.keys(this.state.careers).map((key) => { return this.renderCareers(key, 'Dark Elf') })}
                    </div>
                    <div className="c-career__list">
                      <div className="c-career__subheading l-spacing-bottom">Greenskins</div>
                      {Object.keys(this.state.careers).map((key) => { return this.renderCareers(key, 'Greenskin') })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="pure-g">
            <div className="pure-u-1-3">
              <div className="c-list l-spacing-top--large l-spacing-left">
                <div className="c-list__heading">Latest updates</div>
                <p className="c-list__item">- Currently in beta</p>
              </div>
            </div>
            <div className="pure-u-2-3">
              <div className="l-page-copy l-spacing-top--large">
                <p>Warhammer Online: Age of Reckoning has returned. 
                Resurrected by volunteers on a private server, we now have <a className="l-page-copy__link" href="http://www.returnofreckoning.com" target="blank">Return of Reckoning</a>. 
                Inspired by the great work of these developers comes RoR Career Builder.</p>
                <p>This web app aims to replace and improve upon the great work done by <a className="l-page-copy__link" href="http://waronlinebuilder.org" target="blank">Warhammer Online Career Builder</a> back in 2013.</p>
                <p>Details of updates will appear on this page.</p>
                <p>All code is available on <i className="fa fa-github"></i> <a href="#" className="l-page-copy__link" target="blank">Github</a>. Feel free to fork, contribute, <a href="#" className="l-page-copy__link" target="blank">raise bugs</a> and <a href="#" className="l-page-copy__link" target="blank">make suggestions</a>.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
