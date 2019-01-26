import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationCircle } from '@fortawesome/fontawesome-pro-solid';
import Recaptcha from 'react-google-recaptcha';
import scroll from './../utils/scroll';

/**
 * A class React component used to place a label, input combination.
 */
class Input extends React.Component {

  constructor(props) {
    super(props);

    //store the validity of the input and whether it should be disabled in separate properties needed for instant logic updates
    this.valid = !props.required;
    this.disabled = false;

    //set initial set of whether the input is currently valid, has been validated, the message displayed in response to a change input, the message text displayed when an input is declared invalid after a change, and whether the input is disabled
    this.state = {
      valid:this.valid,
      validated:false,
      message:'',
      disabled:false
    }

    //create refs to the <label>, <input>, and their container elements. These are needed for the sake of smooth scrolling
    this.containerRef = React.createRef();
    this.labelRef = React.createRef();
    this.inputRef = React.createRef();

    //create the label using the built-in method
    this.label = this.Label();

    //create the input based on the type of input needed
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

  /**
   * Method used to focus on and scroll to the proper element associated with the label, input group.
   */
  focusInput(){
    //if the input is a recaptcha, the container element needs to be scroll to; otherwise, scroll to the <label> element.
    let scrollTarget = (this.props.type === 'recaptcha' ? this.containerRef.current : this.labelRef.current);
    scroll(scrollTarget);
    scrollTarget.focus({
      preventScroll:true
    });
  }

  /**
   * Method called when the input value has changed.
   * @param {object} e - the event fired from an input change
   */
  handleInputChange(e){
    //validate the input if it has already been validated once and is not valid
    if(this.state.validated && !this.state.valid){
      this.validate(e.type);
    }
  }

  /**
   * Method used to disable the input
   */
  disable(){
    if(this.props.type !== 'recaptcha'){
      this.setState({
        disabled:true
      });
      this.disabled = true;
      this.inputRef.current.disabled = true;
    }
  }

  /**
   * Method used to validate the current value of the input
   * @param {string} eventType - (optional) string containing the type of event that caused this method to be called
   */
  validate(eventType){
    //validate only if the input is not disabled
    if(!this.disabled){
      if(this.props.type === 'recaptcha'){
        //recaptcha validation is handled separately via the Captcha component so this will only set state based on the built-in 'valid' property
        this.setState({
          valid:this.valid,
          validated:true,
          message:`${!this.valid ? 'Please proove you aren\'t a Cyberman (robot).':''}`
        });
      }
      else{
        //an event was passed where it was either a blur event or an input change event after the input has already been validated or is currently not valid
        let value = this.inputRef.current.value.trim();
        this.valid = false;
        let message = '';

        //validation should only occur when an input loses focus or when the form is submitted so we don't display feedback until the user is done typing
        if(this.props.required && value === '' && (eventType === 'blur' || eventType === 'submit')){
          message = 'Please fill out this required field.';
        }
        // eslint-disable-next-line
        else if(this.props.type === 'email' && (eventType === 'blur' || eventType === 'submit') && !value.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)){
          //the input is an email and is not a valid email
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
        className={this.props.type === 'recaptcha' ? `contact__recaptcha ${!this.state.valid?'contact__recaptcha--error':''}` : ''}
        ref={this.containerRef}>
        {this.label}
        {this.input}
        <p id={`${this.props.name}-tooltip`} aria-hidden={this.state.validated && !this.state.valid?false:true} className={`tooltip ${this.state.validated && !this.state.valid?'tooltip--visible':''}`}><FontAwesomeIcon icon={faExclamationCircle} className='tooltip__icon'/>{this.state.message}</p>
      </div>
    );
  }

}

export default Input;