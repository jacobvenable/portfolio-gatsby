import React from 'react';
import Input from './../Input';

class ContactMessage extends React.Component {

	constructor(props) {
    super(props);
    this.state = {
      contacted:false
    }
  }

  onComponentDidMount(){
    window.addEventListener('storage', e => {
      if(localStorage.getItem('contacted')){
        this.setState({
          contacted:true
        });
      }
    });
  }

  message(){
    return (<p className="intro">Thanks, your message has been received!</p>);
  }

  render(){
    return (
      <React.Fragment>
        {this.state.contacted ? this.message() : null}
      </React.Fragment>
    );
  }

}

export default ContactMessage;