```javascript
import React from 'react';
import PortfolioItem from './PortfolioItem';

/**
 * A functional React component used to place a list of PortfolioItem components based on passed data.
 * @param {object} props.data - data returned from a GraphQL query containing JS frontmatter from portfolio pages.
 */
function PortfolioItems(props){
	//validate the data we received is usable
	if(typeof props.data === 'object' && typeof props.data.allJavascriptFrontmatter === 'object' && props.data.allJavascriptFrontmatter !== null && props.data.allJavascriptFrontmatter.edges.length > 0){
		return(
			<div>
				{/* loop through each page */}
				{props.data.allJavascriptFrontmatter.edges.map((page,index) => {
					{/*
						do something with each page's data via the current 'page object':
							page.node.frontmatter.title
							page.node.frontmatter.role
							page.node.frontmatter.blurb
							etc.
					*/}
				})}
			</div>
		);
	}
	else{
		return null;
	}
}
export default PortfolioItems;
```