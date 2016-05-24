import React from 'react';

const renderNote = (note) => {
  if (note) {
    return (
      <p className="c-ability-pop__item c-ability-pop__item--secondary u-margin__bottom u-margin__top"
        dangerouslySetInnerHTML={{ __html: note }} 
      />
    );
  }
  return false;
};

const PopoverAbility = (props) =>
  <div className="c-ability-pop">
    <img src={props.imgSrc} className="c-ability-pop__image" />
    <div className="o-row o-row--justify u-margin__bottom">
      <p className="c-ability-pop__item c-ability-pop__item--large c-ability-pop__item--primary">
        {props.details.name}
      </p>
      <p className="c-ability-pop__item c-ability-pop__item--large c-ability-pop__item--primary c-ability-pop__item--right">
        {props.details.type}
      </p>
    </div>
    <div className="o-row o-row--justify u-margin__bottom--small c-ability-pop__divider">
      <p className="c-ability-pop__item">{props.details.spec}</p>
      <p className="c-ability-pop__item c-ability-pop__item--right">Level {props.details.minrank}</p>
    </div>
    <div className="o-row o-row--justify u-margin__bottom--small">
      <p className="c-ability-pop__item">{props.details.cost}</p>
      <p className="c-ability-pop__item c-ability-pop__item--right">{props.details.range}</p>
    </div>
    <div className="o-row o-row--justify u-margin__bottom">
      <p className="c-ability-pop__item">{props.details.incant}</p>
      <p className="c-ability-pop__item c-ability-pop__item--right">{props.details.cooldown}</p>
    </div>
    {renderNote(props.details.note)}
    <p className="c-ability-pop__item c-ability-pop__item--primary"
      dangerouslySetInnerHTML={{ __html: props.details.description }}
    />
  </div>;

PopoverAbility.propTypes = {
  imgSrc: React.PropTypes.string,
  details: React.PropTypes.object,
};

export default PopoverAbility;
