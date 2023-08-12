import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <section className="contact container section" id='contact'>
      <h2 className="section__title">Get in Touch</h2>

      <div className="contact__container grid">
        <div className="contact__info">
          <h3 className="contact__title">Lets talk about everything!</h3>
          <p className="contact__details">Don't like forms? Send me an email.</p>
        </div>

        <form action="" className="contact__form">
          <div className="contact__form-group">
            <div className='contact__first-row'>
              <div className="contact__form-div">
                <input type="text" placeholder='Enter your Name' className="contact__form-input" />
              </div>
              <div className="contact__form-div">
                <input type="email" placeholder='Enter your Email' className="contact__form-input" />
              </div>
            </div>
            <div className="contact__form-div">
              <input type="text" placeholder='Enter your Subject' className="contact__form-input" />
            </div>
            <div className="contact__form-div contact__form-area">
              <textarea placeholder="Write your Message" className="contact__form-input" cols="30" rows="10"></textarea>
            </div>
            <div>
              <button className='btn'>Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  )
}

export default Contact;