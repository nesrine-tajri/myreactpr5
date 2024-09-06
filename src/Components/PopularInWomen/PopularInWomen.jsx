import React from 'react'
import Nisrin from './nisrin.png'
import './PopularInWomen.css'
function PopularInWomen() {
  return (
    <div  className='popular'>
      <h1>popular in women</h1>
      <div className='ligne'></div>
      <div className='product' >
        <div className='card'>
            <img src={Nisrin}/>
            <p>this for elegent women soif u</p>
            <p>price is that</p>
            <h2>25$</h2>
        </div>
        <div className='card'>
            <img src={Nisrin}/> 
            <p>this for elegent women so if u</p>
            <p>price is that</p>
            <h2>25$</h2>
        </div>
        <div className='card'>
            <img src={Nisrin}/> 
            <p>this for elegent women so if u</p>
            <p>price is that</p>
            <h2>25$</h2>
        </div>
        <div className='card'>
            <img src={Nisrin}/> 
            <p>this for elegent women so if u</p>
            <p>price is that</p>
            <h2>25$</h2>
        </div>
        
      </div>
    </div>
  )
}

export default PopularInWomen
