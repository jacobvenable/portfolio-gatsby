import React from 'react';

import SkipToMain from './../SkipToMain';
import Header from './../Header';
import './../../scss/all.scss';

const TemplateWrapper = ({ children }) => (
  <div>
    {/*<Header
      title="Gatsby Default Starter"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />*/}
    <SkipToMain />
    <Header />
    <main id="main">
      {children}
    </main>
  </div>
);

export default TemplateWrapper;
