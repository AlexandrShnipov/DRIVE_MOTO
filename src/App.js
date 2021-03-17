import React from 'react';
import './App.css';
import SecondPage from './components/secondPage/SecondPage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomePage from './pages/homePage/HomePage';

function App() {
  return ( 
    <div className="App" >
      {/* <HomePage/> */}
      <Header/>
          <SecondPage/>
      <Footer/>
    </div>
  );
}

export default App;