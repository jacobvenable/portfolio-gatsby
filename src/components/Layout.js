import React from 'react';
import Helmet from 'react-helmet';

import SkipToMain from './SkipToMain';
import Header from './Header';
import Footer from './Footer';

import favIconAppleTouchIcon from './../images/favicon_apple-touch-icon.png';
import favIcon32 from './../images/favicon_32x32.png';
import favIcon16 from './../images/favicon_16x16.png';
import favSafariPinnedTab from './../images/favicon_safari-pinned-tab.svg';

/**
 * A class React component used on each page of the site. This component contains all children of the page, and also sets some default metadata via React Helmet.
 */
const TemplateWrapper = ({ children }) => (
  <div>
  	<Helmet>
      <meta charSet="utf-8"/>
      <meta content="IE=edge" http-equiv="X-UA-Compatible"/>
      <meta content="width=device-width, initial-scale=1" name="viewport"/>
      <meta property="og:type" content="website"/>
      <meta property="og:locale" content="en_US"/>
      <meta name="author" content="Jacob Venable"/>
			<meta name="twitter:site" content="@Jacob_Venable"/>
			<meta name="twitter:creator" content="@Jacob_Venable"/>
			<meta name="twitter:card" content="summary_large_image"/>
			<link rel="apple-touch-icon" sizes="180x180" href={favIconAppleTouchIcon}/>
			<link rel="icon" type="image/png" sizes="32x32" href={favIcon32}/>
			<link rel="icon" type="image/png" sizes="16x16" href={favIcon16}/>
			<link rel="mask-icon" href={favSafariPinnedTab} color="#4d65af"/>
			<meta name="msapplication-TileColor" content="#4d65af"/>
			<meta name="theme-color" content="#ffffff"/>
  	</Helmet>
    <SkipToMain />
    <Header />
    <main id="main">
      {children}
    </main>
    <Footer />
  </div>
);

export default TemplateWrapper;
