import React from 'react';
import './App.scss';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomePage from './pages/homePage/HomePage';
import ProductPage from './components/productPage/ProductPage';
import CatalogPage from './components/catalogPage/CatalogPage';

function App() {
  return (
    <div className="App" >
      <Header />
      <HomePage />
      <CatalogPage />
      <Footer />
      <ProductPage />
    </div>
  );
}

export default App;