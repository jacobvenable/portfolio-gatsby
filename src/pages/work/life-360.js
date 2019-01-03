import React from 'react';
import Layout from './../../components/Layout';
import Head from './../../components/Head';
import { graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/fontawesome-pro-solid';
import { faToolbox } from '@fortawesome/fontawesome-pro-solid';
import Figure from './../../components/Figure';
import CodeSection from './../../components/CodeSection';

import ogImage from './../../images/life360_ogImage.png';

export const frontmatter = {
    title: 'Life 360',
    role: 'Front-End Development',
    blurb: 'custom-built magazine site to showcase people, places and events from across the College of Health and Human Sciences',
    thumb: 'portfolio_life360-thumb.jpg',
    date: '2016-11-01',
    tech: ['GulpJS','HTML5','responsive','PostCSS','cssnext','vanilla JS','lazy loading']
}

const Life360Page = ({data}) => (
	<Layout>
    <Head
      title="Life 360"
      description="A custom-built magazine site, developed by Jacob Venable, to showcase people, places and events from across the College of Health and Human Sciences."
      ogImage={ogImage}
      ogImageAlt='screenshot of the Life 360 site'
    />
	  <div className="container">
			<h1 aria-describedby="intro">Life 360</h1>
			<p className="intro" id="intro">the online magazine of the Purdue College of Health and Human Sciences (HHS)</p>
			<div className="container__row">
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
							<dd>structured with BEM and processed by PostCSS-cssnext</dd>
							<dt>JS</dt>
							<dd>vanilla JS linted by JSHint and minified via UglifyJS</dd>
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
			<Figure 
				full={true} 
				caption='the main "cover" story of the home page' 
				alt='' 
				fluid={
					data.images.edges.find((image) => {
						return image.node.fluid.originalName.includes('life360_home-cover-desktop.png');
					}).node.fluid
				}
			/>
			<section aria-labelledby="dev">
				<h2 id="dev">Development Notes</h2>
				<p>After being inspired at the University of Illinois' <a href="http://webcon.illinois.edu/">Webcon</a>, I decided this site was an opportunity to implement new methodology and tech:</p>
				<ul>
					<li>using <a href="http://getbem.com/">BEM</a> to structure CSS classes</li>
					<li>using <a href="http://cssnext.io/">PostCSS-cssnext</a> to compile CSS</li>
				</ul>
				<h3 className="heading--underline">BEM &#8212; Block Element Modifier</h3>
				<p>Implementing BEM in this project was my first, hands-on experience with using a CSS methodology, and I'm not sure how I survived without one. While I tried using descriptive class names before, having a clear organization to the type of element being styled was a game-changer.</p>
				<Figure 
					full={true} 
					caption='BEM was especially helpful when styling the various components that shared elements.' 
					alt='example of desktop version of featured stories section of home page' 
					fluid={
						data.images.edges.find((image) => {
							return image.node.fluid.originalName.includes('life360_home-featured-desktop.png');
						}).node.fluid
					}
				/>
				<Figure 
					full={true} 
					caption='' 
					alt='example of desktop version of highlighted and other stories sections of home page' 
					fluid={
						data.images.edges.find((image) => {
							return image.node.fluid.originalName.includes('life360_home-highlights-desktop.png');
						}).node.fluid
					}
				/>
				<h3 className="heading--underline">PostCSS-cssnext</h3>
				<p>cssnext was pitched as an alternative to SASS or LESS that, instead, compile the future spec of CSS into CSS that is available now. Using it seemed like a no-brainer. The point of using a CSS preprocessor was to fill-in the shortcomings of the current state language. Why not use the future spec of the language rather than using an entirely different one?</p>
				<p>As I continued through the project, I started noticing that even the future spec didn't have some features I used in SCSS:</p>
				<ul>
					<li>mixins with parameter support</li>
					<li>functions with the ability to return a value rather than a CSS property</li>
				</ul>
				<p>For example, I usually convert my font-sizes, usually received as a pixel value, to rems in order to allow the user to resize them via the browser.</p>
				<CodeSection language="css" code={
					data.markdown.edges.find((edge) => {
						return edge.node.fileAbsolutePath.includes('css-cssnext');
					}).node.html
				}/>
				<p>Setting something as simple as converting the font-size is quite wordy in cssnext. In contrast, SCSS allows me to create a function that I can name in a friendlier manner.</p>
				<CodeSection language="scss" code={
					data.markdown.edges.find((edge) => {
						return edge.node.fileAbsolutePath.includes('scss-vs');
					}).node.html
				}/>
				<p>While I could have used a mixture of SCSS and cssnext, I believe that it would have defeated the purpose of using cssnext in the first place. Overall, it was an interesting experiment, but I don't think cssnext will be added to my preferred toolset.</p>
			</section>
		</div>
	</Layout>
);

export default Life360Page;

export const life360Query = graphql`
	query Life360Images {
	  images: allImageSharp(
	  	filter:{
	  		original:{
	  			src:{
	  				regex:"/life360/"
	  			}
	  		}
	  	}
	  )
	  {
	  	edges{
	      node{
	        id
	        original{
	        	src
	        }
	        fluid(maxWidth:1240){
	          base64
	          tracedSVG
	          aspectRatio
	          src
	          srcSet
	          srcWebp
	          srcSetWebp
	          sizes
	          originalImg
	          originalName
	          presentationWidth
	          presentationHeight
	        }
	      }
	    }
	  }
	  markdown: allMarkdownRemark(
	    filter:{
	      fileAbsolutePath:{
	        regex:"/life360/"
	      }
	    }
	  ){
	    edges{
	      node{
	        html
	        fileAbsolutePath
	      }
	  	}
	  }
  }
`;