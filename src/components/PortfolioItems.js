import React from 'react';
import PortfolioItem from './PortfolioItem';

function PortfolioItems(props){
  if(typeof props.data === 'object' && typeof props.data.allJavascriptFrontmatter === 'object' && props.data.allJavascriptFrontmatter !== null && props.data.allJavascriptFrontmatter.edges.length > 0){
    return(
      <div>
        {props.data.allJavascriptFrontmatter.edges.map((page,index) => {
          return(
            <PortfolioItem 
              key={page.node.id} 
              relativeDirectory={page.node.node.relativeDirectory} 
              name={page.node.node.name} 
              title={page.node.frontmatter.title} 
              role={page.node.frontmatter.role} 
              blurb={page.node.frontmatter.blurb} 
              thumb={
                props.data.thumbs.edges.find((thumb) => {
                  return thumb.node.fluid.originalName === page.node.frontmatter.thumb
                })
              }
              tech={page.node.frontmatter.tech} 
              index={index} 
            />
          );
        })}
      </div>
    );
  }
  else{
    return null;
  }
}

export default PortfolioItems;