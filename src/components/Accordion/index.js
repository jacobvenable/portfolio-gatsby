import React from 'react';
// import Link from 'gatsby-link';
// import Img from 'gatsby-image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltRight } from '@fortawesome/fontawesome-pro-solid';
import generateId from './../../utils/generateId';

class Accordion extends React.Component {

  constructor(props){
    super(props);
    this.type = props.type || 'group';
    this.buttonText = props.buttonText;
    this.children = props.children;
    this.id = generateId('accordion');
    this.tileIcon = props.tileIcon || undefined;
    this.icon = props.icon || undefined;
    this.level = props.level || undefined;
    this.open = false;
    this.removed = false;
    this.contentHeight = 'auto';
    this.groupToggle = props.parentToggle || undefined;

    this.content = React.createRef();

    this.state = {
      open:this.open,
      contentMaxHeight:this.contentHeight,
      removed:false
    };

    this.handleBlur = this.handleBlur.bind(this);
    this.handleTransition = this.handleTransition.bind(this);
    this.scroll = this.scroll.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  componentDidMount(){
    this.contentHeight = (typeof(this.content.current.offsetHeight) === 'number' ? `${this.content.current.offsetHeight.toString()}px` : 'auto');
    this.content.current.addEventListener('transitionend',e => this.handleTransition(e));
    this.setState({
      contentMaxHeight:'0'
    });
  }

  handleBlur(){
    if(this.type == 'single-use' && this.open){
      this.removed = true;
      this.setState({
        removed:this.removed
      });
    }
  }

  handleTransition(e){
    if(typeof(e.propertyName) === 'string' && e.propertyName === 'max-height')
    {
      if((this.type === 'single-use' && this.open && !this.removed) || (this.type === 'group' && this.open)){
        this.scroll();
      }
    }
  }

  scroll(){
    let windowHeight = window.innerHeight,
      windowScroll = window.scrollY,
      contentOffsetTop = this.content.current.offsetTop,
      contentTop = this.content.current.getBoundingClientRect().top,
      contentHeight = this.content.current.clientHeight;

    if(contentTop+contentHeight>windowHeight){
      //all of the expanded content is not currently visible on the screen
        window.scroll({
          top:(contentHeight > windowHeight)?contentTop:(window.scrollY+(contentHeight-(windowHeight-contentTop))),
          behavior:"smooth"
        });
    }
  }

  toggle(open){
    this.open = (typeof(open) === 'boolean' ? open : !this.open);
    this.setState({
      open:this.open,
      contentMaxHeight:`${this.open?this.contentHeight:'0'}`
    });
    if(this.type == 'group' && typeof this.groupToggle === 'function' && typeof(open) !== 'boolean'){
      this.groupToggle(this);
    }
  }

  render(props){
    return (
    <div className={`${typeof this.tileIcon !== 'undefined'?'container__column tiles__tile':''} accordion`}>
      <button 
        className={
          `accordion__button
          ${this.type === 'single-use' ? ' accordion__button--single':''}
          ${this.type === 'single-use' && this.state.open?' accordion__button--single-hidden':''}
          ${this.type === 'single-use' && this.state.removed?'accordion__button--single-removed':''}
          ${typeof this.tileIcon !== 'undefined'?'tile':''}`
        } 
        role={this.type === 'group' && typeof(this.level) === 'string' ? 'heading':null} 
        aria-level={this.type === 'group' && typeof(this.level) === 'string' ? this.level:null}
        onBlur={this.handleBlur}
        onClick={() => this.toggle()} 
        aria-expanded={`${this.state.open?'true':'false'}`} 
        aria-controls={this.id}
        id={`button-${this.id}`}
      >
        {typeof this.tileIcon !== 'undefined' ? <FontAwesomeIcon icon={this.tileIcon} className='tile__icon'/> : null}
        {this.buttonText}
        <FontAwesomeIcon
          icon={this.icon || faArrowAltRight}
          className={
            `accordion__icon
            ${this.type === 'single-use' || (this.type === 'group' && this.state.open) ? 'fa-rotate-90' : ''}
            ${typeof this.tileIcon !== 'undefined'?'tile__icon tile__icon--arrow':''}`
          }
        />
      </button>
      <div 
        id={this.id} 
        ref={this.content} 
        className={`accordion__content${this.state.open?' accordion__content--visible':''}`} 
        style={{maxHeight:`${this.state.contentMaxHeight}`}}
        role={this.type === 'group' && typeof(this.level) === 'string' ? 'region':null}
        aria-labelledby={this.type === 'group' && typeof(this.level) === 'string' ? `button-${this.id}`:null}
      >
        {this.children}
      </div>
    </div>
    );
  }
}

export default Accordion;