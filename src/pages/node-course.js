import React from 'react'
import axios from 'axios'

import BackButton from '../components/BackButton'

const NodeCourse = () => (
  <div>
    <h2>Belajar Membuat Aplikasi Dengan NodeJS.</h2>
    <p>
      {' '}
      Mari belajar tentang platform NodeJS dari dasar dan bersama-sama kita akan
      belajar membuat aplikasi yang ringan dan cepat.
    </p>

    <p>
      {' '}
      Pada online course ini kita akan belajar tentang:
      <ul>
        <li>✅ Apa itu NodeJS</li>
        <li>✅ Kenapa menggunakan NodeJS</li>
        <li>✅ Bagaimana cara penggunaan NodeJS</li>
        <li>✅ NodeJS fundamental</li>
        <li>✅ Instalasi package dengan NPM</li>
        <li>✅ Membuat aplikasi sederhana dengan NodeJS</li>
      </ul>
    </p>
    <p>
      Tertarik?! Yuk daftar cukup dengan email kamu. Informasi selanjutnya akan
      dikirimkan ke inbox kamu. <strong>Tempat terbatas!</strong>
      <form
        action='https://randomscreencast.us16.list-manage.com/subscribe/post'
        accept-charset='UTF-8'
        method='post'
      >
        <input
          name='u'
          value='8265eb5b6276ad47f4668bfa1'
          data-enpassid='__0'
          type='hidden'
        />
        <input name='id' value='bb8c73699a' data-enpassid='__1' type='hidden' />
        <div data-dojo-attach-point='formFieldsContainer'>
          <div id='uniqName_3_0' widgetid='uniqName_3_0'>
            <input
              autocapitalize='off'
              autocorrect='off'
              name='MERGE0'
              id='MERGE0'
              size='25'
              data-enpassid='__5'
              type='email'
              className='form__input'
            />
            <div className='invalid-error' />
          </div>
        </div>
        <div className='content__button'>
          <input
            className='btn--warning'
            value='Daftar sekarang!'
            data-dojo-attach-point='submitButton'
            type='submit'
          />
        </div>
      </form>
    </p>
    <BackButton href='/' title='Back' />
  </div>
)
export default NodeCourse
