import React from 'react';
import Helmet from 'react-helmet';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/fontawesome-free-brands';
import { faGithub } from '@fortawesome/fontawesome-free-brands';
import { faExclamationCircle } from '@fortawesome/fontawesome-pro-solid';
import ContactForm from './../components/ContactForm';

const ContactPage = ({ data }) => (
  <div className="container">
  	<Helmet>
			<meta charSet="utf-8" />
			<title>Contact</title>
			<script src='https://www.google.com/recaptcha/api.js'></script>
		</Helmet>
		<h1>Want to talk?</h1>
		<div className="container__row contact">
			<div className="container__column contact__copy">
				<p>Have an idea for a project, or want to discuss a new opportunity? Let's have a chat!</p>
				<p>You can use the form to send me a direct message or connect with me with any of the networks below.</p>
				<ul className="container__row contact__networks">
					<li className="container__column contact__network">
						<a href="https://www.linkedin.com/in/jacob-venable/" className="contact__link contact__link--network">
							<span className="sr-only">Jacob Venable LinkedIn profile</span>
							<FontAwesomeIcon icon={faLinkedin} className="contact__icon"/>
						</a>
					</li>
					<li className="container__column contact__network">
						<a href="https://github.com/jacobvenable" className="contact__link contact__link--network">
							<span className="sr-only">Jacob Venable GitHub profile</span>
							<FontAwesomeIcon icon={faGithub} className="contact__icon"/>
						</a>
					</li>
				</ul>
			</div>
			<ContactForm />
		</div>
	</div>
);

export default ContactPage;