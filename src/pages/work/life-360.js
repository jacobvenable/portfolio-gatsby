import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

exports.frontmatter = {
    title: 'Life 360',
    role: 'Front-end Development',
    blurb: 'Custom-built magazine template to showcase people, places and events from across the College of Health and Human Sciences.',
    thumb: 'portfolio_life360-thumb.jpg',
    date: '2016-11-01'
}

const BoilerLifePage = ({data}) => (
  <div className="container">
		<h1>Life 360</h1>
	</div>
);

export default BoilerLifePage;
