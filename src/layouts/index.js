import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';

import SkipToMain from '../components/SkipToMain';
import Header from '../components/Header';
import '../scss/all.scss';

export default = ({ children }) => (
  <div>
    <SkipToMain />
    <Header />
    <main id="main">
      {children}
    </main>
  </div>
);