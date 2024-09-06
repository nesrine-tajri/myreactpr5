import React from 'react'
import './Header.css'
import chili from './chili.png'
function Header() {
  return (
    <div className='shop'>
      <nav>
        <p>New arrivals only </p>
        <div className='hand'>
        <h1>new</h1><span class="material-symbols-outlined">waving_hand</span>
        </div>
      
        <h1>collections</h1>
        <h1>for everyone</h1>
        <button class="arrow-button">latest collection  </button>
      </nav>
      <img src={chili}/>
    </div>
    
  )
}

export default Header
