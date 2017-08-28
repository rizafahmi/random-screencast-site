import React from 'react'
import PropTypes from 'prop-types'
import Link from 'gatsby-link'
import Helmet from 'react-helmet'

import './application.css'
import './index.css'

const Header = () => (
  <div className='grid'>
    <header className='grid__col-12 panel--padded--centered'>
      <a className='site-logo' href='/'>
        <img src='static/logo.svg' />
      </a>
      <nav className='navbar' role='navigation'>
        <ul className='nav'>
          <li className='nav__item'>
            <a href='/'><img className='nav__image' src='static/rss.svg' /></a>
          </li>
          <li className='nav__item'>
            <a href='https://github.com/rizafahmi' target='_blank'>
              <img className='nav__image' src='static/github.svg' />
            </a>
          </li>
          <li className='nav__item'>
            <a
              href='https://www.youtube.com/channel/UCHhAlFGFCGgIusQkQIqJLYw'
              target='_blank'
            >
              <img className='nav__image' src='static/youtube.svg' />
            </a>
          </li>
          <li className='nav__item'>
            <a href='https://facebook.com/rizafahmi' target='_blank'>
              <img className='nav__image' src='static/fb.svg' />
            </a>
          </li>
          <li className='nav__item'>
            <a href='https://twitter.com/rizafahmi22' target='_blank'>
              <img className='nav__image' src='static/twitter.svg' />
            </a>
          </li>
          <li className='nav__item'>
            <a href='https://www.linkedin.com/in/rizafahmi/' target='_blank'>
              <img className='nav__image' src='static/linkedin.svg' />
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
      <p>
        Each episodes is handcrafted by{' '}
        <a href='https://rizafahmi.com' target='_blank'>Riza Fahmi</a>
      </p>
    </footer>
  </div>
)

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title='Random Access Memory by Riza'
      meta={[
        { name: 'description', content: 'Random Access Memory by Riza' },
        { name: 'keywords', content: 'random, screencast, technology' }
      ]}
    />
    <Header />

    <div className='grid'>
      <div className='centered grid__col--10'>
        {children()}
      </div>
    </div>

    <Footer />

  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func
}

export default TemplateWrapper
