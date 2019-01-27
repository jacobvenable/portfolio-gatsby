import React from 'react';
import AccordionButton from './AccordionButton';
import AccordionContent from './AccordionContent';
import generateId from './../../utils/generateId';

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

      //loop through each child and store each element that is identified as a button using the isButton() method
      let containsButton = accordionsChildren.some(this.isButton);

      if(containsButton){
        //there is at least one button within the accordion children
        while(accordionsChildren.length > 0){
          //loop through each child

          //grab the first button and store it's position
          let accordionButton = accordionsChildren.find(this.isButton);
          let buttonIndex = accordionsChildren.findIndex(this.isButton);

          //remove the button from the children
          accordionsChildren = accordionsChildren.slice(buttonIndex+1);
          //store all accordion children up to the next button or the rest of the children if there are no more buttons in variable
          let accordionChildren = accordionsChildren.slice(
            0,accordionsChildren.findIndex(this.isButton) >= 0 ? accordionsChildren.findIndex(this.isButton) : accordionsChildren.length
          )
          //remove the stored accordion children from the array
          accordionsChildren = accordionsChildren.slice(accordionChildren.length);

          //at this point we should have identified an accordion group's button and the content it will show/hide
          if(accordionButton && accordionChildren.length > 0){
            //generate a key for the content since we are using arrays. See https://reactjs.org/docs/lists-and-keys.html#keys for more info
            let contentKey = generateId('accordions__content');
            //create a reference to the AccordionContent sub-component and create the sub-component
            let contentRef = React.createRef();
            let content = <AccordionContent key={contentKey} id={contentKey} ref={contentRef} childElements={accordionChildren} className={this.props.classContent} classNameToggle={this.props.classContentToggle}/>;

            //create a reference to the AccordionButton sub-component and create the sub-component
            let buttonRef = React.createRef();
            let button = <AccordionButton key={generateId('accordions__button')} ref={buttonRef} contentKey={contentKey} element={accordionButton} contentElement={contentRef} toggleHandler={this.toggle} classButtonToggle={this.props.classButtonToggle} {...accordionButton.props}>{accordionButton.props.children}</AccordionButton>;

            //store the current AccordionButton and AccordionContent sub-components in within the accordion groups array
            this.accordionGroups.push(button,content);

            //store the references to each of the above subcomponents the references array
            this.accordionGroupRefs.push({key:contentKey,buttonRef:buttonRef,contentRef:contentRef});
          }
        }
      }
    }
  }

  /**
   * Method used to determine if a passed element is a button. A button could be a <button> element or any element that has the attribute-value pair `role="button"`.
   * @param {object} element - the element to be identified as a button
   * @return {boolean} identifying if the element is a button (true) or not (false)
   */
  isButton(element){
    return (element.type === 'button' || (typeof element.props.role === 'string' && element.props.role === 'button'));
  }

  /**
   * Method used to open/close the accordion based on it's current open state. If it is not the Accordion being opened and is currently opened, it will be closed
   * @param {string} contentKey - the content key of the accordion content that should be shown/hiddne
   * @param {boolean} open - (optional) boolean identifying what the new state of the button should be
   */
  toggle(contentKey,open){
    //open/close each button and content that match the passed content key
    this.accordionGroupRefs.forEach((group)=>{
      group.buttonRef.current.toggle(group.key===contentKey?open:false);
      group.contentRef.current.toggleOpen(group.key===contentKey?open:false);
    });
  }

  render(){
    if(this.accordionGroups.length > 0){
      return(
        <React.Fragment key={generateId('accordions')}>
          {this.accordionGroups}
        </React.Fragment>
      );
    }
    return (<React.Fragment>{this.props.children}</React.Fragment>);
  }
}

export default Accordions;