import React from 'react'

// img
import mapa from '../../assets/Contact/img/map.png'

const ContactForm = () => {
   return (
      <div className='contact'>
         <div className='center'>
            <div className='w50 contact-info'>
               <h2>A mais importante,<br />primeira conversa.</h2>
               <br />
               <p><strong>Telefone:</strong>(61) 9001-3635</p>
               <p><strong>Telefone:</strong>(61) 9001-3635</p>
               <p><strong>Telefone:</strong>(61) 9001-3635</p>

               <div className='map-container'>
                  <div id='mapa'>
                     <img src={mapa} alt='mapa' />
                  </div>
               </div>
            </div>

            <div className='w50 contact-form'>
               <form>
                  <input placeholder='Nome' type={'text'} />
                  <input placeholder='E-mail' type={'text'} />
                  <input placeholder='Telefone' type={'text'} />

                  <select>
                     <options>Geral</options>
                     <options>Suporte</options>
                  </select>

                  <textarea placeholder='Mensagem' ></textarea>
                  <input id='submit' type='submit' value='Enviar Formulário' />
               </form>
            </div>
            <div className='clear'></div>
         </div>
      </div>
   )
}

export default ContactForm