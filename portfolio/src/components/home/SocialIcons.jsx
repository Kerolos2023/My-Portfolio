import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { SiCodeforces } from "react-icons/si";
import "./home.css"
export function SocialIcons() {
  return (
    <div className="SocialIcons">
        <a href="https://www.linkedin.com/in/kerolos-saleh-398a71286/" target="_blank" rel="noreferrer"><FaLinkedin /></a>
        <a href="https://github.com/Kerolos2023" target='_blank'><FaGithub /></a>
        <a href="https://codeforces.com/profile/kerolos112" target="_blank" rel="noreferrer"><SiCodeforces /></a>
    </div>
  )
}

export default SocialIcons