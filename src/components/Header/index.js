import React from 'react';
import Link from 'gatsby-link';
import StickyFill from 'stickyfilljs';

import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faBars from '@fortawesome/fontawesome-pro-solid/faBars';
import faHome from '@fortawesome/fontawesome-pro-solid/faHome';
import faTimes from '@fortawesome/fontawesome-pro-light/faTimes';
import faUserAlt from '@fortawesome/fontawesome-pro-solid/faUserAlt';
import faFolderOpen from '@fortawesome/fontawesome-pro-solid/faFolderOpen';
import faEnvelope from '@fortawesome/fontawesome-pro-solid/faEnvelope';


import logoSvg from './../../images/logo.svg';
import logoPng from './../../images/logo.png';

class Header extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      checkingStick:false,
      sticky:false,
      stickyClass:"",
      mobileNavOpen:false,
      mobileNavOpenClass:"",
      togglerIcon:faBars,
      togglerText:"open navigation"
    };
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  componentDidMount() {
    //StickyFill.add(this.element.current);
    this.checkStick();
    window.addEventListener('scroll', e => { this.checkStick() });
  }

  checkStick(){
    if(!this.state.checkingStick)
    {
      this.setState({checkingStick:true});
      setTimeout(
        () => {
          (window.pageYOffset <= 0 && this.state.sticky) || (window.pageYOffset > 0 && !this.state.sticky) ? this.toggleSticky() : null;
          this.setState({checkingStick:false});
        },
        100
      );
    }
  }

  toggleSticky(){
    this.setState({
      sticky:!this.state.sticky,
      stickyClass:!this.state.sticky?" header-sticking":""
    });
  }

  toggleOpen(){
    this.setState({
      mobileNavOpen:!this.state.mobileNavOpen,
      mobileNavOpenClass:!this.state.mobileNavOpen?" nav-main-open":"",
      togglerIcon:!this.state.mobileNavOpen?faTimes:faBars,
      togglerText:!this.state.mobileNavOpen?"close navigation":"open navigation"
    })
  }

  render(){
    return (
      <header ref={this.element} className={`header${this.state.stickyClass}`}>
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
          <nav className={`header__nav nav nav-main${this.state.mobileNavOpenClass}`} role="navigation">
            <div className="container nav__container nav__container-toggler">
              <button className="nav__toggler nav__toggler-main" onClick={this.toggleOpen}>
                <FontAwesomeIcon fixedWidth icon={this.state.togglerIcon} className="nav__icon nav__icon-toggler" />
                <span className="sr-only">{`${this.state.togglerText}`}</span>
              </button>
            </div>
            <ul className="nav__list nav__list-main">
              <li className="nav__item nav__item-main nav__item-home">
                <Link to="/" className="nav__link nav__link-main">
                  <FontAwesomeIcon icon={faHome} className="nav__icon nav__icon-main"/>
                  Home
                </Link>
              </li>
              <li className="nav__item nav__item-main">
                <a href="#" className="nav__link nav__link-main">
                  <FontAwesomeIcon icon={faUserAlt} className="nav__icon nav__icon-main"/>
                  About
                </a>
              </li>
              <li className="nav__item nav__item-main">
                <Link to="/work/" className="nav__link nav__link-main">
                  <FontAwesomeIcon icon={faFolderOpen} className="nav__icon nav__icon-main" />
                  Work
                </Link>
              </li>
              <li className="nav__item nav__item-main">
                <a href="#" className="nav__link nav__link-main">
                  <FontAwesomeIcon icon={faEnvelope} className="nav__icon nav__icon-main" />
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
