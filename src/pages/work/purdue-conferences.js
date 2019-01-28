import React from 'react';
import Layout from './../../components/Layout';
import Head from './../../components/Head';
import { graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/fontawesome-pro-solid';
import { faToolbox } from '@fortawesome/fontawesome-pro-solid';
import Figure from './../../components/Figure';
import CodeSection from './../../components/CodeSection';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import ogImage from './../../images/purdueConferences_ogImage.png';

export const frontmatter = {
    title: 'Purdue Conferences',
    role: 'Front-End Development, CMS Implementation',
    blurb: 'the main landing site for Purdue Conferences',
    thumb: 'portfolio_purdueConferences-thumb.png',
    date: '2019-01-01',
    tech: ['GulpJS','HTML5','responsive','flexbox','grid','SCSS','PostCSS','BEM','ITCSS','vanilla JS','lazy loading','Browserify','Watchify','Handlebars']
}

const PurdueConferencesPage = ({data}) => (
	<Layout>
    <Head
      title="Purdue Conferences"
      description="The main landing site for Purdue Conferences, which was developed by Jacob Venable."
      ogImage={ogImage}
      ogImageAlt='screenshot of the Purdue Conferences site'
    />
	  <div className="container">
			<h1 aria-describedby="intro">Purdue Conferences</h1>
			<p className="intro" id="intro">the main landing site for Purdue Conferences</p>
			<div className="container__row">
				<div className="container__column">
					<OutboundLink
			      href="https://www.purdue.edu/conferences/index.php"
			      className="button button--blue-dark"
					>
						View Live Site
					</OutboundLink>
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
							<dt>Templating</dt>
							<dd>reusable components generated via Handlebars</dd>
							<dt>CSS</dt>
							<dd>flexbox and grid layout structured with BEM and ITCSS</dd>
							<dt>JS</dt>
							<dd>vanilla JS bundled with Browserify and Watchify</dd>
							<dt>CMS</dt>
							<dd>UI built & data stored in Cascade Server and compiled via Apache Velocity</dd>
						</dl>
					</div>
					<div className="overview__section overview__section--slim">
						<h3><FontAwesomeIcon icon={faClipboardList} className="heading__icon"/>Responsibilities</h3>
						<ul>
							<li className="overview__item">review design for accessibility issues</li>
							<li className="overview__item">use Git and GitHub for version control and tracking progress</li>
							<li className="overview__item">develop reusable components and templates based on design</li>
							<li className="overview__item">test for browser inconsistencies</li>
							<li className="overview__item">implement the site within the CMS</li>
						</ul>
					</div>
				</div>
			</section>
			<Figure 
				full={true} 
				caption='the home page of the site, which implements CSS grid' 
				alt='' 
				fluid={
					data.images.edges.find((image) => {
						return image.node.fluid.originalName.includes('purdueConferences_content-desktop.png');
					}).node.fluid
				}
			/>
			<section aria-labelledby="dev">
				<h2 id="dev">Development Notes</h2>
				<p>The layouts proposed in the design of this site were trickier than others I've done in the past. This and difficulties with past projects called for some new approaches:</p>
				<ul>
					<li>using CSS grid and flexbox</li>
					<li>implementing <OutboundLink href="https://handlebarsjs.com/">Handlebars</OutboundLink> to handle templating</li>
				</ul>
				<h3 className="heading--underline">Using CSS Grid and Flexbox</h3>
				<p>CSS flexbox had been in my toolset for over a year since the start of this project; however, the overlapping rows of the home page along with the desired order of content didn't really work for flexbox.</p>
				<Figure 
					full={true} 
					caption='the home page of the site, which implements CSS grid' 
					alt='' 
					fluid={
						data.images.edges.find((image) => {
							return image.node.fluid.originalName.includes('purdueConferences_home-desktop.png');
						}).node.fluid
					}
				/>
				<p>Instead, I decided to use CSS grid to create this layout. I had avoided grid in the past because it had proven difficult to manage within IE11, the oldest browser we needed to support. Most of the layouts we created in the past could be handled with flexbox anyways, so there was no point in spending extra time to implement grid. Grid was acceptable to use in this instance since flexbox wouldn't work.</p>
				<p>As a fallback for IE11, I decided to take a similar <OutboundLink href="https://slack.engineering/rebuilding-slack-com-b124c405c193">approach</OutboundLink> that the Slack team used in their latest redesign. This called for wrapping any use of grid within <OutboundLink href="https://developer.mozilla.org/en-US/docs/Web/CSS/@supports">@supports rule</OutboundLink>. Since IE doesn't understand @supports, I was free to provide a flexbox backup.</p>
				<CodeSection language="scss" code={
					data.markdown.edges.find((edge) => {
						return edge.node.fileAbsolutePath.includes('scss-grid-01');
					}).node.html
				}/>
				<p>This approach did mean that IE11 would not have the desired layout, but still have a usable, appealing fallback.</p>
				<h3 className="heading--underline">Implementing Handlebars</h3>
				<p>The reason for using <OutboundLink href="https://handlebarsjs.com/">Handlebars</OutboundLink> during development was to have the ability to create more flexible components. In the past, I had simply used <OutboundLink href="https://github.com/coderhaoxin/gulp-file-include">gulp-file-include</OutboundLink> in order to handle templating various components and page types. The problem with this plugin is that it didn't provide enough flexibility with its conditionals. For example, if I wanted to include a button that has four different looks depending on the used modifiers, I'd have to have multiple conditionals.</p>
				<CodeSection language="html" code={
					data.markdown.edges.find((edge) => {
						return edge.node.fileAbsolutePath.includes('html-handlebars-01');
					}).node.html
				}/>
				<p>This meant that I could need to have a conditional for every possible class combination. Gross, right?</p>
				<p>Writing the same thing using Handlebars would be much shorter.</p>
				<CodeSection language="handlebars" code={
					data.markdown.edges.find((edge) => {
						return edge.node.fileAbsolutePath.includes('hb-handlebars-01');
					}).node.html
				}/>
				<p>Using Handlebars did have a drawback though. There were some components that didn't have a large level of customization, which meant they didn't need various conditionals assigned to properties; however, the way it was built meant that that I still needed to create the Handlebars partial, import the partial into the template, and pass properties to the component.</p>
				<p>In the end, I decided that Handlebars is a good for creating flexible components when we're not also implementing the site within a CMS. Otherwise, it's easier to create quicker, simple HTML snippets.</p>
			</section>
		</div>
	</Layout>
);

export default PurdueConferencesPage;

export const purdueConferencesQuery = graphql`
	query PurdueConferencesImages {
	  images: allImageSharp(
	  	filter:{
	  		original:{
	  			src:{
	  				regex:"/purdueConferences/"
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
	        regex:"/purdue-conferences/"
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