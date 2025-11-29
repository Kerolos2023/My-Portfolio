import React from 'react'
import "./contact.css"
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'

import { useRef } from 'react';
import emailjs from 'emailjs-com'; 

const ContactData = [
  {
    id:1,
    icon: <MdOutlineEmail />,
    title:"Email",
    info: "kerolossaleh25@gmail.com",
    link: "mailto:kerolossaleh25@gmail.com",
  },
  {
    id:1,
    icon: <RiMessengerLine />,
    title: "Messenger",
    info: "Kerolos saleh",
    link: "https://m.me/kerolos.saleh.685821",
  },
  {
    id:1,
    icon: <BsWhatsapp />,
    title:"WhatsApp",
    info: "01156982856",
    link: "https://api.whatsapp.com/send?phone=201156982856",
  }
]
function Contact() {

  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_iaazy5v', 'template_25dr9bc', form.current, 'Nizm165Rs5ieR_Vgk',)
    e.target.reset()
  };


  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className="contact_options">
        {ContactData.map(({ id, icon, title, info, link }) => (
          <article key={id} className="contact_option">
                {icon}
                <h4>{title}</h4>
                <h5>{info}</h5>
                <a href={link} target='_blank'>Send Message</a>
          </article>
                ))}
        </div>

        <form ref={form} onSubmit={sendEmail}>
        <input type="text" name='name' placeholder='Your Full Name' required/>
        <input type="email" name='email' placeholder='Your Email' required/>
        <textarea placeholder='Your Message' name="message" rows={10}></textarea>
        <button className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact