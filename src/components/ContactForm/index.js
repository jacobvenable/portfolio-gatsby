import React from 'react';
import Input from './../Input';

class ContactForm extends React.Component {

	constructor(props) {
    super(props);
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
    let invalidInput = this.inputs.find((input) => {return !input.current.validate('submit')});
    if(typeof invalidInput === 'undefined'){
      localStorage.setItem('contacted',true);
      e.target.submit();
    }
    else{
      invalidInput.current.focusInput(true);
    }
  }

  render(){
    return (
      <form name="contact" className="container__column contact__form" method="post" data-netlify="true" data-netlify-honeypot="sweet-honey" data-netlify-recaptcha="true" onSubmit={(e) => this.handleSubmit(e)} action="/contact">
        <div className="sr-only">
          <input type="hidden" name="form-name" value="contact" />
        </div>
        <div className="contact__input contact__input--detail">
          {this.inputName}
        </div>
        <div className="contact__input contact__input--detail">
          {this.inputEmail}
        </div>
        <div className="contact__input contact__input--message">
          {this.inputMessage}
        </div>
        <div className="sr-only">
          {this.inputHoney}
        </div>
        <div className="contact__input contact__input--recaptcha">
          {this.inputRecaptcha}
        </div>
        <div className="contact__submit">
          <button className="button button--yellow-light" type="submit">Send</button>
        </div>
      </form>
    );
  }

}

export default ContactForm;