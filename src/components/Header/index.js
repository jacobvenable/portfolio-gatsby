import React from 'react';
import Link from 'gatsby-link';

import logoSvg from './../../images/logo.svg';
import logoPng from './../../images/logo.png';

const Header = () => (
  <header className="header">
    <div className="container header__container">
      <Link to="/" className="header__link header__link-logo">
        <span className="sr-hidden">Home</span> 
        <div className="svg header__logo">
          <object data={logoSvg} type="image/svg+xml" className="svg__object" tabIndex="-1">
            <img src={logoPng} alt="logo" className="header__logo"/>
          </object>
        </div>
      </Link>
      <h1 className="header__heading">
        <span className="header__name">Jacob Venable </span>
        <span className="sr-hidden">&#8212;</span> 
        <span className="header__title">Front-End Web Developer</span>
      </h1>
      <nav className="header__nav nav nav-main" role="navigation">
        <ul className="nav__list">
          <li className="nav__item"><a href="#" className="nav__link nav__link-main">About</a></li>
          <li className="nav__item"><Link to="/work/" className="nav__link nav__link-main">Work</Link></li>
          <li className="nav__item"><a href="#" className="nav__link nav__link-main">Contact</a></li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;
