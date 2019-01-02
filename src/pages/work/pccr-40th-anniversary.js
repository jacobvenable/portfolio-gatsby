import React from 'react';
import Layout from './../../components/Layout';
import { graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/fontawesome-pro-solid';
import { faToolbox } from '@fortawesome/fontawesome-pro-solid';
import Figure from './../../components/Figure';
import CodeSection from './../../components/CodeSection';

export const frontmatter = {
    title: 'PCCR Anniversary Celebration',
    role: 'Front-end Development',
    blurb: 'A site celebrating the 40th anniversary of the Purdue Center for Cancer Research',
    thumb: 'portfolio_pccr40thAnniversary-thumb.png',
    date: '2018-05-01',
    tech: ['GulpJS','HTML5','responsive','Flexbox','Grid','SCSS','PostCSS','BEM','ITCSS','Vanilla JS','Browserify','Watchify']
}

const Pccr40thPage = ({data}) => (
	<Layout>
	  <div className="container">
			<h1 aria-describedby="intro">PCCR 40th Anniversary Site</h1>
			<p className="intro" id="intro">a site celebrating the 40th anniversary of the Purdue Center for Cancer Research</p>
			<div className="container__row">
				<div className="container__column">
					<a href="https://www.cancerresearch.purdue.edu/research-that-delivers/" className="button button--blue-dark">View Live Site</a>
				</div>
			</div>
			<section aria-labelledby="overview">
				<h2 id="overview">Overview</h2>
				<div className="overview">
					<div className="overview__section">
						<h3><FontAwesomeIcon icon={faToolbox} className="heading__icon"/>Tech</h3>
						<dl>
							<dt>Task Runner</dt>
							<dd>Gulp.js</dd>
							<dt>CSS</dt>
							<dd>flexbox and grid layout structured with BEM and ITCSS</dd>
							<dt>JS</dt>
							<dd>Vanilla JS bundled with Browserify and Watchify</dd>
						</dl>
					</div>
					<div className="overview__section overview__section--slim">
						<h3><FontAwesomeIcon icon={faClipboardList} className="heading__icon"/>Responsibilities</h3>
						<ul>
							<li className="overview__item">review design for accessibility issues</li>
							<li className="overview__item">use Git and GitHub for version control and tracking progress</li>
							<li className="overview__item">develop reuseable components and templates based on design</li>
							<li className="overview__item">test for browser inconsistencies</li>
						</ul>
					</div>
				</div>
			</section>
			<Figure 
				full={true} 
				caption='' 
				alt='screenshot of the home page' 
				fluid={
					data.images.edges.find((image) => {
						return image.node.fluid.originalName.includes('pccr40thAnniversary_home-desktop.png');
					}).node.fluid
				}
			/>
			<Figure 
				full={true} 
				caption='' 
				alt='screenshot of the about page' 
				fluid={
					data.images.edges.find((image) => {
						return image.node.fluid.originalName.includes('pccr40thAnniversary_content1-desktop.png');
					}).node.fluid
				}
			/>
			<Figure 
				full={true} 
				caption='' 
				alt='screenshot of a story page' 
				fluid={
					data.images.edges.find((image) => {
						return image.node.fluid.originalName.includes('pccr40thAnniversary_content2-desktop.png');
					}).node.fluid
				}
			/>
		</div>
	</Layout>
);

export default Pccr40thPage;

export const pccrQuery = graphql`
	query PccrImages {
	  images: allImageSharp(
	  	filter:{
	  		original:{
	  			src:{
	  				regex:"/pccr40thAnniversary/"
	  			}
	  		}
	  	}
	  )
	  {
	  	edges{
	      node{
	        id
	        original{
	        	src
	        }
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