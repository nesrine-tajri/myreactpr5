import ReactDom from "react-dom/client";
import React from 'react';
import Offers from './Components/Offers/Offers';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Header from './Components/Header/Header';
import PopularInWomen from './Components/PopularInWomen/PopularInWomen';
import Collection from './Components/Collection/Collection';
import Email from './Components/Email/Email';
import Footer from './Components/Footer/Footer';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';


function App() {
  return (
    <>
      <Navbar/>
      <Header/>
      <PopularInWomen/>
      <Offers/>
      <Collection/>
      <Email/>
      <Footer/>
    </>

  );
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;
