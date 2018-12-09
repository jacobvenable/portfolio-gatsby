import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltDown } from '@fortawesome/fontawesome-pro-solid';
import generateId from './../../utils/generateId';
import Accordion from './../Accordion';

class AccordionGroup extends React.Component {

  constructor(props){
    super(props);
    this.accordions = [];
    this.children = this.props.children;
    
    this.bindAccordion = this.bindAccordion.bind(this);
    this.toggleAll = this.toggleAll.bind(this);

    if(Array.isArray(this.props.children)){
      this.children = this.props.children.map(child => {
        return this.bindAccordion(child)
      },this)
    }
  }

  bindAccordion(element){
    if(element.type.displayName === 'Accordion'){
      let newAccordionRef = React.createRef();
      this.accordions.push(newAccordionRef);
      return <Accordion key={element.props.buttonText} buttonText={element.props.buttonText} type={element.props.type} level={element.props.level} group={element.props.group} ref={newAccordionRef} parentToggle={this.toggleAll} tileIcon={element.props.tileIcon} icon={element.props.icon}>{element.props.children}</Accordion>;
    }
    return element;
  }

  toggleAll(openAccordion){
    this.accordions.forEach(accordion => {
      if(openAccordion !== accordion.current){
        accordion.current.toggle(false);
      }
    });
  }

  render(props){
    return (this.children);
  }
}

export default AccordionGroup;