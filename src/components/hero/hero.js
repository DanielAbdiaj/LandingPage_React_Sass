
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
                    <div className="hero__content">
                        <div className="hero__contentContainer">
                                <h1 className='hero__contentHeader'><span className="hero__contentHeader--span">Smart Choices</span><br />For Your Business Growth </h1>
                        
                                <p className='hero__contentText text--darkBackground'>We're a team of experienced designers, developers,and marketers,passionate about delivering exceptional digital solutions. </p>
                        </div>
                        
                        <button className='hero__buttonM button__arrow--medium'>Contact Us<img src={arrow} alt="#" className='hero__button_arrowLogo' /></button>
                        <button className='hero__buttonL button__arrow--large'>Contact Us<img src={arrow} alt="#" className='hero__button_arrowLogo' /></button>
                    </div>
                </div>
                

                <Banner/>

          </div>
      
    );
  };
  
  export default Hero;