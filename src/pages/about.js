import React from 'react'
import Helmet from 'react-helmet'

import BackButton from '../components/BackButton'

const About = () => (
  <div>
    <Helmet
      title='About | Random Screencast | Screencast on random tech tools'
      meta={[
        { name: 'description', content: 'Screencast on random tech tools' },
        { name: 'keywords', content: 'random, screencast, technology' },
        {
          property: 'og:url',
          content: 'https://randomscreencast.com/'
        },
        {
          property: 'og:type',
          content: 'website'
        },
        {
          property: 'og:title',
          content: 'Random Screencast. Screencasts on random tech tools.'
        },
        {
          property: 'og:description',
          content:
            'Random Screencast adalah screencast tentang tools dan teknologi. Tidak hanya teknologi, disini juga akan membahas tentang soft-skill namun tetap masih berkaitan dengan dunia software development. Setiap episode-nya, Riza akan running through berbagai tools development dan mengimplementasikannya kedalam sebuah project sederhana dengan cara yang fun dan spontan.'
        },
        {
          property: 'og:image',
          content:
            'http://randomscreencast.com.s3.amazonaws.com/static/logo.png'
        },
        {
          property: 'og:image:secure_url',
          content: 'https://randomscreencast.com/static/logo.png'
        },
        {
          property: 'og:image:width',
          content: '1200'
        },
        { property: 'og:image:height', content: '628' }
      ]}
    />
    <h1>About</h1>
    <p>
      <img src='/static/mic.jpg' />
      <a href='/'>Random Screencast</a> adalah screencast tentang tools dan
      teknologi. Tidak hanya teknologi, disini juga akan membahas tentang{' '}
      <em>soft-skill</em> namun tetap masih berkaitan dengan dunia software
      development. Setiap episode-nya,{' '}
      <a href='https://rizafahmi.com' target='_blank'>
        Riza
      </a>{' '}
      akan <em>running through</em> berbagai tools development dan
      mengimplementasikannya kedalam sebuah <em>project</em> sederhana dengan
      cara yang <em>fun</em> dan spontan.
    </p>
    <h2>Tools For Screencast</h2>
    <ul>
      <li>iTerm2 + NeoVIM + tmux + fish shell - Editor, terminal stuff</li>
      <li> Open Broadcaster Software - Record</li>
      <li> DaVinci Resolve 14 Beta</li>
      <li> Blue Yeti - Microphne </li>
      <li> Logitech - Webcam</li>
    </ul>{' '}
    <br />
    Sangat ingin menggantikan OBS dan DaVinci Resolve dengan{' '}
    <a href='https://www.telestream.net/screenflow/' target='_blank'>
      Screenflow
    </a>. Wujudkan cita-cita saya dengan mendonasikan sebagian uang kamu untuk
    membeli Screenflow.
    <form
      style={{ width: '18%' }}
      action='https://www.paypal.com/cgi-bin/webscr'
      method='post'
      target='_top'
    >
      <input type='hidden' name='cmd' value='_s-xclick' />
      <input type='hidden' name='hosted_button_id' value='REVLZRKQZ2RF4' />
      <input
        type='image'
        src='https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif'
        border='0'
        name='submit'
        alt='PayPal - The safer, easier way to pay online!'
      />
      <img
        alt=''
        border='0'
        src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif'
        width='1'
        height='1'
      />
    </form>
    <h2>Upcoming</h2>
    <p>
      <em>I wanna learn a ton of things!</em> <em>Learning is my habit</em>
      , jadi saya ingin dan akan terus belajar. Dengan screencast ini, saya
      berharap kita bisa belajar bareng. Dan berikut adalah beberapa hal yang
      ingin saya pelajari lebih lanjut. List-nya cukup panjang dan mungkin butuh
      tahnan untuk mempelajari semuanya, tapi pasti bakal seru banget! Dan
      beberapa topik di list dibawah ini sudah pasti akan menjadi topik
      screencast berikutnya, so stay tune!
    </p>
    <ul className='checklist'>
      <li> ✅ Progressive Web Apps</li>
      <li> ❎ WebRTC</li>
      <li> ❎ VueJS</li>
      <li> ❎ InfernoJS</li>
      <li> ❎ Firebase</li>
      <li> ❎ Redux</li>
      <li> ❎ Jest</li>
      <li> ❎ Presentation Strategy</li>
      <li> ❎ VIM Tricks</li>
      <li> ❎ Create chrome extension</li>
      <li> ❎ GraphQL</li>
      <li> ❎ Redis</li>
      <li> ❎ Express</li>
      <li> ❎ Fastify</li>
      <li> ❎ Go?</li>
      <li>
        {' '}
        ✅ <strike>AWS Lambda</strike>
      </li>
      <li> ❎ Google Cloud</li>
    </ul>
    <br />
    <p>
      Tertarik dengan topik lain? Silakan <em>request</em> topik ke{' '}
      <a href='mailto:rizafahmi@gmail.com'>rizafahmi@gmail.com</a> aja.
    </p>
    <BackButton href='/' title='Back' />
  </div>
)
export default About
