import React from 'react'

// img
import Logo from "../assets/img/logo.png"

// paths
import { useNavigate } from "react-router-dom";
import { goToHome } from "../routes/Coordinator";
import { goToAbout } from "../routes/Coordinator";
import { goToContact } from "../routes/Coordinator";

const Header = () => {
  const navigate = useNavigate()

  return (
    <section className='top'>
      <div className="center">
            <header>
                <div className='logo'><img src={Logo} alt="logo-empresa" /></div>
                <nav>
                    <ul className='menu-desktop'>
                        <li><a onClick={() => goToHome(navigate)}>Home</a></li>
                        <li><a onClick={() => goToAbout(navigate)}>About</a></li>
                        <li><a onClick={() => goToContact(navigate)}>Contact</a></li>
                    </ul>
                    <div className='clear'></div>
                </nav>
            </header>
            </div>
    </section>
  )
}

export default Header