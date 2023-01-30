import React from 'react'

// img
import Logo from "../assets/Header/img/logo.png"

// paths
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../routes/Coordinator";
import { goToAboutPage } from "../routes/Coordinator";
import { goToContactPage } from "../routes/Coordinator";

const Header = () => {
  const navigate = useNavigate()

  return (
    <section className='top'>
      <div className="center">
        <header>
          <div className='logo'><img src={Logo} alt="logo-empresa" /></div>
          <nav>
            <ul className='menu-desktop'>
              <li><a href='/' onClick={() => goToHomePage(navigate)}>Home</a></li>
              <li><a href='/' onClick={() => goToAboutPage(navigate)}>About</a></li>
              <li><a href='/' onClick={() => goToContactPage(navigate)}>Contact</a></li>
            </ul>
            <div className='clear'></div>
          </nav>
        </header>
      </div>
    </section>
  )
}

export default Header