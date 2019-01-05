import React from 'react';
import Layout from './../components/Layout';
import Head from './../components/Head';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './../scss/all.scss';

import svg404 from './../images/404.svg';
import png404 from './../images/404.png';

const NotFoundPage = () => (
	<Layout>
		<Head
			title="404 Page Not Found"
			description="The page you were looking for could not be found."
		/>
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
	  </div>
	</Layout>
)

export default NotFoundPage
