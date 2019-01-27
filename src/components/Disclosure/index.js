import React from 'react';
import DisclosureButton from './DisclosureButton';
import DisclosureContent from './DisclosureContent';
import generateId from './../../utils/generateId';

/**
 * A class React component used for adding disclosures according to ARIA best practices: https://www.w3.org/TR/wai-aria-practices-1.1/#disclosure
 */
class Disclosure extends React.Component {

  constructor(props){
    super(props);

    //create property used for instantly setting whether the disclosure is closed
    this.open = false;

    //add 'open' (above) to state as well as whether the DisclosureButton has been removed (hidden) from the user. 'removed' is only used in discolsures that are single-use
    this.state = {
      open:this.open,
      removed:false
    };

    //create references for DisclosureButton and DisclosureContent components for easier access to their methods
    this.buttonRef = React.createRef();
    this.contentRef = React.createRef();

    if(Array.isArray(this.props.children)){
      //there is more than one child within this element

      //determine if there is at least one button in the children using isButton method
      let button = this.props.children.find(this.isButton);
      if(typeof button !== 'undefined'){
        //there is at least one button within children so create a DisclosureButton component using that element
        this.disclosureButton = (
          <DisclosureButton
            ref={this.buttonRef}
            key={generateId('disclosure__button')}
            element={button}
            toggleHandler={this.toggle}
            classButtonToggle={this.props.classButtonToggle}
            classButtonBlur={this.props.classButtonBlur} {...button.props}>{button.props.children}
          </DisclosureButton>
        );
      }
    }

    //bind this component to methods
    this.toggle = this.toggle.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
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
   * Method used to open/close the disclosure based on it's current open state.
   * @param {boolean} open - (optional) boolean identifying what the new state of the button should be
   */
  toggle(open = undefined){
    this.open = (typeof boolean === 'boolean' ? open : !this.open);
    this.contentRef.current.toggleOpen(this.open);
  }

  render(){
    //if there is a disclosure button, render that and the rest of the non-button children within a DisclosureContent component. Otherwise, render only the children passed
    if(this.disclosureButton){
      return(
        <React.Fragment key={generateId('disclosure')}>
          {this.disclosureButton}
          <DisclosureContent ref={this.contentRef} key={generateId('disclosure__content')} className={this.props.classContent} classNameToggle={this.props.classContentToggle} childElements={this.props.children.filter(child => !this.isButton(child),this)} />
        </React.Fragment>
      );
    }
    return (<React.Fragment>{this.props.children}</React.Fragment>);
  }
}

export default Disclosure;