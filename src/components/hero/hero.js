
import Navbar from './navbar/navbar';
import Banner from './banner/banner';
import './hero.scss';
import arrow from '../../icons/arrow_right.png';

const Hero = () => {
    return (
          <div className="hero__container">

                <Navbar/>

                <div className="hero__caption">
                    <p className='hero__captionText'>NUMBER ONE CREATIVE DIGITAL AGENCY</p>
                </div>
                <div className="hero__content">

                    <h1 className='hero__contentHeader'>
                        <h1 className="hero__contentHeader header--primary">Smart Choices</h1>For Your Business Growth </h1>
                    {/* typewriteridea */}
                    <p className='hero__contentText text--darkBackground'>We're a team of experienced designers, developers,and marketers,passionate about delivering exceptional digital solutions. </p>
                  
                    <button className='hero__button button__arrow--large'>Contact Us<img src={arrow} alt="#" className='hero__button_arrowLogo' /></button>
                </div>

                <Banner/>

          </div>
      
    );
  };
  
  export default Hero;