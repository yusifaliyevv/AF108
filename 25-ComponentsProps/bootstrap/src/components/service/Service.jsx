import React from 'react'
import "../services/Services.css"

const Service = ({icon, name, desc}) => {
  return (
    <div className='singleService'>
        <img src={icon} alt="" />
        <h1>{name}</h1>
        <p>{desc}</p>
    </div>
  )
}

export default Service