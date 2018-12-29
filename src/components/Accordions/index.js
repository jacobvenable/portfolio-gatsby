import React from 'react';
// import Link from 'gatsby-link';
// import Img from 'gatsby-image';
import AccordionButton from './AccordionButton';
import AccordionContent from './AccordionContent';
import generateId from './../../utils/generateId';

class Accordions extends React.Component {

  constructor(props){
    super(props);

    //bind component to methods
    this.toggle = this.toggle.bind(this);

    this.accordionGroups = [];
    this.accordionGroupRefs = [];

    this.buttonRef = React.createRef();
    this.contentRef = React.createRef();

    if(Array.isArray(this.props.children)){
      //there is more than one child within this element
      let accordionsChildren = this.props.children;
      let containsButton = accordionsChildren.some(this.isButton);
      if(containsButton){
        while(accordionsChildren.length > 0){
          let accordionButton = accordionsChildren.find(this.isButton);
          let buttonIndex = accordionsChildren.findIndex(this.isButton);
          accordionsChildren = accordionsChildren.slice(buttonIndex+1);
          let accordionChildren = accordionsChildren.slice(
            0,accordionsChildren.findIndex(this.isButton) >= 0 ? accordionsChildren.findIndex(this.isButton) : accordionsChildren.length
          )
          accordionsChildren = accordionsChildren.slice(accordionChildren.length);

          if(accordionButton && accordionChildren.length > 0){
            let contentKey = generateId('accordions__content');
            let contentRef = React.createRef();
            let content = <AccordionContent key={contentKey} id={contentKey} ref={contentRef} childElements={accordionChildren} className={this.props.classContent} classNameToggle={this.props.classContentToggle}/>;
            let buttonRef = React.createRef();
            let button = <AccordionButton key={generateId('accordions__button')} ref={buttonRef} contentKey={contentKey} element={accordionButton} contentElement={contentRef} toggleHandler={this.toggle} classButtonToggle={this.props.classButtonToggle} {...accordionButton.props}>{accordionButton.props.children}</AccordionButton>;
            this.accordionGroups.push(button,content);
            this.accordionGroupRefs.push({key:contentKey,buttonRef:buttonRef,contentRef:contentRef});
          }
        }
      }
    }
  }

  isButton(element){
    return (element.type === 'button' || (typeof element.props.role === 'string' && element.props.role === 'button'));
  }

  toggle(contentKey,open){
    this.accordionGroupRefs.forEach((group)=>{
      group.buttonRef.current.toggle(group.key===contentKey?open:false);
      group.contentRef.current.toggleOpen(group.key===contentKey?open:false);
    });
  }

  componentDidMount(){
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