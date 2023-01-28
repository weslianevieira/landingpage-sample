import React from 'react'

// img
import icon1 from '../../assets/Home/icons/icon1.png'
import icon2 from '../../assets/Home/icons/icon2.png'
import icon3 from '../../assets/Home/icons/icon3.png'

const InfoHome = () => {
   return (
      <section className='diferenciais'>
         <div className="center">
            <h2>Contribuímos de ponta a ponta</h2>

            <div className='icons-diferenciais'>

               <div className='box-single-diferenciais'>
                  <img src={icon1} alt='icon1' />
                  <h3>Ambientes Mobile</h3>
                  <p>Garanta que toda sua comunicação esteja alinhada com seu propósito, cada palavra conta.</p>
               </div>

               <div className='box-single-diferenciais'>
                  <img src={icon2} alt='icon2' />
                  <h3>Ambientes Mobile</h3>
                  <p>Garanta que toda sua comunicação esteja alinhada com seu propósito, cada palavra conta.</p>
               </div>

               <div className='box-single-diferenciais'>
                  <img src={icon3} alt='icon3' />
                  <h3>Ambientes Mobile</h3>
                  <p>Garanta que toda sua comunicação esteja alinhada com seu propósito, cada palavra conta.</p>
               </div>
            </div>
         </div>
      </section>
   )
}

export default InfoHome