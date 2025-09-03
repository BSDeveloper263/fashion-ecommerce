import './Home.css';
import tshirt from './Images/fashion2.png'

const Home = () => {
  return (
    <div className="hero-viewport">
      <div className="hero-left">
        <h1 className="main-heading">
          Discover <span className="vibrant">Trendy Fashion</span> Today!
        </h1>
        <p className="subtext">
          Explore the world of premium fashion with unbeatable discounts. Stylish, affordable, and designed just for you!
        </p>
        <div className="badges">
          <div className="badge">🔥 50% OFF</div>
          <div className="badge">🎉 Festival Offers</div>
          <div className="badge">🚚 Free Shipping</div>
        </div>
        <div className="hero-buttons">
          <button className="shop-btn">Shop Now</button>
          <button className="explore-btn">Explore</button>
        </div>
      </div>

      <div className="hero-right">
        <div className="product-showcase">
          <img src={tshirt} alt="T-shirt Offer" />
          <div className="tag">New Arrival</div>
        </div>
      </div>
    </div>
  );
};

export default Home;
