import React from 'react'

// img
import time from '../../assets/Home/img/time.png'

const AboutTime = () => {
  return (
    <section className='about-time'>
      <div className='center'>
         <div className='w50 time-description-2'>
            <h2>Um time experiente, <br/> comunicador e coeso.</h2>
            <p>A Product Run acredita que marcas fortes são construídas a partir de transformações importantes e positivas na vida dos consumidores. Exatamente como uma conversa que ganha forma, a ideia vira flâmula.
            <br /><br />
            Comunicar bem, de forma coerente e clara não é algo fácil e estamos aqui para ajudar você e seu time. Você escolhe, remoto ou presencial, para seu cliente ou seu público interno, você determina como vamos te ajudar.
            </p>
         </div>

         <div className='w50 img-time'>
            <img src={time} alt='time' />
         </div>
         <div className='clear'></div>
      </div>
    </section>
  )
}

export default AboutTime