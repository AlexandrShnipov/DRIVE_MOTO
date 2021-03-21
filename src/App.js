import React from 'react';
import './App.css';
import SecondPage from './components/secondPage/SecondPage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import HomePage from './pages/homePage/HomePage';
import ThirdPage from './components/thirdPage/ThirdPage';

function App() {
  return ( 
    <div className="App" >
      <HomePage/>
      <Header/>
          <SecondPage/>
      <Footer/>
       <ThirdPage/>
    </div>
  );
}

export default App;