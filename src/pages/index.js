import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  console.log(posts)
  return (
    <div>
      <h1>Hi people</h1>

      <ul>
        {posts.map(post => (
          <li>
            <a href={post.node.frontmatter.path}>
              {post.node.frontmatter.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const query = graphql`
query IndexQuery {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          title
          path
        }
      }
    }
  }
}
`

export default IndexPage
