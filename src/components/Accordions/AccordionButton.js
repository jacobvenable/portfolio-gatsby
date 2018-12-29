import React from 'react';

class AccordionButton extends React.Component {
  constructor(props){
    super();

    //bind component to methods
    this.toggle = this.toggle.bind(this);

    this.buttonRef = React.createRef();
    this.open = true;

    this.state = {
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
      aria-controls={this.props.contentKey}
      aria-expanded={`${this.state.open}`}
      className={`
        ${this.props.element.props.className} 
        ${typeof(this.props.classButtonToggle) === 'string' && this.state.open ? this.props.classButtonToggle:''}
      `}
    >
      {this.props.element.props.children}
    </this.props.element.type>
    );
  }
}

export default AccordionButton;