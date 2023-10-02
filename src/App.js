import React from 'react'

import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Contact from './components/Contact/Contact'
import Header from './components/Header/Header'
import MyExperience from './components/MyExperience/MyExperience'
import Portfolio from './components/Portfolio/Portfolio'


const App = () => {
  return (
   <>
      <Nav/>
      <Header/>
      <About/>
      <MyExperience/>
      <Portfolio/>
      <Contact/>
   </>
  )
}

export default App