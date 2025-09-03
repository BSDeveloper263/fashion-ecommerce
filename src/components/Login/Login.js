import React from 'react';
import './Login.css';
import { FaGoogle, FaFacebook, FaTimes } from 'react-icons/fa';

const LoginModal = ({ onClose }) => {
  return (
    <div className="login-modal-overlay">
      <div className="login-modal animate-pop">
        <FaTimes className="close-btn" onClick={onClose} />
        <h2>Welcome Back!</h2>

        <div className="login-inputs">
          <input type="text" placeholder="Email or Username" />
          <input type="password" placeholder="Password" />
          <button className="submit-btn">Login</button>
        </div>

        <p className="or-text">OR</p>

        <div className="social-buttons">
          <button className="google-btn"><FaGoogle /> Login with Google</button>
          <button className="facebook-btn"><FaFacebook /> Login with Facebook</button>
        </div>
      </div>
    </div>
  );
};

export default LoginModal;
