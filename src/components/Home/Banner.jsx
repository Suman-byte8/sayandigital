import React from 'react'
import banner from '../../assets/banners/banner.png'

const Banner = () => {
  return (
    <div className="w-full bg-white h-auto my-10 flex justify-center items-center">
      <img src={banner} alt="banner" className="w-full h-full object-contain" />
    </div>
  )
}

export default Banner