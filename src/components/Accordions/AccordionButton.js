import React from 'react';

class AccordionButton extends React.Component {
  constructor(props){
    super();

    //bind component to methods
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

  toggle(open = undefined){
    this.open = (typeof(open)==='boolean'?open:!this.open);
    this.setState({
      open:this.open
    });
    if(typeof open === 'object'){
      //this was triggered via an event
      this.props.toggleHandler(this.props.contentKey,this.open);
    }
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