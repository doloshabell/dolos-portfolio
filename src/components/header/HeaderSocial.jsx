import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { FaGithub } from 'react-icons/fa'
import { GrInstagram } from 'react-icons/gr'

const HeaderSocial = () => {
  return (
    <div className='header__socials'>
      <a href="https://linkedin.com/in/habell-dolosha-purba/" target="_blank"><BsLinkedin /></a>
      <a href="https://github.com/doloshabell" target="_blank"><FaGithub /></a>
      <a href="https://www.instagram.com/habell_dolo/" target="_blank"><GrInstagram /></a>
    </div>
  )
}

export default HeaderSocial