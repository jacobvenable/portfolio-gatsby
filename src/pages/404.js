import React from 'react';
import Link from 'gatsby-link';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './../scss/all.scss';

import svg404 from './../images/404.svg';
import png404 from './../images/404.png';

const NotFoundPage = () => (
	<div>
	  <div className="container missing">
	    <h1 className="missing__heading">404 &#8212; Page Not Found</h1>
	    <p className="missing__copy">We ain't found it!</p>
	    <div className="missing__container missing__container--svg">
		    <div className="svg missing__svg">
	        <object aria-hidden="true" data={svg404} type="image/svg+xml" className="svg__object" tabIndex="-1">
	          <img src={png404} alt="" className="header__logo"/>
	        </object>
	      </div>
      </div>
      <h2 class="sr-only">Main Pages</h2>
      <ul className="missing__list">
      	<li className="missing__item">
      		<Link to='/' className='missing__link'>Home</Link>
      	</li>
      	<li className="missing__item">
      		<Link to='/skills' className='missing__link'>Skills</Link>
      	</li>
      	<li className="missing__item">
      		<Link to='/work' className='missing__link'>Work</Link>
      	</li>
      	<li className="missing__item">
      		<Link to='/contact' className='missing__link'>Contact</Link>
      	</li>
      </ul>
	  </div>
	</div>
)

export default NotFoundPage
