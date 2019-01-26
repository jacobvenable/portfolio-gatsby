import React from 'react';

class TriangleMask extends React.Component {
  constructor(props) {
    super(props);
		this.viewBox = "0 0 98.76284 86.43521".split(" ");
		this.scaleX = 1/parseFloat(this.viewBox[2]);
		this.scaleY = 1/parseFloat(this.viewBox[3]);
  }
	render(){
	  return (
		  <svg className="clipmask" width="0" height="0" aria-hidden="true">
				<defs>
					<clipPath id="cm-triangle" clipPathUnits="objectBoundingBox">
						<path d="M95.13728,0c3.22993,0,4.55127,2.28862,2.9363,5.08583L52.31773,84.3373c-1.615,2.79721-4.25765,2.79721-5.87262,0L.68926,5.08583C-.92571,2.28862.39563,0,3.62556,0Z" transform={`scale(${this.scaleX} ${this.scaleY})`}/>
					</clipPath>
				</defs>
			</svg>
		);
	}
}

export default TriangleMask;
