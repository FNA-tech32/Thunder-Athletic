import React from 'react'
import './about.css'
import HeaderImage from '../../../images/header_bg_1.jpg'
import Header from '../../components/Header'
import StoryImage from '../../../images/about1.jpg'
import VissionImage from '../../../images/about2.jpg'
import MissionImage from '../../../images/about3.jpg'

const About = () => {
  return (
    <>
      <Header title='About Thunder Athletics' img={HeaderImage}>
        Discover the passion, grit, and innovation behind Thunder Athletics. We are on a mission to redefine athletic performance and empower everyday heroes to achieve legendary fitness.
      </Header>
      
      <section className="about_story animated">
        <div className="container about_story-container">
          <div className='about_section-image'>
            <img src={StoryImage} alt='Thunder Athletics Story' />
          </div>

          <div className="about_section-content">
            <h1>Our Story</h1>
            <p>
              Founded with the conviction that athletic greatness lives within everyone, Thunder Athletics began as a tight-knit collective of trainers and athletes driven by a shared hunger for true functional strength.
            </p>
            <p>
              What started as an energetic local garage workshop has evolved into a premier sports performance hub. We stripped away gym gimmicks and built an atmosphere rooted in science-backed training, high-octane motivation, and relentless work ethic.
            </p>
            <p>
              Today, Thunder Athletics welcomes thousands of members—from beginners stepping onto the turf for the first time to seasoned athletes training for championship glory.
            </p>
          </div>
        </div>
      </section>

      <section className="about_Vission">
        <div className="container about_Vission-container">
          <div className="about_section-content">
            <h1>Our Vision</h1>
            <p>
              At Thunder Athletics, our vision is to establish the world standard for comprehensive fitness training, where physical endurance, mental resilience, and recovery harmonize seamlessly.
            </p>
            <p>
              We envision a community where excuses are left at the door, where members motivate one another, and where each training session brings you closer to your ultimate potential.
            </p>
          </div>
          <div className="about_section-image v">
            <img src={VissionImage} alt='Thunder Athletics Vision' />
          </div>
        </div>
      </section>

      <section className="about_Mission">
        <div className="container about_Mission-container">
          <div className="about_section-image">
            <img src={MissionImage} alt='Thunder Athletics Mission' />
          </div>
          <div className="about_section-content">
            <h1>Our Mission</h1>
            <p>
              Our mission is to provide an unmatched fitness ecosystem: cutting-edge equipment, certified coaching experts, tailored nutrition strategies, and an electric atmosphere.
            </p>
            <p>
              We commit to fostering an inclusive, empowering space where every milestone is celebrated, and every member is equipped with the tools to live healthier, stronger, and more confident lives.
            </p>
            <p>
              Every rep counts. Every workout is an opportunity to conquer your limits. Welcome to Thunder Athletics.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default About