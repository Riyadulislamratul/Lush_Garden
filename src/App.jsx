import React from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ProductsSection from './components/ProductsSection'
import FeaturesSection from './components/FeaturesSection'
import Newsletter from './components/Newsletter'
import Footer from './components/Footer'
import BlogSection from './components/BlogSection'
import GallerySection from './components/GallerySection'

const App = () => {
  return (
    <>
    <Header />
    <Hero />
    <ProductsSection />
    <FeaturesSection />
    <GallerySection />
    <Newsletter />
    <BlogSection />
    <Footer />
    </>
  )
}

export default App