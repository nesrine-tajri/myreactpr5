import React from "react";
import "./Navbar.css";
import logo from './logo.png'

function Navbar() {
  return (
    <>
        <nav className="navbar">
          <div className="navbar-logo">
            <img src={logo}/>
            <a href="/">Shopper</a>
          </div>

          <ul className="navbar-links">
            <li onClick={()=>{setMenu("shop")}}><link to='/'>shop</link></li>
            <li onClick={()=>{setMenu("mens")}}>
            <link to='/'>mens</link>
            </li>
            <li onClick={()=>{setMenu("womens")}}>
            <link to='/'>womens</link>
            </li>
            <li onClick={()=>{setMenu("kids")}}>
            <link to='/'>kids</link>
            </li>
          </ul>
          
          <div className="navbar-buttons">
           <link to='/login'> <button><a href="/login" className="btn">Login</a></button></link>
            <a href="/signup" className="btn btn-primary">
            <span class="material-symbols-outlined">shopping_cart</span>
            </a>
          </div>
        </nav>
    </>
  );
}

export default Navbar;
