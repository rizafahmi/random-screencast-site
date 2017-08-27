import React from 'react'
import Link from 'gatsby-link'

const IndexPage = ({ data }) => {
  const { edges: posts } = data.allMarkdownRemark
  console.log(posts)
  return (
    <div>
      <ul className='episodes'>
        {posts.map((post, index) => (
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
  allMarkdownRemark{
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
