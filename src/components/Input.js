import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/fontawesome-pro-solid';
import Recaptcha from 'react-google-recaptcha';

/**
 * A class React component used to place a label, input combination.
 */
class Input extends React.Component {

  constructor(props) {
    super(props);

    this.valid = !props.required;
    this.disabled = false;
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
    })(props.type);

    //bind this object to methods
    this.validate = this.validate.bind(this);
    this.focusInput = this.focusInput.bind(this);
  }

  /**
   * Function used to determine the <label> element associated with the label, input group.
   * @return {object} The JSX of the <label> element or null if it is a recaptcha input
   */
  Label(){
    if(this.props.type !== 'recaptcha'){
      return <label ref={this.labelRef} htmlFor={this.props.name}>{this.props.label}</label>
    }
    return null;
  }

  /**
   * Function used to build a <input> associated with the label, input group.
   * @return {object} The JSX of the <input> element
   */
  Input(){
    return(
      <input ref={this.inputRef} aria-describedby={`${this.props.name}-tooltip`} onChange={(e) => this.handleInputChange(e)} onBlur={(e) => this.validate(e.type)} type={this.props.type} name={this.props.name} id={this.props.name}/> //required={this.props.required}/>
    );
  }

  /**
   * Function used to build a <textarea> associated with the label, input group.
   * @return {object} The JSX of the <textarea> element
   */
  TextArea(){
    return(
      <textarea ref={this.inputRef} onChange={(e) => this.handleInputChange(e)} onBlur={(e) => this.validate(e.type)} name={this.props.name} id={this.props.name}></textarea> //required={this.props.required}></textarea>
    );
  }

  /**
   * Function used to build a Recaptcha component if the input is a Recaptcha.
   * @return {object} The Recaptcha component
   */
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

  focusInput(smooth){
    let scrollTarget = (this.props.type === 'recaptcha' ? this.containerRef : this.labelRef);
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
    if(this.props.type !== 'recaptcha'){
      this.setState({
        disabled:true
      });
      this.disabled = true;
      this.inputRef.current.disabled = true;
    }
  }

  validate(eventType){
    if(!this.disabled){
      if(this.props.type === 'recaptcha'){
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
        if(this.props.required && value === '' && (eventType === 'blur' || eventType === 'submit')){
          message = 'Please fill out this required field.';
        }
        // eslint-disable-next-line
        else if(this.props.type === 'email' && (eventType === 'blur' || eventType === 'submit') && !value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
          message = this.props.errorMessage?this.props.errorMessage:'Please provide a valid email';
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
        aria-label={this.props.type === 'recaptcha'?'Google Recaptcha':''}
        className={this.props.type === 'recaptcha' ? `contact__recaptcha ${this.state.recaptchaErrorClass}` : ''}
        ref={this.containerRef}>
        {this.label}
        {this.input}
        <p id={`${this.props.name}-tooltip`} aria-hidden={this.state.validated && !this.state.valid?false:true} className={`tooltip ${this.state.validated && !this.state.valid?'tooltip--visible':''}`}><FontAwesomeIcon icon={faExclamationCircle} className='tooltip__icon'/>{this.state.message}</p>
      </div>
    );
  }

}

export default Input;