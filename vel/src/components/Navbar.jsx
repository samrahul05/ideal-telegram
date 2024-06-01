import React, { useState } from "react";
import { Link } from "react-router-dom";

import NavLinks from "./NavLinks";
import AllDepart from "./AllDepart";
import NavHead from "./NavHead";
const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white">
      <NavHead/>
      
      <div className=" flex items-center font-medium justify-around ">
        <ul className="md:flex hidden  items-center font-bold gap-8 font-sans">
         <AllDepart/>
          <NavLinks />
        </ul>
        
        <h1>Free Shipping on Orders $500+</h1>
        {/* Mobile nav */}
        <ul
          className={`
        md:hidden bg-white fixed w-full top-0 overflow-y-auto bottom-0 py-24 pl-4
        duration-500 ${open ? "left-0" : "left-[-100%]"}
        `}
        >
         
          <NavLinks />
       
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
