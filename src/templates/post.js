import React from 'react'
import Helmet from 'react-helmet'

import ShareButtons from '../components/ShareButtons'

export default function Template ({ data }) {
  const { markdownRemark: post } = data
  return (
    <div>
      <Helmet
        title={
          post.frontmatter.title +
          ' | Random Screencast | Screencast on random tech tools'
        }
        meta={[
          {
            name: 'description',
            content: post.frontmatter.description || ''
          },
          { name: 'keywords', content: 'random, screencast, technology' },
          {
            property: 'og:url',
            content:
              'https://randomscreencast.com' +
              encodeURI(post.frontmatter.path) +
              '/'
          },
          {
            property: 'og:type',
            content: 'website'
          },
          { property: 'og:title', content: post.frontmatter.title },
          {
            property: 'og:description',
            content: post.frontmatter.description || ''
          },
          {
            property: 'og:image',
            content: 'https://randomscreencast.com/static/logo.png'
          },
          { name: 'twitter:card', content: 'summary' },
          { name: 'twitter:title', content: post.frontmatter.title },
          {
            name: 'twitter:description',
            content: post.frontmatter.description || ''
          },
          { name: 'twitter:site', content: '@rizafahmi22' },
          {
            name: 'twitter:image',
            content: 'https://randomscreencast.com/static/logo.png'
          }
        ]}
      >
        <link
          rel='icon'
          type='image/png'
          sizes='16x16'
          href='/static/16x16.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='32x32'
          href='/static/32x32.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='48x48'
          href='/static/48x48.png'
        />
        <link
          rel='icon'
          type='image/png'
          sizes='64x64'
          href='/static/64x64.png'
        />
      </Helmet>
      <div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      <p />
      <ShareButtons
        title={post.frontmatter.title}
        url={post.frontmatter.path}
      />
      <div style={{ marginTop: 122 }}>
        <a href='/' className='btn--default'>
          Back
        </a>
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
        description
      }
    }
  }
`
