const path = require(`path`)

module.exports = {
  siteMetadata: {
    title: `Happi`,
    siteUrl: `https://gatsby-starter-luke.netlify.com`,
    description: `An opinionated GatsbyJS starter using TypeScript and React String.`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Happi`,
        short_name: `Happi`,
        start_url: `/`,
        background_color: `#dfdfdf`,
        theme_color: `#BD003D`,
        display: `minimal-ui`,
        icon: `src/assets/images/favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: path.resolve(__dirname, `src/assets/svg`),
        },
      },
    },
    {
      resolve: `gatsby-plugin-nprogress`,
      options: {
        color: `#BD003D`,
        showSpinner: false,
      },
    },
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-typescript`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
  ],
}
