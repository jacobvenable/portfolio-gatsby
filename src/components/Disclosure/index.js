import React from 'react';
// import Link from 'gatsby-link';
// import Img from 'gatsby-image';
import DisclosureButton from './DisclosureButton';
import DisclosureContent from './DisclosureContent';
import generateId from './../../utils/generateId';

class Disclosure extends React.Component {

  constructor(props){
    super(props);

    //bind component to methods
    this.toggle = this.toggle.bind(this);
    this.handleBlur = this.handleBlur.bind(this);

    this.open = false;

    this.state = {
      open:this.open,
      removed:false
    };

    this.buttonRef = React.createRef();
    this.contentRef = React.createRef();

    if(Array.isArray(this.props.children)){
      //there is more than one child within this element
      let button = this.props.children.find(this.isButton);
      if(typeof button !== 'undefined'){
        this.disclosureButton = <DisclosureButton ref={this.buttonRef} key={generateId('disclosure__button')} element={button} toggleHandler={this.toggle} classButtonToggle={this.props.classButtonToggle} classButtonBlur={this.props.classButtonBlur} {...button.props}>{button.props.children}</DisclosureButton>;
      }
    }
  }

  isButton(element){
    return (element.type === 'button' || (typeof element.props.role === 'string' && element.props.role === 'button'));
  }

  toggle(open = undefined){
    this.open = !this.open;
    this.contentRef.current.toggleOpen(open);
  }

  componentDidMount(){
  }

  handleBlur(){
  }

  render(){
    if(this.disclosureButton){
      return(
        <React.Fragment key={generateId('disclosure')}>
          {this.disclosureButton}
          <DisclosureContent ref={this.contentRef} key={generateId('disclosure__content')} classContent={this.props.classContent} childElements={this.props.children.filter(child => !this.isButton(child),this)} />
        </React.Fragment>
      );
    }
    return (<React.Fragment>{this.props.children}</React.Fragment>);
  }
}

export default Disclosure;