const autoprefixer = require(`autoprefixer`)

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
    'gatsby-plugin-react-next',
  	'gatsby-plugin-react-helmet',
  	{
			resolve: `gatsby-plugin-postcss-sass`,
			options: {
			postCssPlugins: [autoprefixer()],
				precision: 8, // SASS default: 5
			},
		},
    {
      resolve: "gatsby-source-filesystem",
      options:{
        name: "img",
        path:`${__dirname}/src/images`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options:{
        name: "video",
        path:`${__dirname}/src/videos`
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options:{
        name: "pages",
        path:`${__dirname}/src/pages`
      }
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-transformer-javascript-frontmatter'
  ],
};
