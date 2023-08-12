import React from 'react';
import './about.css';
import pic2 from '../../assets/pic2.jpg'
import AboutBox from './AboutBox';

const About = () => {
  return (
    <section className='about container section' id='about'>
      <h2 className='section__title'>About Me</h2>
      <div className='about__container grid'>
        <img src={pic2} alt="" className='about__img'></img>
        <div className="about__data grid">
          <div className='about__info'>
            <p className='about__description'>
              I am Muhammad Sameer, Web and Mobile App developer from Islamabad, Pakistan. I love to develop and customize Web and Mobile App UIs. I also like creating Instagram Reels.
            </p>
            <a href='https://www.instagram.com/' className="btn">Download CV</a>
          </div>

          <div className='about__skills grid'>
            <div className="skills__data">
              <div className="skills__data">
                <h3 className="skill__name">Web Development</h3>
                <span className='skills__number'>90%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage webdev"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__data">
                <h3 className="skill__name">Mobile App Development</h3>
                <span className='skills__number'>80%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage mobiledev"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__data">
                <h3 className="skill__name">Videography</h3>
                <span className='skills__number'>60%</span>
              </div>
              <div className="skills__bar">
                <span className="skills__percentage videography"></span>
              </div>
            </div>
          </div>

        </div>
      </div>

      <AboutBox />
    </section>
  )
}

export default About;