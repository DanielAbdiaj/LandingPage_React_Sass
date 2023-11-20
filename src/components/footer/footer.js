import React from 'react'

import './footer.scss';
import arrow from '../../icons/arrow_right.png';
// import FooterBackground from '../../icons/bg_footer.png';
import logo from '../../icons/logo1_nav.png';

const Footer = () => {
  return (
    <div className='footer__bgcontainer'>

<div className="footer__container">
        <div className="footer__header">
            <h1 className="footer__title">Let’s discuss and bring your vision to life.</h1>
            <button className='footer__button button__arrow--large'>Lets Talk <img src={arrow} alt="#" className='hero__button_arrowLogo' /></button>
        </div>

        <div className="footer__content">
            <div className="footer__content--agenoneEmail">
                <img src={logo} alt="" className="footer__content--logo" />
                <p className="footer__content--text">We're a team of experienced designers, developers, and marketers, passionate about delivering exceptional digital solutions.</p>
                <p className="footer__content--email">hello@agenone.com</p>
            </div>

            
            <div className="footer__content--linksContainer">

                <ul className="footer__ulist">
                    <li className="footer__list"><a href="" className="footer__link--title">Menu</a></li>
                    <li className="footer__list"><a href="" className="footer__link">Home</a></li>
                    <li className="footer__list"><a href="" className="footer__link">Services</a></li>
                    <li className="footer__list"><a href="" className="footer__link">About Us</a></li>
                    <li className="footer__list"><a href="" className="footer__link">Project</a></li>
                    <li className="footer__list"><a href="" className="footer__link">Contract</a></li>
                </ul>
                <ul className="footer__ulist">
                    <li className="footer__list"><a href="" className="footer__link--title">Support</a></li>
                    <li className="footer__list"><a href="" className="footer__link">FAQ</a></li>
                    <li className="footer__list"><a href="" className="footer__link">Privacy Policy</a></li>
                    <li className="footer__list"><a href="" className="footer__link">Terms of Service</a></li>
                </ul>
                <ul className="footer__ulist">
                    <li className="footer__list"><a href="" className="footer__link--title">Social </a></li>
                    <li className="footer__list"><a href="" className="footer__link">LinkedIn</a></li>
                    <li className="footer__list"><a href="" className="footer__link">Instagram</a></li>
                    <li className="footer__list"><a href="" className="footer__link">Twitter</a></li>
                    <li className="footer__list"><a href="" className="footer__link">Dribbble</a></li>
                    <li className="footer__list"><a href="" className="footer__link">Behance</a></li>
                </ul>

            </div>

            

        </div>
<div className="footer__divider"></div>
            <div className="footer__copyrights">
                <p className='footer__copyrights--text'>Copyright © 2023 by Agenone. All rights reserved.</p>
            </div>
        </div>
        
    </div>
  );
}


export default Footer;
