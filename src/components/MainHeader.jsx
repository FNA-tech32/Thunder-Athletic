import React from 'react'
import Image from '../../images/main_header.png'
import { Link } from 'react-router-dom'
const MainHeader = () => {
  return (
    <header className="main_header">
      <div className="container main_header-container">
        <div className="main_header-left">
          <h4>#ThunderAthletics</h4>
          <h1>Unleash Your Power at Thunder Athletics</h1>
          <p>
            Step into the ultimate fitness arena. Experience state-of-the-art training facilities,
            elite certified coaching, and custom performance programs engineered to build your peak physique.
          </p>
          <Link to="/plans" className='btn lg'>Get Started</Link>
        </div>
        <div className="main_header-right">
          <div className="main_header-circle"></div>
          <div className="main_header-img">
            <img src = {Image} />
          </div>
        </div>
      </div>
    </header>
  )
}

export default MainHeader