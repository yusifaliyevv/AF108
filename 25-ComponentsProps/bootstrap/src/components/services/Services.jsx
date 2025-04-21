import React from 'react'
import Service from '../service/Service'
import SrvHeader from '../serviceHeader/HeaderService'


const Services = () => {

    let services = [
        {
            id: 1,
            name: "E-Commerce",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
            image: "web-development.jpg"
        },
        {
            id: 2,
            name: "Responsive Design",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
            image: "web-development.jpg"
        },
        {
            id: 3,
            name: "Web Security",
            description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minima maxime quam architecto quo inventore harum ex magni, dicta impedit.",
            image: "web-development.jpg"
        }
    ]


  return (
    <div className='servicesDiv container'>
        <div>
            <SrvHeader />
        </div>
        <div className='servicesTotal'>
        {services.map((service) => (
            <Service 
                key = {service.id}
                icons = {service.image}
                name = {service.name}
                desc = {service.description}
            />
        ))}
        </div>
    </div>
  )
}

export default Services