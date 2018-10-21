const autoprefixer = require(`autoprefixer`)

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
  	'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
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
    {
      resolve: "gatsby-source-filesystem",
      options:{
        name: "markdown",
        path:`${__dirname}/src/markdown`
      }
    },
    'gatsby-transformer-javascript-frontmatter',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              inlineCodeMarker: null,
              aliases: {},
              showLineNumbers: false,
              noInlineHighlight: false,
            },
          }
        ],
      },
    },
  ],
};
