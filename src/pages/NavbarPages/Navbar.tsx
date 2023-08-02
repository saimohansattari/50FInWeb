import React from 'react';
import { NavbarMain, NavContent, Logo, NavIconImg } from '../../components/complete.style';
import logo from '../../asserts/logo.png'
import { Notification, Help, Signout } from '../../asserts/svgs';




function Navbar() {
  return (
    <NavbarMain>
      
        <div>
          <a href="/"><Logo src={logo} alt="Logo" /></a>
        </div>

        <NavContent>
          <NavIconImg> <Notification /> </NavIconImg>
          <NavIconImg> <Help /> </NavIconImg>
          <NavIconImg> <Signout /> </NavIconImg>
          
        </NavContent>
     
    </NavbarMain>
  )
}

export default Navbar