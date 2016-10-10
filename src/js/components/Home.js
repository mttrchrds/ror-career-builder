import React from 'react';
import h from '../helpers';
import classNames from 'classnames';
import Masthead from './Masthead';
import News from './News';
import css from '../../css/components/Home.css';

class Home extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    const copyClass = classNames({
      [css.copy]: true,
      'marginBottom--large': true,
      'marginTop@mobile': true,
      'marginTop--medium': true,
      marginRight: true,
      'marginLeft@mobile': true,
    });
    const githubUrl = 'https://github.com/mattyrichards/ror-career-builder';
    const githubUrlIssues = `${githubUrl}/issues`;
    return (
      <div className="heightFull">
        <div className={css.wrapper}>
          <div className={css.container}>
            <Masthead
              careers={this.props.careers}
              gaCareerSelected={this.props.gaCareerSelected}
              updateSidebarVisibility={this.props.updateSidebarVisibility}
              updateOverlayVisibility={this.props.updateOverlayVisibility}
            />
            <div className="grid">
              <div className="grid-col-1-3 grid-col-1@mobile">
                <div className="marginTop--medium marginTop@mobile marginLeft--medium marginLeft@mobile marginRight--medium marginRight@mobile marginBottom--medium marginBottom--none@mobile">
                  <News />
                </div>
              </div>
              <div className="grid-col-2-3 grid-col-1@mobile">
                <div className={copyClass}>
                  <p className={css.copyText}>Warhammer Online: Age of Reckoning has returned.
                  Resurrected by volunteers on a private server, we now have <a className={css.copyLink} href="http://www.returnofreckoning.com" target="blank">Return of Reckoning</a>.
                  Inspired by the work of these developers comes RoR Career Builder.</p>
                  <p className={css.copyText}>This web app aims to replace and improve upon the great work done by <a className={css.copyLink} href="http://waronlinebuilder.org" target="blank">Warhammer Online Career Builder</a> back in 2013.</p>
                  <p className={css.copyText}>Details of updates will appear on this page.</p>
                  <p className={css.copyText}>All code is available on <a href={githubUrl} className={css.copyLink} target="blank">Github</a>
                  . Feel free to fork, contribute, <a href={githubUrlIssues} className={css.copyLink} target="blank">raise bugs and make suggestions</a>.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  careers: React.PropTypes.object,
  updateSidebarVisibility: React.PropTypes.func,
  updateOverlayVisibility: React.PropTypes.func,
  gaCareerSelected: React.PropTypes.func,
  clickOverlay: React.PropTypes.func,
};

export default Home;
