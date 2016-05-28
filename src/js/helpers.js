const helpers = {
  arrayContains(array, needle) {
    for (const i in array) {
      if (array[i] === needle) return true;
    }
    return false;
  },
  getJSON(url, success, error) {
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = () => {
      if (xhr.readyState === 4) {
        if (xhr.status === 200) {
          success(JSON.parse(xhr.responseText));
        } else {
          error(xhr.responseText);
        }
      }
    };
    xhr.open('GET', url);
    xhr.send();
  },
  importJSON(career, abilities) {
    const exported = {
      abilities: {},
      coreAbilities: [],
      coreMorales: [],
      coreTactics: [],
      pathACore: [],
      pathACoreOverflow: [],
      pathAOpt: {},
      pathBCore: [],
      pathBCoreOverflow: [],
      pathBOpt: {},
      pathCCore: [],
      pathCCoreOverflow: [],
      pathCOpt: {},
    };

    function getAbilityType(ability) {
      let abilityType = '';
      switch (ability.category) {
        case 'Ability':
          abilityType = 'standard';
          break;
        case 'Morale':
          abilityType = 'morale';
          break;
        case 'CareerTactic':
          abilityType = 'tactic';
          break;
        case 'TomeTactic':
          abilityType = 'tomeTactic';
          break;
        default :
          break;
      }
      return abilityType;
    }

    Object.keys(abilities).map(
      (ability) => {
        const abilityType = getAbilityType(abilities[ability]);
        const pathCoreOverflow = 6;
        abilities[ability].abilityType = abilityType;
        if (abilities[ability].minrank === '') abilities[ability].minrank = 1;
        if (abilities[ability].spec === 'Core Ability') {
          switch (abilityType) {
            case 'standard':
              exported.coreAbilities.push(abilities[ability].id);
              break;
            case 'morale':
              exported.coreMorales.push(abilities[ability].id);
              break;
            case 'tactic':
              exported.coreTactics.push(abilities[ability]);
              break;
            default :
              break;
          }
        } else {
          // Check and populate Mastery path core and optional abilities
          if (this.arrayContains(career.paths.a.coreAbilities, abilities[ability].id)) {
            if (exported.pathACore.length < pathCoreOverflow) {
              exported.pathACore.push(abilities[ability]);  
            } else {
              exported.pathACoreOverflow.push(abilities[ability]);
            }
          }
          if (abilities[ability].id === career.paths.a.optionalAbilities.lvl1) {
            abilities[ability].meterRequirement = 3;
            exported.pathAOpt.lvl1 = abilities[ability];
          }
          if (abilities[ability].id === career.paths.a.optionalAbilities.lvl2) {
            abilities[ability].meterRequirement = 5;
            exported.pathAOpt.lvl2 = abilities[ability];
          }
          if (abilities[ability].id === career.paths.a.optionalAbilities.lvl3) {
            abilities[ability].meterRequirement = 7;
            exported.pathAOpt.lvl3 = abilities[ability];
          }
          if (abilities[ability].id === career.paths.a.optionalAbilities.lvl4) {
            abilities[ability].meterRequirement = 9;
            exported.pathAOpt.lvl4 = abilities[ability];
          }
          if (abilities[ability].id === career.paths.a.optionalAbilities.lvl5) {
            abilities[ability].meterRequirement = 11;
            exported.pathAOpt.lvl5 = abilities[ability];
          }
          if (abilities[ability].id === career.paths.a.optionalAbilities.lvl6) {
            abilities[ability].meterRequirement = 13;
            exported.pathAOpt.lvl6 = abilities[ability];
          }
          if (abilities[ability].id === career.paths.a.optionalAbilities.lvl7) {
            abilities[ability].meterRequirement = 15;
            exported.pathAOpt.lvl7 = abilities[ability];
          }
          if (this.arrayContains(career.paths.b.coreAbilities, abilities[ability].id)) {
            if (exported.pathBCore.length < pathCoreOverflow) {
              exported.pathBCore.push(abilities[ability]);  
            } else {
              exported.pathBCoreOverflow.push(abilities[ability]);
            }
          }
          if (abilities[ability].id === career.paths.b.optionalAbilities.lvl1) {
            abilities[ability].meterRequirement = 3;
            exported.pathBOpt.lvl1 = abilities[ability];
          }
          if (abilities[ability].id === career.paths.b.optionalAbilities.lvl2) {
            abilities[ability].meterRequirement = 5;
            exported.pathBOpt.lvl2 = abilities[ability];
          }
          if (abilities[ability].id === career.paths.b.optionalAbilities.lvl3) {
            abilities[ability].meterRequirement = 7;
            exported.pathBOpt.lvl3 = abilities[ability];
          }
          if (abilities[ability].id === career.paths.b.optionalAbilities.lvl4) {
            abilities[ability].meterRequirement = 9;
            exported.pathBOpt.lvl4 = abilities[ability];
          }
          if (abilities[ability].id === career.paths.b.optionalAbilities.lvl5) {
            abilities[ability].meterRequirement = 11;
            exported.pathBOpt.lvl5 = abilities[ability];
          }
          if (abilities[ability].id === career.paths.b.optionalAbilities.lvl6) {
            abilities[ability].meterRequirement = 13;
            exported.pathBOpt.lvl6 = abilities[ability];
          }
          if (abilities[ability].id === career.paths.b.optionalAbilities.lvl7) {
            abilities[ability].meterRequirement = 15;
            exported.pathBOpt.lvl7 = abilities[ability];
          }
          if (this.arrayContains(career.paths.c.coreAbilities, abilities[ability].id)) {
            if (exported.pathCCore.length < pathCoreOverflow) {
              exported.pathCCore.push(abilities[ability]);  
            } else {
              exported.pathCCoreOverflow.push(abilities[ability]);
            }
          }
          if (abilities[ability].id === career.paths.c.optionalAbilities.lvl1) {
            abilities[ability].meterRequirement = 3;
            exported.pathCOpt.lvl1 = abilities[ability];
          }
          if (abilities[ability].id === career.paths.c.optionalAbilities.lvl2) {
            abilities[ability].meterRequirement = 5;
            exported.pathCOpt.lvl2 = abilities[ability];
          }
          if (abilities[ability].id === career.paths.c.optionalAbilities.lvl3) {
            abilities[ability].meterRequirement = 7;
            exported.pathCOpt.lvl3 = abilities[ability];
          }
          if (abilities[ability].id === career.paths.c.optionalAbilities.lvl4) {
            abilities[ability].meterRequirement = 9;
            exported.pathCOpt.lvl4 = abilities[ability];
          }
          if (abilities[ability].id === career.paths.c.optionalAbilities.lvl5) {
            abilities[ability].meterRequirement = 11;
            exported.pathCOpt.lvl5 = abilities[ability];
          }
          if (abilities[ability].id === career.paths.c.optionalAbilities.lvl6) {
            abilities[ability].meterRequirement = 13;
            exported.pathCOpt.lvl6 = abilities[ability];
          }
          if (abilities[ability].id === career.paths.c.optionalAbilities.lvl7) {
            abilities[ability].meterRequirement = 15;
            exported.pathCOpt.lvl7 = abilities[ability];
          }
        }
        // Create new abilities object using abilityId as a key
        exported.abilities[abilities[ability].id] = abilities[ability];
      }
    );
    return exported;
  },
  /* global googleAnalytics ga:true */
  gaEvent(category, action, label, value) {
    // Sending to Google Analytics
    console.log(category, action, label, value);
    // ga('send', {
    //   hitType: 'event',
    //   eventCategory: category,
    //   eventAction: action,
    //   eventLabel: label,
    //   eventValue: value,
    // });
  },
};

export default helpers;
