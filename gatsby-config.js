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
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Programming Paradigms",
        short_name: "P.P.",
        start_url: "/",
        background_color: "#62c6c2",
        theme_color: "#ffffff",
        display: "minimal-ui",
        icon: "src/assets/andrew bear_final.png",
      },
    },
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
    `gatsby-plugin-offline`,
  ],
};
