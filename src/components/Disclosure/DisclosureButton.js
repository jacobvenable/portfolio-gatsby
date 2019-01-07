import React from 'react';

class DisclosureButton extends React.Component {
  constructor(props){
    super();

    //bind component to methods
    this.handleBlur = this.handleBlur.bind(this);
    this.toggle = this.toggle.bind(this);

    this.buttonRef = React.createRef();
    this.mounted = false;
    this.open = true;

    this.state = {
      mounted:this.mounted,
      open:this.open,
      removed:false
    };
  }

  handleBlur(e){
    if(this.open && typeof(this.props.classButtonBlur) === 'string'){
      this.setState({
        removed:true
      });
    }
  }

  toggle(open = undefined){
    this.open = (typeof(open)==='boolean'?open:!this.open);
    this.setState({
      open:`${this.open}`
    });
    this.props.toggleHandler(this.open);
  }

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