import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import ContactPage from "../pages/ContactPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage />}></Route>
        <Route path='about' element={<AboutPage />}></Route>
        <Route path='contact' element={<ContactPage />}></Route>
      </Routes>
    </BrowserRouter>
  )
}

export default Router