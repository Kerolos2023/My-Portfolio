import React from 'react'
import "./about.css"
import "../../index.css"
import MEBG from "../../assets/mebg.png"
import { GiRibbonMedal } from "react-icons/gi";
import { IoMdContacts } from "react-icons/io";
import { GoProjectSymlink } from "react-icons/go";

function About() {
  return (
    <>
    <div className="about" id='about'>
      <div className="container about_container">
        <div className="header" >
        <h5 className="text-light">Get To Know</h5>
        <h2>About Me</h2>
        </div>

        <div class="container text-center">
          <div class="row">
            <div class="col-lg-6">
              <div className="mebg">
                <img src={MEBG} alt="false" />
              </div>
            </div>
            <div class="col-lg-6 content">
              <div className="row">
                <div className="col-lg-4 col-md-4">
                  <div className="card">
                    <GiRibbonMedal className='about_icon'/>
                    <h5>Experience</h5>
                    <small>3+ Years working</small>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="card">
                    <IoMdContacts className='about_icon'/>
                    <h5>Clients</h5>
                    <small>200+ Worldwide</small>
                  </div>
                </div>
                <div className="col-lg-4 col-md-4">
                  <div className="card">
                    <GoProjectSymlink className='about_icon'/>
                    <h5>Projects</h5>
                    <small>80+ Completed</small>
                  </div>
                </div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                   Illum recusandae praesentium, 
                   quibusdam ipsa libero quae quisquam adipisci saepe,
                    inventore consectetur, odio ad deserunt porro.
                     Vitae necessitatibus eius sint iste repellendus?</p>
                <a href="#contact" className='btn btn-primary'>Let's Talk</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default About