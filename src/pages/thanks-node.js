import React from 'react'

import BackButton from '../components/BackButton'

const About = () => (
  <div>
    <h1>Thanks!</h1>
    <p>
      Terimakasih telah bergabung dengan <em>course</em> node{' '}
      <a href='/'>Random Screencast</a>! Saat ini saya sedang mempersiapkan
      <em>content</em> dari <em>online course</em> ini. Sudah tidak sabar ya?
      Sama, saya juga. Jadi pastikan cek inbox email kamu untuk informasi
      berikutnya.
    </p>
    <p>Salam hangat,</p>
    <p>Riza dan RandomScreencast</p>
    <BackButton href='/' title='Back' />
  </div>
)
export default About
