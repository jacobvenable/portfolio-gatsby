import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

exports.frontmatter = {
    title: 'Boiler Life',
    role: 'Front-end Development , CMS Implementation',
    blurb: 'A social media marketing campaign with a custom-designed microsite, showcasing stories of Purdue students, groups and alumni.',
    thumb: 'portfolio_boilerlife-thumb.jpg',
    date: '2015-11-01'
}

const BoilerLifePage = ({data}) => (
  <div className="container">
		<h1>Boiler Life</h1>
		
	</div>
);

export default BoilerLifePage;
