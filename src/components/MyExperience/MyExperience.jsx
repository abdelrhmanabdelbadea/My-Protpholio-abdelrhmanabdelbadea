import React from 'react'
import './MyExperience.css'
import{BsFillPatchCheckFill} from 'react-icons/bs'

const MyExperience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have</h5>
      <h2>My Experience</h2>
      <div className='container experience__container'>
      <div className='experience__frontend'>
        <h3>UX UI Designer</h3>
        <div className='experience__content'>
          <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icons'/>
            <div>
            <h4>Research</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icons'/>
            <div>
            <h4>User Persona</h4>
            <small className='text-light'>Intermediate</small>
            </div>
            
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icons'/>
            <div>
            <h4>User Flow</h4>
            <small className='text-light'>Experienced</small>
            </div>
            
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icons'/>
            <div>
             <h4>Wireframe(low-fidelity - high-fidelity)</h4>
            <small className='text-light'>Experienced</small>
            </div>
            
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icons'/>
            <div>
            <h4>Prototype</h4>
            <small className='text-light'>Experienced</small>
            </div>
           
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icons'/>
            <div>
            <h4>Visual Design</h4>
            <small className='text-light'>Experienced</small>
            </div>
            
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icons'/>
            <div>
            <h4>HTML</h4>
            <small className='text-light'>Experienced</small>
            </div>
            
          </article>
          <article className='experience__details'>
            <BsFillPatchCheckFill className='experience__details-icons'/>
            <div>
            <h4>CSS</h4>
            <small className='text-light'>Experienced</small>
            </div>
            
          </article>
        </div>
      </div>
      </div>
    </section>
  )
}

export default MyExperience