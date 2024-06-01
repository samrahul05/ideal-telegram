import React from 'react'
import './NavBar.css'
import Logo from "../../img/logo.webp"
const NavBar = () => {
  return (
    <nav class='Nav'>
        <div class='nav-Content1'>
         <img class='logo' src={Logo}/>
         <p>Olivia<span>Miller</span></p>
        </div>
        <div class='nav-Content2'>

        <i class="fa-sharp fa-thin fa-magnifying-glass" ></i>
          <search></search>
        </div>
        <div class='nav-Content3'></div>
    </nav>
  )
}

export default NavBar