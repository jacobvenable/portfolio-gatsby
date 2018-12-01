import React from 'react';
import Layout from './../components/Layout';
import AccordionGroup from './../components/AccordionGroup';
import Accordion from './../components/Accordion';
import { faHtml5 } from '@fortawesome/fontawesome-free-brands';
//import Link from 'gatsby-link';
//import Img from 'gatsby-image';


const SkillsPage = ({ data }) => (
	<Layout>
	  <div className="container">
			<h1>Skills</h1>
			<AccordionGroup>
				<Accordion buttonText="HTML5" icon={faHtml5} iconType="" type="group" group="faq" level="2">
					<p>Blah blah blah</p>
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