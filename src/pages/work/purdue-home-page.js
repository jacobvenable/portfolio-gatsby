import React from 'react';
import Layout from './../../components/Layout';
import { graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/fontawesome-pro-solid';
import { faToolbox } from '@fortawesome/fontawesome-pro-solid';
import Figure from './../../components/Figure';
import Video from './../../components/Video';
import CodeSection from './../../components/CodeSection';

export const frontmatter = {
    title: 'Purdue Home Page Redesign',
    role: 'Front-end Development, CMS Implementation',
    blurb: 'A revamp of Purdue\'s home page that gives visitors a chance to customize their page',
    thumb: 'portfolio_purdueHomePage-thumb.png',
    date: '2018-01-01',
    tech: ['GulpJS','HTML5','responsive','SASS','PostCSS','Browserify','Watchify','Lazy Loading','ARIA','PHP']
}

const PurdueHomePage = ({data}) => (
	<Layout>
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
							<dd>JS modules bundled with Browserify + Watchify and minified via Uglify</dd>
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
			<Figure 
				full={true} 
				alt='screenshot of features added to the Purdue home page' 
				fluid={
					data.images.edges.find((image) => {
						return image.node.fluid.originalName.includes("purdueHomePage_overview.png");
					}).node.fluid
				}
			/>
			<section aria-labelledby="dev">
				<h2 id="dev">Development Notes</h2>
				<h3 className="heading--underline">Customization Feature</h3>
				<h4>Background</h4>
				<p>From the very beginning, the team wanted the Purdue home page to be a door to the University that quickly sent the user where they wanted to go. In the previous iteration of the home page, the main content consisted completely of featured links. These links were chosen by our team based on the date and/or analytics. The difficulty with choosing these links came in determining the audience we were catering to.</p>
				<p>Often, we would decide that prospective and/or current students were the main audience and choose links accordingly; however, we would then receive complaints/requests from other organizations on campus that there needed to be something more alumni-focused or faculty/staff-focused.</p>
				<h4>Solution</h4>
				<p>To handle the numerous audiences, we decided to give our users a way of self-identifying to filter relevant links, and allow them to determine what they want to see on the home page.</p>
				<Video 
					id={data.videos.edges[0].node.name}
					title='Customization in Action'
					poster={
						data.images.edges.find((image) => {
							return image.node.fluid.originalName.includes("purdueHomePage_customize-poster.png");
						}).node.fluid
					}
					mp4={data.videos.edges.find(video => video.node.extension === 'mp4').node.publicURL}
				/>
				<h4>Implementation</h4>
				<p>When determining how to go about implementing this feature, I had considered using a JS framework, such as React or Angular, to generate that portion of the page. In the end, I decided that it would be better to not add an entire framework that would only be used on a small portion of the page. Since the Purdue templates were already "married" to jQuery via Bootstrap, it was better to instead create JS modules, using Browserify, for the various elements:</p>
				<ul>
					<li>tiles</li>
					<li>customization button</li>
					<li>modal</li>
					<li>custom audience dropdown</li>
					<li>checkboxes</li>
				</ul>
				<p>The above modules act similarly to components in React. Unfortunately, I didn't have the benefit of using React's virtual DOM, so I needed to implement some measures to improve performance.</p>
				<h4>Performance</h4>
				<p>To improve performance, I decided to have each module interact with the DOM as little as possible. Modal states, checkbox states, checkbox visibility, etc. were all stored as properties of a module. Instead of reading the DOM to determine whether a checkbox was checked or unchecked, I was able to access the property value and have the script act accordingly. All animations were implemented via CSS and activated by class toggling.</p>
				<h4>Accessibility</h4>
				<p>One of the more time consuming elements of this update was ensuring that the customization met accessibility standards.</p>
				<h5>Keyboard Support</h5>
				<p>Ensuring there were easily identifiable focus styles on each element of the page was simple with CSS. Usually, I would just add CSS properties applied on hover while also implementing an extra visual identifier such as an outline.</p>
				<CodeSection language="scss" code={
					data.markdown.edges.find((edge) => {
						return edge.node.fileAbsolutePath.includes('scss-accessibility-01');
					}).node.html
				}/>
				<p>The issue with this approach is that you may not want to apply focus styles for every focused element. For example, when a user would open a dropdown, it would apply a focus style to the toggler. We wanted this focus style to appear for keyboard navigators, but not for mouse navigators.</p>
				<p>To only apply focus styles for keyboard users, I implemented a script that toggled a class on an element if it was interacted with via a mouse.</p>
				<CodeSection language="javascript" code={
					data.markdown.edges.find((edge) => {
						return edge.node.fileAbsolutePath.includes('js-accessibility');
					}).node.html
				}/>
				<p>Now that we have identified when an element has been interacted via a mouse, we can implement CSS to prevent focus styles from displaying.</p>
				<CodeSection language="scss" code={
					data.markdown.edges.find((edge) => {
						return edge.node.fileAbsolutePath.includes('scss-accessibility-02');
					}).node.html
				}/>
				<p>Other keyboard support features included implementing the recommended keyboard controls for custom elements listed in <a href="https://www.w3.org/TR/wai-aria-practices-1.1/">WAI-ARIA Best Authoring Practices</a>. More information about using those best practices can be found in the next section.</p>
				<h5>Screen Reader Support</h5>
				<p>While the tiles being customized are easily interacted with as links, the customization modal was an entirely different story. Modals aren't prebaked into browsers, so it was important to build a way to communicate with screen-reader-users about how to interact with the customization component. On top of that, the design called for creating custom elements that mimicked elements pre-built into the browser. </p>
				<p>Luckily, there is already a way to communicate this through <a href="https://www.w3.org/TR/wai-aria-1.1/">Accessible Rich Internet Applications</a> (ARIA). By following <a href="https://www.w3.org/TR/wai-aria-practices-1.1/">WAI-ARIA Best Authoring Practices</a>, I was able to setup these custom elements in away that users would be used to. The following patterns were most useful:</p>
				<ul>
					<li><a href="https://www.w3.org/TR/wai-aria-practices-1.1/#dialog_modal">Dialog (Modal)</a> &#8212; used when setting up the modal</li>
					<li><a href="https://www.w3.org/TR/wai-aria-practices-1.1/#checkbox">Checkbox</a> &#8212; used when creating the custom checkbox elements</li>
					<li><a href="https://www.w3.org/TR/wai-aria-practices-1.1/#Listbox">Listbox</a> &#8212; used when creating the custom dropdown element</li>
				</ul>
			</section>
		</div>
	</Layout>
);

export default PurdueHomePage;

export const PurdueHomeQuery = graphql`
	query PurdueHomePageImages {
	  images: allImageSharp(
	  	filter:{
	  		original:{
	  			src:{
	  				regex:"/purdueHomePage/"
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
	  markdown: allMarkdownRemark(
	    filter:{
	      fileAbsolutePath:{
	        regex:"/purdue-home-page/"
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