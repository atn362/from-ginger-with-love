import React from "react";
import { Link } from "react-router-dom";
import { Button } from "./Button";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container">
      <section className="footer-subscription">
        <p className="footer-subscription-heading">
          Join the Adventure newsletter to receive our best vacation deals.
        </p>
        <p className="footer-subscription-text">
          You can unsubscribe at any time.
        </p>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Subscribe</Button>
          </form>
        </div>
      </section>
      <div className="footer-links">
        <div className="footer-link-wrapper">
          <div className="footer-link-items">
            <h2>About Us</h2>
            <Link to="/sign-up">How it works</Link>
            <Link to="/">Testimonials</Link>
            <Link to="/">Careers</Link>
            <Link to="/">Investors</Link>
            <Link to="/">Terms of Service</Link>
          </div>
          <div className="footer-link-items">
            <h2>Social Media</h2>
            <a
              href="https://www.google.com/"
              className="social-icon-link facebook"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
            >
              Facebook
              <i className="fab fa-facebook-square" />
            </a>
            <a
              href="https://www.google.com/"
              className="social-icon-link twitter"
              to="/"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter"
            >
              Twitter
              <i className="fab fa-twitter-square" />
            </a>
            <a
              href="https://www.google.com/"
              className="social-icon-link instagram"
              to="/"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
            >
              InstaGram
              <i className="fab fa-instagram-square" />
            </a>
            <a
              href="https://www.google.com/"
              className="social-icon-link pinterest"
              to="/"
              target="_blank"
              rel="noreferrer"
              aria-label="Pinterest"
            >
              Pinterest
              <i className="fab fa-pinterest-square" />
            </a>
          </div>
        </div>
      </div>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link className="social-logo">
              From Ginger with Love <i className="fab fa-typo3" />
            </Link>
          </div>
          <small className="website-rights">From Ginger with Love ©2021</small>
          <div className="social-icons"></div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
