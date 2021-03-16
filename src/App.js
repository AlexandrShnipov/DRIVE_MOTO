import React from 'react';
import './App.css';
import SecondPage from './components/secondPage/SecondPage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

function App() {
  return ( 
    <div className="App" >
      <Header/>
      <SecondPage/>
      <Footer/>
    </div>
  );
}

export default App;