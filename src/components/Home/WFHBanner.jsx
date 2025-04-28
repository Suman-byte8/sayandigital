// Import necessary dependencies and assets
import React from 'react'
import wfh from '../../assets/banners/765x191 WFH-Gifts_Banner.png'

const WFHBanner = () => {
  return (
    // Main container with full width and vertical margin
    <div className='w-full my-8'>
        {/* Banner image */}
        <img src={wfh} alt="" className="" />
    </div>
  )
}

export default WFHBanner
