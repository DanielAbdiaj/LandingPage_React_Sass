



import React from 'react';
import './testimonialCard.scss';


const TestimonialCard = ({ content, image ,name,occupation}) => {
  return (
        <div className="testimonialCard__container">
            
            <div className="testimonialCard__content">
                <p className="testimonialCard__contentText">{content}</p>
            </div>

            <div className="testimonialCard__info">
                <div className="testimonialCard__imageContainer">
                    <img src={image} alt="" className="testimonialCard__image" />
                </div>

                <div className="testimonialCard__infoContainer">
                    <p className="testimonialCard__name">{name}</p>
                    <p className="testimonialCard__occupation">{occupation}</p>
                </div>
            </div>

        </div>
  );
};

export default TestimonialCard;