import React from "react";
import Slider from "react-slick";
// Importar arq css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// imgs
import amazon from '../../assets/Home/img/amazon.png'
import walmart from '../../assets/Home/img/walmart.png'
import uber from '../../assets/Home/img/uber.png'
import dominos from '../../assets/Home/img/dominos.png'
import costco from '../../assets/Home/img/costco.png'

export default function HomeSlider() {
   var settings = {
      dots: true,
		arrows:false,
	    infinite: true,
	    speed:500,
	    slidesToShow: 4,
	    autoplay: true,
	    centerMode:false,
	    autoplaySpeed: 3000,
	    pauseOnHover:false,
	    responsive: 
	    [
	    {
	      breakpoint: 768,
	      settings: {
	        slidesToShow: 2
	      }
	    }
	    ]
   };
   return (
      <Slider {...settings}>
         <div className='slider-container'>
            <img src={amazon} alt='logo-amazon' />
         </div>
         <div className='slider-container'>
            <img src={uber} alt='logo-uber' />
         </div>
         <div className='slider-container'>
         <img src={walmart} alt='logo-walmart' />
         </div>
         <div className='slider-container'>
         <img src={costco} alt='logo-costco' />
         </div>
         <div className='slider-container'>
         <img src={dominos} alt='logo-dominos' />
         </div>
      </Slider>
   );
}