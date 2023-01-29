import React from 'react'

// img
import img1 from '../../assets/About/img/foto-1.png'
import img2 from '../../assets/About/img/foto-2.png'
import img3 from '../../assets/About/img/foto-3.png'
import img4 from '../../assets/About/img/foto-4.png'

const AboutImg = () => {
  return (
    <section className='about-images'> 
      <div className='center'>
         <div className='img-about'>
            <img src={img1} alt='team' />
         </div>

         <div className='image-about'>
            <img src={img2} alt='team' />
         </div>

         <div className='image-about'>
            <img src={img3} alt='team' />
         </div>

         <div className='image-about'>
            <img src={img4} alt='team' />
         </div>
      </div>
    </section>
  )
}

export default AboutImg