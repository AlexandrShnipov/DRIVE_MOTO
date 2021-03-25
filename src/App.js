import React from 'react';
import './App.scss';
import CatalogPage from './components/catalogPage/CatalogPage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomePage from './pages/homePage/HomePage';
import ProductPage from './components/productPage/ProductPage';

function App() {
  return ( 
    <div className="App" >
      <Header/>
      {/* <HomePage/> */}
      <CatalogPage/>
      {/* <ProductPage/>  */}
      <Footer/>
    </div>
  );
}

export default App;