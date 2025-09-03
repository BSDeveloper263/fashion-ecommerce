import React, { useState, useEffect } from 'react';
import './Collection.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const products = [
  {
    id: 1,
    category: 'Men',
    name: 'Men T-Shirt',
    price: '₹899',
    rating: '⭐️⭐️⭐️⭐️',
    sizes: ['S', 'M', 'L', 'XL'],
    image: 'https://rukminim2.flixcart.com/image/704/844/kumzpu80/t-shirt/n/k/2/l-blk-11-m-amsha-original-imag7ppuj4ggppkc.jpeg?q=90&crop=false',
    details: 'Premium cotton T-shirt perfect for daily wear.'
  },
  {
    id: 2,
    category: 'Women',
    name: 'Women Kurti',
    price: '₹1199',
    rating: '⭐️⭐️⭐️⭐️⭐️',
    sizes: ['M', 'L', 'XL'],
    image: 'https://urban-trend.co.in/cdn/shop/files/1389-KD_1.jpg?v=1703941084',
    details: 'Stylish rayon kurti with elegant print.'
  },
  {
    id: 3,
    category: 'Kids',
    name: 'Kids Frock',
    price: '₹599',
    rating: '⭐️⭐️⭐️⭐️',
    sizes: ['XS', 'S', 'M'],
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFeRnN0CT9muE2QyzsYxq1FLGOQtnicneGwA&s  ',
    details: 'Cute and comfy frock for little ones.'
  },
  {
    id: 4,
    category: 'Men',
    name: 'Men Jeans',
    price: '₹1399',
    rating: '⭐️⭐️⭐️⭐️',
    sizes: ['30', '32', '34', '36'],
    image: ' https://assets.ajio.com/medias/sys_master/root/20221021/FX9c/6352bb03aeb269659c5558a7/-1117Wx1400H-469349523-blue-MODEL.jpg  ',
    details: 'Denim jeans with stretchable comfort fit.'
  },
  {
    id: 5,
    category: 'Women',
    name: 'Women Saree',
    price: '₹1999',
    rating: '⭐️⭐️⭐️⭐️⭐️',
    sizes: ['Free'],
    image: 'https://www.jiomart.com/images/product/original/rvbgxwdovx/indian-women-pink-art-silk-saree-free-size-product-images-rvbgxwdovx-0-202303201035.jpg?im=Resize=(500,630) ',
    details: 'Designer saree with silk blend and contrast border.'
  },
  {
    id: 6,
    category: 'Kids',
    name: 'Kids T-Shirt',
    price: '₹499',
    rating: '⭐️⭐️⭐️⭐️',
    sizes: ['XS', 'S', 'M'],
    image: ' https://babybug.in/cdn/shop/products/name-initals-2.jpg?v=1703924776&width=1445',
    details: 'Cartoon printed T-shirt for kids, 100% cotton.'
  },
  {
    id: 7,
    category: 'Men',
    name: 'Men Shirt',
    price: '₹1099',
    rating: '⭐️⭐️⭐️⭐️',
    sizes: ['M', 'L', 'XL'],
    image: 'https://thesparkshop.in/wp-content/uploads/2022/10/new-spring-double-pocket-mens-fashion-shirt-brand-men-long-sleeved-solid-shirts-slim-fit-casual-men-shirt-social-extra-image-2.jpg  ',
    details: 'Formal wear shirt with soft finish and perfect fit.'
  },
  {
    id: 8,
    category: 'Women',
    name: 'Women Top',
    price: '₹799',
    rating: '⭐️⭐️⭐️⭐️',
    sizes: ['S', 'M', 'L'],
    image: 'https://sassafras.in/cdn/shop/products/SFTOPS40770-1.jpg?v=1751460277  ',
    details: 'Trendy and vibrant top for casual outings.'
  }
];

function CartSection() {
  const [visibleDetails, setVisibleDetails] = useState({});

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const toggleDetails = (id) => {
    setVisibleDetails(prev => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="cart-section" id="cart">
      <h2 className="section-title" data-aos="fade-down">🛒 Our Premium Cart</h2>
      <div className="product-grid">
        {products.map(product => (
          <div className="product-card" key={product.id} data-aos="zoom-in-up">
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p><strong>Category:</strong> {product.category}</p>
            <p><strong>Price:</strong> {product.price}</p>
            <p><strong>Rating:</strong> {product.rating}</p>
            <p><strong>Sizes:</strong> {product.sizes.join(', ')}</p>
            <button onClick={() => toggleDetails(product.id)} className="more-btn">
              {visibleDetails[product.id] ? 'Hide Details' : 'More'}
            </button>
            {visibleDetails[product.id] && (
              <div className="details-box">
                <p>{product.details}</p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CartSection;
