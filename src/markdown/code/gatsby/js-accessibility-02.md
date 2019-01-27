```javascript
import React from 'react';

/**
 * A class React component used for adding a group of accordions according to ARIA best practices: https://www.w3.org/TR/wai-aria-practices-1.1/#accordion
 */
class Accordions extends React.Component {

	constructor(props){
		super(props);

		//bind component to methods
		this.toggle = this.toggle.bind(this);

		//create empty arrays to store individual accordion groups (button and content) and references to those groups
		this.accordionGroups = [];
		this.accordionGroupRefs = [];

		if(Array.isArray(this.props.children)){
			//there is more than one child within this element

			//create separate array of children that we will manipulate to create the accordion groups
			let accordionsChildren = this.props.children;

			//determine if any children are buttons
			let containsButton = accordionsChildren.some(this.isButton);

			if(containsButton){
				//there is at least one button within the accordion children
				while(accordionsChildren.length > 0){
					//loop through each child

					/*
						1. identify the position of the next button
						2. store all the following children ending at the next button or the end of the children array.
						3. add references to the button and panel
						4. add button and panel to the accordionGroups array
						5. store references in references array
						6. remove the button and children elements from the array
						7. repeat
					*/
				}
			}
		}
	}
}
export default Accordions;
```