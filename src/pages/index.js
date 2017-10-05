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
              <ButtonPost index={index} frontmatter={post.node.frontmatter} />
            </li>
          ))}
      </ul>
    </div>
  )
}

const ButtonPost = props => {
  let buttonType
  switch (props.index) {
    case 0:
      buttonType = 'warning'
      break
    default:
      buttonType = 'plain'
      break
  }
  return (
    <a className={'btn--' + buttonType} href={props.frontmatter.path}>
      {props.frontmatter.title}
    </a>
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
            description
          }
        }
      }
    }
  }
`

export default IndexPage
