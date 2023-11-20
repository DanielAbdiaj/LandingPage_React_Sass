

import React from 'react';
import './achievements.scss';


const Achievements = () => {
  return (
        <div className="achievements__container">
            <p className="achievements__text">We are passionate about helping businesses grow and succeed in the digital age. We take pride in our work and strive to exceed your expectations every time.</p>
      <div className='achievements__numbersContainer'>
            <div className="achievements__numbers">
              <h1 className="achievements__numbers--number">10+</h1>
              <p className="achievements__numbers--text">Years of Experiences</p>
            </div>
            <div className="achievements__numbers">
              <h1 className="achievements__numbers--number">666+</h1>
              <p className="achievements__numbers--text">Project Completed</p>
            </div>
            <div className="achievements__numbers">
              <h1 className="achievements__numbers--number">555+</h1>
              <p className="achievements__numbers--text">Satisfied Client</p>
            </div>
            <div className="achievements__numbers">
              <h1 className="achievements__numbers--number">10+</h1>
              <p className="achievements__numbers--text">Awards Achieved</p>
            </div>

            </div>    
         
        </div>
    
  );
};

export default Achievements;