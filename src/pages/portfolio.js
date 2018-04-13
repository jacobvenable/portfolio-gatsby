import React from 'react';
import Link from 'gatsby-link';

import TriangleMask from './../components/TriangleMask';

import life360Thumb from './../images/portfolio_life360-thumb.jpg';
import boilerLifeThumb from './../images/portfolio_boilerlife-thumb.jpg';

const PortfolioPage = () => (
  <div className="container">
		<h1>Work</h1>
		<section aria-labelled-by="portfolio__title-1" className="portfolio__item">
			<div className="portfolio__container portfolio__container-details">
				<h2 id="portfolio__title-1" className="portfolio__title portfolio__title-item">Life 360</h2>
				<p className="portfolio__role portfolio__role-item"><span className="portfolio__role-sr"></span>Front-end Development</p>
			</div>
			<a href="#" aria-labelled-by="portfolio__link-1" className="portfolio__container portfolio__container-thumb">
				<img src={life360Thumb} alt="" className="portfolio__image portfolio__image-item"/>
			</a>
			<div className="portfolio__container portfolio__container-summary">
				<p className="portfolio__description portfolio__description-item">Custom-built magazine template to showcase people, places and events from across the College of Health and Human Sciences.</p>
				<a href="#" id="portfolio__link-1" className="button button-outline button-yellow-light portfolio__button portfolio__button-item">More Info</a>
			</div>
		</section>
		<section aria-labelled-by="portfolio__title-2" className="portfolio__item portfolio__item-reverse">
			<div className="portfolio__container portfolio__container-details portfolio__container-details-reverse">
				<h2 id="portfolio__title-2" className="portfolio__title portfolio__title-item">Boiler Life</h2>
				<p className="portfolio__role portfolio__role-item"><span className="portfolio__role-sr"></span>Front-end Development , CMS Implementation</p>
			</div>
			<a href="#" aria-labelled-by="portfolio__link-2" className="portfolio__container portfolio__container-thumb portfolio__container-thumb-reverse">
				<img src={boilerLifeThumb} alt="" className="portfolio__image portfolio__image-item"/>
			</a>
			<div className="portfolio__container portfolio__container-summary portfolio__container-summary-reverse">
				<p className="portfolio__description portfolio__description-item">Social media marketing campaign with a custom-designed microsite, showcasing stories of Purdue students, groups and alumni.</p>
				<a href="#" id="portfolio__link-2" className="button button-outline button-yellow-light portfolio__button portfolio__button-item">More Info</a>
			</div>
		</section>
		<TriangleMask />
	</div>
);

export default PortfolioPage;