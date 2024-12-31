import { useState } from 'react'

import './App.css'
import CardPrpos from './cardPrpos'

function App() {
  const [colour, setcolour] = useState('white')
 // const[colType,setColType] = useState(red)
const colourmap={
  Teal : 'teal',
  Lime : 'lime',
  Red : 'red'

}

  function changeColour(event)
  {
   const txtcolour= event.target.innerText;
   console.log(txtcolour);
  if(txtcolour){
    setcolour(colourmap[txtcolour]);
  }
    
  }

  return (
    <>
    
        <div className='w-full h-screen duration-200'>
        <div className=' grid flex-wrap justify-center bottom-60 top-10 inset-x-0 px-6 bg-gray-50'
         style={{backgroundColor:colour}}  >
        <h1 className='bg-sky-200 text-5xl'>Card colour changer</h1>
        
        <CardPrpos/>
        </div>
        <div className="relative w-full max-w-md mx-auto flex items-end justify-between">
     
        <button onClick={changeColour}
         type="button"
          className="text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
            Teal
            </button>
        
        <button 
        type="button"  onClick={changeColour}
        className="text-gray-900 bg-gradient-to-r from-lime-200 via-lime-400 to-lime-500 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-lime-300 dark:focus:ring-lime-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Lime
          </button>
       
        <button
         type="button" onClick={changeColour}
         className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
          Red
          </button>
        </div>


           
          </div>
        </>
  )
}

export default App
