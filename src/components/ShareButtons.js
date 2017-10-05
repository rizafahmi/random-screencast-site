import React from 'react'

const ShareButtons = props => (
  <a
    className='resp-sharing-button__link'
    href={
      'https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Frandomscreencast.com' +
      encodeURI(props.url)
    }
    target='_blank'
    aria-label='Share on Facebook'
  >
    <div className='resp-sharing-button resp-sharing-button--facebook resp-sharing-button--large'>
      <div
        aria-hidden='true'
        className='resp-sharing-button__icon resp-sharing-button__icon--solid'
      />
      <span>
        <img src='/static/fb.svg' style={{ width: 32 }} />
      </span>
    </div>
  </a>
)

export default ShareButtons
