


import React from 'react';
import './services.scss';
import image1 from './../../icons/imgCard_service.jpg'


import DropdownCard from './dropdownCard/dropdownCard';

const Services = () => {
  return (
        <div className="services__container">
          <h1 className="services__headerTitle">The Services We Offer<span className="services__title"> For You</span></h1>

          <div className="services__cards">
          <DropdownCard
            number="01"
            title="UI/UX Design"
            text="Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi ac eu. Ultricies nisl enim lacus id aliquam montes euismod urna sem."
            image={image1}
          />

          <DropdownCard
            number="02"
            title="Digital Marketing"
            text="Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi ac eu. Ultricies nisl enim lacus id aliquam montes euismod urna sem."
            image={image1}
          />


          <DropdownCard
            number="03"
            title="Social Media Management"
            text="Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi ac eu. Ultricies nisl enim lacus id aliquam montes euismod urna sem."
            image={image1}
          />

          <DropdownCard
            number="04"
            title="Development"
            text="Lorem ipsum dolor sit amet consectetur. Nibh luctus nisi ac eu. Ultricies nisl enim lacus id aliquam montes euismod urna sem."
            image={image1}
          />

        </div>
        </div>
    
  );
};

export default Services;