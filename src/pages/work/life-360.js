import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

exports.frontmatter = {
    title: 'Life 360',
    role: 'Front-end Development',
    blurb: 'Custom-built magazine site to showcase people, places and events from across the College of Health and Human Sciences.',
    thumb: 'portfolio_life360-thumb.jpg',
    date: '2016-11-01',
    tech: ['GulpJS','HTML5','PostCSS','cssnext','Vanilla JS']
}

const Life360Page = ({data}) => (
  <div className="container">
		<h1>Life 360</h1>
		<p>Life 360 is an annual print and online magazine released by the Purdue College of Health and Human Sciences (HHS) featuring stories highlighting students, staff, faculty, and alumni of HHS.</p>
		<h2>Overview</h2>
		<h3>Responsibilities</h3>
		<ul>
			<li>review design for accessibility issues</li>
			<li>develop reuseable components and templates based on design</li>
			<li>test site for unintended browser inconsistencies</li>
		</ul>
		<h3>Tech</h3>
		<dl>
			<dt>Worflow Manager</dt>
			<dd><a href="https://gulpjs.com/">Gulp.js</a></dd>
			<dt>CSS</dt>
			<dd>Structured with <a href="http://getbem.com/">BEM</a> and processed by <a href="http://cssnext.io/">PostCSS-cssnext</a></dd>
			<dt>JS</dt>
			<dd>Vanilla JS linted by <a href="http://jshint.com/about/">JSHint</a> and minified via <a href="http://lisperator.net/uglifyjs/">UglifyJS</a></dd>
		</dl>
	</div>
);

export default Life360Page;
