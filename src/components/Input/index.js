import React from 'react';
import Img from 'gatsby-image';
import generateId from './../../utils/generateId';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faVideo } from '@fortawesome/fontawesome-pro-light';
import { faPlay } from '@fortawesome/fontawesome-pro-solid';
import { faPause } from '@fortawesome/fontawesome-pro-solid';
import { faRedoAlt } from '@fortawesome/fontawesome-pro-regular';

class Input extends React.Component {

	constructor(props) {
    super(props);
    this.type = props.type;
    this.name = props.name;
    this.label = props.label;
    this.required = props.required;
    this.state = {
      valid:(this.required?false:true)
    }
    this.inputElement = (this.type == 'textarea' ? this.TextArea() : this.Input());

    this.validate = this.validate.bind(this);
  }

  componentDidMount(){
    //remove browser-default video controls
    //this.videoElement.current.removeAttribute('controls');

    //attach event listeners to elements
    //this.videoElement.current.addEventListener('ended',this.resetVideo);
  }

  Input(){
    return(
      <input type={this.type} name={this.name} id={this.name}/>
    );
  }

  TextArea(){
    return(
      <textarea name={this.name} id={this.name}></textarea>
    );
  }

  validate(){

  }

  render(){
    return (
      <div className=''>
        <label htmlFor={this.name}>{this.label}</label>
        {this.inputElement}
      </div>
    );
  }

}

export default Input;