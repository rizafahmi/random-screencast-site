import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import './application.css'
import './index.css'
require('./prism-solarizedlight.css')

const Header = () => (
  <div className='grid'>
    <header className='grid__col-12 panel--padded--centered'>
      <a className='site-logo' href='/'>
        <img src='/static/logo.svg' />
      </a>
      <nav className='navbar' role='navigation'>
        <ul className='nav'>
          <li className='nav__item'>
            <a href='/'>
              <img className='nav__image' src='/static/rss.svg' />
            </a>
          </li>
          <li className='nav__item'>
            <a href='https://github.com/rizafahmi' target='_blank'>
              <img className='nav__image' src='/static/github.svg' />
            </a>
          </li>
          <li className='nav__item'>
            <a
              href='https://www.youtube.com/channel/UCHhAlFGFCGgIusQkQIqJLYw'
              target='_blank'
            >
              <img className='nav__image' src='/static/youtube.svg' />
            </a>
          </li>
          <li className='nav__item'>
            <a href='https://facebook.com/rizafahmi' target='_blank'>
              <img className='nav__image' src='/static/fb.svg' />
            </a>
          </li>
          <li className='nav__item'>
            <a href='https://twitter.com/rizafahmi22' target='_blank'>
              <img className='nav__image' src='/static/twitter.svg' />
            </a>
          </li>
          <li className='nav__item'>
            <a href='https://www.linkedin.com/in/rizafahmi/' target='_blank'>
              <img className='nav__image' src='/static/linkedin.svg' />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  </div>
)

const Footer = () => (
  <div className='grid'>
    <footer className='grid__col--12 panel--padded--centered'>
      <ul className='footer-link'>
        <li>
          <a href='/about'>About</a>
        </li>
        <li>
          <a href='#'>Subscribe</a>
        </li>
        <li>
          <a href='mailto:rizafahmi@gmail.com'>Feedback</a>
        </li>
      </ul>
      <p>
        Each episodes is present to you by{' '}
        <a href='https://rizafahmi.com' target='_blank'>
          Riza
        </a>. This site build with{' '}
        <a href='https://www.gatsbyjs.org' target='_blank'>
          GatsbyJS
        </a>,{' '}
        <a href='https://facebook.github.io/react/' target='_blank'>
          React
        </a>{' '}
        and also {' '}
        <a href='http://graphql.org/' target='_blank'>
          GraphQL
        </a>.
      </p>
    </footer>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title='Random Screencast | Screencast on random tech tools'
      meta={[
        { name: 'description', content: 'Screencast on random tech tools' },
        { name: 'keywords', content: 'random, screencast, technology' }
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
    <Header />

    <div className='grid'>
      <div className='centered grid__col--10'>{children()}</div>
    </div>

    <Footer />
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
