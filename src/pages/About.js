import React from 'react'
import Header from '../components/Header'


import SimpleSlider from '../components/SimpleSlider'


const About = () => {
  return (
    <div>
      <Header />
      
      <section className='clients-slider'>
        <div className="center">
          <SimpleSlider />        
        </div> {/*--center--*/}
      </section>
    </div>
  )
}

export default About