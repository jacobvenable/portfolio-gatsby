import React from 'react';
import Link from 'gatsby-link';

const IndexPage = () => (
  <main id="main">
    <div className="container">
	    <h1>Hi people</h1>
	    <p>Welcome to your new Gatsby site.</p>
	    <p>Now go build something great.</p>
	    <Link to="/typography/">Go to page 2</Link>
	  </div>
  </main>
);

export default IndexPage;