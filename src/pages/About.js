import React from 'react'
import bgabout from '../assets/about2.png'
import '../style/About.css'
function About() {
  return (
    <div className='about'>
      <div className='aboutTop' style={{backgroundImage:`url(${bgabout})`}}>
        
      </div>
      <div className='aboutBottom'>
        <h1>About Us</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
      </div>
    </div>
  )
}

export default About;
