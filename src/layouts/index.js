import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import SkipToMain from '../components/SkipToMain';
import Header from '../components/Header';
import '../scss/all.scss';

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
      {children()}
    </main>
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func,
};

export default TemplateWrapper;
