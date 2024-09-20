import React, { useEffect, useState } from 'react'
import './Home.css'
import slcH5 from '../../Images/SLC_High5.png'
import chi_jump from '../../Images/CHI_Jump_catch.png'

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
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '90px 20px'}}>
      <div className='title' style={{textAlign: 'center', marginBottom: '10px'}}>
        <h1>Welcome to the AFA History Page! </h1> 
        <p style={{fontSize: '1.2rem', color: '#555'}}>It's not just real it's SURREAL</p>
      </div>
      <div className="homeImgCarousel">
        <img src={homeImages[currentImage]} alt="carousel" className="carouselImage" />
      </div>
    </div>
  )
}

export default Home