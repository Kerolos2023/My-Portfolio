import React from 'react'
import "./portfolio.css"
import "../../index.css"
import Image1 from "../../assets/portfolio1.Jpg"
import Image2 from "../../assets/portfolio2.Jpg"
import Image3 from "../../assets/portfolio3.Jpg"
import Image4 from "../../assets/portfolio4.Jpg"
import Image5 from "../../assets/portfolio5.png"
import Image6 from "../../assets/portfolio6.Jpg"
const PortfolioData = [
  {
    id: 1,
    title: "profile item One",
    image: Image1,
    github: "https://github.com/Kerolos2023/food-website",
    demo: " https://enchanting-fox-e5c788.netlify.app/"
  },
  {
    id: 2,
    title: "profile item Two",
    image: Image2,
    github: "https://github.com/Kerolos2023/Html-css-template",
    demo: "https://starlit-pegasus-b04bcc.netlify.app/"
  },
  {
    id: 3,
    title: "profile item Three",
    image: Image3,
    github: "https://github.com/Kerolos2023/Loan-app",
    demo: "https://transcendent-llama-7dd9c4.netlify.app/"
  },
  {
    id: 4,
    title: "profile item Four",
    image: Image4,
    github: "https://github.com/Kerolos2023/memory-Game",
    demo: "https://fabulous-strudel-0fb630.netlify.app/"
  },
  {
    id: 5,
    title: "profile item Five",
    image: Image5,
    github: "https://github.com/Kerolos2023/weather-app",
    demo: "https://bespoke-travesseiro-2ee1b3.netlify.app/"
  },
  {
    id: 6,
    title: "profile item Six",
    image: Image6,
    github: "",
    demo: ""
  }
];
function Portfolio() {
  return (
    <>
    <div className="#portfolio" id='portfolio'>
      <div className="container portfolio_container">
        <div className="header">
          <h5>My Recent Work</h5>
          <h2>Portfolio</h2>
        </div>
        <div className="portfolio_items">
          <div className="row">
            {
            PortfolioData.map((DataItem) => {
              return (
                <div className="col-lg-4 col-md-6 col-sm-12" key={DataItem.id}>
                  <div className="card" >
                  <div className="image">
                    <img src={DataItem.image} alt="" />
                  </div>
                  <h3>{DataItem.title}</h3>
                  <div className="cta">
                    <a href={DataItem.github} className='btn' target="_blank" rel="noreferrer">Github</a>
                    <a href={DataItem.demo} className='btn btn-primary' target="_blank">Live Demo</a>
                  </div>
                </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Portfolio