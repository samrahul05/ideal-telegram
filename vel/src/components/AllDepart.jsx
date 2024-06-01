import React, { useState } from 'react'
import { DepartList } from './DepartList';


const AllDepart = () => {
  const [isOpen ,setIsOpen] = useState(false)
 
  return (
    <>
    <button onClick={() => setIsOpen((prev) => !prev)} className="relative bg-yellow-400 text-black flex items-center gap-3  font-bold  font-sans px-10 py-2 rounded-lg">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5" />
        </svg>
      All Department
    </button>
    {isOpen &&(
      <div className=' absolute top-44 px-4 py-2 rounded-lg bg-white gap-3   '>
        {DepartList.map((items,i) =>(
          <ul className='flex items-center  justify-between border-b border-b-neutral-300 hover:bg-neutral-100  '>
            <li className='cursor-pointer font-normal font-[Poppins] p-2'>
            {items.name}
            </li>
            <li>
              {items.symbol}
            </li>
          </ul>
            
          

))}

      </div>
    )}
    </>
  )
}

export default AllDepart