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

require('../../scss/Career.scss');

class Career extends React.Component {

  constructor() {
    super();
    this.state = {
      careers: {},
      career: {},
      abilities: {},
      coreAbilities: {},
      coreMorales: {},
      coreTactics: {},
      pathACoreAbilities: {},
      pathAOptionalAbilities: {},
      pathBCoreAbilities: {},
      pathBOptionalAbilities: {},
      pathCCoreAbilities: {},
      pathCOptionalAbilities: {},
      currentLevel: 1,
      currentRenown: 10,
      masteryPoints: 0,
      pathAMeter: 0,
      pathBMeter: 0,
      pathCMeter: 0,
      userSelections: {
        morale1: 0,
        morale2: 0,
        morale3: 0,
        morale4: 0,
        tactics: [],
        masteryAbilities: [],
      },
      selectedAbilities: [],
      currentTacticLimit: 0,
    };
  }

  componentDidMount() {
    h.getJSON('/json/careers.json', (careers) => {
      if (careers[this.props.params.careerName]) {
        const career = careers[this.props.params.careerName];
        const url = `/json/abilities/${career.code}.json`;
        h.getJSON(url, (abilities) => {
          const imported = h.importJSON(career, abilities);
          this.setState({
            careers: careers,
            careerShort: this.props.params.careerName,
            career: career,
            abilities: abilities,
            coreAbilities: imported.coreAbilities,
            coreMorales: imported.coreMorales,
            coreTactics: imported.coreTactics,
            pathACoreAbilities: imported.pathACore,
            pathAOptionalAbilities: imported.pathAOpt,
            pathBCoreAbilities: imported.pathBCore,
            pathBOptionalAbilities: imported.pathBOpt,
            pathCCoreAbilities: imported.pathCCore,
            pathCOptionalAbilities: imported.pathCOpt,
          });
        });
      } else {
        this.setState({
          careers: careers,
        });
      }
      // Check if this is a saved Career URL and update State accordingly
      if (this.props.params.careerSaved == 'saved') {
        let { query } = this.props.location;
        this.setSavedCareer(query);
      }
    }, function (error) {
      console.log(error);
    });

  }

  setSavedCareer(query) {
    if (query.currentLevel) {
      this.setState({
        currentLevel: Number(query.currentLevel),
      });
    }
    if (query.currentRenown) {
      this.setState({
        currentRenown: Number(query.currentRenown),
      });
    }
    if (query.currentTacticLimit) {
      this.setState({
        currentTacticLimit: Number(query.currentTacticLimit),
      });
    }
    if (query.masteryPoints) {
      this.setState({
        masteryPoints: Number(query.masteryPoints),
      });
    }
    if (query.pathAMeter) {
      this.setState({
        pathAMeter: Number(query.pathAMeter),
      });
    }
    if (query.pathBMeter) {
      this.setState({
        pathBMeter: Number(query.pathBMeter),
      });
    }
    if (query.pathCMeter) {
      this.setState({
        pathCMeter: Number(query.pathCMeter),
      });
    }
    //URL to test with:
    //http://localhost:3000/career/ironbreaker/saved?currentLevel=31&currentRenown=50&currentTacticLimit=3&masteryPoints=5&pathAMeter=5&pathBMeter=5&pathCMeter=0&selectedAbilities=3755,3756,3759,3740,3753,3764,3765,3772&masteryAbilities=3765,3772&morale1=3755&morale2=3756&morale3=3759&tactics=3740,3753,3764
    if (query.selectedAbilities) {
      query.selectedAbilities.split(',').forEach((abilityId) => {
        this.state.selectedAbilities.push(Number(abilityId));
      });
    }
    if (query.masteryAbilities) {
      query.masteryAbilities.split(',').forEach((abilityId) => {
        this.state.userSelections.masteryAbilities.push(Number(abilityId));
      });
    }
    if (query.morale1) {
      this.state.userSelections.morale1 = Number(query.morale1);
    }
    if (query.morale2) {
      this.state.userSelections.morale2 = Number(query.morale2);
    }
    if (query.morale3) {
      this.state.userSelections.morale3 = Number(query.morale3);
    }
    if (query.morale4) {
      this.state.userSelections.morale4 = Number(query.morale4);
    }
    if (query.tactics) {
      query.tactics.split(',').forEach((abilityId) => {
        this.state.userSelections.tactics.push(Number(abilityId));
      });
    }
    this.setState({
      userSelections: this.state.userSelections,
      selectedAbilities: this.state.selectedAbilities,
    });
  }

  // Update limit on number of tactic slots
  setCurrentTacticLimit(level) {
    let currentLimit = 0;
    if (Number(level) === 40) {
      currentLimit = 4;
    } else if (Number(level) >= 30) {
      currentLimit = 3;
    } else if (Number(level) >= 20) {
      currentLimit = 2;
    } else if (Number(level) >= 10) {
      currentLimit = 1;
    }
    this.setState({
      currentTacticLimit: currentLimit,
    });
  }

  // Reset career to initial state
  resetCareer() {
    this.setState({
      currentLevel: 1,
      currentRenown: 10,
      masteryPoints: 0,
      pathAMeter: 0,
      pathBMeter: 0,
      pathCMeter: 0,
      userSelections: {
        morale1: 0,
        morale2: 0,
        morale3: 0,
        morale4: 0,
        tactics: [],
        masteryAbilities: [],
      },
      selectedAbilities: [],
      currentTacticLimit: 0,
    });
  }

  // Reset all current selections
  resetSelections() {
    this.state.userSelections.morale1 = 0;
    this.state.userSelections.morale2 = 0;
    this.state.userSelections.morale3 = 0;
    this.state.userSelections.morale4 = 0;
    this.state.userSelections.tactics = [];
    this.state.userSelections.masteryAbilities = [];
    this.state.selectedAbilities = [];
    this.setState({
      userSelections: this.state.userSelections,
      selectedAbilities: this.state.selectedAbilities,
    });
  }

  // Add/remove ability to/from selectedAbilities in state
  setSelectedAbilities(abilityId) {
    const abilityIndex = this.state.selectedAbilities.indexOf(abilityId);
    if (abilityIndex === -1) {
      // If ability isn't in array then add it
      this.state.selectedAbilities.push(abilityId);
    } else {
      // remove it from array
      this.state.selectedAbilities.splice(abilityIndex, 1);
    }
    this.setState({
      selectedAbilities: this.state.selectedAbilities,
    });
  }

  // Update Mastery ability selection
  setUserSelectionMasteryAbilities(abilityId) {
    const abilityIndex = this.state.userSelections.masteryAbilities.indexOf(abilityId);
    if (abilityIndex === -1) {
      // If ability isn't in array then add it
      this.state.userSelections.masteryAbilities.push(abilityId);
    } else {
      // remove it from array
      this.state.userSelections.masteryAbilities.splice(abilityIndex, 1);
    }
    this.setState({
      userSelections: this.state.userSelections,
    });
  }

  // Update tactic selection
  setUserSelectionTactic(abilityId) {
    const abilityIndex = this.state.userSelections.tactics.indexOf(abilityId);
    if (abilityIndex === -1) {
      // If ability isn't in array then add it
      this.state.userSelections.tactics.push(abilityId);
    } else {
      // remove it from array
      this.state.userSelections.tactics.splice(abilityIndex, 1);
    }
    this.setState({
      userSelections: this.state.userSelections,
    });
  }

  // Update morale selection
  setUserSelectionMorale(rank, abilityId) {
    const moraleName = 'morale' + rank;
    this.state.userSelections[moraleName] = abilityId;
    this.setState({
      userSelections: this.state.userSelections,
    });
  }

  // Calculate mastery points available based on char level and renown level
  setMasteryPoints(level, renown) {
    if (Number(level) > 10) {
      let points = 0;
      if (Number(level) > 20) {
        points = level - 15;
      } else {
        if (Number(level) > 18) {
          points = 5;
        } else if (Number(level) > 16) {
          points = 4;
        } else if (Number(level) > 14) {
          points = 3;
        } else if (Number(level) > 12) {
          points = 2;
        } else {
          points = 1;
        }
      }
      switch (Number(renown)) {
        case 40:
          points = points + 1;
          break;
        case 50:
          points = points + 2;
          break;
        case 60:
          points = points + 3;
          break;
        case 70:
          points = points + 4;
          break;
        default:
          break;
      }
      // Resetting mastery points when level changes
      this.setState({
        masteryPoints: points,
        pathAMeter: 0,
        pathBMeter: 0,
        pathCMeter: 0,
      });
    }
  }

  updateMasteryPoints(points) {
    this.setState({ masteryPoints: points });
  }

  updatePathMeter(masteryPath, points) {
    console.log('DEBUG: updatePathMeter', masteryPath, points);
    switch (masteryPath) {
      case 'a':
        this.setState({ pathAMeter: points });
        break;
      case 'b':
        this.setState({ pathBMeter: points });
        break;
      case 'c':
        this.setState({ pathCMeter: points });
        break;
    }
  }

  updateLevel(level) {
    this.setState({ currentLevel: Number(level) });
  }

  updateRenown(renown) {
    this.setState({ currentRenown: Number(renown) });
  }

  render() {
    if (Object.keys(this.state.career).length) {
      return (
        <div>
          <Sidebar careers={this.state.careers} />

          <div className="l-wrapper l-box l-box--inverse">
            
            <Breadcrumb career={this.state.career} />

            <BarXp currentLevel={this.state.currentLevel} />

            <BarRenown currentRenown={this.state.currentRenown} />

            <div className="l-spacing-bottom">
              <div className="pure-g">
                <div className="pure-u-8-24">

                  <CareerTitle careerShort={this.state.careerShort}
                    career={this.state.career} />

                </div>
                <div className="pure-u-3-24">

                  <SelectLevel
                    updateLevel={this.updateLevel.bind(this)}
                    currentLevel={this.state.currentLevel}
                    masteryPoints={this.state.masteryPoints}
                    setMasteryPoints={this.setMasteryPoints.bind(this)}
                    currentRenown={this.state.currentRenown}
                    setCurrentTacticLimit={this.setCurrentTacticLimit.bind(this)}
                    resetSelections={this.resetSelections.bind(this)} />

                </div>
                <div className="pure-u-13-24">

                  <SelectRenown
                    currentLevel={this.state.currentLevel}
                    currentRenown={this.state.currentRenown}
                    updateRenown={this.updateRenown.bind(this)}
                    setMasteryPoints={this.setMasteryPoints.bind(this)}
                    resetSelections={this.resetSelections.bind(this)} />

                </div>
              </div>
            </div>

            <div className="pure-g">
              <div className="pure-u-10-24">

                <CoreAbilities currentLevel={this.state.currentLevel} abilities={this.state.coreAbilities}
                  setSelectedAbilities={this.setSelectedAbilities.bind(this)}
                  selectedAbilities={this.state.selectedAbilities} />

                <CoreMorales currentLevel={this.state.currentLevel}
                  morales={this.state.coreMorales}
                  setUserSelectionMorale={this.setUserSelectionMorale.bind(this)}
                  userSelections={this.state.userSelections}
                  setSelectedAbilities={this.setSelectedAbilities.bind(this)}
                  selectedAbilities={this.state.selectedAbilities}
                  updateMasteryPoints={this.updateMasteryPoints.bind(this)}
                  masteryPoints={this.state.masteryPoints} />

                <CoreTactics currentLevel={this.state.currentLevel} tactics={this.state.coreTactics}
                  setSelectedAbilities={this.setSelectedAbilities.bind(this)}
                  selectedAbilities={this.state.selectedAbilities}
                  currentTacticLimit={this.state.currentTacticLimit}
                  setUserSelectionTactic={this.setUserSelectionTactic.bind(this)}
                  userSelections={this.state.userSelections} />

              </div>
              <div className="pure-u-14-24">

                <Mastery
                  career={this.state.career}
                  currentLevel={this.state.currentLevel}
                  pathACoreAbilities={this.state.pathACoreAbilities}
                  pathAOptionalAbilities={this.state.pathAOptionalAbilities}
                  pathBCoreAbilities={this.state.pathBCoreAbilities}
                  pathBOptionalAbilities={this.state.pathBOptionalAbilities}
                  pathCCoreAbilities={this.state.pathCCoreAbilities}
                  pathCOptionalAbilities={this.state.pathCOptionalAbilities}
                  masteryPoints={this.state.masteryPoints}
                  pathAPoints={this.state.pathAPoints}
                  pathBPoints={this.state.pathBPoints}
                  pathCPoints={this.state.pathCPoints}
                  pathAMeter={this.state.pathAMeter}
                  pathBMeter={this.state.pathBMeter}
                  pathCMeter={this.state.pathCMeter}
                  updatePathMeter={this.updatePathMeter.bind(this)}
                  updateMasteryPoints={this.updateMasteryPoints.bind(this)}
                  setUserSelectionMorale={this.setUserSelectionMorale.bind(this)}
                  userSelections={this.state.userSelections}
                  setSelectedAbilities={this.setSelectedAbilities.bind(this)}
                  selectedAbilities={this.state.selectedAbilities}
                  currentTacticLimit={this.state.currentTacticLimit}
                  setUserSelectionTactic={this.setUserSelectionTactic.bind(this)}
                  setUserSelectionMasteryAbilities={this.setUserSelectionMasteryAbilities.bind(this)}
                  />

                <ActionButtons resetCareer={this.resetCareer.bind(this)} />

              </div>
            </div>
          </div>
        </div>
      );
    }
    return <h1>Loading...</h1>;
  }
}

export default Career;
