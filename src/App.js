import React from 'react'
import ScrollToTop from './components/ScrollToTop'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Portfolio from './components/Portfolio';
import Testimonials from './components/Testimonials';
import Products from './components/Products';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';

export default function App() {
  return(
    <>
      <ScrollToTop />
      <Navbar />
      <Hero />
      <Services />
      <Portfolio />
      <Testimonials />
      <Products />
      <Newsletter />
      <Footer />
    </>
  );
}
