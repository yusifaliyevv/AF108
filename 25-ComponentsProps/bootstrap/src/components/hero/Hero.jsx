import React from 'react'
import "./Hero.css"
import backgroundImage from '../../assets/images/portfolio-08.jpg';


function Hero() {
  return (
    <div className='mainDiv' style={{ backgroundImage: `url(${backgroundImage})` }}>
        <div className='mainTxt'>
            <i className='welcome'>Welcome To Our Studio!</i>
            <strong className='meet'>It's Nice To Meet You</strong>
            <button className='tell'>tell me more</button>
        </div>
    </div>
  )
}

export default Hero