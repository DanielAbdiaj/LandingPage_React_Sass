
import React, { useState } from 'react';

import logo from '../../../icons/logo1_nav.png';


import './navbar.scss';

import Hamburger from './hamburger/hamburger';

const Navbar = () => {

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };


  return (
    
        
    <nav className='navbar__container'>
            <img src={logo} alt="#" className='navbar__logo' />
                <ul className='navbar__unorderedList'>
                    <li className='navbar__list'><a href="#" className='navbar__anchor navbar__anchor--primary'>Home</a></li>
                    <li className='navbar__list'><a href="#" className='navbar__anchor'>Services</a></li>
                    <li className='navbar__list'><a href="#" className='navbar__anchor'>Project</a></li>
                    <li className='navbar__list'><a href="#" className='navbar__anchor'>About Us</a></li>
                </ul>
            <button className='navbar__button button__normal--medium'>Contact Us</button> 
               <Hamburger/>
             
        </nav>
    
  );
};

export default Navbar;