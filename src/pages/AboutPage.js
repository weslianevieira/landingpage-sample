import React from 'react'

// components
import AboutIntro from '../components/About/AboutIntro'
import Header from '../components/Header'
import AboutImg from '../components/About/AboutImg'
import ContactsFooter from '../components/ContactsFooter'

// css
import '../css/aboutPage.css'


const About = () => {
  return (
    <>
      <Header />
      <AboutIntro />
      <AboutImg />
      <ContactsFooter />
    </>

  )
}

export default About