import React from 'react'

const AboutBox = () => {
  return (
    <div className='about__boxes grid'>
        <div className="about__box">
            <i className='about__icon icon-fire'></i>
            <div>
                <h3 className="about__title">13</h3>
                <span className="about__subtitle">Projects completed</span>
            </div>
        </div>

        <div className="about__box">
            <i className='about__icon icon-camrecorder'></i>
            <div>
                <h3 className="about__title">60+</h3>
                <span className="about__subtitle">Instagram Reels</span>
            </div>
        </div>

        <div className="about__box">
            <i className='about__icon icon-cup'></i>
            <div>
                <h3 className="about__title">147</h3>
                <span className="about__subtitle">Cups of Tea</span>
            </div>
        </div>


    </div>
  )
}

export default AboutBox