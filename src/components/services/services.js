


import React from 'react';
import './services.scss';
import image1 from './../../icons/imgCard_service.jpg'


import DropdownCard from './dropdownCard/dropdownCard';

const Services = () => {
  return (
        <div className="services__container">
          <h1 className="services__headerTitle">The Services We Offer<h1 className="services__title header--primary">For You</h1></h1>
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
    
  );
};

export default Services;