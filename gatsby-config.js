const autoprefixer = require(`autoprefixer`)

module.exports = {
  siteMetadata: {
    title: 'Gatsby Default Starter',
  },
  plugins: [
  	'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Jacob Venable",
        short_name:"JacobVenable",
        start_url:"/",
        background_color:"#ffffff",
        theme_color:"#ffffff",
        display: "standalone",
        icon: "src/images/favicon_android-chrome-256x256.png"
      }
    },
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family:`Montserrat`,
            variants:[`400`,`700`]
          },
          {
            family:`Open Sans`,
            variants:[`400`,`700`,`400i`]
          }
        ]
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId:'UA-50368072-1',
        head:false,
        anonymize:true,
        respectDNT:true
      },
    },
    'gatsby-plugin-sass',
    {
      resolve: "gatsby-source-filesystem",
      options:{
        name: "img",
        path:`${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-plugin-polyfill-io`,
      options:{
        features:[`Array.prototype.map`,`fetch`]
      }
    }
  ],
};
