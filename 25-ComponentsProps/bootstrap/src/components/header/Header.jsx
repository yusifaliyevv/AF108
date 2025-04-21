import React from 'react'
import Navbar from '../navbar/Navbar'

function Header() {

    let style = {
        padding: "35px 0",
        fontSize: "24px",
        backgroundColor: "#212529",
        color: "white"
    }

  return (
    <div style={style}>
        <Navbar />
    </div>
  )
}

export default Header