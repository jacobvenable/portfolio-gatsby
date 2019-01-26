import React from 'react';
import Img from 'gatsby-image';

/**
 * A functional React component used to place a figure, an image and (optional) caption, on a page.
 * @param {boolean} props.full - determines if 'full' modifier class should be applied to the figure
 * @param {object} props.fluid - an image sharp object returned from a GraphQl query used to create responsive images
 * @param {string} props.alt - optional string containing the alt attribute of the image
 * @param {string} props.caption - optional string containing the visible caption placed below the image
 */
function Figure(props){
  return (
    <figure className={`
      figure
      ${props.full?'figure--full':''}`
    }>
			<Img fluid={props.fluid} className="figure__img" alt={props.alt || ''}/>
			{ typeof props.caption === 'string' &&
				<figcaption className="figure__caption">{props.caption}</figcaption>
			}
		</figure>
  );
}

export default Figure;