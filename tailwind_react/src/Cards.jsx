import React from 'react'

function Cards({
    name="Animals",
    description="Some description",
    src="https://t4.ftcdn.net/jpg/04/15/79/09/360_F_415790935_7va5lMHOmyhvAcdskXbSx7lDJUp0cfja.jpg"
    
    }) {
   
  return (
   
      <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
    <a href="#">
        <img className="rounded-t-lg" src={src} alt="" />
    </a>
    <div className="p-5">
        <h1></h1>
        <a href="#">
            <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{name}</h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{description}</p>
        
    </div>
</div>
    </div>
    
  )
}

export default Cards
