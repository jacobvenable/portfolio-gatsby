import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/fontawesome-pro-solid';
import { faToolbox } from '@fortawesome/fontawesome-pro-solid';
import { faGithub } from '@fortawesome/fontawesome-free-brands';
import Figure from './../../components/Figure';
import CodeSection from './../../components/CodeSection';

exports.frontmatter = {
    title: 'Life 360',
    role: 'Front-end Development',
    blurb: 'Custom-built magazine site to showcase people, places and events from across the College of Health and Human Sciences.',
    thumb: 'portfolio_life360-thumb.jpg',
    date: '2016-11-01',
    tech: ['GulpJS','HTML5','responsive','PostCSS','cssnext','Vanilla JS','lazy loading']
}

const Life360Page = ({data}) => (
  <div className="container">
		<h1 aria-describedby="intro">Life 360</h1>
		<p className="intro" id="intro">The online magazine of the Purdue College of Health and Human Sciences (HHS)</p>
		<div className="container__row">
			<div className="container__column">
				<a href="#" className="button button--icon button--yellow-light-reverse"><span className="sr-only">View GitHub Repository</span><FontAwesomeIcon icon={faGithub}/></a>
			</div>
			<div className="container__column">
				<a href="https://www.purdue.edu/hhs/life360/index-old.html" className="button button--blue-dark">View Live Site</a>
			</div>
		</div>
		<section aria-labelledby="overview">
			<h2 id="overview">Overview</h2>
			<div className="overview">
				<div className="overview__section">
					<h3><FontAwesomeIcon icon={faToolbox} className="heading__icon"/>Tech</h3>
					<dl>
						<dt>Task Runner</dt>
						<dd>Gulp.js</dd>
						<dt>CSS</dt>
						<dd>Structured with BEM and processed by PostCSS-cssnext</dd>
						<dt>JS</dt>
						<dd>Vanilla JS linted by JSHint and minified via UglifyJS</dd>
						<dt>CMS</dt>
						<dd>UI built & data stored in Cascade Server and compiled via Apache Velocity</dd>
					</dl>
				</div>
				<div className="overview__section overview__section--slim">
					<h3><FontAwesomeIcon icon={faClipboardList} className="heading__icon"/>Responsibilities</h3>
					<ul>
						<li className="overview__item">review design for accessibility issues</li>
						<li className="overview__item">use Git and GitHub for version control and tracking progress</li>
						<li className="overview__item">develop reuseable components and templates based on design</li>
						<li className="overview__item">test for browser inconsistencies</li>
						<li className="overview__item">implement the site within the CMS</li>
					</ul>
				</div>
			</div>
		</section>
		<Figure full={true} caption='the main "cover" story of the home page' sizes={data.images.edges.find((image) => image.node.id.replace(/.+\/(.+) absPath of file >> ImageSharp/,'$1').includes("life360_home-cover-desktop.png") == true).node.sizes} />
		<section aria-labelledby="dev">
			<h2 id="dev">Development Notes</h2>
			<p>After being inspired at the University of Illinois' <a href="http://webcon.illinois.edu/">Webcon</a>, I decided this site as an opportunity to implement new methodology and tech:</p>
			<ul>
				<li>using <a href="http://getbem.com/">BEM</a> to structure CSS classes</li>
				<li>using <a href="http://cssnext.io/">PostCSS-cssnext</a> to compile CSS</li>
			</ul>
			<h3 className="heading--underline">BEM &#8212; Block Element Modifier</h3>
			<p>Implementing BEM in this project was my first, hands-on experience with using a CSS methodology, and I'm not sure how I survived without one. While I tried using descriptive class names before, having a clear organization to the type of element being styled was a game-changer.</p>
			<Figure full={true} caption='BEM was especially helpful when styling the various components that shared elements.' alt='example of desktop version of featured stories section of home page' sizes={data.images.edges.find((image) => image.node.id.replace(/.+\/(.+) absPath of file >> ImageSharp/,'$1').includes("life360_home-featured-desktop.png") == true).node.sizes} />
			<Figure full={true} caption='' alt='example of desktop version of highlighted and other stories sections of home page' sizes={data.images.edges.find((image) => image.node.id.replace(/.+\/(.+) absPath of file >> ImageSharp/,'$1').includes("life360_home-highlights-desktop.png") == true).node.sizes} />
			<h3 className="heading--underline">PostCSS-cssnext</h3>
			<p>cssnext was pitched as an alternative to SASS or LESS that, instead, compile the future spec of CSS into CSS that is available now. Using it seemed like a no-brainer. The point of using a CSS preprocessor was to fill-in the shortcomings of the current state language. Why not use the future spec of the language rather than using an entirely different one?</p>
			<p>As I continued through the project, I started noticing that even the future spec didn't have some features I used in SCSS:</p>
			<ul>
				<li>mixins with parameter support</li>
				<li>functions with the ability to return a value rather than a CSS property</li>
			</ul>
			<p>For example, I usually convert my font-sizes, that I usually receive as a pixel value, to rems in order to allow the user to resize them via the browser. This also removes the issue of tracking if the font-size property on a parent element was set.</p>
			<CodeSection language="css" code={
`/* font-size conversion via cssnext */
:root{
	font-size:1rem;
	--baseFontSize:16; /* default font-size (in pixels) of most browsers */
}
.event__title{
	font-size:calc(20/var(--baseFontSize)*1rem); /* 1.25rems (20px) */
}
.event__description{
	font-size:calc(14/var(--baseFontSize)*1rem); /* 0.875rems (14px) */
}`
			}/>
			<p>Setting something as simple as converting the font-size is quite wordy in cssnext. In contrast, SCSS allows me to create a function that I can name in a friendlier manner.</p>
			<CodeSection language="scss" code={
`/* font-size conversion via scss */
$font-size-px:16;
@function convert-toRem($i){
	@return $i/$font-size-px*1rem
}
.event__title{
	font-size:convert-toRem(20); /* 1.25rems (20px) */
}
.event__description{
	font-size:convert-toRem(14); /* 0.875rems (14px) */
}`
			}/>
			<p>While I could have used a mixture of SCSS and cssnext, I believe that it would have defeated the purpose of using cssnext in the first place. Overall, it was an interesting experiment, but I don't think cssnext will be added to my preferred toolset.</p>
		</section>
	</div>
);

export default Life360Page;

export const life360Query = graphql`
	query Life360Images {
	  images: allImageSharp(filter:{ id:{ regex:"/life360/" }})
	  {
	  	edges{
	      node{
	        id
	        sizes(maxWidth:1240){
	        	...GatsbyImageSharpSizes
	        }
	      }
	    }
	  }
  }
`;