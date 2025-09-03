import React, { useEffect } from "react";
import "./Service.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { FaTruck, FaExchangeAlt, FaShieldAlt, FaHeadset } from "react-icons/fa";

const services = [
  {
    icon: <FaTruck />,
    title: "Fast Delivery",
    desc: "We ensure super-fast shipping to your doorstep within 2-4 working days across India.",
  },
  {
    icon: <FaExchangeAlt />,
    title: "Easy Returns",
    desc: "7-day hassle-free returns on all shirts and fashion items with full refund guaranteed.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Secure Payment",
    desc: "Your transactions are 100% secured with end-to-end encryption and trusted gateways.",
  },
  {
    icon: <FaHeadset />,
    title: "24/7 Support",
    desc: "Our support team is always available via chat, email, and phone to assist you anytime.",
  },
];

const Service = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="service-section" id="services">
      <h2 className="service-title" data-aos="fade-down">Our Services</h2>
      <p className="service-description" data-aos="fade-up">
        We provide premium services to make your shopping smooth, secure and stylish.
      </p>

      <div className="service-cards">
        {services.map((item, index) => (
          <div className="service-card" key={index} data-aos="zoom-in-up">
            <div className="service-icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Service;
