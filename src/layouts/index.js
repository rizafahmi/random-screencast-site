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
        Random Access Memory Screencast by Riza
      </a>
      <nav className='navbar' role='navigation'>
        <ul className='nav'>
          <li className='nav__item'><a href='/'>link</a></li>
          <li className='nav__item'><a href='/'>link</a></li>
          <li className='nav__item'><a href='/'>link</a></li>
          <li className='nav__item'><a href='/'>link</a></li>
          <li className='nav__item'><a href='/'>link</a></li>
          <li className='nav__item'><a href='/'>link</a></li>
        </ul>
      </nav>
    </header>
  </div>
)

const Footer = () => (
  <div className='grid'>
    <footer className='grid__col--12 panel--padded--centered'>

      <ul className='nav'>
        <li className='nav__item'><a href='/'>link</a></li>
        <li className='nav__item'><a href='/'>link</a></li>
        <li className='nav__item'><a href='/'>link</a></li>
        <li className='nav__item'><a href='/'>link</a></li>
        <li className='nav__item'><a href='/'>link</a></li>
        <li className='nav__item'><a href='/'>link</a></li>
      </ul>
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
