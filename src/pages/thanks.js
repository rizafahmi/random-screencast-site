import React from 'react'

import BackButton from '../components/BackButton'

const About = () => (
  <div>
    <h1>Thanks!</h1>
    <p>
      Terimakasih telah bergabung dengan <em>newsletter</em>{' '}
      <a href='/'>Random Screencast</a>. Pastikan segera cek inbox email kamu
      untuk konfirmasi.
    </p>
    <p>Salam hangat,</p>
    <p>Riza dan RandomScreencast</p>
    <BackButton href='/' title='Back' />
  </div>
)
export default About
