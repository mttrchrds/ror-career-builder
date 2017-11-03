import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router';
import css from '../../css/components/Sidebar.css';

const Sidebar = (props) => {
  console.log('careers', props.careers);
  // Convert careers object into an array so we can sort
  let careersArray = [];
  for(let key in props.careers) {
    let tmpObj = {};
    tmpObj.name = props.careers[key].name;
    tmpObj.race = props.careers[key].race;
    tmpObj.faction = props.careers[key].faction;
    tmpObj.shortName = key;
    careersArray.push(tmpObj);
  }
  console.log('careers array before', careersArray);
  // Sort array
  careersArray.sort(function(a,b) {
    console.log('a', a.race);
    console.log('b', b.race);
    return a.race > b.race;
  });
  console.log('careers array after', careersArray);
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
    //<SidebarItem key={key[0]} gaCareerSelected={props.gaCareerSelected} shortName={key[0]} careerName={key[1].name} />
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
