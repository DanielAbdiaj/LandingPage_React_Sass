
import React, { useState } from 'react';

import logo from '../../../icons/logo1_nav.png';
import toggleIcon from '../../../icons/toggle_button_mobile.svg'

import './navbar.scss';

const Navbar = () => {

  const [isDropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!isDropdownVisible);
  };


  return (
    
        
    <nav className={`navbar__container${isDropdownVisible ? '--show-dropdown' : ''}`}>
            <img src={logo} alt="#" className='navbar__logo' />
                <ul className={`navbar__unorderedList${isDropdownVisible ? '--show-dropdown' : ''}`}>
                    <li className='navbar__list'><a href="#" className='navbar__anchor navbar__anchor--primary'>Home</a></li>
                    <li className='navbar__list'><a href="#" className='navbar__anchor'>Services</a></li>
                    <li className='navbar__list'><a href="#" className='navbar__anchor'>Project</a></li>
                    <li className='navbar__list'><a href="#" className='navbar__anchor'>About Us</a></li>
                </ul>
            <button className={`navbar__button${isDropdownVisible ? '--show-dropdown' : ''} button__normal--medium`}>Contact Us</button>
            <img src={toggleIcon} alt="#" className='navbar__toggleIcon'  onClick={toggleDropdown}/>
        </nav>
    
  );
};

export default Navbar;