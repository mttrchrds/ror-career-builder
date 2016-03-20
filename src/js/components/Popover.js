import React from 'react';
import classNames from 'classnames';

require('../../scss/Popover.scss');

class Popover extends React.Component {

	constructor(props) {
	  super(props);
	  // 'popoverSpacing' is the distance of the Popover from the parent element. Matches 'popoverSpacing' in Sass
	  this.state = {
	    popoverSpacing: 15,
	  };
	}

	setVerticalCoords(element, alignment) {
		let popoverHeight = element.offsetHeight;
		const parentHeight = element.parentNode.offsetHeight;

		// Reset current inline height values
		element.style.top = 'auto';
		element.style.bottom = 'auto';

		// .popover.top
		if(alignment === 'top') {
			element.style.top = (-popoverHeight - this.state.popoverSpacing) + 'px';
		}

		// .popover.right .popover.left
		if(alignment === 'left' || alignment === 'right') {
			element.style.top = (-popoverHeight/2 + parentHeight/2) + 'px';
		}

		// .popover.bottom
		if(alignment === 'bottom') {
			element.style.bottom = (-popoverHeight - this.state.popoverSpacing) + 'px';
		}	
	}

	// Reset alignment classes on Popover
	removeClasses(element) {
		element.classList.remove('top');
		element.classList.remove('right');
		element.classList.remove('bottom');
		element.classList.remove('left');
	}

	// Set alignment of Popover
	setAlignment(element, position) {
		this.removeClasses(element);
		element.classList.add(position);
		this.setVerticalCoords(element, position);
	};

	// Check if Popover is currently off-screen
	offScreenCheck(element) {
		var popoverCoords = element.getBoundingClientRect();
		var popoverTop = popoverCoords.top;
		var popoverRight = popoverCoords.right;
		var popoverBottom = popoverCoords.bottom;
		var popoverLeft = popoverCoords.left;
		var viewportWidth = window.innerWidth;
		var viewportHeight = window.innerHeight;

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
	};

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
	  				}
	  				// Try right
	  				else if (!offScreenRight) {
	  					this.setAlignment(popover, 'right');	
	  				}
	  				// Try left
	  				else if (!offScreenLeft) {
	  					this.setAlignment(popover, 'left');	
	  				}
	  				// Try bottom
	  				else if (!offScreenBottom) {
	  					this.setAlignment(popover, 'bottom');	
	  				}
	  			}
 			}

 			// Add .fade class at the end to ensure animation happens after display:block
  			popover.classList.add('fade');

 		} else {
 			popover.classList.remove('fade');
 		}
	}

	render() {
		let popoverClass = classNames({
		  'popover': true,
		  'active': this.props.activate,
		});
		return (
			<div className={popoverClass} ref="popover">
				<div className="arrow"></div>
				{this.props.content}
			</div>
		)
	}
}

export default Popover;