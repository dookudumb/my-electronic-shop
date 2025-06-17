// src/components/Footer.jsx
import React from "react";
import "./Footer.css"; // Create and style this file as needed

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <p>Electronic Shop Inc.</p>
        <p>123 Main St, City, Country</p>
      </div>
      <div>
        <p>Follow us on:</p>
        <ul className="social-media">
          <li>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              Facebook
            </a>
          </li>
          <li>
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              Twitter
            </a>
          </li>
          <li>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              Instagram
            </a>
          </li>
        </ul>
      </div>
      <div>
        <p>Powered by DX-Lab.</p>
      </div>
    </footer>
  );
};

export default Footer;
