import React from 'react'

import Logo from "../../assets/img/logo.png"
import "./style.css"

import { useNavigate } from "react-router-dom";
import { goToHome } from "../../routes/Coordinator";
import { goToAbout } from "../../routes/Coordinator";
import { goToContact } from "../../routes/Coordinator";

const Header = () => {
  const navigate = useNavigate()

  return (
    <section className='top'>
      <div className="center">
            <header>
                <div className='logo'><img src={Logo} alt="logo" /></div>
                <nav>
                    <ul className='menu-desktop'>
                        <li><a href='' onClick={() => goToHome(navigate)}>Home</a></li>
                        <li><a href='' onClick={() => goToAbout(navigate)}>About</a></li>
                        <li><a href='' onClick={() => goToContact(navigate)}>Contact</a></li>
                    </ul>
                    <div className='clear'></div>
                </nav>
            </header>
            </div>
    </section>
  )
}

export default Header