import React from 'react';
import Layout from './../components/Layout';
import Head from './../components/Head';
import Link from 'gatsby-link';
import Accordions from './../components/Accordions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown } from '@fortawesome/fontawesome-pro-solid';
import { faCheck } from '@fortawesome/fontawesome-pro-solid';
import { faHtml5 } from '@fortawesome/fontawesome-free-brands';
import { faSass } from '@fortawesome/fontawesome-free-brands';
import { faJs } from '@fortawesome/fontawesome-free-brands';
import { faReact } from '@fortawesome/fontawesome-free-brands';
import { faGithub } from '@fortawesome/fontawesome-free-brands';
import { faUniversalAccess } from '@fortawesome/fontawesome-pro-light';
import { faGulp } from '@fortawesome/fontawesome-free-brands';
import { faPhp } from '@fortawesome/fontawesome-free-brands';
import { faUsers } from '@fortawesome/fontawesome-pro-light';
import { OutboundLink } from 'gatsby-plugin-google-analytics';
//import Link from 'gatsby-link';
//import Img from 'gatsby-image';


const SkillsPage = ({ data }) => (
	<Layout>
		<Head
			title="Skills"
			description="A list of Jacob Venable's technical and soft skills."
		/>
	  <div className="container">
			<h1>Skills</h1>
			<div className="tiles">
				<Accordions classButtonToggle="tile--open" classContent="tiles__content" classContentToggle="tiles__content--visible">
					<button className="tiles__tile tile" role="heading" aria-level="2">
						<FontAwesomeIcon icon={faHtml5} className='tile__icon'/>
						HTML
						<span className="tile__label">Expert</span>
						<FontAwesomeIcon icon={faCaretDown} className='tile__icon tile__icon--arrow'/>
					</button>
					<h3 className="sr-only">What I Understand</h3>
					<ul className="skill">
						<li className="skill__item">
							<FontAwesomeIcon icon={faCheck} className='skill__icon'/>
							proper use of semantic elements
						</li>
						<li className="skill__item">
							<FontAwesomeIcon icon={faCheck} className='skill__icon'/>
							HTML5
						</li>
						<li className="skill__item">
							<FontAwesomeIcon icon={faCheck} className='skill__icon'/>
							relationship with accessibility
						</li>
					</ul>
					<div className="container__row container__row--padded panel">
						<h3 className="sr-only">About my Experience</h3>
						<div className="container__column container__column--padded panel__column panel__column--heading">
							<p className="panel__heading">
								HTML matters
							</p>
						</div>
						<div className="container__column container__column--padded panel__column">
							<p className="panel__description">When I first started web development, I didn't realize how important it was to properly wield HTML. I figured that as long as the page looked right, it was right. Now, I understand the importance of properly marking data for the sake of accessibility, SEO, and content structure.</p>
						</div>
					</div>
					<button className="tiles__tile tile" role="heading" aria-level="2">
						<FontAwesomeIcon icon={faSass} className='tile__icon'/>
						CSS3 + SCSS
						<span className="tile__label">Expert</span>
						<FontAwesomeIcon icon={faCaretDown} className='tile__icon tile__icon--arrow'/>
					</button>
					<h3 className="sr-only">Relevant Skills and Practices</h3>
					<ul className="skill">
						<li className="skill__item">
							<FontAwesomeIcon icon={faCheck} className='skill__icon'/>
							flexbox
						</li>
						<li className="skill__item">
							<FontAwesomeIcon icon={faCheck} className='skill__icon'/>
							grid
						</li>
						<li className="skill__item">
							<FontAwesomeIcon icon={faCheck} className='skill__icon'/>
							SCSS
						</li>
						<li className="skill__item">
							<FontAwesomeIcon icon={faCheck} className='skill__icon'/>
							PostCSS
						</li>
						<li className="skill__item">
							<FontAwesomeIcon icon={faCheck} className='skill__icon'/>
							BEM
						</li>
						<li className="skill__item">
							<FontAwesomeIcon icon={faCheck} className='skill__icon'/>
							ITCSS
						</li>
					</ul>
					<div className="container__row container__row--padded panel">
						<h3 className="sr-only">About my Experience</h3>
						<div className="container__column container__column--padded panel__column panel__column--heading">
							<p className="panel__heading">
								gettin' SASS-y
							</p>
						</div>
						<div className="container__column container__column--padded panel__column">
							<p className="panel__description">I've had a love-hate relationship with CSS. I've needed to support browsers as far back as IE9 while also optimizing for the latest. It took me some time to determine that it's ok a site doesn't look the same in old browsers as it does in new browsers. As long as it starts useable and progressively enhances, you can use those newer, amazing, lovely, time-saving features (praise to flexbox and grid).</p>
							<p className="panel__description">When I started using SASS 3 years ago, managing CSS became so much easier. Nowadays, I've been working towards setting up styles in a way that is readable and scalable. I've found using a combination of <OutboundLink href="http://getbem.com/">BEM</OutboundLink> and <OutboundLink href="https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/">ITCSS</OutboundLink> has worked out really well.</p>
						</div>
					</div>
					<button className="tiles__tile tile" role="heading" aria-level="2">
						<FontAwesomeIcon icon={faJs} className='tile__icon'/>
						JavaScript
						<span className="tile__label">Advanced</span>
						<FontAwesomeIcon icon={faCaretDown} className='tile__icon tile__icon--arrow'/>
					</button>
						<h3 className="sr-only">Understood Practices and Concepts</h3>
						<ul className="skill">
							<li className="skill__item">
								<FontAwesomeIcon icon={faCheck} className='skill__icon'/>
								ES6
							</li>
							<li className="skill__item">
								<FontAwesomeIcon icon={faCheck} className='skill__icon'/>
								scopes &amp; closures
							</li>
							<li className="skill__item">
								<FontAwesomeIcon icon={faCheck} className='skill__icon'/>
								hoisting
							</li>
							<li className="skill__item">
								<FontAwesomeIcon icon={faCheck} className='skill__icon'/>
								bundling
							</li>
							<li className="skill__item">
								<FontAwesomeIcon icon={faCheck} className='skill__icon'/>
								vanillaJS vs frameworks
							</li>
						</ul>
						<div className="container__row container__row--padded panel">
							<h3 className="sr-only">About my Experience</h3>
							<div className="container__column container__column--padded panel__column panel__column--heading">
								<p className="panel__heading">
									What? JavaScript is Evolving!
								</p>
							</div>
							<div className="container__column container__column--padded panel__column">
								<p className="panel__description">It feels like my understanding of JavaScript has changed the most throughout my career. Maybe that's because it has changed the most, or its use has changed the most. When I thought jQuery and libraries were the end of the road, I discovered that my journey had only just begun.</p>
								<p className="panel__description">Now I feel I have a solid foundation of the core, vanilla language and feel comfortable in determining when to use the language by itself, or implement a library/framework. Most of my experience with JavaScript is client-side with the exception of some scripting done in Node.js for the sake of workflow.</p>
							</div>
						</div>
					<button className="tiles__tile tile" role="heading" aria-level="2">
						<FontAwesomeIcon icon={faReact} className='tile__icon'/>
						React
						<span className="tile__label">Intermediate</span>
						<FontAwesomeIcon icon={faCaretDown} className='tile__icon tile__icon--arrow'/>
					</button>
						<h3 className="sr-only">Understood Concepts</h3>
						<ul className="skill">
							<li className="skill__item">
								<FontAwesomeIcon icon={faCheck} className='skill__icon'/>
								JSX
							</li>
							<li className="skill__item">
								<FontAwesomeIcon icon={faCheck} className='skill__icon'/>
								function vs. class components
							</li>
							<li className="skill__item">
								<FontAwesomeIcon icon={faCheck} className='skill__icon'/>
								state and component lifecycle
							</li>
						</ul>
						<div className="container__row container__row--padded panel">
							<h3 className="sr-only">About my Experience</h3>
							<div className="container__column container__column--padded panel__column panel__column--heading">
								<p className="panel__heading">
									a better way
								</p>
							</div>
							<div className="container__column container__column--padded panel__column">
								<p className="panel__description">My interest in React was born after the initial version of the <Link to="/work/purdue-home-page">Purdue home page customization</Link>. Although it was a good exercise, limiting interaction with the DOM without the help of a framework was tolling on progress.</p>
								<p className="panel__description">I decided it was time to look into tools that could address this issue and found React. After doing some tutorials, I loved how easy it was to build web applications with reuseable components. I went as far as rebuilding this site using <OutboundLink href="https://www.gatsbyjs.org/">GatsbyJS</OutboundLink>, a static site generator that you can use to build a site with React.</p>
							</div>
						</div>
					<button className="tiles__tile tile" role="heading" aria-level="2">
						<FontAwesomeIcon icon={faGithub} className='tile__icon'/>
						Git + GitHub
						<span className="tile__label">Advanced</span>
						<FontAwesomeIcon icon={faCaretDown} className='tile__icon tile__icon--arrow'/>
					</button>
						<h3 className="sr-only">Relevant Experience</h3>
						<ul className="skill">
							<li className="skill__item">
								<FontAwesomeIcon icon={faCheck} className='skill__icon'/>
								branching models
							</li>
							<li className="skill__item">
								<FontAwesomeIcon icon={faCheck} className='skill__icon'/>
								workflows
							</li>
							<li className="skill__item">
								<FontAwesomeIcon icon={faCheck} className='skill__icon'/>
								code reviews
							</li>
						</ul>
						<div className="container__row container__row--padded panel">
							<h3 className="sr-only">About my Experience</h3>
							<div className="container__column container__column--padded panel__column panel__column--heading">
								<p className="panel__heading">
									I Git it&hellip; get it?
								</p>
							</div>
							<div className="container__column container__column--padded panel__column">
								<p className="panel__description">In my first position out of college, our system of versioning was the old school "myscript_v1.js", "myscript_v2.js", "myscript_final.js", "myscript_final-v2".js, etc. Ok, maybe it wasn't that bad but you get the <i>Gist</i>. This made updating files cumbersome and collaboration with other developers difficult.</p>
								<p className="panel__description">I took it upon myself to modernize and implemented Git and GitHub into our workflow. This included determining and <OutboundLink href="https://github.com/PurdueMarketingAndMedia/purdueTemplates-2015/wiki/Branching-Model">documenting</OutboundLink> our branching model. Overall, we've been successful in not only improving collaboration within our team, but also with other teams across campus.</p>
							</div>
						</div>
					<button className="tiles__tile tile" role="heading" aria-level="2">
						<FontAwesomeIcon icon={faUniversalAccess} className='tile__icon'/>
						Accessibility
						<span className="tile__label">Advanced</span>
						<FontAwesomeIcon icon={faCaretDown} className='tile__icon tile__icon--arrow'/>
					</button>
						<h3 className="sr-only">Relevant Experience</h3>
						<ul className="skill">
							<li className="skill__item">
								<FontAwesomeIcon icon={faCheck} className='skill__icon'/>
								WCAG 2.0
							</li>
							<li className="skill__item">
								<FontAwesomeIcon icon={faCheck} className='skill__icon'/>
								ARIA
							</li>
							<li className="skill__item">
								<FontAwesomeIcon icon={faCheck} className='skill__icon'/>
								focus management
							</li>
							<li className="skill__item">
								<FontAwesomeIcon icon={faCheck} className='skill__icon'/>
								automatic &amp; manual testing
							</li>
						</ul>
						<div className="container__row container__row--padded panel">
							<h3 className="sr-only">About my Experience</h3>
							<div className="container__column container__column--padded panel__column panel__column--heading">
								<p className="panel__heading">
									one for all
								</p>
							</div>
							<div className="container__column container__column--padded panel__column">
								<p className="panel__description">Working for a public university, accessibility started as a base requirement for any site I built; however, it has evolved into a cause for what's right. If you can make a tool that can be used by everyone regardless of impairments, why wouldn't you?</p>
								<p className="panel__description">I've had both self-driven and formal training on accessibility through the <OutboundLink href="https://www.disability.illinois.edu/academic-support/accessible-it-group/badging">University of Illinois</OutboundLink>. I understand the implications of creating custom widgets, the importance of proper (and improper) ARIA attributes, and can perform manual accessibility testing.</p>
							</div>
						</div>
					<button className="tiles__tile tile" role="heading" aria-level="2">
						<FontAwesomeIcon icon={faGulp} className='tile__icon'/>
						Workflow
						<span className="tile__label">Advanced</span>
						<FontAwesomeIcon icon={faCaretDown} className='tile__icon tile__icon--arrow'/>
					</button>
						<h3 className="sr-only">Relevant Experience</h3>
						<ul className="skill">
							<li className="skill__item">
								<FontAwesomeIcon icon={faCheck} className='skill__icon'/>
								GulpJS
							</li>
							<li className="skill__item">
								<FontAwesomeIcon icon={faCheck} className='skill__icon'/>
								Webpack
							</li>
							<li className="skill__item">
								<FontAwesomeIcon icon={faCheck} className='skill__icon'/>
								NPM Scripts
							</li>
						</ul>
						<div className="container__row container__row--padded panel">
							<h3 className="sr-only">About my Experience</h3>
							<div className="container__column container__column--padded panel__column panel__column--heading">
								<p className="panel__heading">
									less than 12 parsecs
									<span className="panel__subheading">(a shortcut)</span>
								</p>
							</div>
							<div className="container__column container__column--padded panel__column">
								<p className="panel__description">If I'm doing something over and over, you can bet your bottom dollar I'm going to make it as painless as possible. Time is money right?</p>
								<p className="panel__description">During my time at Purdue, I've implemented <OutboundLink href="https://gulpjs.com/">GulpJS</OutboundLink> to handle HTML templating, CSS compiling, JS bundling, minification, and file delivery. While most of my experience is in GulpJS, I have also setup projects using NPM Scripts, and Webpack.</p>
							</div>
						</div>
					<button className="tiles__tile tile" role="heading" aria-level="2">
						<FontAwesomeIcon icon={faPhp} className='tile__icon'/>
						PHP
						<span className="tile__label">Intermediate</span>
						<FontAwesomeIcon icon={faCaretDown} className='tile__icon tile__icon--arrow'/>
					</button>
						<div className="container__row container__row--padded panel">
							<div className="container__column container__column--padded panel__column panel__column--heading">
								<p className="panel__heading">
									turning to the server-side
								</p>
							</div>
							<div className="container__column container__column--padded panel__column">
								<p className="panel__description">Yes, my specialty is front-end development, but who says I can't have it all? While, I don't necessarily use it everyday, I'll regularly turn to it when I need to protect API keys, setup authentication, etc.</p>
								<p className="panel__description">I've also used PHP to setup some basic templating that follows an OOP approach in creating templated elements.</p>
							</div>
						</div>
					<button className="tiles__tile tile" role="heading" aria-level="2">
						<FontAwesomeIcon icon={faUsers} className='tile__icon'/>
						Soft Skills
						<FontAwesomeIcon icon={faCaretDown} className='tile__icon tile__icon--arrow'/>
					</button>
						<h3 className="sr-only">Relevant Experience</h3>
						<ul className="skill">
							<li className="skill__item">
								<FontAwesomeIcon icon={faCheck} className='skill__icon'/>
								public speaking
							</li>
							<li className="skill__item">
								<FontAwesomeIcon icon={faCheck} className='skill__icon'/>
								presenting
							</li>
							<li className="skill__item">
								<FontAwesomeIcon icon={faCheck} className='skill__icon'/>
								visual communication
							</li>
						</ul>
						<div className="container__row container__row--padded panel">
							<h3 className="sr-only">About my Experience</h3>
							<div className="container__column container__column--padded panel__column panel__column--heading">
								<p className="panel__heading">
									it takes a village 
									<span className="panel__subheading">(to build a product)</span>
								</p>
							</div>
							<div className="container__column container__column--padded panel__column">
								<p className="panel__description">A large portion of my time is not only working with other developers, but also with other disciplines. I understand that it's important to listen to other's points of view, because I know I would want the same.</p>
								<p className="panel__description">At Purdue, I was responsible for creating the end-user documentation of our content management system. I've also facilitated over 15 CMS training sessions with end-users in groups ranging from 2 - 15 individuals.</p>
							</div>
						</div>
				</Accordions>
			</div>
		</div>
	</Layout>
);

export default SkillsPage;

// export const portfolioQuery = graphql`
// 	query PortfolioPages {
// 		allJavascriptFrontmatter(
// 	    filter:{
// 	      id:{
// 	        regex:"/work/.+/"
// 	      }
// 	    }
// 	    sort:{
// 	      fields:[
// 	        frontmatter___date
// 	      ]
// 	      order:DESC
// 	    }
// 	  ){
// 	    edges{
// 	      node{
// 	      	id
// 	        node{
// 	          relativeDirectory,
//             name
// 	        }
// 	        frontmatter{
// 	          title,
// 	          blurb,
// 	          role,
// 	          thumb,
// 	          tech
// 	        }
// 	      }
// 	    }
// 	  }
// 	  thumbs: allImageSharp(filter:{ id:{ regex:"/-thumb/" }})
// 	  {
// 	  	edges{
// 	      node{
// 	        id
// 	        sizes(maxWidth:1240){
// 	        	...GatsbyImageSharpSizes
// 	        }
// 	      }
// 	    }
// 	  }
//   }
// `;