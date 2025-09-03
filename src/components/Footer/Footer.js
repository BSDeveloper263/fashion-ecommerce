import React, { useEffect } from 'react';
import './Footer.css';
import { FaFacebookF, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

function FooterSection() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section id="footer" className="footer-container" data-aos="fade-up">
      <div className="footer-wrapper">

        <div className="footer-box">
          <h2>FashionFiesta</h2>
          <p>Your ultimate destination for premium fashion trends.</p>
          <div className="social-icons">
            <a href="#"><FaFacebookF /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaTwitter /></a>
          </div>
        </div>

        <div className="footer-box">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Service</a></li>
            <li><a href="#cart">Cart</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer-box">
          <h3>Contact Info</h3>
          <p><FaMapMarkerAlt /> 456 Style Lane, Raipur, India</p>
          <p><FaPhoneAlt /> +91 9876543210</p>
          <p><FaEnvelope /> support@fashionfiesta.com</p>
        </div>

        <div className="footer-box">
          <h3>Subscribe</h3>
          <input type="email" placeholder="Your email" />
          <button>Subscribe</button>
        </div>

      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 FashionFiesta. All rights reserved.</p>
      </div>
    </section>
  );
}

export default FooterSection;
