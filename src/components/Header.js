import React from 'react';
import Link from 'gatsby-link';
//import StickyFill from 'stickyfilljs';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import faBars from '@fortawesome/fontawesome-pro-solid/faBars';
import faHome from '@fortawesome/fontawesome-pro-solid/faHome';
import faTimes from '@fortawesome/fontawesome-pro-light/faTimes';
import faUserAlt from '@fortawesome/fontawesome-pro-solid/faUserAlt';
import faFolderOpen from '@fortawesome/fontawesome-pro-solid/faFolderOpen';
import faEnvelope from '@fortawesome/fontawesome-pro-solid/faEnvelope';


import logoSvg from './../images/logo.svg';
//import logoPng from './../../images/logo.png';

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
    //this.checkStick();
    //window.addEventListener('scroll', e => { this.checkStick() });
  }

  checkStick(){
    if(!this.state.checkingStick)
    {
      this.setState({checkingStick:true});
      setTimeout(
        () => {
          if((window.pageYOffset <= 0 && this.state.sticky) || (window.pageYOffset > 0 && !this.state.sticky)) this.toggleSticky();
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

  navItem(link,text,icon,home = false){
    return(
      <li className={`nav__item nav__item-main${home?' nav__item-home':''}`}>
        <Link to={link} className={`nav__link nav__link-main`} activeClassName="nav__link-main-current">
          <FontAwesomeIcon icon={icon} className="nav__icon nav__icon-main"/>
          {text}
        </Link>
      </li>
    );
  }

  render(){
    return (
      <header ref={this.element} className={`header${this.state.stickyClass}`}>
        <div className="container header__container">
          <Link to="/" className="header__link header__link-logo">
            <div to="/" className="header__container header__container-logo">
              <span className="sr-hidden">Home</span> 
              <div className="svg header__logo">
                <img src={logoSvg} alt="logo" className="svg__object"/>
              </div>
            </div>
            <div className="header__heading">
              <span className="header__name">Jacob Venable </span>
              <span className="sr-hidden">&#8212;</span> 
              <span className="header__title">Front-End Web Developer</span>
            </div>
          </Link>
          <nav className={`header__nav nav nav-main${this.state.mobileNavOpenClass}`} role="navigation">
            <div className="container nav__container nav__container-toggler">
              <button className="nav__toggler nav__toggler-main" onClick={this.toggleOpen}>
                <FontAwesomeIcon fixedWidth icon={this.state.togglerIcon} className="nav__icon nav__icon-toggler" />
                <span className="sr-only">{`${this.state.togglerText}`}</span>
              </button>
            </div>
            <ul className="nav__list nav__list-main">
              {this.navItem('/','Home',faHome,true)}
              {this.navItem('/skills/','Skills',faUserAlt,false)}
              {this.navItem('/work/','Work',faFolderOpen,false)}
              {this.navItem('/contact/','Contact',faEnvelope,false)}
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default Header;
