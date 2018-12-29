import React from 'react';
import Layout from './../components/Layout';
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
//import Link from 'gatsby-link';
//import Img from 'gatsby-image';


const SkillsPage = ({ data }) => (
	<Layout>
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
					<p className="intro">
						HTML matters.
					</p>
					<p>When I first started web development, I didn't realize how important it was to properly wield HTML. I figured that as long as the page looked right, it was right. Now, I understand the importance of properly marking data for the sake of accessibility, SEO, and content structure.</p>
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
							Flexbox
						</li>
						<li className="skill__item">
							<FontAwesomeIcon icon={faCheck} className='skill__icon'/>
							Grid
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
					<p className="intro">
						Gettin' SASS-y
					</p>
					<p>I've had a love-hate relationship with CSS. In my first job, I've needed to support browsers as far back as IE9 while also optimizing for the latest. It took me some time to determine that it's ok that a site doesn't look the same in old vs new browsers, as long as it starts useable and progressively enhances to that optimized experience.</p>
					<p>When I started using SASS 3 years ago, managing CSS became so much easier. Nowadays, I've been working towards setting up styles in a way that is readable and scalable. I've found using a combination of <a href="http://getbem.com/">BEM</a> and <a href="https://www.xfive.co/blog/itcss-scalable-maintainable-css-architecture/">ITCSS</a> has worked out really well. </p>
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
					<p className="intro"></p>
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
					<button className="tiles__tile tile" role="heading" aria-level="2">
						<FontAwesomeIcon icon={faPhp} className='tile__icon'/>
						PHP
						<span className="tile__label">Intermediate</span>
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
					<p className="intro"></p>
					<p>While I consider myself focused in front-end development, I do use a good amount of PHP in my current position.</p>
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