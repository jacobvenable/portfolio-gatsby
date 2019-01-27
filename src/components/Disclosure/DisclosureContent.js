import React from 'react';
import generateId from './../../utils/generateId';
import scroll from './../../utils/scroll';

/**
 * A class React sub-component of the Disclosure component used as a single disclosure group's content container. This is the element that is opened/closed depending on the state of the disclosure.
 */
class DisclosureContent extends React.Component {
  constructor(props){
    super(props);

    //bind this component to methods
    this.toggleOpen = this.toggleOpen.bind(this);
    this.toggleHeight = this.toggleHeight.bind(this);

    //reference for the container element for retrieving the element's properties
    this.containerRef = React.createRef();

    //property used to set the max-height of the container and give it an initial value that doesn't affect the element
    this.contentHeight = 'none';

    //property for instantly updating whether the container is open/closed
    this.open = false;

    //add 'open' and 'contentHeight' (above) to state as well as whether the DisclosureButton has been removed (hidden) from the user. 'removed' is only used in disclosures that are single-use
    this.state = {
      open:this.open,
      contentMaxHeight:this.contentHeight,
      removed:false
    };
  }

  /**
   * Method used to handle a CSS transition event on the container. This method will only accept a transition of the 'max-height' CSS property.
   */
  handleTransition(e){
    if(typeof(e.propertyName) === 'string' && e.propertyName === 'max-height'){
      //the transition was a 'max-height' transition

      //scroll to the container element using the scroll utility
      scroll(this.containerRef.current);
    }
  }

  /**
   * Method used to open/close the disclosure content based on it's current open state or a passed open parameter.
   * @param {boolean} open - (optional) boolean identifying what the new state of the content should be
   */
  toggleOpen(open = undefined){
    this.open = (typeof(open)==='boolean'?open:!this.open);
    this.setState({
      open:this.open
    });
  }

  /**
   * Method used to set the max-height of content depending on if the content is open/closed. If it is open, it is set to it's calculated height. Otherwise, it is set to 0.
   */
  toggleHeight(){
    this.setState({
      contentMaxHeight:`${this.open?this.contentHeight:'0px'}`
    });
  }

  /**
   * Built-in React component method used to update some properties and state when the component successfully mounts. This is done to allow the disclosure's content to be visible if JS is disabled and hidden otherwise
   */
  componentDidMount(){
    this.contentHeight = (typeof(this.containerRef.current.offsetHeight) === 'number' ? `${this.containerRef.current.offsetHeight.toString()}px` : 'auto');
    this.open = false;
    this.setState({
      contentMaxHeight:'0px'
    });
  }

  /**
   * Built-in React component method used to update the height of the container if the 'open' state updated
   */
  componentDidUpdate(prevProps,prevState){
    if(prevState.open !== this.state.open){
      this.toggleHeight();
    }
  }

  render(){
    return(
    <div 
      ref={this.containerRef} 
      key={generateId('disclosureContent_container')} 
      className={`
        ${this.props.className} 
        ${this.state.open?this.props.classNameToggle:''}
      `}
      style={{
        maxHeight:this.state.contentMaxHeight
      }}
      onTransitionEnd={e => this.handleTransition(e)}
    >
      {this.props.childElements}
    </div>
    );
  }
}

export default DisclosureContent;