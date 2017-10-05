import React from 'react'

import BackButton from '../components/BackButton'

const About = () => (
  <div>
    <h1>Thanks!</h1>
    <p>
      Terimakasih telah bergabung dengan _newsletter_{' '}
      <a href='/'>Random Screencast</a>. Pastikan segera cek inbox email kamu
      untuk konfirmasi.
    </p>
    <p>Salam hangat,</p>
    <p>Riza</p>
    <BackButton href='/' title='Back' />
  </div>
)
export default About
