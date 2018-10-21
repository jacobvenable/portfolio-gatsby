import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

class PortfolioItem extends React.Component {
  constructor(props) {
    super(props);
    this.index = props.index;
    this.title = props.title;
    this.role = props.role;
    this.tech = (props.tech && typeof props.tech === 'object' ? props.tech : []);
    this.thumb = props.thumb;
    this.blurb = props.blurb;
    this.relativeDirectory = props.relativeDirectory;
    this.name = props.name;
  }

  render(){
    if(typeof this.thumb === 'object'){
      return (
      <section aria-labelledby={`portfolio__title-${this.index}`} className={`portfolio__item${this.index % 2 !== 0 ? " portfolio__item-reverse" : ""}`}>
        <div className={`portfolio__container portfolio__container-details${this.index % 2 !== 0 ? " portfolio__container-details-reverse" : ""}`}>
          <h2 id={`portfolio__title-${this.index}`} className="portfolio__title portfolio__title-item">{this.title}</h2>
          <p className="portfolio__role portfolio__role-item"><span className="sr-only">My Role: </span>{this.role}</p>
        </div>
        <div className={`portfolio__container portfolio__container-tech${this.index % 2 !== 0 ? " portfolio__container-tech-reverse" : ""}`}>
          {this.tech.length > 0 && 
            <ul className="tags">
              {this.tech.map(tag => <li key={tag.toString()} className="tags__tag">{tag}</li>)}
            </ul>
          }
        </div>
        <div className={`portfolio__container portfolio__container-thumb${this.index % 2 !== 0 ? " portfolio__container-thumb-reverse" : ""}`}>
          <Img fluid={this.thumb.node.fluid} className="portfolio__image portfolio__image-item"/>
        </div>
        <div className={`portfolio__container portfolio__container-summary${this.index % 2 !== 0 ? " portfolio__container-summary-reverse" : ""}`}>
          <p className="portfolio__description portfolio__description-item">{this.blurb}</p>
          <Link to={`/${this.relativeDirectory}/${this.name}`} id={`portfolio__link-${this.index}`} className="button button--yellow-light portfolio__button portfolio__button-item" aria-describedby={`portfolio__title-${this.index}`}>More Info</Link>
        </div>
      </section>
      );
    }
    return null;
  }
}

export default PortfolioItem;