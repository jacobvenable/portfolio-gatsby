import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

const PortfolioItem = props => {
  return <section aria-labelledby={`portfolio__title-${props.index}`} className={`portfolio__item${props.index % 2 != 0 ? " portfolio__item-reverse" : ""}`}>
    <div className={`portfolio__container portfolio__container-details${props.index % 2 != 0 ? " portfolio__container-details-reverse" : ""}`}>
      <h2 id={`portfolio__title-${props.index}`} className="portfolio__title portfolio__title-item">{props.title}</h2>
      <p className="portfolio__role portfolio__role-item"><span className="sr-only">My Role: </span>{props.role}</p>
    </div>
    <div className={`portfolio__container portfolio__container-thumb${props.index % 2 != 0 ? " portfolio__container-thumb-reverse" : ""}`}>
      {<Img sizes={props.thumb.node.sizes} className="portfolio__image portfolio__image-item"/>}
    </div>
    <div className={`portfolio__container portfolio__container-summary${props.index % 2 != 0 ? " portfolio__container-summary-reverse" : ""}`}>
      <p className="portfolio__description portfolio__description-item">{props.blurb}</p>
      <Link to={`/${props.relativeDirectory}/${props.name}`} id={`portfolio__link-${props.index}`} className="button button--yellow-light portfolio__button portfolio__button-item" aria-describedby={`portfolio__title-${props.index}`}>More Info</Link>
    </div>
  </section>;
};

export default PortfolioItem;