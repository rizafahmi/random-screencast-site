module.exports = {
  siteMetadata: {
    title: `Random Screencast | Screencast on random tech tools`,
    description: 'Random screencast on random tech tools.',
    siteUrl: `https://randomscreencast.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/pages`,
        name: 'pages'
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {}
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-106935427-1'
      }
    }
  ]
}
