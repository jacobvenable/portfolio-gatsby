import React from 'react';
import Layout from './../components/Layout';
import Head from './../components/Head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/fontawesome-free-brands';
import { faGithub } from '@fortawesome/fontawesome-free-brands';
import ContactForm from './../components/ContactForm';

let message = (localStorage.getItem('contacted') ? <p className="intro">Thanks, your message has been received!</p> : null);
const ContactPage = ({ data }) => (
	<Layout>
		<Head
			title="Contact"
			description="Different ways to get in touch with Jacob Venable including a form and social media."
		/>
	  <div className="container">
			<h1>Want to talk?</h1>
			{message}
			<div className="container__row contact">
				<div className="container__column contact__copy">
					<p>Have an idea for a project, or want to discuss a new opportunity? Let's have a chat!</p>
					<p>You can use the form to send me a direct message or connect with me through any of the networks below.</p>
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
	</Layout>
);

export default ContactPage;