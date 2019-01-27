import React from 'react';
import Layout from './../../components/Layout';
import Head from './../../components/Head';
import { graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/fontawesome-pro-solid';
import { faToolbox } from '@fortawesome/fontawesome-pro-solid';
import { faGithub } from '@fortawesome/fontawesome-free-brands';
import Figure from './../../components/Figure';
import CodeSection from './../../components/CodeSection';
import { OutboundLink } from 'gatsby-plugin-google-analytics';

import ogImage from './../../images/purdueConferences_ogImage.png';

export const frontmatter = {
    title: 'Personal Portfolio',
    role: 'Front-End Development',
    blurb: 'my personal portfolio site (the one you\'re looking at now)',
    thumb: 'portfolio_gatsby-thumb.png',
    date: '2019-02-01',
    tech: ['React','GatsbyJS','HTML5','responsive','flexbox','grid','SCSS','BEM','ITCSS','GraphQL']
}

const PurdueConferencesPage = ({data}) => (
	<Layout>
    <Head
      title="Personal Portfolio"
      description="The main landing site for Purdue Conferences, which was developed by Jacob Venable."
      ogImage={ogImage}
      ogImageAlt='screenshot of the Purdue Conferences site'
    />
	  <div className="container">
			<h1 aria-describedby="intro">Personal Portfolio</h1>
			<p className="intro" id="intro">my personal portfolio site (the one you're looking at now)</p>
			<div className="container__row">
				<div className="container__column">
					<OutboundLink
			      href="https://github.com/jacobvenable/portfolio-gatsby/"
			      className="button button--icon button--yellow-light-reverse"
					>
						<span className="sr-only">View GitHub Repository</span><FontAwesomeIcon icon={faGithub}/>
					</OutboundLink>
				</div>
			</div>
			<section aria-labelledby="overview">
				<h2 id="overview">Overview</h2>
				<div className="overview">
					<div className="overview__section">
						<h3><FontAwesomeIcon icon={faToolbox} className="heading__icon"/>Tech</h3>
						<dl>
							<dt>Static Site Generator</dt>
							<dd>GatsbyJS</dd>
							<dt>CSS</dt>
							<dd>flexbox and grid layout structured with BEM and ITCSS</dd>
							<dt>JS and Framework</dt>
							<dd>ES6 JS + React</dd>
						</dl>
					</div>
					<div className="overview__section overview__section--slim">
						<h3><FontAwesomeIcon icon={faClipboardList} className="heading__icon"/>Responsibilities</h3>
						<ul>
							<li className="overview__item">create the design of the site using a combination of Adobe Photoshop and Adobe Illustrator with accessibility in mind</li>
							<li className="overview__item">write content</li>
							<li className="overview__item">use Git and GitHub for version control and tracking progress</li>
							<li className="overview__item">develop React components to be used within GatsbyJS</li>
							<li className="overview__item">test for browser inconsistencies</li>
						</ul>
					</div>
				</div>
			</section>
			<section aria-labelledby="dev">
				<h2 id="dev">Development Notes</h2>
				<p>Since early 2018, I've been teaching myself (and falling in love with) <OutboundLink href="https://reactjs.org/">React</OutboundLink>. Since I was in desparate need for an upd`ated personal portfolio, I wanted to find a way to fit React into the equation. While I could create a single page application for my portfolio, it didn't really do me any favors in terms of SEO. That's when I stumbled upon <OutboundLink href="https://www.gatsbyjs.org/">GatsbyJS</OutboundLink>.</p>
				<h3 className="heading--underline">GatsbyJS</h3>
				<p>Gatbsy is a React-based static site generator, meaning it can create a site with multiple using React components. Basically, each individual page within the site are their own component that you can import other components into. Using each component's render method, Gatsby will build the page that is served as a static HTML document.</p>
				<p>For example, some components I created to be used on each page of this site include the following:</p>
				<ul>
					<li><OutboundLink href="https://github.com/jacobvenable/portfolio-gatsby/blob/master/src/components/Head.js">Head</OutboundLink> &#8212; a component used to set some needed metadata on each page</li>
					<li><OutboundLink href="https://github.com/jacobvenable/portfolio-gatsby/blob/master/src/components/Header.js">Header</OutboundLink> &#8212; a component containing the JSX of the header displayed on each page</li>
					<li><OutboundLink href="https://github.com/jacobvenable/portfolio-gatsby/blob/master/src/components/Footer.js">Footer</OutboundLink> &#8212; a component containing the JSX of the footer displayed on each page</li>
				</ul>
				<h4>Dynamic Components</h4>
				<p>The nice thing about Gatsby is that you can still use React to create dynamic elements. An example of a dynamic component created for my portfolio was <OutboundLink href="https://github.com/jacobvenable/portfolio-gatsby/blob/master/src/components/Video.js">Video</OutboundLink>, a custom video player.</p>
				<p>While the video player itself is inserted into the static page via its render method, controlling the video is all handled using built-in methods.</p>
				<CodeSection language="javascript" code={
					data.markdown.edges.find((edge) => {
						return edge.node.fileAbsolutePath.includes('js-video');
					}).node.html
				}/>
				<p>In the example above, there is a button element that has a click event, which calls the Video component's toggleVideo method. This is how dynamic components can be implemented within your site.</p>
				<p>If needed, you could even go further and import other components dynamically.</p>
				<h4>GraphQL</h4>
				<p>Another bonus to using GatsbyJS is the ability to query your site's data via GraphQL. This means you can dynamically query your pages, markdown files, images, etc. and use that data to output content. When combined with some of <OutboundLink href="https://www.gatsbyjs.org/plugins/">GatsbyJS plugins</OutboundLink>, you have a lot of flexibility.</p>
				<p>An example where this came in handy for my site was dynamically generating the main <a href="/work/">work page</a>. I didn't want to have to add a new piece of work manually; instead, I decided it would be better to query all my work pages, and insert the items automatically.</p>
				<p>To accomplish this, I combined a GraphQL query and the <OutboundLink href="https://www.gatsbyjs.org/packages/gatsby-transformer-javascript-frontmatter/?=frontmatter">gatsby-transformer-javascript-frontmatter plugin</OutboundLink>. At the top of each individual work page, I placed a snippet like the one below (this is the snippet placed for this page).</p>
				<CodeSection language="javascript" code={
					data.markdown.edges.find((edge) => {
						return edge.node.fileAbsolutePath.includes('js-graphql-01');
					}).node.html
				}/>
				<p>Then on the main work page I create a GraphQL query to grab the frontmatter placed on each individual work page.</p>
				<CodeSection language="javascript" code={
					data.markdown.edges.find((edge) => {
						return edge.node.fileAbsolutePath.includes('js-graphql-02');
					}).node.html
				}/>
				<p>The data from the query is can then be used within the page by passing an object containing 'data'. As shown in the example above, I created a <OutboundLink href="https://github.com/jacobvenable/portfolio-gatsby/blob/master/src/components/PortfolioItems.js">PortofolioItems</OutboundLink> component to handle the data.</p>
				<CodeSection language="javascript" code={
					data.markdown.edges.find((edge) => {
						return edge.node.fileAbsolutePath.includes('js-graphql-03');
					}).node.html
				}/>
				<h3 className="heading--underline">Accessibility</h3>
				<p>Another feature I wanted to implement were some easily re-used components that had some custom functionality with ARIA best practices built-in. An example of this is the <OutboundLink href="https://github.com/jacobvenable/portfolio-gatsby/blob/master/src/components/Accordions/index.js">Accordions component</OutboundLink>. When I building this component, I had the following goals:</p>
				<ol>
					<li>progressively enhance the component ensure that all content is visible if JavaScript is not enabled</li>
					<li>make it easy to create a group of accordions</li>
					<li>ensure accordions can be added to any style of elements</li>
					<li>
						have the accordions follow <OutboundLink href="https://www.w3.org/TR/wai-aria-practices-1.1/#accordion">ARIA best practices for accordions</OutboundLink>:
						<ul>
							<li>a header that controls showing/hiding content</li>
							<li>a panel which is the content that shown/hidden</li>
							<li>when one accordion group is opened, the rest are closed</li>
						</ul>
					</li>
				</ol>
				<h4>Goal 1: Progressively Enhance</h4>
				<p>To accomplish goal 1, I decided that an accordion group should just display as a normal heading and content pair. If JavaScript is disabled, the content will appear to be organized normally by headings.</p>
				<p>For the markup I settled on something similar to the section below.</p>
				<CodeSection language="javascript" code={
					data.markdown.edges.find((edge) => {
						return edge.node.fileAbsolutePath.includes('js-accessibility-01');
					}).node.html
				}/>
				<p>Using CSS, I would then style the buttons to appear as headings.</p>
				<h4>Goal 2: Make it Easy</h4>
				<p>Instead of passing multiple props to one Accordions component, I decided it would be easiest to have the component build each individual accordion group itself. This process was quite lengthy, but made implementing new Accordions components a breeze.</p>
				<CodeSection language="javascript" code={
					data.markdown.edges.find((edge) => {
						return edge.node.fileAbsolutePath.includes('js-accessibility-02');
					}).node.html
				}/>
				<p>For full implementation, see the full constructor method on the <OutboundLink href="https://github.com/jacobvenable/portfolio-gatsby/blob/master/src/components/Accordions/index.js">Accordions component</OutboundLink>. At this point, the component has now stored each item accordion button-panel group, and can now be setup to properly handle showing/hiding content.</p>
				<h4>Goal 3: Flexibility on any Style of Elements</h4>
				<p>My plan was to use accordions in two places:</p>
				<ul>
					<li>the FAQ section of the <a href="/">home page</a></li>
					<li>the main content of the <a href="/skills/">skills page</a></li>
				</ul>
				<p>While the implementation of show/hide functionality is the same, the way they are displayed is quite different. This meant, it would be best to allow us to specify the classes that are added/removed depending on element visibility. To accomplish this, I added properties to the Accordions component:</p>
				<ul>
					<li>classButtonToggle &#8212; the class added to a button when it's corresponding content panel is visible</li>
					<li>classContent &#8212; the initial class added to a content panel since these elements are dynamically generated</li>
					<li>classContentToggle &#8212; the class added to a content panel when it's visible</li>
				</ul>
				<CodeSection language="javascript" code={
					data.markdown.edges.find((edge) => {
						return edge.node.fileAbsolutePath.includes('js-accessibility-03');
					}).node.html
				}/>
				<p>Now, I can create a group of accordions using any combination of CSS classes and therefore any styling.</p>
				<h4>Goal 4: ARIA Best Practices</h4>
				<p>Once we had already accomplished dynamically creating accordion button-panel groups is goal 2, ensuring we follow <OutboundLink href="https://www.w3.org/TR/wai-aria-practices-1.1/#accordion">ARIA best practices for accordions</OutboundLink> was easy.</p>
				<h5>Requirement: Enter or Space</h5>
				<p>From the Web Accessibility Initiative (WAI)-ARIA best practices:</p>
				<blockquote>When focus is on the accordion header for a collapsed panel, expands the associated panel. If the implementation allows only one panel to be expanded, and if another panel is expanded, collapses that panel.</blockquote>
				<p>Buttons can be activated via the enter or space key by default.</p>
				<h5>Requirement: Tab and Shift + Tab</h5>
				<p>From the WAI-ARIA best practices:</p>
				<blockquote>
					<p>Tab: Moves focus to the next focusable element; all focusable elements in the accordion are included in the page Tab sequence.</p>
					<p>Shift + Tab: Moves focus to the previous focusable element; all focusable elements in the accordion are included in the page Tab sequence.</p>
				</blockquote>
				<p>Buttons are also part of the document's tab order by default so this is also already built-in.</p>
				<h5>Requirement: Roles</h5>
				<p>From the WAI-ARIA best practices:</p>
				<blockquote>Each accordion header button is wrapped in an element with role heading that has a value set for aria-level that is appropriate for the information architecture of the page.</blockquote>
				<p>This was simple update to the button markup we provide the Accordion component.</p>
				<CodeSection language="html" code={
					data.markdown.edges.find((edge) => {
						return edge.node.fileAbsolutePath.includes('html-accessibility-01');
					}).node.html
				}/>
				<h5>Requirement: States</h5>
				<p>From the WAI-ARIA best practices:</p>
				<blockquote>If the accordion panel associated with an accordion header is visible, the header button element has aria-expanded set to true. If the panel is not visible, aria-expanded is set to false.</blockquote>
				<p>This was easily accomplished using React's state property.</p>
				<CodeSection language="html" code={
					data.markdown.edges.find((edge) => {
						return edge.node.fileAbsolutePath.includes('js-accessibility-04');
					}).node.html
				}/>
				<p>The open property is then updated depending on whether its associated panel is shown/hidden.</p>
				<h5>Requirement: Properties</h5>
				<p>From the WAI-ARIA best practices:</p>
				<blockquote>The accordion header button element has aria-controls set to the ID of the element containing the accordion panel content.</blockquote>
				<p>I actually already needed to create a unique ID for both the button and panel for the <OutboundLink href="https://reactjs.org/docs/lists-and-keys.html#keys">key property</OutboundLink> since I place them all in one array.</p>
				<CodeSection language="html" code={
					data.markdown.edges.find((edge) => {
						return edge.node.fileAbsolutePath.includes('js-accessibility-05');
					}).node.html
				}/>
				<p>From the WAI-ARIA best practices:</p>
				<blockquote>If the accordion panel associated with an accordion header is visible, and if the accordion does not permit the panel to be collapsed, the header button element has aria-disabled set to true.</blockquote>
				<p>Since my implementation will allow all panels to be hidden, this is not an issue.</p>
				<h4>Conclusion</h4>
				<p>In the end I feel that I was successful in accomplishing the accessibility implementation goals; however, I'm a bit hesitant to say that this would work for every situation.</p>
				<p>In this process, I did make extensive use of <OutboundLink href="https://reactjs.org/docs/refs-and-the-dom.html">React refs</OutboundLink> to make calling sub-component methods easier. For accordions in a single page application, I may combine the sub-components into the main component.</p>
			</section>
		</div>
	</Layout>
);

export default PurdueConferencesPage;

export const purdueConferencesQuery = graphql`
	query GatsbyImages {
	  images: allImageSharp(
	  	filter:{
	  		original:{
	  			src:{
	  				regex:"/gatsby/"
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
	        regex:"/gatsby/"
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