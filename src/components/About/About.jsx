import React from 'react'
import './About.css'
import ME from '../../assets/My favorite.jpg'
import{FiAward} from 'react-icons/fi'
import{VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About ME</h2>
      <div className="container about__container">
        <div className="about__me">
            <div className="about__me__image">
              <img src={ME} alt="" />
            </div>
        </div>
        <div className="about__content">
            <div className="about__cards">
              <article className='about__card'>
               <FiAward className='about__icon'/>
                <h5>Experience</h5>
                <small>2+ Years Working</small>
              </article>
              
              <article className='about__card'>
               <VscFolderLibrary className='about__icon'/>
                <h5>Projects</h5>
                <small>10+ Completed</small>
              </article>
            </div>

              <p>My name is Abdel Rahman Abdel Badie, a final year student at Delta University of Engineering and Technology in Mansoura. I am 23 years old. I have worked as a ui ux designer for two years. I have designed many projects (mobile applications - websites) that you can browse through their links on the site</p>
              <a href="#contact" className='btn btn-primary'>Let's Talk</a>


        </div>
      </div>
    </section>
  )
}

export default About