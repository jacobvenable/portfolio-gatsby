import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';


const AboutPage = ({ data }) => (
  <div className="container">
		<h1>About Me</h1>

	</div>
);

export default AboutPage;

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