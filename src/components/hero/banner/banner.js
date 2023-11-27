

import React from 'react';

import logo1 from '../../../icons/logo1_banner.png'
import logo2 from '../../../icons/logo2_banner.png';
import logo3 from '../../../icons/logo3_banner.png';
import logo4 from '../../../icons/logo4_banner.png';

import SlickBanner from './slickBanner/slickBanner'

import './banner.scss';

const Banner = () => {

   


  return (
        <>

            <div className='banner__normalContainer'>
                        
                        <div className='banner__container'>      
                                      
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

                </div>

                <div className="banner__mobileContainer">
                    
                    <SlickBanner/>
                
                </div>

                
                    
        </>
    
  );
};

export default Banner;