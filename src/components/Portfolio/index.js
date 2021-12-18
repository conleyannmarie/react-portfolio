import React from 'react'
import bookFinder from '../../assets/BookFinder.png'
import ethicalMedia from '..//assets/ethicalMedia.png'
import readmeGen from '../../assets/ReadmeGen.png'
import weatherDashboard from '../../assets/weatherDashboard.png'
import workDayScheduler from '../../assets/workDayScheduler.png'

function Portfolio() {

  return (
      <section className="portfolio">
          <h2>Portfolio</h2>
          <div className='image'>
              <img className="image_img" src={ethicalMedia}></img>
              <div className="image_top">
                  <a href="https://quiet-journey-83566.herokuapp.com//">
                      <div className="project_img">Project Site</div></a>
                  <a href="https://github.com/conleyannmarie/ethical-media">
                      <img className="github" src={GitHub} />
                  </a>
              </div>
          </div>
          <div className='image'>
              <img className="image_img" src={bookFinder} ></img>
              <div className="image_top">
                  <a href="https://conleyannmarie.github.io/book-finder/">
                      <div className="project_img">Project Site</div></a>
                  <a href="https://github.com/conleyannmarie/book-finder">
                      <img className="github" src={GitHub} />
                  </a>
              </div>
          </div>
          <div className='image'>
              <img className="image_img" src={readmeGen} ></img>
              <div className="image_top">
                  <a href="https://github.com/conleyannmarie/readme-gen">
                      <img className="github" src={GitHub} />
                  </a>
              </div>
          </div>
          <div className='image'>
              <img className="image_img" src={weatherDashboard} ></img>
              <div className="image_top">
                  <a href="https://conleyannmarie.github.io/weather-api/">
                      <div className="project_img">Project Site</div></a>
                  <a href="https://github.com/conleyannmarie/weather-api">
                      <img className="github" src={GitHub} />
                  </a>
              </div>
          </div>
          <div className='image'>
              <img className="image_img" src={workDayScheduler} ></img>
              <div className="image_top">
                  <a href="https://github.com/conleyannmarie/work-scheduler/">
                      <div className="project_img">Project Site</div></a>
                  <a href="https://conleyannmarie.github.io/work-scheduler/">
                      <img className="github" src={GitHub} />
                  </a>
              </div>
          </div>
      </section>
  )

};

export default Portfolio;