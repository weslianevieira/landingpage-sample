import React from 'react'

// img
import Equipe from "../../assets/Home/img/ilustracao.png"

const HeaderExtensionHome = () => {
  return (
    <>
      <section className='topHome'>
        <div className='center'>
          <div className='w50 time-descricao'>{/* className no estilo bootstrap css, utilizando subclasses(css orientado a objetos) */}
            <h2>Melhore a comunicação com seu cliente e time.</h2>
            <p>Consulturia especializada em startups, empresas, principalmente, pessoas.</p>
            <a target='_blank' href='www.linkedin.com/in/weslianevieira'>Ver demontração</a>
          </div>
          <div className='w50 time-imagem'>
            <img src={Equipe} alt='equipe-na-mesa' />
            {/*[apos usar float como prop css, usar clear] */}
          </div>
          <div className='clear'></div>
        </div>
      </section>
    </>
  )
}

export default HeaderExtensionHome