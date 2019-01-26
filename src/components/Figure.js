import React from 'react';
import Img from 'gatsby-image';
import generateId from './../utils/generateId';

class Figure extends React.Component {

	constructor(props) {
    super(props);
    this.full = props.full || false;
    this.fluid = props.fluid;
    this.alt = props.alt || '';
    this.caption = props.caption || false;
    this.id = generateId('figure');
  }

  render(){
    return (
      <figure className={`figure${this.full?' figure--full':''}`}>
				<Img fluid={this.fluid} className="figure__img" alt={this.alt}/>
				{ typeof this.caption === 'string' &&
					<figcaption className="figure__caption">{this.caption}</figcaption>
				}
			</figure>
    );
  }

}

export default Figure;