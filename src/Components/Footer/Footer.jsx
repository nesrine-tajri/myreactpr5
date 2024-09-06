import React from 'react'
import './Footer.css'
import Logo from '../../Assets/logo.png';
function Footer() {
  return (
    <div>
      <div className='shopper'> 
        <div className='logo'> 
            <img src={Logo}/>
            <h1>shopper</h1>
        </div>
        <ul>
            <li>company</li>
            <li>company</li>
            <li>company</li>
            <li>company</li>
            <li>company</li>
        </ul>
        <div className='icons'>
        <ion-icon name="logo-instagram"></ion-icon>
        <ion-icon name="logo-facebook"></ion-icon>
        <ion-icon name="logo-snapchat"></ion-icon>
        </div>
       <div className='seperator'></div>
       <p>copyright @ 2023 -all right reseved</p>

      </div>
      
    </div>
  )
}

export default Footer
