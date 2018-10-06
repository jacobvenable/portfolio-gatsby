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
    this.valid = this.required?false:true;
    this.state = {
      valid:this.valid,
      validated:false,
      message:''
    }
    this.labelRef = React.createRef();
    this.inputRef = React.createRef();
    this.input = (this.type == 'textarea' ? this.TextArea() : this.Input());

    this.validate = this.validate.bind(this);
    this.focusInput = this.focusInput.bind(this);
  }

  componentDidMount(){
  }

  focusInput(smooth){
    this.labelRef.current.scrollIntoView({
      behavior:smooth?"smooth":"auto",
      block:"start",
      inline:"start"
    })
    this.inputRef.current.focus({
      preventScroll:true
    });
  }

  Input(){
    return(
      <input ref={this.inputRef} onChange={(e) => this.validate(e)} onBlur={(e) => this.validate(e)} type={this.type} name={this.name} id={this.name}/> //required={this.required}/>
    );
  }

  TextArea(){
    return(
      <textarea ref={this.inputRef} onChange={(e) => this.validate(e)} onBlur={(e) => this.validate(e)} name={this.name} id={this.name}></textarea> //required={this.required}></textarea>
    );
  }

  validate(e){
    if(e.type == 'blur' || (e.type == 'change' && this.state.validated && !this.state.valid)){
      let value = e.target.value.trim();
      this.valid = false;
      let message = '';
      if(this.required && value === '' && e.type == 'blur'){
        message = 'Please fill out this required field.';
      }
      else if(this.type === 'email' && e.type=='blur' && !value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
        message = this.errorMessage?this.errorMessage:'Please provide a valid email';
      }
      else{
        this.valid = true;
      }
      this.setState({
        valid:this.valid,
        validated:true,
        message:message
      });
    }
  }

  render(){
    return (
      <div className=''>
        <label ref={this.labelRef} htmlFor={this.name}>{this.label}</label>
        {this.input}
        <p aria-hidden={`${this.state.validated && !this.state.valid?'false':'true'}`} className={`tooltip ${this.state.validated && !this.state.valid?'tooltip--visible':''}`}><FontAwesomeIcon icon={faExclamationCircle} className='tooltip__icon'/>{this.state.message}</p>
      </div>
    );
  }

}

export default Input;