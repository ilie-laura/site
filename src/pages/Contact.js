import React from 'react'
import leftcontact from '../assets/leftcontact.png'
import rightcontact from '../assets/rightcontact.png'
import '../style/Contact.css';

function Contact() {
  return (
    <div className='contact'>
      <div className='leftSide' style={{ backgroundImage: `url(${rightcontact})` }}></div>
      <div className='rightSide'>
        <h1>Contact Us</h1>
        <form  id='contact-form' method='POST' action='form.php'>
          <label htmlFor='name'>Name</label>
          <input type='text' name='name' placeholder='Enter your name' required />
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' placeholder='Enter your email' required />
          <label htmlFor='message'>Message</label>
          <textarea name='message' placeholder='Enter your message' required></textarea>
          <button type='submit'>Send Message</button>
        </form>
      </div>
    </div>
    
  )
}

export default Contact;
