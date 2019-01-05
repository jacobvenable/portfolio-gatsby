import React from 'react';
import Input from './../Input';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSpinnerThird } from '@fortawesome/fontawesome-pro-light';
import { faCheck } from '@fortawesome/fontawesome-pro-regular';
import { faExclamationTriangle } from '@fortawesome/fontawesome-pro-regular';

class ContactForm extends React.Component {

	constructor(props) {
    super(props);

    this.state = {
      submitting:false,
      submittedSuccess:false,
      submittedError:false
    };

    this.action = '/contact';

    this.formRef = React.createRef();

    this.inputNameRef = React.createRef();
    this.inputName = <Input ref={this.inputNameRef} type="text" name="name" label="What is your name?" required={true} />;
    this.inputEmailRef = React.createRef();
    this.inputEmail = <Input ref={this.inputEmailRef} type="email" name="email" label="What is your email?" errorMessage="Oops! Double check your email is right." required={true} />;
    this.inputMessageRef = React.createRef();
    this.inputMessage = <Input ref={this.inputMessageRef} type="textarea" name="message" label="What would you like to talk about?" required={true} />;
    this.inputHoneyRef = React.createRef();
    this.inputHoney = <Input ref={this.inputHoneyRef} type="text" name="sweet-honey" label="Leave this blank if you're human" required={false} />;
    this.inputRecaptchaRef = React.createRef();
    this.inputRecaptcha = <Input ref={this.inputRecaptchaRef} type="recaptcha" name="" label="" required={true} />;
    this.inputs = [
      this.inputNameRef,
      this.inputEmailRef,
      this.inputMessageRef,
      this.inputHoneyRef,
      this.inputRecaptchaRef
    ];

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let invalidInput = this.inputs.find(input => {return !input.current.validate('submit')});
    if(typeof invalidInput === 'undefined'){
      let contactFormData = new FormData(this.formRef.current);
      let contactFormDataSerialize = '';
      for(let pair of contactFormData.entries()) {
        contactFormDataSerialize += `${contactFormDataSerialize.length>0?'&':''}${encodeURIComponent(pair[0])}=${encodeURIComponent(pair[1])}`;
      }
      this.setState({
        'submitting':true
      });
      fetch(this.action,{
        method:'POST',
        mode:'same-origin',
        cache:'no-cache',
        headers: {
          'Content-Type':'application/x-www-form-urlencoded',
        },
        redirect:'follow',
        body:contactFormDataSerialize
      })
      .then(r => {
        if(typeof r === 'object' && r.ok){
          this.setState({
            'submitting':false,
            'submittedSuccess':true
          });
          this.inputs.forEach(input => {
            input.current.disable();
          });
        }
        else{
          console.log(r);
          this.setState({
            'submitting':false,
            'submittedError':true
          });
        }
      });
    }
    else{
      invalidInput.current.focusInput(true);
    }
  }

  render(){
    return (
      <form
        name="contact"
        className="container__column contact__form" method="post"
        data-netlify="true"
        data-netlify-honeypot="sweet-honey"
        data-netlify-recaptcha="true"
        onSubmit={(e) => this.handleSubmit(e)}
        action={this.action}
        ref={this.formRef}
      >
        <div className="sr-only">
          <input type="hidden" name="form-name" value="contact" />
        </div>
        <div className={`contact__input contact__input--detail ${this.state.submitting || this.state.submittedSuccess ? 'contact__input--disabled' : ''}`}>
          {this.inputName}
        </div>
        <div className={`contact__input contact__input--detail ${this.state.submitting || this.state.submittedSuccess ? 'contact__input--disabled' : ''}`}>
          {this.inputEmail}
        </div>
        <div className={`contact__input contact__input--message ${this.state.submitting || this.state.submittedSuccess ? 'contact__input--disabled' : ''}`}>
          {this.inputMessage}
        </div>
        <div className="sr-only">
          {this.inputHoney}
        </div>
        <div className={`contact__input contact__input--recaptcha ${this.state.submitting || this.state.submittedSuccess ? 'contact__input--disabled' : ''}`}>
          {this.inputRecaptcha}
        </div>
        <div className="contact__submit">
          <button className="button button--yellow-light contact__button" type="submit" disabled={this.state.submitting || this.state.submittedSuccess ? true : false}>Send</button>
          <FontAwesomeIcon icon={this.state.submitting?faSpinnerThird:(this.state.submittedError?faExclamationTriangle:faCheck)} className={`contact__icon contact__icon--submit ${this.state.submitting?'fa-spin':''} ${this.state.submitting || this.state.submittedSuccess || this.state.submittedError?'contact__icon--submit-visible':''}`} aria-hidden={'true'}/>
          <p className={`contact__message ${(this.state.submittedSuccess || this.state.submittedError) && !this.state.submitting?'contact__message--visible':''}`} aria-live="polite" role="">
            {this.state.submitting?' Submitting your message':''}
            {this.state.submittedSuccess && !this.state.submitting ?' Thanks! Your message has been dispatched with two droids to the planet\'s surface.':''}
            {this.state.submittedError && !this.state.submitting ?' Whoops. Looks like some wires got crossed and I didn\'t receive your message. Maybe try again?':''}
          </p>
        </div>
      </form>
    );
  }

}

export default ContactForm;