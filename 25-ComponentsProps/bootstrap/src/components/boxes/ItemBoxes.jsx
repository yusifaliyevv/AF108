import React from 'react'
import ItemBox from "../boxes-item/ItemBox";
import '../boxes/Items.css'
import ItemHeader from '../itemHeader/ItemHeader';

const ItemBoxes = () => {

    let items = [
        {
            id: 1,
            name: "Threads",
            description: "Illustration",
            image: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/1.jpg"
        },
        {
            id: 2,
            name: "Explore",
            description: "Graphic Design",
            image: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/2.jpg"
        },
        {
            id: 3,
            name: "Finish",
            description: "Identity",
            image: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/3.jpg"
        },
        {
            id: 4,
            name: "Lines",
            description: "Branding",
            image: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/4.jpg"
        },
        {
            id: 5,
            name: "Southwest",
            description: "Website Design",
            image: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/5.jpg"
        },
        {
            id: 6,
            name: "Window",
            description: "Photography",
            image: "https://startbootstrap.github.io/startbootstrap-agency/assets/img/portfolio/6.jpg"
        }
    ]

  return (
    <div className='itemsDiv'>
        <div style={{display:"flex", flexDirection:"column", justifyContent:"center"}}>
            <ItemHeader />
        </div>
        <div className='itemsTotal container'>
            {items.map((item) => (
                <ItemBox 
                    key = {item.id}
                    icons = {item.image}
                    name = {item.name}
                    desc = {item.description}
                />
        ))}
        </div>
    </div>
  )
}

export default ItemBoxes