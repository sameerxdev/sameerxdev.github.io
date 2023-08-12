import React from 'react';
import './services.css';
import web from '../../assets/webdevservice.png';
import mobile from '../../assets/mobileappservice.png';
import video from '../../assets/videoservice.png';


const data = [
  {
    id: 1,
    image: web,
    title: "Web Development",
    description:
      "Crafting cutting-edge websites that blend aesthetics and functionality for a superior user experience.",
  },
  {
    id: 2,
    image: mobile,
    title: "Mobile App Development",
    description:
      "Turning your app idea into a reality with innovative design, seamless functionality, and user-centric development.",
  },
  {
    id: 3,
    image: video,
    title: "Videography",
    description:
      "Elevating your content with expert videography and seamless, polished video editing for impactful storytelling.",
  },
];

const Services = () => {
  return (
    <section className='services container section'>
      <h2 className="section__title">Services</h2>

      <div className="services__container grid">
        {data.map(({id, image, title, description}) => {
          return (
            <div className='services__card' key={id}>
              <img src={image} alt="" className='services__img'/>
              <h3 className="services__title">{title}</h3>
              <p className="services__description">{description}</p>
            </div>
          )
        })}
      </div>
    </section>
  )
}

export default Services;