import React from 'react'
import "./home.css"
import ME from "../../assets/me.jpg"
import { SocialIcons } from './socialIcons'
import CV from "../../assets/Kerolos-Saleh-Khalaf-CV.pdf"
function Home() {
  return (
    <>
    <div className="home" id='home'>
      <div className="container home_container">

        <div className="title">
          <h4>Hello I'm</h4>
          <h1>Kerolos Saleh</h1>
          <h4 className="text-light">Frontend Developer</h4>
        </div>
        
        <div className='cta'>
          <a href={CV} download className='btn'>Download CV</a>
          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>

        <div className="me">
          <img src={ME} alt="" />
        </div>
        
        <SocialIcons  />
        <a href="#about" className='scroll_down'>Scroll Down</a>
      </div>
    </div>
    </>
  )
}

export default Home