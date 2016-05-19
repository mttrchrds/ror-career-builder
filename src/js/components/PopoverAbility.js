import React from 'react';

class PopoverAbility extends React.Component {

  renderNote(note) {
    if (note) {
      return (
        <p className="c-ability-pop__item c-ability-pop__item--secondary l-popover-spacing-bottom--large"
          dangerouslySetInnerHTML={{ __html: note }} 
        />
      );
    }
    return;
  }

  render() {

    return (
      <div className="c-ability-pop">
        <div className="o-row o-row--justify l-popover-spacing-bottom">
          <p className="c-ability-pop__item c-ability-pop__item--large c-ability-pop__item--primary">
            {this.props.details.name}
          </p>
          <p className="c-ability-pop__item c-ability-pop__item--large c-ability-pop__item--primary c-ability-pop__item--right">
            {this.props.details.type}
          </p>
        </div>
        <div className="o-row o-row--justify l-popover-spacing-bottom c-ability-pop__divider">
          <p className="c-ability-pop__item">{this.props.details.spec}</p>
          <p className="c-ability-pop__item c-ability-pop__item--right">Level {this.props.details.minrank}</p>
        </div>
        <div className="o-row o-row--justify l-popover-spacing-bottom">
          <p className="c-ability-pop__item">{this.props.details.cost}</p>
          <p className="c-ability-pop__item c-ability-pop__item--right">{this.props.details.range}</p>
        </div>
        <div className="o-row o-row--justify l-popover-spacing-bottom">
          <p className="c-ability-pop__item">{this.props.details.incant}</p>
          <p className="c-ability-pop__item c-ability-pop__item--right">{this.props.details.cooldown}</p>
        </div>
        {this.renderNote(this.props.details.note)}
        <p className="c-ability-pop__item c-ability-pop__item--primary"
          dangerouslySetInnerHTML={{ __html: this.props.details.description }}
        />
      </div>
    )
  }
}

export default PopoverAbility;
