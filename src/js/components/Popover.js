import React from 'react';
import classNames from 'classnames';

require('../../scss/Popover.scss');

class Popover extends React.Component {

  constructor(props) {
    super(props);
    // 'popoverSpacing' is the distance of the Popover from the parent element.
    // Matches 'popoverSpacing' in Sass. Likewise for 'popoverArrowSize'
    this.state = {
      popoverSpacing: 5,
      popoverArrowSize: 10,
    };
  }

  componentDidMount() {
    // Set parent element to position:relative (popover is absolutely positioned relative to this)
    this.refs.popover.parentNode.style.position = 'relative';
  }

  componentDidUpdate() {
    const popover = this.refs.popover;
    // If popover is activated e.g. hover on parent
    if (this.props.activate) {
      // Test (and store) each alignment to see if Popover will be off-screen
      this.setAlignment(popover, 'top');
      const offScreenTop = this.offScreenCheck(popover);
      this.setAlignment(popover, 'right');
      const offScreenRight = this.offScreenCheck(popover);
      this.setAlignment(popover, 'bottom');
      const offScreenBottom = this.offScreenCheck(popover);
      this.setAlignment(popover, 'left');
      const offScreenLeft = this.offScreenCheck(popover);

      // Set intended alignment of Popover from props
      this.setAlignment(popover, this.props.alignment);

      // If intended alignment is off-screen, try to find an alternative alignment
      if (this.offScreenCheck(popover)) {
        if (offScreenTop && offScreenRight && offScreenBottom && offScreenLeft) {
          // Always offscreen, do nothing
        } else {
          // Try top
          if (!offScreenTop) {
            this.setAlignment(popover, 'top');
          } else if (!offScreenRight) {
            // Try right
            this.setAlignment(popover, 'right');
          } else if (!offScreenLeft) {
            // Try left
            this.setAlignment(popover, 'left');
          } else if (!offScreenBottom) {
            // Try bottom
            this.setAlignment(popover, 'bottom');
          }
        }
      }
      // Add .fade class at the end to ensure animation happens after display:block
      popover.classList.add('c-popover--fade');
    } else {
      popover.classList.remove('c-popover--fade');
    }
  }

  // Set alignment of Popover
  setAlignment(element, position) {
    const positionClassName = `c-popover--${position}`;
    const popoverElement = element;
    this.removeClasses(element);
    popoverElement.classList.add(positionClassName);
    this.setVerticalCoords(element, position);
  }

  setVerticalCoords(element, alignment) {
    const popoverElement = element;
    const popoverHeight = popoverElement.offsetHeight;
    const parentHeight = popoverElement.parentNode.offsetHeight;


    // Reset current inline height values
    popoverElement.style.top = 'auto';
    popoverElement.style.bottom = 'auto';

    // .popover.top
    if (alignment === 'top') {
      popoverElement.style.top = `${- popoverHeight - this.state.popoverArrowSize - this.state.popoverSpacing}px`;
    }

    // .popover.right .popover.left
    if (alignment === 'left' || alignment === 'right') {
      popoverElement.style.top = `${- popoverHeight / 2 + parentHeight / 2}px`;
    }

    // .popover.bottom
    if (alignment === 'bottom') {
      popoverElement.style.bottom = `${- popoverHeight - this.state.popoverArrowSize - this.state.popoverSpacing}px`;
    }
  }

  // Reset alignment classes on Popover
  removeClasses(element) {
    const popoverElement = element;
    popoverElement.classList.remove('c-popover--top');
    popoverElement.classList.remove('c-popover--right');
    popoverElement.classList.remove('c-popover--bottom');
    popoverElement.classList.remove('c-popover--left');
  }

  // Check if Popover is currently off-screen
  offScreenCheck(element) {
    const popoverCoords = element.getBoundingClientRect();
    const popoverTop = popoverCoords.top;
    const popoverRight = popoverCoords.right;
    const popoverBottom = popoverCoords.bottom;
    const popoverLeft = popoverCoords.left;
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;

    let alignmentCheck = false;

    // Try top
    if (popoverTop < 0) {
      alignmentCheck = true;
    }
    // Try right
    if (popoverRight > viewportWidth) {
      alignmentCheck = true;
    }
    // Try bottom
    if (popoverBottom > viewportHeight) {
      alignmentCheck = true;
    }
    // Try left
    if (popoverLeft < 0) {
      alignmentCheck = true;
    }

    return alignmentCheck;
  }

  render() {
    const popoverClass = classNames({
      'c-popover': true,
      'c-popover--active': this.props.activate,
    });
    return (
      <div className={popoverClass} ref="popover">
        <div className="c-popover__arrow"></div>
        {this.props.content}
      </div>
    );
  }
}

Popover.propTypes = {
  content: React.PropTypes.node,
  alignment: React.PropTypes.string,
  activate: React.PropTypes.bool,
};

export default Popover;
