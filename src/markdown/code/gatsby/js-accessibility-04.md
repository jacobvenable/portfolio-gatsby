```javascript
//code in AccordionButton sub-component

render(){
  return(
  <this.props.element.type 
    {...this.props.element.props} 
    aria-expanded={this.state.open}
  >
    {this.props.element.props.children}
  </this.props.element.type>
  );
}
```