import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  return (
    <div>
      <ul className='episodes'>
        {posts
          .filter(post => !post.node.frontmatter.draft)
          .map((post, index) => (
            <li className='episode' key={post.node.frontmatter.path}>
              <a
                className={'btn--' + (index === 0 ? 'warning' : 'plain')}
                href={post.node.frontmatter.path}
              >
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
    allMarkdownRemark(sort: { fields: [frontmatter___title], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            path
            draft
          }
        }
      }
    }
  }
`

export default IndexPage
