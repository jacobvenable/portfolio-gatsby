import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/fontawesome-pro-solid';
import { faToolbox } from '@fortawesome/fontawesome-pro-solid';
import { faGithub } from '@fortawesome/fontawesome-free-brands';
import Figure from './../../components/Figure';
import Video from './../../components/Video';

exports.frontmatter = {
    title: 'Purdue Home Page Redesign',
    role: 'Front-end Development',
    blurb: 'A revamp of Purdue\'s home page that gives visitors a chance to customize their page',
    thumb: 'portfolio_purdueHomePage-thumb.png',
    date: '2018-01-01',
    tech: ['GulpJS','HTML5','responsive','SASS','PostCSS','Browserify','Watchify','jQuery','Lazy Loading','ARIA']
}

const PurdueHomePage = ({data}) => (
  <div className="container">
		<h1 aria-describedby="intro">Purdue Home Page Redesign</h1>
		<p className="intro" id="intro">A revamp of Purdue's home page that gives visitors a chance to customize their page</p>
		<div className="container__row">
			<div className="container__column">
				<a href="https://www.purdue.edu/" className="button button--blue-dark">View Live Site</a>
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
						<dd>New components structured with BEM and written/compiled in SCSS</dd>
						<dt>JS</dt>
						<dd>JQuery modules bundled with Browserify + Watchify and minified via Uglify</dd>
						<dt>Back-end</dt>
						<dd>PHP for handling scheduled components</dd>
						<dt>CMS</dt>
						<dd>UI built & data stored in Cascade Server and compiled via Apache Velocity</dd>
					</dl>
				</div>
				<div className="overview__section overview__section--slim">
					<h3><FontAwesomeIcon icon={faClipboardList} className="heading__icon"/>Responsibilities</h3>
					<ul>
						<li className="overview__item">review design for accessibility issues</li>
						<li className="overview__item">use Git and GitHub for version control and tracking progress</li>
						<li className="overview__item">implement custom features according to WCAG 2.0</li>
						<li className="overview__item">test for browser inconsistencies</li>
						<li className="overview__item">implement all content management within Cascade Server</li>
					</ul>
				</div>
			</div>
		</section>
		<Figure full={true} alt='screenshot of features added to the Purdue home page' sizes={data.images.edges.find((image) => image.node.id.replace(/.+\/(.+) absPath of file >> ImageSharp/,'$1').includes("purdueHomePage_overview.png") == true).node.sizes} />
		<section aria-labelledby="dev">
			<h2 id="dev">Development Notes</h2>
			<h3 className="heading--underline">Customization Feature</h3>
			<Video 
				id={data.videos.edges[0].node.name}
				title='Customization in Action'
				poster={data.images.edges.find((image) => image.node.id.replace(/.+\/(.+) absPath of file >> ImageSharp/,'$1').includes("purdueHomePage_customize-poster.png") == true).node.original.src}
				mp4={data.videos.edges.find(video => video.node.extension == 'mp4').node.publicURL}
			/>
		</section>
	</div>
);

export default PurdueHomePage;

export const PurdueHomeQuery = graphql`
	query PurdueHomePageImages {
	  images: allImageSharp(filter:{ id:{ regex:"/purdueHomePage/" }})
	  {
	  	edges{
	      node{
	        id
	        original{
	        	src
	        }
	        sizes(maxWidth:1240){
	        	...GatsbyImageSharpSizes
	        }
	      }
	    }
	  }
	  videos: allFile(filter:{ absolutePath:{ regex:"/videos/customize/" }})
	  {
	    edges{
	      node{
	      	name
	      	publicURL
	        extension
	      }
	    }
	  }
  }
`;