import React from 'react';
import PropTypes from 'prop-types';

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

// TemplateWrapper.propTypes = {
//   children: PropTypes.func,
// };

export default TemplateWrapper;
