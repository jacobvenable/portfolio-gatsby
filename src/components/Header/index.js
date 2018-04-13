import React from 'react';
import Link from 'gatsby-link';

import logoSvg from './../../images/logo.svg';
import logoPng from './../../images/logo.png';

const Header = () => (
  <header className="header">
    <div className="container">
      <a href="/index" className="header__link header__link-svg">
        <object data={logoSvg} type="image/svg+xml" className="header__logo header__logo-svg">
          <img src={logoPng} alt="logo" className="header__logo"/>
        </object>
      </a>
      {/*<h1 className="header__h1">Jacob Venable &#8212; Front-end Web Developer</h1>*/}
      <nav className="nav nav-main" role="navigation">
        <ul className="nav__list">
          <li className="nav__item"><a href="#" className="nav__link nav__link-main">About</a></li>
          <li className="nav__item"><a href="#" className="nav__link nav__link-main">Work</a></li>
          <li className="nav__item"><a href="#" className="nav__link nav__link-main">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
