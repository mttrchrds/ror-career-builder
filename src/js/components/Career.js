import React from 'react';
import h from '../helpers';
import Mastery from './Mastery';
import CoreAbilities from './CoreAbilities';
import CoreMorales from './CoreMorales';
import CoreTactics from './CoreTactics';
import Sidebar from './Sidebar';
import CareerTitle from './CareerTitle';
import BarXp from './BarXp';
import BarRenown from './BarRenown';
import Breadcrumb from './Breadcrumb';
import SelectLevel from './SelectLevel';
import SelectRenown from './SelectRenown';
import ActionButtons from './ActionButtons';
import Modal from './Modal';
import Overlay from './Overlay';
import Loading from './Loading';
import classNames from 'classnames';
import css from '../../css/components/Career.css';

class Career extends React.Component {

  constructor() {
    super();
  }

  componentWillReceiveProps() {

  }

  componentDidMount() {
    this.props.loadCareer(this.props.params.careerName);
  }

  render() {
    if (this.props.careerLoading) {
      return (
        <div className={css.loadingContainer}>
          <Loading />
        </div>
      );
    }
    return (
      <div>Loaded</div>
    );
  }
}

Career.propTypes = {
  careerLoading: React.PropTypes.bool,
  loadCareer: React.PropTypes.func,
  career: React.PropTypes.object,
  careerSlug: React.PropTypes.string,
  abilities: React.PropTypes.object,
  coreAbilities: React.PropTypes.array,
  coreMorales: React.PropTypes.array,
  coreTactics: React.PropTypes.array,
  pathACoreAbilities: React.PropTypes.array,
  pathACoreOverflow: React.PropTypes.array,
  pathAOptionalAbilities: React.PropTypes.object,
  pathBCoreAbilities: React.PropTypes.array,
  pathBCoreOverflow: React.PropTypes.array,
  pathBOptionalAbilities: React.PropTypes.object,
  pathCCoreAbilities: React.PropTypes.array,
  pathCCoreOverflow: React.PropTypes.array,
  pathCOptionalAbilities: React.PropTypes.object,
};

export default Career;
