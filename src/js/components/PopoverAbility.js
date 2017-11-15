import React from 'react';
import css from '../../css/components/PopoverAbility.css';

const renderNote = (note) => {
  if (note) {
    return (
      <p className={css.note}
        dangerouslySetInnerHTML={{ __html: note }}
      />
    );
  }
  return false;
};

const PopoverAbility = (props) =>
  <div>
    <img src={props.imgSrc} className={css.image} />
    <div className={css.rowLarge}>
      <p className={css.itemTitle}>
        {props.details.name}
      </p>
      <p className={css.itemTitleRight}>
        {props.details.type}
      </p>
    </div>
    <div className={css.divider}></div>
    <div className={css.row}>
      <p className={css.item}>{props.details.spec}</p>
      <p className={css.itemRight}>Level {props.details.minrank}</p>
    </div>
    <div className={css.row}>
      <p className={css.item}>{props.details.cost}</p>
      <p className={css.itemRight}>{props.details.range}</p>
    </div>
    <div className={css.rowLarge}>
      <p className={css.item}>{props.details.incant}</p>
      <p className={css.itemRight}>{props.details.cooldown}</p>
    </div>
    {renderNote(props.details.note)}
    <p className={css.description}
      dangerouslySetInnerHTML={{ __html: props.details.description }}
    />
  </div>;

export default PopoverAbility;
