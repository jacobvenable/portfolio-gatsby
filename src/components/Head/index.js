import React from 'react';
import Helmet from 'react-helmet';
import OgImageDefault from './../../images/meta_og-image-default.png';

class Head extends React.Component {
  constructor(props){
    super(props);
    this.baseTitle = 'Jacob Venable: Front-End Developer';
    this.title = (this.props.title === 'Home' ? this.baseTitle : `${this.props.title} - ${this.baseTitle}`);
    this.ogImageDefault = OgImageDefault;
    this.ogImageAltDefault = 'Jacob Venable logo';
  }

  render(){
    return (
      <React.Fragment>
        <Helmet>
          <title>{this.title}</title>
          <meta property="og:title" content={this.title}/>
          <meta name="description" property="og:description" content={this.props.description}/>
          <meta property="og:image" name="twitter:image" content={`https://www.jacobvenable.com${this.props.ogImage || this.ogImageDefault}`}/>
          <meta property="og:image:alt" name="twitter:image:alt" content={this.props.ogImageAlt || this.ogImageAltDefault}/>
        </Helmet>
      </React.Fragment>
    );
  }
}

export default Head;
