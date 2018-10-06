import React from 'react';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import Input from './../Input';
import { faExclamationCircle } from '@fortawesome/fontawesome-pro-solid';

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
    this.inputs = [
      this.inputNameRef,
      this.inputEmailRef,
      this.inputMessageRef,
      this.inputHoneyRef
    ];

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e){
    e.preventDefault();
    let invalidInput = this.inputs.find((input) => {return !input.current.valid});
    console.log(invalidInput);
    if(typeof invalidInput === 'undefined'){
      e.target.submit();
    }
    else{
      invalidInput.current.focusInput(true);
    }
  }

  render(){
    return (
      <form onSubmit={(e) => this.handleSubmit(e)} className="container__column contact__form" action="" method="POST" data-netlify="true" netlify-honeypot="sweet-honey">
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
          <div className="g-recaptcha" data-sitekey="6LcnMnMUAAAAAHFKMs_CSVi7FCZ13HXuKkLKDl-S" data-theme="dark"></div>
        </div>
        <div className="contact__submit">
          <button className="button button--yellow-light" type="submit">Send</button>
        </div>
      </form>
    );
  }

}

export default ContactForm;