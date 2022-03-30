import React from 'react'
import './portfolio.css'
import PORTFOLIO1 from '../../assets/portfolio_catluv.jpg'
import PORTFOLIO2 from '../../assets/portfolio_jiaenergy.jpg'

const data = [
  {
    id: 1,
    image: PORTFOLIO1,
    title: "Catluv",
    github: "https://github.com/doloshabell/front-end-project-group2",
    demo: "https://catluv.netlify.app/"
  },
  {
    id: 2,
    image: PORTFOLIO2,
    title: "CV. Jia Multi Energy",
    github: "#",
    demo: "https://jiaenergy.com/"
  }
]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return(
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title} />
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className="btn" target="_blank">Github</a>
                  <a href={demo} className="btn btn-primary" target="_blank">Live Demo</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio