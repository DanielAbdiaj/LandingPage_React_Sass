

import React from 'react';

import logo1 from '../../../icons/logo1_banner.png'
import logo2 from '../../../icons/logo2_banner.png';
import logo3 from '../../../icons/logo3_banner.png';
import logo4 from '../../../icons/logo4_banner.png';

import SlickBanner from './slickBanner/slickBanner'

import './banner.scss';

const Banner = () => {

   


  return (
        <div>

            <div className='banner__normalContainer'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="1180" height="337" viewBox="0 0 1280 334" fill="none" >
                                <g filter="url(#filter0_b_205_286)">
                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M1055 18.3356C1055 8.20924 1046.79 0.000244141 1036.66 0.000244141H243.335C233.209 0.000244141 225 8.20924 225 18.3356C225 28.4619 216.791 36.6709 206.665 36.6709H20C8.95431 36.6709 0 45.6252 0 56.6709V314C0 325.046 8.95431 334 20 334H1260C1271.05 334 1280 325.046 1280 314V56.6709C1280 45.6252 1271.05 36.6709 1260 36.6709H1073.34C1063.21 36.6709 1055 28.4619 1055 18.3356Z" fill="url(#paint0_linear_205_286)" fill-opacity="0.8"/>
                                    <foreignObject x="30" y="20" width="1180" height="337">
                                    
                                        <div className="banner__container" xmlns="http://www.w3.org/1999/xhtml">
                                            <h1 className='banner__title'>Benefit of improving your business</h1>
                                            <div className="banner__iconsContainer">
                                                <div className='banner__iconContainer'>
                                                    <img src={logo1} alt="#" className='banner__logo' />
                                                    <p className='banner__iconText'>Expanding the Market</p>
                                                </div>
                                                <div className='banner__iconContainer'>
                                                    <img src={logo2} alt="#" className='banner__logo' />
                                                    <p className='banner__iconText'>Cost-Effective</p>
                                                </div>
                                                <div className='banner__iconContainer'>
                                                    <img src={logo3} alt="#" className='banner__logo' />
                                                    <p className='banner__iconText'>More Professional</p>
                                                </div>
                                                <div className='banner__iconContainer'>
                                                    <img src={logo4} alt="#" className='banner__logo' />
                                                    <p className='banner__iconText'>Attract Client</p>
                                                </div>
                                            </div>
                                        </div>
                                    </foreignObject>
                                </g>
                                <defs>
                                    <filter id="filter0_b_205_286" x="-100" y="-99.9998" width="1480" height="534" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                                    <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                                    <feGaussianBlur in="BackgroundImageFix" stdDeviation="50"/>
                                    <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_205_286"/>
                                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_205_286" result="shape"/>
                                    </filter>
                                    <linearGradient id="paint0_linear_205_286" x1="1282.46" y1="314.915" x2="199.393" y2="-333.204" gradientUnits="userSpaceOnUse">
                                    <stop stop-color="#00796D"/>
                                    <stop offset="1" stop-color="#38C682"/>
                                    </linearGradient>
                                </defs>
                                
                            </svg>

                </div>

                <div className="banner__mobileContainer">
                    
                    <SlickBanner/>
                
                </div>

                
                    
        </div>
    
  );
};

export default Banner;