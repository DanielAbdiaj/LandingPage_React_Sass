import React, { useState } from 'react'

import './works.scss';

import ProjectCard from './projectCard/projectCard';
import image1 from '../../icons/imgCard_project1.jpg'
import image2 from '../../icons/imgCard_project2.jpg'

const Works = () => {

  const [activeButton, setActiveButton] = useState('UI/UX');

  const handleButtonClick = (button) => {
    setActiveButton(button);
  };


  return (

    <div className='works__container'>

      <div className="works__header">
            <h1 className="works__headerTitle">Our Project Have Been<h1 className="works__title header--primary">Done</h1></h1>
            <p className="works__headerText text--darkBackground">Take a look at some of our recent projects and see how we've helped other businesses elevate their brand and drive business growth.</p>
      </div>


      <div className="works__body">
        <div className='works__toggleContainer'>
          <button onClick={() => handleButtonClick('UI/UX')}className='works__toggleBtn--primary button__normal--medium'><p className='works__desktopBtnText'>UI/UX Design</p><p className='works__mobileBtnText'>UI/UX</p></button>
          <button onClick={() => handleButtonClick('DM')} className='works__toggleBtn button__normal--medium'><p className='works__desktopBtnText'>Digital Marketing</p><p className='works__mobileBtnText'>Digital</p></button>
          <button onClick={() => handleButtonClick('SM')}className='works__toggleBtn button__normal--medium'><p className='works__desktopBtnText'>Social Media</p><p className='works__mobileBtnText'>SM</p></button>
          <button onClick={() => handleButtonClick('Dev')} className='works__toggleBtn button__normal--medium'><p className='works__desktopBtnText'>Development</p><p className='works__mobileBtnText'>Dev</p></button>
        </div>

      
            {activeButton === 'UI/UX' && 
                <div className='works__projectContainer'>
                    <ProjectCard
                    title="Title"
                    text="We are designed to help your business thrive in the online world."
                    image={image1}/>
                    
                    <ProjectCard
                    title="Title"
                    text="We are designed to help your business thrive in the online world."
                    image={image2}/>
                </div>
            }

            {activeButton === 'DM' && <p>Content for Button 2</p>}
            {activeButton === 'SM' && <p>Content for Button 3</p>}
            {activeButton === 'Dev' && <p>Content for Button 4</p>}
      </div>
      
    </div>
  )
}
export default Works;