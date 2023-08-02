import React from 'react';
import { NavbarMain, Logo } from '../components/complete.style';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import logo from '../asserts/logo.png'
// import { faBell  } from '@fortawesome/free-solid-svg-icons';




function Navbar() {
  return (
    <NavbarMain>
      
        <div>
          <a href="/"><Logo src={logo} alt="Logo" /></a>
        </div>

        <div>
          {/* <FontAwesomeIcon icon="bell" /> */}
        </div>
     
    </NavbarMain>
  )
}

export default Navbar