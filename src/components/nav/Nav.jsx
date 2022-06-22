import React from 'react'
import './nav.css'
import { AiOutlineHome, AiOutlineSafetyCertificate } from 'react-icons/ai'
import { AiOutlineUser } from 'react-icons/ai'
import { FaAward } from 'react-icons/fa'
import { MdOutlineBuild } from 'react-icons/md'
import { VscCallIncoming } from 'react-icons/vsc'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')

  return (
    <nav>
      <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''}><FaAward /></a>
      <a href="#portfolio" onClick={() => setActiveNav('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><MdOutlineBuild /></a>
      <a href="#certificate" onClick={() => setActiveNav('#certificate')} className={activeNav === '#certificate' ? 'active' : ''}><AiOutlineSafetyCertificate /></a>
      <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><VscCallIncoming /></a>
    </nav>
  )
}

export default Nav
// 12116 