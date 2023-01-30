import React from 'react'

// components
import Header from '../components/Header'
import ContactsFooter from '../components/ContactsFooter'
import ContactForm from '../components/Contact/ContactForm'

// css
import '../css/contactPage.css'

const Contact = () => {
  return (
    <div>
      <Header />
      <ContactForm />
      <ContactsFooter />
    </div>
  )
}

export default Contact