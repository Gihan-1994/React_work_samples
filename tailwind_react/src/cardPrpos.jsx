import React from 'react'
import Cards from './Cards'
import  { useState, useRef } from 'react';



function CardPrpos() {

    const [current_Component, setCurrentComponent] = useState(0);
    const[current_A_name,setcurrent_A_name] = useState(1);


    const contentArray = [
        { A_name: "Animals", component: <Cards /> },
        { A_name: "Tiger", component: <Cards {...Tiger} /> },
        { A_name: "Lion", component: <Cards {...Lion} /> },
        { A_name: "Bear", component: <Cards {...Bear} /> },
      ];
       
      const handleClick = () => {
        
        setcurrent_A_name((a) => (a + 1 ) % contentArray.length);
        setCurrentComponent((prev) => (prev + 1) % contentArray.length);
      };

      const getComponent = contentArray[current_Component].component
      const getA_name = contentArray[current_A_name ].A_name

  return (
    <div className="p-4 bg-gray-100 rounded shadow-lg w-full max-w-md mx-auto">
    <div className="mb-4">
        <div className="content-box">{getComponent}</div>
      </div>

    
    <button
      className="absolute bottom-2 left-1/2 transform -translate-x-1/2 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
      onClick={handleClick}
    >
      Next Animal: {getA_name}
    </button>
  </div>
  )
}
let Lion ={
name :'Lion',
description: 'Lions are iconic big cats, known as the "kings of the jungle," characterized by their majestic manes, social pride dynamics, and powerful roar that echoes across the savannah. 🦁',
src : 'https://thumbs.dreamstime.com/b/majestic-lion-wild-animals-324886909.jpg'

}
let Tiger ={
    name :'Tiger',
    description: 'Tigers are majestic, powerful big cats known for their striking orange coat with black stripes, fierce hunting prowess, and significant role in the ecosystem as apex predators. 🐅',
    src : 'https://www.colchesterzoologicalsociety.com/wp-content/uploads/2024/09/Tiger-600x380.jpg'
    
    }
    let Bear ={
        name :'Bear',
        description: 'Bears are large, formidable mammals known for their thick fur, powerful limbs, and versatile diet, ranging from berries to fish, with a widespread presence in forests and mountains. 🐻',
        src : 'https://cdn.britannica.com/71/149571-050-C33E9F0F/Brown-bear-Finland.jpg?w=920&h=518&c=crop'
        
        }
export default CardPrpos
