



import React from 'react';
import './testimonials.scss';


import TestimonialCard from './testismonialCard/testimonialCard';

import avatar1 from './../../icons/testimonials_avatar1.svg'


const Testimonials = () => {
  return (
        <div className="testimonials__container">
          
          <div className="testimonials__CardContainer">

                <TestimonialCard 
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam."
                    image={avatar1}
                    name="Clara Insomnia"
                    occupation="Earth Founder"
                />
                <TestimonialCard 
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam."
                    image={avatar1}
                    name="Clara Insomnia"
                    occupation="Earth Founder"
                />
                <TestimonialCard 
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam."
                    image={avatar1}
                    name="Clara Insomnia"
                    occupation="Earth Founder"
                />

                <TestimonialCard 
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam."
                    image={avatar1}
                    name="Clara Insomnia"
                    occupation="Earth Founder"
                />
                <TestimonialCard 
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam."
                    image={avatar1}
                    name="Clara Insomnia"
                    occupation="Earth Founder"
                />
                <TestimonialCard 
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam diam sagittis sagittis ullamcorper. Lorem ipsum dolor sit amet, consectetur adipiscing elit. aliquam."
                    image={avatar1}
                    name="Clara Insomnia"
                    occupation="Earth Founder"
                />
          </div>

          

      
        </div>
  );
};

export default Testimonials;