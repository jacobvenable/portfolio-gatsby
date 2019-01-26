import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

/**
 * A functional React component used to place an individual portfolio item on the main 'Work' page.
 * @param {object} props.tech - array of strings containing tech used in the project
 * @param {object} props.thumb - an image sharp object returned from a GraphQl query used to create responsive images
 * @param {number} props.index - the index of the portfolio item in the list of items
 * @param {string} props.title - the title of the project
 * @param {string} props.role - the role played in the project
 * @param {string} props.relativeDirectory - the relative directory of the page the item links to
 * @param {string} props.name - the name of the page the item links to
 */
function PortfolioItem(props){
  let tech = (props.tech && typeof props.tech === 'object' ? props.tech : []);
  if(typeof props.thumb === 'object'){
    return (
    <section
      aria-labelledby={`portfolio__title-${props.index}`}
      className={`portfolio__item${props.index % 2 !== 0 ? " portfolio__item-reverse" : ""}`}>
      <div className={`portfolio__container portfolio__container-details${props.index % 2 !== 0 ? " portfolio__container-details-reverse" : ""}`}>
        <h2
          id={`portfolio__title-${props.index}`}
          className="portfolio__title portfolio__title-item">
            {props.title}
        </h2>
        <p className="portfolio__role portfolio__role-item"><span className="sr-only">My Role: </span>{props.role}</p>
      </div>
      <div className={`portfolio__container portfolio__container-thumb${props.index % 2 !== 0 ? " portfolio__container-thumb-reverse" : ""}`}>
        <Img fluid={props.thumb.node.fluid} className="portfolio__image portfolio__image-item"/>
      </div>
      <div className={`portfolio__container portfolio__container-tech${props.index % 2 !== 0 ? " portfolio__container-tech-reverse" : ""}`}>
        {tech.length > 0 && 
          <ul className="tags">
            {tech.map(tag => <li key={tag.toString()} className="tags__tag">{tag}</li>)}
          </ul>
        }
      </div>
      <div className={`portfolio__container portfolio__container-summary${props.index % 2 !== 0 ? " portfolio__container-summary-reverse" : ""}`}>
        <p className="portfolio__description portfolio__description-item">{props.blurb}</p>
        <Link to={`/${props.relativeDirectory}/${props.name}`} id={`portfolio__link-${props.index}`} className="button button--yellow-light portfolio__button portfolio__button-item" aria-describedby={`portfolio__title-${props.index}`}>More Info</Link>
      </div>
    </section>
    );
  }
  return null;
}

export default PortfolioItem;