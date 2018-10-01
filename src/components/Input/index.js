import React from 'react';
import Img from 'gatsby-image';
import generateId from './../../utils/generateId';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/fontawesome-pro-solid';

class Input extends React.Component {

	constructor(props) {
    super(props);
    this.type = props.type;
    this.name = props.name;
    this.label = props.label;
    this.required = props.required;
    this.errorMessage = props.errorMessage;
    this.inputElement = React.createRef();
    this.state = {
      valid:(this.required?false:true),
      validated:false,
      message:''
    }
    this.input = (this.type == 'textarea' ? this.TextArea() : this.Input());

    this.validate = this.validate.bind(this);
  }

  componentDidMount(){
    this.inputElement.current.addEventListener('blur',this.validate);
  }

  Input(){
    return(
      <input type={this.type} name={this.name} id={this.name} ref={this.inputElement} required={this.required}/>
    );
  }

  TextArea(){
    return(
      <textarea name={this.name} id={this.name} ref={this.inputElement} required={this.required}></textarea>
    );
  }

  validate(){
    let value = this.inputElement.current.value.trim();
    if(this.required && value === ''){
      this.setState({
        valid:false,
        validated:true,
        message:'Please fill out this required field.'
      });
    }
    else if(this.type === 'email' && !value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
      console.log(this);
      this.setState({
        valid:false,
        validated:true,
        message:this.errorMessage?this.errorMessage:'Please provide a valid email'
      });
    }
    else{
      this.setState({
        valid:true,
        validated:true,
        message:''
      });
    }
  }

  render(){
    return (
      <div className=''>
        <label htmlFor={this.name}>{this.label}</label>
        {this.input}
        <p className={`tooltip ${this.state.validated && !this.state.valid?'tooltip--visible':''}`}><FontAwesomeIcon icon={faExclamationCircle} className='tooltip__icon'/>{this.state.message}</p>
      </div>
    );
  }

}

export default Input;