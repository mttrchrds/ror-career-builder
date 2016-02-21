import React from 'react';
import h from '../helpers';
import NotFound from './NotFound';
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
      pathAPoints: 0,
      pathBPoints: 0,
      pathCPoints: 0,
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
        pathTotal1: 0,
        pathTotal2: 0,
        pathTotal3: 0
      },
      selectedAbilities: [],
      currentTacticLimit: 0
    }
  }

  componentDidMount() {

    h.getJSON('../../../json/careers.json', (careers) => {
      if (careers[this.props.params.careerName]) {
        let career = careers[this.props.params.careerName];
        let url = `../../../json/abilities/${career.code}.json`;
        h.getJSON(url, (abilities) => {
          let imported = h.importJSON(career, abilities);
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
            pathCOptionalAbilities: imported.pathCOpt
          });
        });
      } else {
        this.setState({
          careers: careers
        });
      }
    }, function(error) {
      console.log(error);
    });

    // $('#levelSelect, #renownSelect')
    //   .dropdown()
    // ;
    // $('.ui.sidebar').first()
    //   .sidebar('attach events', '.changeCareer')
    // ;
    // $('.changeCareer')
    //
    //   .on('click', function(){ console.log('here');})
    // ;
    //




  }

  // Update limit on number of tactic slots
  setCurrentTacticLimit(level) {
    let currentLimit = 0;
    if (level == 40) {
      currentLimit = 4;
    } else if (level >= 30) {
      currentLimit = 3;
    } else if (level >= 20) {
      currentLimit = 2;
    } else if (level >= 10) {
      currentLimit = 1;
    }
    this.setState({
      currentTacticLimit: currentLimit
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
    this.state.userSelections.pathTotal1 = 0;
    this.state.userSelections.pathTotal2 = 0;
    this.state.userSelections.pathTotal3 = 0;
    this.state.selectedAbilities = [];
    this.setState({
      userSelections: this.state.userSelections,
      selectedAbilities: this.state.selectedAbilities
    });
  }

  // Add/remove ability to/from selectedAbilities in state
  setSelectedAbilities(abilityId) {
    let abilityIndex = this.state.selectedAbilities.indexOf(abilityId);
    if (abilityIndex == -1) {
      // If ability isn't in array then add it
      this.state.selectedAbilities.push(abilityId);
    } else {
      // remove it from array
      this.state.selectedAbilities.splice(abilityIndex, 1);
    }
    this.setState({
      selectedAbilities: this.state.selectedAbilities
    });
  }

  // Update tactic selection
  setUserSelectionTactic(abilityId) {
    let abilityIndex = this.state.userSelections.tactics.indexOf(abilityId);
    if (abilityIndex == -1) {
      // If ability isn't in array then add it
      this.state.userSelections.tactics.push(abilityId);
    } else {
      // remove it from array
      this.state.userSelections.tactics.splice(abilityIndex, 1);
    }
    this.setState({
      userSelections: this.state.userSelections
    });
  }

  // Update morale selection
  setUserSelectionMorale(rank, abilityId) {
    let moraleName = 'morale' + rank;
    this.state.userSelections[moraleName] = abilityId;
    this.setState({
      userSelections: this.state.userSelections
    });
  }

  // Calculate mastery points available based on char level and renown level
  setMasteryPoints(level, renown) {
    if (Number(level) > 10) {
      let points = level - 10;
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
        pathCMeter: 0
      });
    }
  }

  updateMasteryPoints(points) {
    this.setState({ masteryPoints: points });
  }

  updatePathMeter(masteryPath, points) {
    switch (masteryPath) {
      case "a":
        this.setState({ pathAMeter: points });
        break;
      case "b":
        this.setState({ pathBMeter: points });
        break;
      case "c":
        this.setState({ pathCMeter: points });
        break;
    }
  }

  updateLevel(level) {
    this.setState({ currentLevel: level });
  }

  updateRenown(renown) {
    this.setState({ currentRenown: renown });
  }

  render() {
    if (Object.keys(this.state.career).length) {
      return (
        <div>
          <Sidebar careers={this.state.careers} />
          <div className="wrapper pusher">
            <div className="ui equal width grid">
              <div className="row">
                <div className="column">
                  <div className="ui segment secondary">

                    <Breadcrumb career={this.state.career} />

                    <div className="ui grid">
                      <div className="row">
                        <div className="sixteen wide column">

                          <BarXp currentLevel={this.state.currentLevel} />

                        </div>
                        <div className="six wide column">

                          <BarRenown currentRenown={this.state.currentRenown} />

                        </div>
                      </div>
                      <div className="row">
                        <div className="four wide column">

                          <CareerTitle careerShort={this.state.careerShort}
                            career={this.state.career} />

                        </div>
                        <div className="twelve wide column">
                          <div className="ui grid">
                            <div className="row">
                              <div className="two wide column">

                                <SelectLevel
                                  updateLevel={this.updateLevel.bind(this)}
                                  currentLevel={this.state.currentLevel}
                                  masteryPoints={this.state.masteryPoints}
                                  setMasteryPoints={this.setMasteryPoints.bind(this)}
                                  currentRenown={this.state.currentRenown}
                                  setCurrentTacticLimit={this.setCurrentTacticLimit.bind(this)}
                                  resetSelections={this.resetSelections.bind(this)} />

                              </div>
                              <div className="thirteen wide column">

                                <SelectRenown
                                  currentLevel={this.state.currentLevel}
                                  updateRenown={this.updateRenown.bind(this)}
                                  setMasteryPoints={this.setMasteryPoints.bind(this)} />

                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="row">
                        <div className="seven wide column">
                          <div className="ui segment">

                              <CoreAbilities currentLevel={this.state.currentLevel} abilities={this.state.coreAbilities}
                                setSelectedAbilities={this.setSelectedAbilities.bind(this)}
                                selectedAbilities={this.state.selectedAbilities} />

                          </div>
                          <div className="ui segment">

                              <CoreMorales currentLevel={this.state.currentLevel}
                                morales={this.state.coreMorales}
                                setUserSelectionMorale={this.setUserSelectionMorale.bind(this)}
                                userSelections={this.state.userSelections}
                                setSelectedAbilities={this.setSelectedAbilities.bind(this)}
                                selectedAbilities={this.state.selectedAbilities}
                                updateMasteryPoints={this.updateMasteryPoints.bind(this)}
                                masteryPoints={this.state.masteryPoints} />

                          </div>
                          <div className="ui segment">

                              <CoreTactics currentLevel={this.state.currentLevel} tactics={this.state.coreTactics}
                                setSelectedAbilities={this.setSelectedAbilities.bind(this)}
                                selectedAbilities={this.state.selectedAbilities}
                                currentTacticLimit={this.state.currentTacticLimit}
                                setUserSelectionTactic={this.setUserSelectionTactic.bind(this)}
                                userSelections={this.state.userSelections} />

                          </div>
                        </div>
                        <div className="nine wide column">
                          <div className="ui segment">

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
                              />

                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

            <button className="ui button blue basic changeCareer">
              <i className="users icon"></i>
              Change career
            </button>
        </div>
      )
    }
    return <h1>Loading...</h1>
  }
}

export default Career;
