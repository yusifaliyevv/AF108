import React from 'react'
import './Navbar.css'

function Navbar() {
  return (
    <div className='main container'>
        {/* <img src="https://startbootstrap.github.io/startbootstrap-agency/assets/img/navbar-logo.svg" alt="" /> */}
        <div>Start Bootstrap</div>
        <div>
            <ul>
                <li className='navlist-item'>Services</li>
                <li className='navlist-item'>Portfolio</li>
                <li className='navlist-item'>About</li>
                <li className='navlist-item'>Team</li>
                <li className='navlist-item'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar