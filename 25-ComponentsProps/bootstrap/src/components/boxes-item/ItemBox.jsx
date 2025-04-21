import React from 'react'
import '../boxes/Items.css'

const ItemBox = ({icons, name, desc}) => {
  return (
    <div className='singleItem'>
        <img src={icons} alt="" />
        <div style={{padding: "20px 0", textAlign: "center"}}>
            <h1>{name}</h1>
            <i>{desc}</i>
        </div>
    </div>
  )
}

export default ItemBox