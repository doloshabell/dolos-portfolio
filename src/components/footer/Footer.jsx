import React from 'react';
import './footer.css';
import { SiFacebook } from 'react-icons/si';
import { SiSpotify } from 'react-icons/si';
import { RiHeartFill } from 'react-icons/ri'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Habell Dolosha Purba</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.facebook.com/habelldolosha.purba/" target="_blank"><SiFacebook /></a>
        <a href="https://open.spotify.com/show/20p20xeMamZ9wrMl1XNDyL" target="_blank"><SiSpotify /></a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; Habell Dolosha Purba Portfolio - 2022 | Hope U Like My Portfolio Website <RiHeartFill />
        </small>
      </div>
    </footer>
  )
}

export default Footer