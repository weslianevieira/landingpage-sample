import React from "react";
import Slider from "react-slick";
// Importar arq css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// img
import autor1 from '../../assets/Home/img/autor.jpg'

export default function BriefSlider() {
   var settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
   };
   return (
      <Slider {...settings}>
         <div className='brief-single'>
            <p>"Ea et magna do occaecat cillum consequat. Minim et exercitation ad esse dolor pariatur nulla et minim aliquip. Labore pariatur exercitation nisi labore nisi reprehenderit labore veniam."</p>

            <p>Guilherme Grillo</p>
            <img src={autor1} alt='autor' />
         </div>
         
         <div className='brief-single'>
            <p>"Ea et magna do occaecat cillum consequat. Minim et exercitation ad esse dolor pariatur nulla et minim aliquip. Labore pariatur exercitation nisi labore nisi reprehenderit labore veniam."</p>

            <p>Guilherme Grillo</p>
            <img src={autor1} alt='autor' />
         </div>

         <div className='brief-single'>
            <p>"Ea et magna do occaecat cillum consequat. Minim et exercitation ad esse dolor pariatur nulla et minim aliquip. Labore pariatur exercitation nisi labore nisi reprehenderit labore veniam."</p>

            <p>Guilherme Grillo</p>
            <img src={autor1} alt='autor' />
         </div>
      </Slider>
   );
}