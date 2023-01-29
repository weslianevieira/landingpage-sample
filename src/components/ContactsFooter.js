import React from 'react'

// img
import logoFooter from '../assets/Home/img/logo-footer.png'

const ContactsFooter = () => {
  return (
    <footer>
      <section className='metodologia'>
        <div className='center'>
        <h2>Conheça nossa Metodologia</h2>
			<p>O que acha de fazermos o que mais gostamos de fazer? Conversar!<br />Entre em contato por e-mail ou telefone.</p>
			<a href="/contato">Entrar Contato</a>
        </div>
      </section>

      <div className='center'>
        <div className='col-footer'>
        <h2>Suporte</h2>
				<a href="/">Contato</a>
				<a href="/">FAQ</a>
        </div>

        <div className='col-footer'>
        <h2>Suporte</h2>
				<a href="/">Contato</a>
				<a href="/">FAQ</a>
        </div>

        <div className='col-footer'>
        <h2>Suporte</h2>
				<a href="/">Contato</a>
				<a href="/">FAQ</a>
        </div>

        <div className='col-footer'>
          <img src={logoFooter} alt='logo-footer' />
        </div>
      </div>
    </footer>

  )
}

export default ContactsFooter