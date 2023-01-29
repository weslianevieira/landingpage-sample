import React from 'react'

// img
import fotoEquipe from '../../assets/About/img/foto-equipe.jpg'

const AboutIntro = () => {
  return (
    <section className='about-time'>
      <div className='center'>
         <div className='w50 time-about-text'>
         <h2>Uma equipe estratégica para um trabalho incrível</h2>
         <p>Com foco permanente na geração de resultados para empresas, atuamos na consultoria estratégica e na criação e implementação de soluções de comunicação criativas, consistentes e adequadas às necessidades e características de cada companhia. Para isso, trabalhamos sempre em parceria e colaboração com interfaces e executivos das organizações, mantendo completo envolvimento com os negócios de cada cliente.</p>
         </div>
         <div className='w50'>
            <img src={fotoEquipe} alt='foto-equipe' /> 
         </div>
         <div className='clear'></div>
      </div>
    </section>
  )
}

export default AboutIntro