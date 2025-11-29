import React from 'react'
import "./services.css"
import { MdOutlineDesignServices } from "react-icons/md";
import { FaRocket } from "react-icons/fa";
import { HiMiniCodeBracket } from "react-icons/hi2";

function Services() {
  return (
<>
<div className="#services" id='services'>
  <div className="container container_sevices">
    <div className="sevices_content">
      <div className="header">
        <h5>What I Offer</h5>
        <h2>Services</h2>
      </div>
      <div className="row">
        <div className="col-lg-4 col-md-6" position="relative" >
          <div className="card">
            <MdOutlineDesignServices className='sevices_icon'/>
            <h3>Web Design</h3>
            <p>I create visually appealing and user-friendly web designs that enhance user experience and engagement.</p>
          </div>
      </div>
        <div className="col-lg-4 col-md-6">
          <div className="card">
            <FaRocket className='sevices_icon'/>
            <h3>Web Design</h3>
            <p>I create visually appealing and user-friendly web designs that enhance user experience and engagement.</p>
          </div>
        </div>
        <div className="col-lg-4 col-md-6">
          <div className="card">
            <HiMiniCodeBracket className='sevices_icon' />
            <h3>Web Design</h3>
            <p>I create visually appealing and user-friendly web designs that enhance user experience and engagement.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
</>
  )
}

export default Services