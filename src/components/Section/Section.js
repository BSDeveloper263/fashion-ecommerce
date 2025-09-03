import React from 'react';
import { Element } from 'react-scroll';
import Home from '../Home/Home';
import About from '../About/About';
import Service from '../Service/Service';
import Contact from '../Contact/Contact';
import Collection from '../Collection/Collection';
import './Section.css'; // Agar tumhara section layout ka alag CSS file hai

const Section = () => {
  return (
    <div className="sections">

      {/* Home Section */}
      <Element name="home" className="section">
        <Home />
      </Element>

      {/* About Section */}
      <Element name="about" className="section">
        <About />
      </Element>
      
       {/* Services Section */}
      <Element name="Collection" className="section">
        <Collection/>
      </Element>

      {/* Services Section */}
      <Element name="services" className="section">
        <Service />
      </Element>

      {/* Contact Section */}
      <Element name="Contact" className="section">
        <Contact />
      </Element>

    </div>
  );
};

export default Section;
