import React from 'react'

import BackButton from '../components/BackButton'

const About = () => (
  <div>
    <h1>About</h1>
    <p>
      <a href='/'>Random Screencast</a>
      {' '}
      adalah screencast tentang tools dan teknologi. Tidak hanya teknologi, disini juga akan membahas tentang
      {' '}
      <em>soft-skill</em>
      {' '}
      namun tetap masih berkaitan dengan dunia software development. Setiap episode-nya,
      {' '}
      <a href='https://rizafahmi.com' target='_blank'>Riza</a>
      {' '}
      akan{' '}
      <em>running through</em>
      {' '}
      berbagai tools development dan mengimplementasikannya kedalam sebuah
      {' '}
      <em>project</em>
      {' '}sederhana dengan cara yang{' '}
      <em>fun</em>
      {' '}dan spontan.
    </p>
    <h2>Tools For Screencast</h2>
    <ul>
      <li>iTerm2 + NeoVIM + tmux + fish shell - Editor, terminal stuff</li>
      <li> Open Broadcaster Software - Record</li>
      <li> DaVinci Resolve 14</li>
      <li> Blue Yeti - Microphne </li>
      <li> Logitech - Webcam</li>
    </ul>

    <h2>Upcoming</h2>
    <p>
      <em>I wanna learn a ton of things!</em>
      {' '}
      <em>Learning is my habit</em>
      , jadi saya ingin dan akan terus belajar. Dengan screencast ini, saya berharap kita bisa belajar bareng.
      {' '}
      Dan berikut adalah beberapa hal yang ingin saya pelajari lebih lanjut. List-nya cukup panjang dan mungkin butuh tahnan untuk mempelajari semuanya, tapi pasti bakal seru banget! Dan beberapa topik di list dibawah ini sudah pasti akan menjadi topik screencast berikutnya, so stay tune!
    </p>

    <ul>
      <li>Progressive web apps</li>
      <li>WebRTC</li>
      <li>VueJS</li>
      <li>InfernoJS</li>
      <li>Firebase</li>
      <li>Redux</li>
      <li>Jest</li>
      <li>Presentation Strategy</li>
      <li>vim tricks</li>
      <li>Create chrome extension</li>
      <li>GraphQL</li>
      <li>Redis</li>
      <li>Express</li>
      <li>Fastify</li>
      <li>Go</li>
      <li>AWS Lambda</li>
      <li>Google Cloud</li>
    </ul>

    <BackButton href='/' title='Back' />
  </div>
)
export default About
