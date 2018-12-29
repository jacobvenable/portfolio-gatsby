import React from 'react';
import generateId from './../../utils/generateId';
import scroll from './../../utils/scroll';

class AccordionContent extends React.Component {
  constructor(props){
    super(props);

    this.toggleOpen = this.toggleOpen.bind(this);
    this.toggleHeight = this.toggleHeight.bind(this);

    this.containerRef = React.createRef();
    this.contentHeight = 'none';
    this.open = false;

    this.state = {
      open:this.open,
      contentMaxHeight:this.contentHeight,
      removed:false
    };
  }

  handleTransition(e){
    if(typeof(e.propertyName) === 'string' && e.propertyName === 'max-height')
    {
      scroll(this.containerRef.current);
      if((this.type === 'single-use' && this.open && !this.removed) || (this.type === 'group' && this.open)){
        this.scroll();
      }
    }
  }

  toggleOpen(open = undefined){
    this.open = (typeof(open)==='boolean'?open:!this.open);
    this.setState({
      open:this.open
    });
  }

  toggleHeight(){
    this.setState({
      contentMaxHeight:`${this.open?this.contentHeight:'0px'}`
    });
  }

  componentDidMount(){
    this.contentHeight = (typeof(this.containerRef.current.offsetHeight) === 'number' ? `${this.containerRef.current.offsetHeight.toString()}px` : 'auto');
    this.open = false;
    this.setState({
      contentMaxHeight:'0px'
    });
  }

  componentDidUpdate(prevProps,prevState){
    if(prevState.open !== this.state.open){
      this.toggleHeight();
    }
  }

  render(){
    return(
    <div 
      ref={this.containerRef} 
      key={generateId('accordionContent_container')} 
      id={this.props.id}
      className={`${this.props.className} ${this.state.open?this.props.classNameToggle:''}`}
      style={{
        maxHeight:this.state.contentMaxHeight
      }}
      onTransitionEnd={e => this.handleTransition(e)}
    >
      {this.props.childElements}
    </div>
    );
  }
}

export default AccordionContent;