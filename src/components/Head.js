import React from 'react';
import Helmet from 'react-helmet';
import OgImageDefault from './../images/meta_og-image-default.png';

/**
 * A functional React component used to place meta data in the <head> section of the page using React Helmet.
 * @param {string} props.title - the title to be applied to the page
 * @param {string} props.description - the description to be applied to the page
 * @param {object} ogImage - the image to be applied to the og:image metadata
 * @param {string} ogImageAlt - the text to be applied to the og:image:alt metadata
 */
function Head(props){
  const baseTitle = 'Jacob Venable: Front-End Developer';
  //set the base title as the title of the page if it is the home page. Otherwise, concatenate the passed props title with the base title.
  const title = (props.title === 'Home' ? baseTitle : `${props.title} - ${baseTitle}`);
  const ogImageAltDefault = 'Jacob Venable logo';
  return (
    <React.Fragment>
      <Helmet>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta name="description" property="og:description" content={props.description} />
        <meta property="og:image" name="twitter:image" content={`https://www.jacobvenable.com${props.ogImage || OgImageDefault}`}/>
        <meta property="og:image:alt" name="twitter:image:alt" content={props.ogImageAlt || ogImageAltDefault}/>
      </Helmet>
    </React.Fragment>
  );
}

export default Head;