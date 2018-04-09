const config = require('./config/config');

module.exports = {
  siteMetadata: {
    title: `Programming Paradigms`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-next`,
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {trackingId: config.googleAnalyticsId
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages',
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: 'langauge-',
              inlineCodeMarker: null,
              aliases: {},
            },
          },
        ],
      },
    },
  ],
};
