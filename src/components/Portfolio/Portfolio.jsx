import React from 'react'
import './Portfolio.css'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import img3 from '../../assets/img3.png'
import img4 from '../../assets/img4.png'
import img5 from '../../assets/img5.png'
import img6 from '../../assets/img6.png'
import img7 from '../../assets/img7.png'
import img8 from '../../assets/File Cover (4).png'
import img9 from '../../assets/Cover.png'
const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Projects</h2>

      <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
              <img src={img9} alt="" />
          </div>
          <h3>Wedding car rental app</h3>
          <div className="cta">
          <a href="https://www.behance.net/gallery/181308409/Wedding-car-rental-app?" className='btn btn-primary'>Live Demo</a>
          </div>
          
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
              <img src={img8} alt="" />
          </div>
          <h3>E-learning Platform</h3>
          <div className="cta">
          <a href="https://www.behance.net/gallery/178615287/E-learning-Platform" className='btn btn-primary'>Live Demo</a>
          </div>
          
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
              <img src={img1} alt="" />
          </div>
          <h3>Hotel Booking App</h3>
          <div className="cta">
          <a href="https://www.behance.net/gallery/175506385/Hotel-Booking-App" className='btn btn-primary'>Live Demo</a>
          </div>
          
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
              <img src={img2} alt="" />
          </div>
          <h3>E-commerce App</h3>
          <div className="cta">
          <a href="https://www.behance.net/gallery/174488025/E-commerce-App" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
              <img src={img3} alt="" />
          </div>
          <h3>Food Delivery App</h3>
          <div className="cta">
          <a href="https://www.behance.net/gallery/170059683/Food-App-(Yummy)" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
              <img src={img4} alt="" />
          </div>
          <h3>Home Page Watch Store</h3>
          <div className="cta">
          <a href="https://www.behance.net/gallery/170205629/Home-Page-Rivoli" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
              <img src={img5} alt="" />
          </div>
          <h3>Quraan App</h3>
          <div className="cta">
          <a href="https://www.behance.net/gallery/173793593/Quraan-app" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
              <img src={img6} alt="" />
          </div>
          <h3>Website For a Contracting Company</h3>
          <div className="cta">
          <a href="https://www.behance.net/gallery/173611345/Website-for-a-contracting-company" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
              <img src={img7} alt="" />
          </div>
          <h3>The Home Page For The GymShark</h3>
          <div className="cta">
          <a href="https://www.behance.net/gallery/170338867/The-home-page-of-the-GymShark" className='btn btn-primary'>Live Demo</a>
          </div>
        </article>
      
      </div>
        
    </section>
  )
}

export default Portfolio