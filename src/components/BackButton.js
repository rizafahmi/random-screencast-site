import React from 'react'

const BackButton = props => (
  <div style={{ marginTop: 122 }}>
    <a href={props.href} className='btn--default'>{props.title}</a>
  </div>
)

export default BackButton
