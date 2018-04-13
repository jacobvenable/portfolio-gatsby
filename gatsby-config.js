const autoprefixer = require(`autoprefixer`)

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
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
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp'
  ],
};
