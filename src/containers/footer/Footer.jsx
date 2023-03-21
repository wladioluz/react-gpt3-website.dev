import React from 'react';
import gpt3logo from '../../assets/logo.svg'
import './footer.css';

const Footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>Do you want to step in to the future before others</h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request Early Access</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links__logo'>
          <img src={gpt3logo} alt="logo" />
        </div>
        <div className='gpt3__footer-links__div'>
          <h4>Links</h4>
          <p>About Us</p>
          <p>Contact Us</p>
          <p>Careers</p>
          <p>Blog</p>
        </div>
        <div className='gpt3__footer-links__div'>
          <h4>Company</h4>
          <p>Our Mission</p>
          <p>Our Board</p>
          <p>Our Locations</p>
        </div>
        <div className='gpt3__footer-links__div'>
          <h4>Get in touch</h4>
          <p>Live Chat</p>
          <p>Twitter</p>
          <p>Discord</p>
          <p>Sales</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>© 2023 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer