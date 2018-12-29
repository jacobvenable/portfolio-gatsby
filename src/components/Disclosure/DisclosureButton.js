import React from 'react';

class DisclosureButton extends React.Component {
  constructor(props){
    super();

    //bind component to methods
    this.handleBlur = this.handleBlur.bind(this);
    this.toggle = this.toggle.bind(this);

    this.buttonRef = React.createRef();
    this.open = true;

    this.state = {
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
    this.open = false;
    this.setState({
      open:false
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
        ${typeof(this.props.classButtonToggle) === 'string' && this.state.open ? this.props.classButtonToggle:''} 
        ${typeof(this.props.classButtonBlur) === 'string' && this.state.removed ? this.props.classButtonBlur:''}
      `}
    >
      {this.props.element.props.children}
    </this.props.element.type>
    );
  }
}

export default DisclosureButton;