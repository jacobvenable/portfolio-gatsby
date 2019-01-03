import React from 'react';
import '@fortawesome/fontawesome-svg-core/styles.css';
import './../../scss/all.scss';

import SkipToMain from './../SkipToMain';
import Header from './../Header';

const TemplateWrapper = ({ children }) => (
  <div>
    <SkipToMain />
    <Header />
    <main id="main">
      {children}
    </main>
  </div>
);

export default TemplateWrapper;
