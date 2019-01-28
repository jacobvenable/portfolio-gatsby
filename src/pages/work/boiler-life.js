import React from 'react';
import Layout from './../../components/Layout';
import Head from './../../components/Head';
import { graphql } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClipboardList } from '@fortawesome/fontawesome-pro-solid';
import { faToolbox } from '@fortawesome/fontawesome-pro-solid';
import Figure from './../../components/Figure';

import ogImage from './../../images/boilerLife_ogImage.png';

export const frontmatter = {
    title: 'Boiler Life',
    role: 'Front-End Development , CMS Implementation',
    blurb: 'a social media marketing campaign with a custom-designed micro-site, showcasing stories of Purdue students, groups, and alumni',
    thumb: 'portfolio_boilerLife-thumb.jpg',
    date: '2015-11-01',
    tech: ['GulpJS','HTML5','responsive','Bootstrap','SASS','jQuery','lazy loading']
}

const BoilerLifePage = ({data}) => (
    <Layout>
        <Head
            title="Boiler Life"
            description="A social media marketing campaign with a custom-designed micro-site, developed by Jacob Venable, showcasing stories of Purdue students, groups, and alumni."
            ogImage={ogImage}
            ogImageAlt='screenshot of the Boiler Life site'
        />
        <div className="container">
    	   <h1>Boiler Life</h1>
           <p className="intro" id="intro">the campaign featuring Boilermakers that move the world forward</p>
            <section aria-labelledby="overview">
                <h2 id="overview">Overview</h2>
                <div className="overview">
                    <div className="overview__section">
                        <h3><FontAwesomeIcon icon={faToolbox} className="heading__icon"/>Tech</h3>
                        <dl>
                            <dt>Task Runner</dt>
                            <dd>Gulp.js</dd>
                            <dt>CSS</dt>
                            <dd>combination of Bootstrap and custom SCSS</dd>
                            <dt>JS</dt>
                            <dd>custom script written using jQuery</dd>
                            <dt>CMS</dt>
                            <dd>UI built & data stored in Cascade Server and compiled via Apache Velocity</dd>
                        </dl>
                    </div>
                    <div className="overview__section overview__section--slim">
                        <h3><FontAwesomeIcon icon={faClipboardList} className="heading__icon"/>Responsibilities</h3>
                        <ul>
                            <li className="overview__item">review design for accessibility issues</li>
                            <li className="overview__item">use Git and GitHub for version control and tracking progress</li>
                            <li className="overview__item">develop the site based on a given Photoshop document</li>
                            <li className="overview__item">test for browser inconsistencies</li>
                            <li className="overview__item">implement the site within the CMS</li>
                            <li className="overview__item">setup the CMS to output site content as XML to be used in digital signs across campus</li>
                            <li className="overview__item">train individuals in uploading content for weekly updating</li>
                        </ul>
                    </div>
                </div>
            </section>
            <Figure 
                full={true} 
                caption='the landing page of the site displaying the currently featured Boilers' 
                alt='' 
                fluid={
                    data.images.edges.find((image) => {
                        return image.node.fluid.originalName.includes('boilerLife_home-desktop.png');
                    }).node.fluid
                }
            />
            <section aria-labelledby="dev">
                <h2 id="dev">Development Notes</h2>
                <p>Developing this site included attempts to modernize my workflow by adding new tools:</p>
                <ul>
                    <li>Git + GitHub &#8212; for version control and code backup</li>
                    <li><a href="https://gulpjs.com/">Gulp.js</a> &#8212; a task runner I used template HTML and compile SASS</li>
                </ul>
                <h3 className="heading--underline">Git + GitHub</h3>
                <p>For the duration of this project I was the only developer on our small team. While this did create a bottleneck, it also gave me quite a bit of freedom to work and experiment with different tools. The first tools I felt were absolutely necessary to add to the development workflow were Git and GitHub.</p>
                <Figure 
                    full={true} 
                    caption='an example of a page telling the story of the featured Boiler' 
                    alt='' 
                    fluid={
                        data.images.edges.find((image) => {
                            return image.node.fluid.originalName.includes('boilerLife_content-desktop.png');
                        }).node.fluid
                    }
                />
                <p>It's probably uneccessary to argue about the importance of version control here, but I'll say that Git was certainly a large step-up from our previous method, e.g., myFilev1.js, myFilev2-validation.js, etc. The biggest advantage I found was the ability to easily create a branch to experiment with a new feature, while being able to continue work on the items that would definitely be implemented.</p>
                <p>I was also able to get my feet wet with GitHub as well but I can't but feel that I only scratched the surface of its capabilities. Being a developer of one, GitHub acted more as a place to backup my work rather than as a collaboration tool.</p>
                <h3 className="heading--underline">Gulp.js</h3>
                <p>The addition of Gulp.js to my workflow was definitely the most exciting development. After using it for a few hours, I wondered how I survived without a task runner for so long.</p>
                <p>For setting up HTML templates locally, I had been writing full HTML pages; however, adding <a href="https://www.npmjs.com/package/gulp-file-include">gulp-file-include</a> gave me the ability to easily create HTML components and automatically compile them into one page.</p>
                <p>For compiling my SCSS, I no longer had to rely on using <a href="http://koala-app.com/">Koala</a>, a SASS-compiling GUI application. Now, I could add even more CSS tools, such as autoprefixer, with little difficulty.</p>
                <p>The icing on the cake was setting up a local server via <a href="https://www.npmjs.com/package/gulp-connect">gulp-connect</a> and setting up <a href="https://www.npmjs.com/package/gulp-watch">gulp-watch</a>, a file watcher. I truly didn't realize how the amount of time you save from automatic refreshes really builds up.</p>
            </section>
        </div>
    </Layout>
);

export default BoilerLifePage;

export const boilerLifeQuery = graphql`
    query BoilerLifeImages {
      images: allImageSharp(
        filter:{
            original:{
                src:{
                    regex:"/boilerLife/"
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