// app/page.js
"use client";
import React, { useState } from 'react';
import Header from './components/Header';
import ProductImage from './components/ProductImage';
import ProductDetails from './components/ProductDetails';
import NavLinks from './components/NavLinks';
import Current from './components/current';
import DiscriptionPart from './components/discrption-part'
import Article from './components/article-similarities';
import Interest from './components/interest-product';
import Deliverable from './components/ourdeliverable';
import Register from './components/registerandsave';
import Footer from './components/footer';

const HomePage = () => {
  const [productName, setProductName] = useState('Art de la table'); // Default product name

  const handleProductChange = (name: string) => {
    setProductName(name);
  };

  return (
    <div>
      <Header />
      <NavLinks onProductChange={handleProductChange} />
      <Current productName={productName} />
      <div style={styles.container}>
        <ProductImage />
        <ProductDetails />
      </div>
      <DiscriptionPart />
      <Article />
      <Interest />
      <Deliverable />
      <Register />
      <Footer />
    
    </div>
    
  );
};

const styles = {
  container: {
    display: 'flex',
    padding: '20px',
    gap: '20px',
  },
};

export default HomePage;
