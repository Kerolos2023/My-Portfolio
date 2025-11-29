import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import './footer.css'
import "../../index.css"

function Footer() {
  return (
    <footer>
      <div className="container">
        <ul className='permalinks'>
          <li><a href="#">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#testimonials">Testimonials</a></li>
          <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer_socials">
      <a href="https://www.facebook.com/kerolos.saleh.685821" target='_blank'><FaFacebookF /></a>
            <a href="https://www.instagram.com/salehkero/" target='_blank'><FaInstagram /></a>
            <a href="https://www.threads.com/@salehkero" target='_blank'><FaXTwitter /></a>
      </div>

      <div className="footer_copyright">
        <small>&copy; <a href="#">KerolosSaleh</a> All rights reserved</small>
      </div>
      </div>
    </footer>
  )
}

export default Footer