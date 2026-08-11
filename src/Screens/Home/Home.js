import React, { useEffect, useState } from 'react'
import './Home.css'
import slcH5 from '../../Images/SLC_High5.png'
import chi_jump from '../../Images/CHI_Jump_catch.png'
import { Link } from 'react-router-dom'

const Home = () => {

  const homeImages = [
    slcH5,chi_jump
  ]

  const [currentImage, setCurrentImage] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % homeImages.length)
    },4000)
    return () => clearInterval(interval)
  },[homeImages.length])
  return (
    <main className='home-page'>
      <section className='home-hero'>
        <div className='home-hero-media'>
          <img src={homeImages[currentImage]} alt="AFA game highlight" className="carouselImage" />
        </div>
        <div className='home-hero-content'>
          <p className='home-eyebrow'>AFA League Archive</p>
          <h1>AFA History</h1>
          <p>It's not just real. It's surreal.</p>
          <div className='home-actions'>
            <Link className='home-button primary' to='/Seasons'>Seasons</Link>
            <Link className='home-button secondary' to='/CareerSearch'>Player Search</Link>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Home