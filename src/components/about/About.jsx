import React from 'react'
import './about.css'
import ME from '../../assets/dolos.png'
import { FaAward } from 'react-icons/fa'
import { FiUsers } from 'react-icons/fi'
import { VscFolderLibrary } from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="AboutImage" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>0-1 Years Working</small>
            </article>

            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>1</small>
            </article>

            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Works</h5>
              <small>2 Projects</small>
            </article>
          </div>

          <p>
            Hi, call me Dolos. Web Development enthusiast with Javascript, ReactJS, React Router, and Redux.
            I am passionate about IT Development. I am a detail-oriented, love to learn and a fast learner about
            new thing in Information and Technology, strong analytical, and good logical thinking. I am
            currently open for new opportunity.
          </p>

          <a href="#contact" className="btn btn-primary">Let's Talk</a>

        </div>
      </div>
    </section>
  )
}

export default About