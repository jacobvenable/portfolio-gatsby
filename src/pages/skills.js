import React from 'react';
import Layout from './../components/Layout';
import AccordionGroup from './../components/AccordionGroup';
import Accordion from './../components/Accordion';
import { faCaretDown } from '@fortawesome/fontawesome-pro-solid';
import { faHtml5 } from '@fortawesome/fontawesome-free-brands';
import { faSass } from '@fortawesome/fontawesome-free-brands';
import { faJs } from '@fortawesome/fontawesome-free-brands';
import { faReact } from '@fortawesome/fontawesome-free-brands';
import { faGithub } from '@fortawesome/fontawesome-free-brands';
import { faUniversalAccess } from '@fortawesome/fontawesome-pro-light';
import { faGulp } from '@fortawesome/fontawesome-free-brands';
//import Link from 'gatsby-link';
//import Img from 'gatsby-image';


const SkillsPage = ({ data }) => (
	<Layout>
	  <div className="container">
			<h1>Skills</h1>
			<AccordionGroup className="container__row tiles">
				<Accordion buttonText="HTML5" tileIcon={faHtml5} icon={faCaretDown} iconType="" type="group" group="skills" level="2">
					<p>stuff</p>
				</Accordion>
				<Accordion buttonText="CSS3 + SCSS" tileIcon={faSass} icon={faCaretDown} iconType="" type="group" group="skills" level="2">
					<p>stuff</p>
				</Accordion>
				<Accordion buttonText="JavaScript" tileIcon={faJs} icon={faCaretDown} iconType="" type="group" group="skills" level="2">
					<p>Javascript</p>
				</Accordion>
				<Accordion buttonText="React" tileIcon={faReact} icon={faCaretDown} iconType="" type="group" group="skills" level="2">
					<p>Javascript</p>
				</Accordion>
				<Accordion buttonText="Git + GitHub" tileIcon={faGithub} icon={faCaretDown} iconType="" type="group" group="skills" level="2">
					<p>Javascript</p>
				</Accordion>
				<Accordion buttonText="Accessibility" tileIcon={faUniversalAccess} icon={faCaretDown} iconType="" type="group" group="skills" level="2">
					<p>Javascript</p>
				</Accordion>
				<Accordion buttonText="Workflow" tileIcon={faGulp} icon={faCaretDown} iconType="" type="group" group="skills" level="2">
					<p>Javascript</p>
				</Accordion>
			</AccordionGroup>
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