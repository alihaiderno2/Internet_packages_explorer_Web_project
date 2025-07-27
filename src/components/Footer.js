import React from "react";
import '../styles/Footer.css';
import { FaFacebookF,FaInstagram,FaTwitter} from "react-icons/fa";

function Footer() {
  return (
    <footer className="site-footer">
  <div className="footer-container">
    <div className="footer-left">
      <p>&copy; 2025 Internet packages explorer. All rights reserved.</p>
      <p>Contact: internet-packages-explorer.com</p>
    </div>

    <div className="footer-right">
      <h3>Follow Us</h3>
      <div className="social-icons">
        <a href="https:www.facebook.com" target="_blank" rel="noreferrer"><FaFacebookF/></a>
        <a href="https:www.twitter.com" target="_blank" rel="noreferrer"><FaTwitter/></a>
        <a href="https:www.instagram.com" target="_blank" rel="noreferrer" className="insta"><FaInstagram/></a>
      </div>
    </div>

  </div>

  <div className="footer-bottom">
    &copy; 2025 YourSite. All rights reserved.
  </div>
</footer>

  );
}
export default Footer;