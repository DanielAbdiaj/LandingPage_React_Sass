
import React from 'react';
import { useState } from 'react';

import { ReactComponent as ArrowRight} from '../../../icons/arrow_right_black.svg';
import { ReactComponent as ArrowDown} from '../../../icons/arrow_down_green.svg';

import './dropdownCard.scss'


const DropdownCard = ({ number, title, text, image }) => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleCard = () => {
      setIsOpen(!isOpen);
    };
  
    return (
      <div className="dropdownCard__container">
      <span className={`dropdownCard__number ${isOpen ? 'open' : ''}`}>{number}</span>
              <div className='dropdownCard__container2' onClick={toggleCard}>    
                        <div className="dropdownCard__header">
                          <span className={`dropdownCard__title ${isOpen ? 'open' : ''}`}>{title}</span>
                          {isOpen ?   <ArrowDown className="dropdownCard__arrowDown" />: <ArrowRight className="dropdownCard__arrowRight" />}
                        </div>
                              
                                      {isOpen && (
                                        <div className="dropdownCard__content">
                                          <p className='dropdownCard__text'>{text}</p>
                                          <img src={image} alt="#" className="dropdownCard__image" />
                                        </div>
                                      )}       
              </div> 
        </div>
    );
  };
  
  export default DropdownCard;