const path = require('path')

exports.createPages = ({ boundActionCreators, graphql }) => {
  const { createPage } = boundActionCreators

  const postTemplate = path.resolve('src/templates/post.js')

  return graphql(
    `{
    allMarkdownRemark(sort:{fields: [frontmatter___title], order:DESC}){
      edges {
        node {
          html
          id
          frontmatter {
            path
            title
          }
        }
      }
    }
  }`
  ).then(res => {
    if (res.errors) {
      return Promise.reject(res.errors)
    }

    console.log('AAA')
    res.data.allMarkdownRemark.edges.forEach(({ node }) => {
      createPage({
        path: node.frontmatter.path,
        component: postTemplate
      })
    })
  })
}
