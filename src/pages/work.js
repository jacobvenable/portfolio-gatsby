import React from 'react';
import Link from 'gatsby-link';
import Img from 'gatsby-image';

import PortfolioItem from './../components/PortfolioItem';
import TriangleMask from './../components/TriangleMask';


const WorkPage = ({data}) => (
  <div className="container">
		<h1>Work</h1>
		{ data.allJavascriptFrontmatter !== null && data.allJavascriptFrontmatter.edges.length > 0 ? data.allJavascriptFrontmatter.edges.map((page,index) => <PortfolioItem key={page.node.id} relativeDirectory={page.node.node.relativeDirectory} name={page.node.node.name} title={page.node.frontmatter.title} role={page.node.frontmatter.role} blurb={page.node.frontmatter.blurb} thumb={data.thumbs.edges.find((thumb) => thumb.node.id.replace(/.+\/(.+) absPath of file >> ImageSharp/,'$1') == page.node.frontmatter.thumb)} index = {index} /> ) : null }
		<TriangleMask />
	</div>
);

export default WorkPage;

export const portfolioQuery = graphql`
	query PortfolioPages {
		allJavascriptFrontmatter(
	    filter:{
	      id:{
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
	          thumb
	        }
	      }
	    }
	  }
	  thumbs: allImageSharp(filter:{ id:{ regex:"/-thumb/" }})
	  {
	  	edges{
	      node{
	        id
	        sizes(maxWidth:1240){
	        	...GatsbyImageSharpSizes
	        }
	      }
	    }
	  }
  }
`;