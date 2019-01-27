import React from 'react';

/**
 * A class React sub-component of the Disclosure component used as a single disclosure group's button.
 */
class DisclosureButton extends React.Component {
  constructor(props){
    super(props);

    //create properties used for instantly setting whether the component is mounted and if the disclosure group is open
    this.mounted = false;
    this.open = true;

    //add 'mounted' and 'open' (above) to state as well as whether the DisclosureButton has been removed (hidden) from the user. 'removed' is only used in disclosures that are single-use
    this.state = {
      mounted:this.mounted,
      open:this.open,
      removed:false
    };

    //bind this component to methods
    this.handleBlur = this.handleBlur.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  /**
   * Method used to remove the button (hide) from the user if the button has a classButtonBlur property (a class that should be applied to the button on blur indicating the disclosure is singlue-use)
   * @param {object} e - the blur event that triggered the method
   */
  handleBlur(e){
    if(this.open && typeof(this.props.classButtonBlur) === 'string'){
      this.setState({
        removed:true
      });
    }
  }

  /**
   * Method used to open/close the disclosure based on it's current open state.
   * @param {boolean} open - (optional) boolean identifying what the new state of the button
   */
  toggle(open = undefined){
    this.open = (typeof(open)==='boolean'?open:!this.open);
    this.setState({
      open:`${this.open}`
    });
    //call the toggleHandler, a method belonging to the parent Disclosure component, passing the updated 'open' property
    this.props.toggleHandler(this.open);
  }

  /**
   * Built-in React component method used to update some properties and state when the Disclosure successfully mounts. This is done to allow the disclosure's content to be visible if JS is disabled.
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
      onClick={this.toggle} 
      onBlur={this.handleBlur} 
      className={`
        ${this.props.element.props.className} 
        ${typeof(this.props.classButtonToggle) === 'string' && this.state.mounted && this.state.open ? this.props.classButtonToggle:''} 
        ${typeof(this.props.classButtonBlur) === 'string' && this.state.removed ? this.props.classButtonBlur:''}
      `}
    >
      {this.props.element.props.children}
    </this.props.element.type>
    );
  }
}

export default DisclosureButton;