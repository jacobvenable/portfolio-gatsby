import React from 'react';

class AccordionButton extends React.Component {
  constructor(props){
    super(props);

    //bind this component to methods
    this.toggle = this.toggle.bind(this);

    //create a reference to the button element
    this.buttonRef = React.createRef();

    //create properties used for instantly setting whether the component is mounted and if the accordion group is open
    this.mounted = false;
    this.open = true;

    //add 'mounted' and 'open' (above) to state
    this.state = {
      mounted:this.mounted,
      open:this.open
    };
  }

  /**
   * Method used to open/close the accordion based on it's current open state.
   * @param {boolean | object} open - (optional) boolean identifying what the new state of the button should be or event that triggered the toggle
   */
  toggle(open = undefined){
    this.open = (typeof(open)==='boolean'?open:!this.open);
    this.setState({
      open:this.open
    });
    if(typeof open === 'object'){
      //this was triggered via an event so we need to call the toggleHandler, a method of the parent Accordions component that will be used to close any Accordions
      this.props.toggleHandler(this.props.contentKey,this.open);
    }
  }

  /**
   * Built-in React component method used to update some properties and state when the component successfully mounts. This is done to allow the accordions's content to be visible if JS is disabled.
   */
  componentDidMount(){
    this.mounted = true;
    this.open = false;
    this.setState({
      mounted:this.mounted,
      open:this.open
    });
  }

  render(){
    return(
    <this.props.element.type 
      {...this.props.element.props} 
      ref={this.buttonRef}
      onClick={this.toggle}
      aria-controls={this.props.contentKey}
      aria-expanded={this.state.open}
      className={`
        ${this.props.element.props.className} 
        ${typeof(this.props.classButtonToggle) === 'string' && this.state.mounted && this.state.open ? this.props.classButtonToggle:''}
      `}
    >
      {this.props.element.props.children}
    </this.props.element.type>
    );
  }
}

export default AccordionButton;