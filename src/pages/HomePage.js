import React from 'react'

// components
import Header from "../components/Header";
import HomeSlider from '../components/Home/HomeSlider';
import InfoHome from '../components/Home/InfoHome';
import HeaderExtensionHome from '../components/Home/HeaderExtensionHome';
import AboutTime from '../components/Home/AboutTime'
import Brief from '../components/Home/Brief'
import ContactsFooter from '../components/Home/ContactsFooter';

// css
import '../css/homePage.css'

const Home = () => {
  return (
    <>
      <Header />
      <HeaderExtensionHome />
      <section className='clients-slider'>
        <div className="center">
          <HomeSlider />
        </div>
      </section>
      <InfoHome />
      <AboutTime />
      <Brief />
      <ContactsFooter />
    </>
  )
}

export default Home