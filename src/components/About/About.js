import React, { useEffect } from "react";
import "./About.css";
import AOS from "aos";
import "aos/dist/aos.css";
import img1 from "./image/fashion2 copy.png";
// import img2 from "./image/fashion2 copy 2.png";
// import img3 from "./image/fashion2 copy 3.png";
// import img4 from "./image/fashion2.png";

const products = [
  {
    id: 1,
    name: "Stylish T-Shirt",
    image: " https://thebanyantee.com/cdn/shop/files/Black-T-shirt.jpg?v=1721380366",
    desc: "Premium quality cotton T-shirt for all-day comfort.",
  },
  {
    id: 2,
    name: "Trendy Jeans",
    image:"https://img.freepik.com/free-photo/jeans_1203-8093.jpg?w=360",
    desc: "Rugged, slim-fit jeans for your everyday look.",
  },
  {
    id: 3,
    name: "Classic Shirt",
    image: "https://m.media-amazon.com/images/I/7198Jmcr5GL.jpg",
    desc: "Perfect formal shirt with clean stitching.",
  },
  {
    id: 4,
    name: "Cool Jacket",
    image:"https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcS1GqKT1GAerHaHOkCEfyzpWwelHIqg9OXeT7WuqtfC3QqUD_xdONkn1zcIr35W4RNz6Rmhduhw3I7EZk6FRIoz01Q6kx_GqGTaL468SQY",
    desc: "Stylish jacket to keep you warm and fashionable.",
  },
];

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="about-section" id="about">
      <h2 className="about-title">About Our Fashion Brand</h2>
      <p className="about-description">
        We provide premium quality fashion wear to make your look bold, modern,
        and confident. Explore our top-selling picks below.
      </p>

      <div className="about-card-container">
        {products.map((item) => (
          <div className="about-card" key={item.id} data-aos="zoom-in">
            <img style={{width:'100px'}} src={item.image} alt={item.name} />
            <h3>{item.name}</h3>
            <p>{item.desc}</p>
            <button className="view-more">View More</button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default About;


