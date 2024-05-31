/** @jsxImportSource react */
import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import NavLinks from './components/NavLinks';
import ProductSection from './components/ProductSection';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-sans box-border bg-zinc-100">
      <Header />
      <Navbar />
      <NavLinks />
      <ProductSection />
      <Form />
      <Footer />
    </div>
  );
}

export default App;
