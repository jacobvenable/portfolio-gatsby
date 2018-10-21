import React from 'react';
import Layout from './../components/Layout';
import Link from 'gatsby-link';

const IndexPage = () => (
	<Layout>
	  <main id="main">
	    <div className="container">
		    <h1>Hi people</h1>
		    <p>Welcome to your new Gatsby site.</p>
		    <p>Now go build something great.</p>
		    <Link to="/typography/">Go to page 2</Link>
		  </div>
	  </main>
	</Layout>
);

export default IndexPage;