import React from 'react'
import Helmet from 'react-helmet'

export default function Template ({ data }) {
  const { markdownRemark: post } = data

  return (
    <div>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <div style={{ marginTop: 122 }}>
        <a href='/' className='btn--default'>Back</a>
      </div>
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
      }
    }
  }
`
