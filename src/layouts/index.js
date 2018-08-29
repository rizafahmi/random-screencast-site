import React from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";

import "./application.css";
import "./index.css";
import "./prism-solarizedlight.css";

const Header = () => (
  <div className="grid">
    <header className="grid__col-12 panel--padded--centered">
      <a className="site-logo" href="/">
        <img src="https://randomscreencast.com/static/logo.png" />
      </a>
      <nav className="navbar" role="navigation">
        <ul className="nav">
          <li className="nav__item">
            <a href="/rss.xml">
              <img className="nav__image" src="/static/rss.svg" />
            </a>
          </li>
          <li className="nav__item">
            <a href="https://github.com/rizafahmi" target="_blank">
              <img className="nav__image" src="/static/github.svg" />
            </a>
          </li>
          <li className="nav__item">
            <a href="https://www.youtube.com/c/RizaFahmi" target="_blank">
              <img className="nav__image" src="/static/youtube.svg" />
            </a>
          </li>
          <li className="nav__item">
            <a href="https://facebook.com/rizafahmi" target="_blank">
              <img className="nav__image" src="/static/fb.svg" />
            </a>
          </li>
          <li className="nav__item">
            <a href="https://twitter.com/rizafahmi22" target="_blank">
              <img className="nav__image" src="/static/twitter.svg" />
            </a>
          </li>
          <li className="nav__item">
            <a href="https://www.linkedin.com/in/rizafahmi/" target="_blank">
              <img className="nav__image" src="/static/linkedin.svg" />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  </div>
);

const Footer = () => (
  <div className="grid">
    <footer className="grid__col--12 panel--centered">
      <div className="centered grid__col--6" id="mc_embed_signup">
        <p>
          Apabila kamu menyukai konten di website ini, monggo di-<em>
            subscribe
          </em>{" "}
          biar setiap ada episode baru kamu akan di email. Ngga bakal di-<em>
            spam
          </em>. Saya juga membenci <em>spam</em> kok 😃
        </p>
        <form
          action="https://randomscreencast.us16.list-manage.com/subscribe/post?u=8265eb5b6276ad47f4668bfa1&amp;id=fa2f2c22dd"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="form"
          target="_blank"
          noValidate
        >
          <div id="mc_embed_signup_scroll">
            <div className="grid">
              <div className="grid__col-12">
                <div className="grid__col--8">
                  <label htmlFor="mce-EMAIL" className="form__label--hidden">
                    Email Address{" "}
                  </label>
                  <input
                    type="email"
                    name="EMAIL"
                    className="form__input"
                    id="mce-EMAIL"
                    placeholder="yourawesomeemail@cool.com"
                  />
                </div>
                <div className="grid__col--4">
                  <input
                    type="submit"
                    value="Subscribe"
                    name="subscribe"
                    id="mc-embedded-subscribe"
                    className="btn--warning"
                  />
                </div>
              </div>
            </div>
            <div id="mce-responses" className="clear">
              <div
                className="response"
                id="mce-error-response"
                style={{ display: "none" }}
              />
              <div
                className="response"
                id="mce-success-response"
                style={{ display: "none" }}
              />
            </div>
            <div
              style={{ position: "absolute", left: -5000 }}
              aria-hidden="true"
            >
              <input
                type="text"
                name="b_8265eb5b6276ad47f4668bfa1_fa2f2c22dd"
                tabIndex="-1"
                value=""
              />
              <div className="clear" />
            </div>
          </div>
        </form>
        <ul
          className="footer-link"
          style={{
            borderTop: 1,
            borderTopStyle: "solid",
            borderTopColor: "#ebecec",
            paddingTop: 22
          }}
        >
          <li>
            <a href="/about">ABOUT</a>
          </li>
          <li>
            <a href="mailto:rizafahmi@gmail.com">FEEDBACK</a>
          </li>
        </ul>
      </div>
    </footer>
  </div>
);

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Random Screencast | Screencast on random tech tools"
      meta={[
        { name: "description", content: "Screencast on random tech tools" },
        { name: "keywords", content: "random, screencast, technology" },
        {
          property: "og:url",
          content: "https://randomscreencast.com/"
        },
        {
          property: "og:type",
          content: "website"
        },
        {
          property: "og:title",
          content: "Random Screencast. Screencasts on random tech tools."
        },
        {
          property: "og:description",
          content:
            "Random Screencast adalah screencast tentang tools dan teknologi. Tidak hanya teknologi, disini juga akan membahas tentang soft-skill namun tetap masih berkaitan dengan dunia software development. Setiap episode-nya, Riza akan running through berbagai tools development dan mengimplementasikannya kedalam sebuah project sederhana dengan cara yang fun dan spontan."
        },
        {
          property: "og:image",
          content:
            "http://randomscreencast.com.s3.amazonaws.com/static/logo.png"
        },
        {
          property: "og:image:secure_url",
          content: "https://randomscreencast.com/static/logo.png"
        },
        {
          property: "og:image:width",
          content: "1200"
        },
        { property: "og:image:height", content: "628" }
      ]}
    >
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/static/16x16.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/static/32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="48x48"
        href="/static/48x48.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="64x64"
        href="/static/64x64.png"
      />
    </Helmet>
    <Header />

    <div className="grid">
      <div className="centered grid__col--10">{children()}</div>
    </div>

    <Footer />
  </div>
);

TemplateWrapper.propTypes = {
  children: PropTypes.func
};

export default TemplateWrapper;
