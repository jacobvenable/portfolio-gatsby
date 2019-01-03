import React from 'react';
import Layout from './../../components/Layout';
import { graphql } from 'gatsby';
import Link from 'gatsby-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/fontawesome-pro-solid';
import { faToolbox } from '@fortawesome/fontawesome-pro-solid';
import { faGithub } from '@fortawesome/fontawesome-free-brands';
import Figure from './../../components/Figure';

export const frontmatter = {
    title: 'Purdue Web Templates (Ongoing)',
    role: 'Front-End Development, CMS Implementation',
    blurb: 'the official web templates provided by the Office of Marketing and Media',
    thumb: 'portfolio_purdueTemplates-thumb.png',
    date: '2017-12-01',
    tech: ['GulpJS','HTML5','responsive','SASS','PostCSS','Cascade Server (CMS)']
}

const PurdueHomePage = ({data}) => (
	<Layout>
	  <div className="container">
			<h1 aria-describedby="intro">Purdue Web Templates (Ongoing)</h1>
			<p className="intro" id="intro">the free, web templates made available by Marketing and Media for other organizations across Purdue University</p>
			<div className="container__row">
				<div className="container__column">
					<a href="https://github.com/PurdueMarketingAndMedia/purdueTemplates-2015" className="button button--icon button--yellow-light-reverse"><span className="sr-only">View GitHub Repository</span><FontAwesomeIcon icon={faGithub}/></a>
				</div>
				<div className="container__column">
					<a href="https://purduemarketingandmedia.github.io/purdueTemplates-2015/builds/development/templates/audience.html" className="button button--blue-dark">View Example Site</a>
				</div>
			</div>
			<section aria-labelledby="overview">
				<h2 id="overview">Overview</h2>
				<div className="overview">
					<div className="overview__section">
						<h3><FontAwesomeIcon icon={faToolbox} className="heading__icon"/>Tech (Current)</h3>
						<dl>
							<dt>Task Runner</dt>
							<dd>Gulp.js</dd>
							<dt>CSS</dt>
							<dd>new components structured with BEM and written/compiled in SCSS</dd>
							<dt>JS</dt>
							<dd>Bootstrap V3 and dependencies (JQuery)</dd>
							<dt>Back-End</dt>
							<dd>PHP 5.1.6 and 5.4.16</dd>
							<dt>CMS</dt>
							<dd>UI built & data stored in Cascade Server and compiled via Apache Velocity</dd>
						</dl>
					</div>
					<div className="overview__section overview__section--slim">
						<h3><FontAwesomeIcon icon={faClipboardList} className="heading__icon"/>Responsibilities</h3>
						<ul>
							<li className="overview__item">review design for accessibility issues</li>
							<li className="overview__item">use Git and GitHub for version control and tracking progress</li>
							<li className="overview__item">ensure conformance to Level A and AA of WCAG 2.0</li>
							<li className="overview__item">test for browser inconsistencies</li>
							<li className="overview__item">implement all content management within Cascade Server</li>
							<li className="overview__item">handle issues and feature requests</li>
						</ul>
					</div>
				</div>
			</section>
			<Figure 
				full={true} 
				caption='example of a page using the current audience template' 
				alt='' 
				fluid={
					data.images.edges.find((image) => {
						return image.node.fluid.originalName.includes('purdueTemplates_audience-desktop.png');
					}).node.fluid
				}
			/>
			<section aria-labelledby="about">
				<h2 id="about">About</h2>
				<p>The Purdue web templates have been a product that the Purdue Office Marketing and Media (MM) has provided to the University since the late 2000s. After development, MM makes the HTML, CSS, and JS available for download so that other developers on campus can implement them in their own systems. A separate service provided by MM includes a CMS implementation of the templates within the centrally supported CMS, <a href="https://www.hannonhill.com/products/cascade-cms/index.html">Cascade Server</a>.</p>
				<p>When I joined the team 2014, they were in the midst of implementing a new version that most notably included a new responsive design using <a href="https://getbootstrap.com/docs/3.3/css/#grid">Bootstrap 3's grid system</a>. At this point, development was mostly complete, and my initial responsibilities included assisting in migrating sites to the new templates.</p>
				<p>I didn't play a more prominent role in their development until the next update.</p>
			</section>
			<section aria-labelledby="contributions">
				<h2 id="contributions">My Contributions</h2>
				<h3 className="heading--underline">2015 Template Updates</h3>
				<p>Since the release of the updated templates in 2014, our team was gathering feedback about both the base web-templates and our CMS implementation. Using the feedback, I, the only web developer on the team at the time, made the following updates that were released a year after the last release.</p>
				<h4>Implementing SASS</h4>
				<p>In an effort to improve readability and solidify the Purdue brand, the header and footer were redesigned along with other elements on prebuilt pages.</p>
				<Figure 
					full={true} 
					caption='the header of the 2014 version of the web templates' 
					alt='example of Purdue Templates header used in 2014 featuring a light and dark gray striped background' 
					fluid={
						data.images.edges.find((image) => {
							return image.node.fluid.originalName.includes('purdueTemplates_header-2014.png');
						}).node.fluid
					}
				/>
				<Figure 
					full={true} 
					caption='the header after the 2015 updates' 
					alt='example of Purdue Templates header used in 2015 featuring a black and dark gray striped background' 
					fluid={
						data.images.edges.find((image) => {
							return image.node.fluid.originalName.includes('purdueTemplates_header-2015.png');
						}).node.fluid
					}
				/>
				<p>While making these updates, it became clear that current and future maintenance would be time-consuming. The 2014 version of the templates, used a single, vanilla CSS file that was difficult to navigate. To improve separation and decrease maintenance time, I divided our central CSS file into multiple SCSS files.</p>
				<p>Along the way, I implemented variables and mixins where appropriate to decrease duplication of styles.</p>
				<p><mark>Using these methods, I was not only able to decrease maintenance time, but also reduce the size of our final CSS file by ~60%.</mark></p>
				<h4>Centralizing Events</h4>
				<p>A common request we received from clients was the ability to list events they were sponsoring; however, we didn't necessarily have components styled for this use case. While our design team was concerned with how users would interact with an events feed, I wanted to ensure that our campus events weren't completely separated site-by-site.</p>
				<p>I independently reached out to Purdue's Calendar Office to understand how their current calendar system could assist us. After being granted access to the system, I discovered it had the ability to generate an API endpoint that listed events based on given parameters. Using these endpoints, I was able to setup our events feed page to pull from the central calendar system.</p>
				<Figure 
					full={true} 
					caption='example of the events feed' 
					alt='' 
					fluid={
						data.images.edges.find((image) => {
							return image.node.fluid.originalName.includes('purdueTemplates_events.png');
						}).node.fluid
					}
				/>
				<p>The events feed was created using server-side PHP rather than client-side JS. This decision was made in an effort to improve progressive enhancement by having the feed independent of browser version and whether JS was enabled.</p>
				<p><mark>Since its creation, multiple groups at the University have moved from their own, separate calendaring system into the shared, central system.</mark></p>
				<h4>Improved CMS User Interface (UI) and Documentation</h4>
				<p>Perhaps the most significant improvement to the Purdue templates in 2015 was the UI within our CMS. In 2014, the UI consisted of multiple <a href="https://en.wikipedia.org/wiki/WYSIWYG">WYSIWYGs</a> to edit content. The problem with this approach is that many elements within the templates called for customized class names or markup that were not easy to recreate within a WYSIWYG. A client would initially receive a working version but would find it difficult to update without removing those needed attributes.</p>
				<p>In an effort to fix this issue, I independently sought out advanced training within our CMS, <a href="https://www.hannonhill.com/products/cascade-cms/index.html">Cascade Server</a>. In the end, I was able to create an interface that only needed text input rather than HTML. After the interface was completed, I also created documentation about the interface that clients could reference later. This documentation included:</p>
				<ul>
					<li>step-by-step directions for common edits on a site</li>
					<li>screenshots showing expected views and locations of referenced controls</li>
					<li>general explanations for concepts such as how Cascade interacts with Purdue servers, SEO, and best practices</li>
				</ul>
				<p><mark>The new user interface and documentation resulted in decreasing the amount of support needed of our team.</mark></p>
				<h3 className="heading--underline">Adding Gulp.js</h3>
				<p>Originally, SASS was implemented using using <a href="http://koala-app.com/">Koala</a>, a GUI application that can compile SASS. While this made jumping into SASS much easier, I still wasn't receiving the full flexibility and benefits of a task runner.</p>
				<p>In order to further improve our development workflow, to took it upon myself to learn and implement GulpJS. During this training, I decided to start simple and implement GulpJS to handle the following tasks:</p>
				<ul>
					<li><mark>HTML templating</mark> &#8212; most sites we built were implemented into a CMS, so I used a simple library that allowed including HTML files. This allowed the team to create small snippets for various elements used throughout a site</li>
					<li><mark>SASS compiling &amp; minification</mark> &#8212; compiling our SASS files within the task runner allowed us to have more customization in how our files output and automate other features, such as autoprefixing</li>
					<li><mark>live reload</mark> &#8212; this tool was one I didn't know I needed. Having GulpJS watch your files and reload a page when it notices a change is a huge timesaver.</li>
				</ul>
				<p>Each of these tasks would run dependent on the environment they were built for. For example, minification of CSS would only occur if it was building for the production environment.</p>
				<h3 className="heading--underline">Implementing Git + Github</h3>
				<p>While multiple issues were addressed with the 2015 updates, most of these fixes affected our immediate team and end-users of the CMS; however, a complaint we often received came from other developers on campus.</p>
				<p><q>Most template updates we receive come periodically and in large chunks. By the time I finish implementing these updates, it feels like there is another batch to implement.</q></p>
				<p>Often we'd receive a request to provide a preliminary version of the update, so they could start before our upcoming release; however, this meant that we would need to manually track any changes made afterwards.</p>
				<p>After training myself in using Git and Github on the <Link to="/work/boiler-life">Boiler Life site</Link>, I believed it to be the solution to this problem. With Git, there would be no need to manually track changes, and with GitHub we could easily communicate upcoming releases. Other benefits included:</p>
				<ul>
					<li>easier developer collaboration within our own team</li>
					<li>feature requests or issue submissions</li>
					<li>more simple external developer contributions</li>
				</ul>
				<p>Throwing our code on GitHub wasn't enough though. We needed a set of standards so that we understood how changes would be developed and how they would be batched into a release. The workflow I decided was best for our situation was one coined "Gitflow" and first outlined by <a href="http://nvie.com/about/">Vincent Driessen</a>.</p>
				<p>Using this workflow, I <a href="https://github.com/PurdueMarketingAndMedia/purdueTemplates-2015/wiki/Branching-Model">documented</a> our branch naming conventions and how the branches interact.</p>
				<p><mark>Since it's implementation, we've been able to successfully implement multiple minor updates/patches and easily communicate them to the rest of campus.</mark></p>
			</section>
		</div>
	</Layout>
);

export default PurdueHomePage;

export const PurdueHomeQuery = graphql`
	query PurdueTemplateImages {
	  images: allImageSharp(
	  	filter:{
	  		original:{
	  			src:{
	  				regex:"/purdueTemplates/"
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
  }
`;