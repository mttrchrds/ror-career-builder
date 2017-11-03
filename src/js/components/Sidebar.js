import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import css from '../../css/components/Sidebar.css';

const Sidebar = (props) => {
  
  let careersArray = [];
  let dwarfArray = [];
  let empireArray = [];
  let highElfArray = [];
  let chaosArray = [];
  let greenskinArray = [];
  let darkElfArray = [];

  // Convert careers object into separate arrays for each race
  for(let key in props.careers) {
    let tmpObj = {};
    tmpObj.name = props.careers[key].name;
    tmpObj.race = props.careers[key].race;
    tmpObj.faction = props.careers[key].faction;
    tmpObj.shortName = key;
    switch (tmpObj.race) {
      case 'Dwarf':
        dwarfArray.push(tmpObj);
        break;
      case 'High Elf':
        highElfArray.push(tmpObj);
        break;
      case 'Empire':
        empireArray.push(tmpObj);
        break;
      case 'Greenskin':
        greenskinArray.push(tmpObj);
        break;
      case 'Chaos':
        chaosArray.push(tmpObj);
        break;
      case 'Dark Elf':
        darkElfArray.push(tmpObj);
        break;
    }
  }
  
  function compareShortName(a,b) {
    if (a.shortName < b.shortName)
      return -1;
    if (a.shortName > b.shortName)
      return 1;
    return 0;
  }
  
  // Sort arrays alphabetically
  dwarfArray.sort(compareShortName);
  highElfArray.sort(compareShortName);
  empireArray.sort(compareShortName);
  greenskinArray.sort(compareShortName);
  chaosArray.sort(compareShortName);
  darkElfArray.sort(compareShortName);
  
  // Join arrays into single beast
  careersArray = empireArray.concat(dwarfArray, highElfArray, chaosArray, greenskinArray, darkElfArray);

  const renderItem = (obj) => {
    const clickItem = () => {
      props.gaCareerSelected(obj.shortName);
    };
    const url = `/career/${obj.shortName}`;
    const imgUrl = `/images/icons/${obj.shortName}.png`;
    return (
      <Link key={obj.shortName} className={css.item} to={url} onClick={clickItem}>
        <img src={imgUrl} className={css.icon} />{obj.name}
      </Link>
    );
  }

  const sidebarClass = classNames({
    [css.container]: !props.sidebar.visible,
    [css.containerActive]: props.sidebar.visible,
  });

  return (
    <div className={sidebarClass}>
      <div className={css.content}>
        {careersArray.map(renderItem)}
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  careers: React.PropTypes.object,
  sidebar: React.PropTypes.object,
  gaCareerSelected: React.PropTypes.func,
};

export default Sidebar;
