

import React from 'react';

import logo1 from '../../../../icons/logo1_banner.png'
import logo2 from '../../../../icons/logo2_banner.png';
import logo3 from '../../../../icons/logo3_banner.png';
import logo4 from '../../../../icons/logo4_banner.png';

import './slickBanner.scss';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SlickBanner = () => {


    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };


  return (
        <div>

                <svg xmlns="http://www.w3.org/2000/svg" width="280" height="347" viewBox="0 0 327 347" fill="none">
                                        <g opacity="0.8" filter="url(#filter0_b_321_555)">
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M288 16.0002C288 7.16369 280.837 0.000244141 272 0.000244141H55C46.1634 0.000244141 39 7.16369 39 16.0002V21.0002C39 29.8368 31.8366 37.0002 23 37.0002H16C7.16344 37.0002 0 44.1637 0 53.0002V331C0 339.837 7.16345 347 16 347H311C319.837 347 327 339.837 327 331V53.0002C327 44.1637 319.837 37.0002 311 37.0002H304C295.163 37.0002 288 29.8368 288 21.0002V16.0002Z" fill="url(#paint0_linear_321_555)"/>
                                        </g>
                                        <foreignObject x="30" y="20" width="327" height="347">
                                                    <div className="slickBanner__container">
                                                    <h1 className='slickBanner__title'>Benefit of <br />improving your business</h1>
                                                    <Slider {...settings}>
                                                        <div className='slickBanner__iconContainer'>
                                                            <img src={logo1} alt="#" className='slickBanner__logo' />
                                                            <p className='slickBanner__iconText'>Expanding the Market</p>
                                                        </div>
                                                        <div className='slickBanner__iconContainer'>
                                                            <img src={logo2} alt="#" className='slickBanner__logo' />
                                                            <p className='slickBanner__iconText'>Cost-Effective</p>
                                                        </div>
                                                        <div className='slickBanner__iconContainer'>
                                                            <img src={logo3} alt="#" className='slickBanner__logo' />
                                                            <p className='slickBanner__iconText'>More Professional</p>
                                                        </div>
                                                        <div className='slickBanner__iconContainer'>
                                                            <img src={logo4} alt="#" className='slickBanner__logo' />
                                                            <p className='slickBanner__iconText'>Attract Client</p>
                                                        </div>
                                                        
                                                    </Slider>
                                                    </div>
                                        </foreignObject>                
                                            
                                        <defs>
                                            <filter id="filter0_b_321_555" x="-100" y="-99.9998" width="527" height="547" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                            <feGaussianBlur in="BackgroundImageFix" stdDeviation="50"/>
                                            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_321_555"/>
                                            <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_321_555" result="shape"/>
                                            </filter>
                                            <linearGradient id="paint0_linear_321_555" x1="327" y1="347" x2="-46.1861" y2="286.93" gradientUnits="userSpaceOnUse">
                                            <stop stop-color="#00796D"/>
                                            <stop offset="1" stop-color="#38C682"/>
                                            </linearGradient>
                                        </defs>
                                </svg>
                
                    
        </div>
    
  );
};

export default SlickBanner;