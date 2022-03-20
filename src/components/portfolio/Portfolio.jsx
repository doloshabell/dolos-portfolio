import React from 'react'
import './portfolio.css'
import PORTFOLIO from '../../assets/portfolio.jpg'

const data = [
  {
    id: 1,
    image: PORTFOLIO,
    title: "MY Portfolio",
    github: "https://github.com/doloshabell",
    demo: "https://github.com/doloshabell"
  },
  {
    id: 2,
    image: PORTFOLIO,
    title: "MY Portfolio",
    github: "https://github.com/doloshabell",
    demo: "https://github.com/doloshabell"
  },
  {
    id: 3,
    image: PORTFOLIO,
    title: "MY Portfolio",
    github: "https://github.com/doloshabell",
    demo: "https://github.com/doloshabell"
  },
  {
    id: 4,
    image: PORTFOLIO,
    title: "MY Portfolio",
    github: "https://github.com/doloshabell",
    demo: "https://github.com/doloshabell"
  },
  {
    id: 5,
    image: PORTFOLIO,
    title: "MY Portfolio",
    github: "https://github.com/doloshabell",
    demo: "https://github.com/doloshabell"
  },
  {
    id: 6,
    image: PORTFOLIO,
    title: "MY Portfolio",
    github: "https://github.com/doloshabell",
    demo: "https://github.com/doloshabell"
  },
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
                <h3>This is a portfolio item</h3>
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