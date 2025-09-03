import React, { useState } from 'react';
import './App.css';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import Footer from './components/Footer/Footer';
import { FloatingWhatsApp } from 'react-floating-whatsapp';
import Login from './components/Login/Login'; // Add this
import ram from './image/bhwani.jpeg'
function App() {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <div className="App">
      <Header onLoginClick={() => setShowLogin(true)} />

      <Section />
      <Footer />
      <FloatingWhatsApp phoneNumber={9098170382} accountName="Bhavani Singh"  avatar={ram}/>

      {/* Login Modal */}
      {showLogin && <Login onClose={() => setShowLogin(false)}  />}
    </div>
  );
}

export default App;
