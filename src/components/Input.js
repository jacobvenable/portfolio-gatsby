import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/fontawesome-pro-solid';
import Recaptcha from 'react-google-recaptcha';

class Input extends React.Component {

  Label(){
    if(this.type !== 'recaptcha'){
      return <label ref={this.labelRef} htmlFor={this.name}>{this.label}</label>
    }
    return null;
  }

  Input(){
    return(
      <input ref={this.inputRef} aria-describedby={`${this.name}-tooltip`} onChange={(e) => this.handleInputChange(e)} onBlur={(e) => this.validate(e.type)} type={this.type} name={this.name} id={this.name}/> //required={this.required}/>
    );
  }

  TextArea(){
    return(
      <textarea ref={this.inputRef} onChange={(e) => this.handleInputChange(e)} onBlur={(e) => this.validate(e.type)} name={this.name} id={this.name}></textarea> //required={this.required}></textarea>
    );
  }

  Recaptcha(){
    return(
      <Recaptcha
        sitekey="6LcnMnMUAAAAAHFKMs_CSVi7FCZ13HXuKkLKDl-S"
        onChange={(e)=>{
          this.valid = true;
          this.validate('');
        }}
        onExpired={(e)=>{
          this.valid = false;
          if(!this.disabled){
            this.validate('');
          }
        }}
        onErrored={(e)=>{
          console.log(e);
        }}
        theme="dark"
      />
    );
  }

	constructor(props) {
    super(props);

    this.type = props.type;
    this.name = props.name;
    this.label = props.label;
    this.required = props.required;
    this.errorMessage = props.errorMessage;
    this.valid = this.required?false:true;
    this.diabled = false;
    this.state = {
      valid:this.valid,
      validated:false,
      message:'',
      recaptchaErrorClass:'',
      disabled:false
    }
    this.containerRef = React.createRef();
    this.labelRef = React.createRef();
    this.inputRef = React.createRef();
    this.label = this.Label();
    this.input = ((type) => {
      switch(type){
        case 'recaptcha':
          return this.Recaptcha();
        case 'textarea':
          return this.TextArea();
        default:
          return this.Input();
      }
    })(this.type);

    this.validate = this.validate.bind(this);
    this.focusInput = this.focusInput.bind(this);
  }

  focusInput(smooth){
    let scrollTarget = (this.type === 'recaptcha' ? this.containerRef : this.labelRef);
    scrollTarget.current.scrollIntoView({
      behavior:smooth?"smooth":"auto",
      block:"start",
      inline:"start"
    })
    scrollTarget.current.focus({
      preventScroll:true
    });
  }

  handleInputChange(e){
    if(this.state.validated && !this.state.valid){
      this.validate(e.type);
    }
  }

  disable(){
    if(this.type !== 'recaptcha'){
      this.setState({
        disabled:true
      });
      this.disabled = true;
      this.inputRef.current.disabled = true;
    }
  }

  validate(eventType){
    if(!this.disabled){
      if(this.type === 'recaptcha'){
        this.setState({
          valid:this.valid,
          validated:true,
          recaptchaErrorClass:`${!this.valid ? 'contact__recaptcha--error' : ''}`,
          message:`${!this.valid ? 'Please proove you aren\'t a Cyberman (robot).':''}`
        });
      }
      else{
        //an event was passed where it was either a blur event or an input change event after the input has already been validated or is currently not valid
        let value = this.inputRef.current.value.trim();
        this.valid = false;
        let message = '';
        if(this.required && value === '' && (eventType === 'blur' || eventType === 'submit')){
          message = 'Please fill out this required field.';
        }
        // eslint-disable-next-line
        else if(this.type === 'email' && (eventType === 'blur' || eventType === 'submit') && !value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
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
    return this.valid;
  }

  render(){
    return (
      <div
        tabIndex='-1'
        aria-label={this.type === 'recaptcha'?'Google Recaptcha':''}
        className={this.type === 'recaptcha' ? `contact__recaptcha ${this.state.recaptchaErrorClass}` : ''}
        ref={this.containerRef}>
        {this.label}
        {this.input}
        <p id={`${this.name}-tooltip`} aria-hidden={this.state.validated && !this.state.valid?false:true} className={`tooltip ${this.state.validated && !this.state.valid?'tooltip--visible':''}`}><FontAwesomeIcon icon={faExclamationCircle} className='tooltip__icon'/>{this.state.message}</p>
      </div>
    );
  }

}

export default Input;