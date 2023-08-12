import React from 'react';
import './home.css';
import pic1 from '../../assets/pic1.jpeg';
import HeaderSocials from './HeaderSocials';
import ScrollDown from './ScrollDown';
import Shapes from './Shapes';

const Home = () => {
  return (
    <section className='home container' id="home">
      <div className='intro'>
        <img src={pic1} alt="" className='home__img'/>
        <h1 className='home__name'>Muhammad Sameer</h1>
        <span className='home__education'>I'm a Front-End Developer</span>
        <HeaderSocials />

        <a href='#contact' className='btn'>Hire Me</a>

        <ScrollDown />
      </div>
      <Shapes />
    </section>
  )
}

export default Home;