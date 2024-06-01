import React from 'react';
import SubNav from './SubNav'

const Navbar = () => {
  return (
    <header className="App-header">
    <nav className=" ">
    <div className="border-b-orange-500 flex justify-around items-center  ">
      <div className="b-10 ">
        <h1 className="text-4xl font-sans font-bold tracking-tighter ">electro<span className=" text-5xl text-yellow-400 ">.</span></h1>
      </div>
      <div className="flex justify-around items-center box-border p-3 w-auto ">
        
        <input className="search-input w-96 h-10 p-3 border-2 rounded-full  border-yellow-400 pl-2 " type="search" placeholder="search...." />
        {/* <span> <img  className="search-input-icon bg-yellow-400 rounded-full " width="30" height="30" src="https://img.icons8.com/sf-ultralight/25/search.png" alt="search"/></span> */}
      </div>
      <div className=" flex  justify-between items-center gap-5 ">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
        </svg>            
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
        </svg>   
        <h6 className="text-sm font-sans font-bold  ">$0.00</h6>    
      </div>
    </div>
    <div>
       {/* <SubNav/> */}
    </div>
  </nav>
    </header>
  )
}

export default Navbar