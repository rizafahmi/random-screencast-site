import React from "react";

import "./ShareButtons.css";
import twitter from "../images/twitter.svg";
import fb from "../images/fb.svg";
import linkedin from "../images/linkedin.svg";

const ShareButtons = props => (
  <div style={{ marginTop: 64 }}>
    <span
      style={{
        fontSize: 18,
        color: "#999da1",
        fontWeight: 300
      }}
    >
      Sharing is <s>caring</s> magic!
    </span>
    <br />
    <a
      className="shareLink"
      href={
        "https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Frandomscreencast.com" +
        encodeURI(props.url)
      }
      target="_blank"
      ariaLabel="Share on Facebook"
    >
      <img src={fb} style={{ width: 28 }} />
    </a>
    <a
      className="shareLink"
      href={
        "https://twitter.com/intent/tweet/?text=" +
        encodeURI(props.title + "&url=https://randomscreencast.com" + props.url)
      }
      target="_blank"
      ariaLabel="Share on Twitter"
    >
      <img src="/static/twitter.svg" style={{ width: 28 }} />
    </a>
    <a
      className="shareLink"
      href={
        "https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Frandomscreencast.com" +
        props.url +
        "&amp;title=" +
        props.title +
        "&amp;summary=" +
        props.description +
        "&amp;source=https%3A%2F%2Frandomscreencast.com"
      }
      target="_blank"
      ariaLabel="Share on Linkedin"
    >
      <img src="/static/linkedin.svg" style={{ width: 28 }} />
    </a>
  </div>
);

export default ShareButtons;
