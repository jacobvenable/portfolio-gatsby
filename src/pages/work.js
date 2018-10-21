import React from 'react';
import Layout from './../components/Layout';
import { graphql } from 'gatsby';
import PortfolioItems from './../Components/PortfolioItems';
import TriangleMask from './../components/TriangleMask';

const WorkPage = ({ data }) => (
	<Layout>
	  <div className="container">
			<h1>Work</h1>
			{console.log(data)}
			<PortfolioItems data={data}/>
			<TriangleMask />
		</div>
	</Layout>
);

export default WorkPage;

export const portfolioQuery = graphql`
	query PortfolioPages {
		allJavascriptFrontmatter(
	    filter:{
	      fileAbsolutePath:{
	        regex:"/work/.+/"
	      }
	    }
	    sort:{
	      fields:[
	        frontmatter___date
	      ]
	      order:DESC
	    }
	  ){
	    edges{
	      node{
	      	id
	        node{
	          relativeDirectory,
            name
	        }
	        frontmatter{
	          title,
	          blurb,
	          role,
	          thumb,
	          tech
	        }
	      }
	    }
	  }
	  thumbs: allImageSharp(
	  	filter:{
	      original:{
	        src:{ regex:"/-thumb/" }
	      }
    	}
    )
	  {
	  	edges{
	      node{
	        id
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