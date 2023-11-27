

import { useState } from 'react';
import './hamburger.scss';
import toggleIcon from '../../../../icons/toggle_button_mobile.svg'


const Hamburger = () => {
    const [isActive, setActive] = useState(false);
  
    const openHam = () => {
      const toggleClass = () => {
        setActive(!isActive);
      };
  
      toggleClass();
    };
  
    const closeMenu = () => {
      setActive(false);
    };
  
    return (
      <>
        <div
          className={`navbar__hamburger ${isActive ? "hamburger-active" : ""}`}
          onClick={openHam}
        >
          <img src={toggleIcon} alt="#" className='navbar__hamburger__toggleIcon'/> 
        </div>
        <div className={`header-links-container ${isActive ? "change" : ""}`}>
                
                <ul className='header-links'>
                    <li className='navbar__list'><a href="#" className='navbar__anchor navbar__anchor--primary'>Home</a></li>
                    <li className='navbar__list'><a href="#" className='navbar__anchor'>Services</a></li>
                    <li className='navbar__list'><a href="#" className='navbar__anchor'>Project</a></li>
                    <li className='navbar__list'><a href="#" className='navbar__anchor'>About Us</a></li>
                    <button className='hamburger__button button__normal--medium'>Contact Us</button>
                </ul>
        </div>
      </>
    );
  };
  
  export default Hamburger;