module.exports = {
  siteMetadata: {
    title: `GatbyJS Blog`
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
    `gatsby-transformer-remark`
  ]
}
