import React, { useEffect } from "react";
import "./Contact.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container" data-aos="fade-up">
        <div className="contact-form">
          <h2>Contact Us</h2>
          <p>We'd love to hear from you. Please fill out the form below:</p>
          <form>
            <input type="text" placeholder="Your Name" required />
            <input type="email" placeholder="Your Email" required />
            <input type="text" placeholder="Subject" />
            <textarea placeholder="Your Message" rows="5" required />
            <button type="submit">Send Message</button>
          </form>
        </div>

        <div className="contact-map" data-aos="fade-left">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118983.74458375994!2d81.5366714110895!3d21.261885525027722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a28dda23be28229%3A0x163ee1204ff9e240!2sRaipur%2C%20Chhattisgarh!5e0!3m2!1sen!2sin!4v1753987686437!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};
export default Contact;
