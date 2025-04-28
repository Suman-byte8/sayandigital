import React from 'react'
import { Link } from 'react-router-dom'

const navigationLinks = [
  { to: '/product/Calendar', text: 'Calendar & Diaries' },
  { to: '/product/business-cards', text: 'Business Cards' },
  { to: '/product/corporate-gifts', text: 'Corporate Gifts' },
  { to: '/product/standees', text: 'Signage' },
  { to: '/product/tshirts', text: 'T-Shirts' },
  { to: '/product/invitation-card', text: 'Invitation Card' },
]

const Links = () => {
  return (
    <div className='w-full mx-auto my-3 sm:my-5 flex items-center justify-center bg-[#C6E7FF] h-auto sm:h-[40px] py-2 sm:py-0'>
      <ul className="w-[95%] sm:w-[80%] flex flex-wrap sm:flex-nowrap items-center justify-center sm:justify-between gap-2 sm:gap-4 font-normal text-[#5f2677] text-sm sm:text-base">
        {navigationLinks.map((link, index) => (
          <Link key={index} to={link.to} className="cursor-pointer transition-transform duration-200 hover:scale-110 whitespace-nowrap">
            {link.text}
          </Link>
        ))}
      </ul>
    </div>
  )
}

export default Links