import React from 'react'
import { color, images } from '../../constants'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (

      <footer className='' style={{ backgroundColor: color.blackColor }}>
        <div className='grid grid-cols-1 justify-items-center text-white py-10 px-20 w-screen relative bottom-0' style={{ backgroundColor: color.blackColor }}>
          <div className='flex flex-col  items-center lg:mb-0 mb-10'>
            <p className='py-4 font-light lg:text-start text-center text-sm leading-6'>Created By <strong>Youssef Saidi</strong></p>
            <div className='flex mt-2 '>
              <Link to={"https://www.facebook.com/"}>
                <img className='mr-5' src={images.linkedin} alt="" />
              </Link>
              <Link to={"https://www.facebook.com/"}>
                <img className='mr-5' src={images.instagram} alt="" />
              </Link>
              <Link to={"https://www.facebook.com/"}>
                <img className='mr-5' src={images.facebook} alt="" />
              </Link>
              <Link to={"https://www.facebook.com/"}>
                <img className='mr-5' src={images.whatsapp} alt="" />
              </Link>
              <Link to={"https://www.facebook.com/"}>
                <img src={images.gmail} alt="" />
              </Link>
            </div>
          </div>
     
  
     
        </div>
        <div className='flex justify-center items-center h-16' style={{borderTopWidth: "1px", borderTop: "solid", borderTopColor: "#757682"}}>
          <span className='text-white text-sm' >Copyright ©2023 All rights reserved</span>
        </div>
      </footer>
  )
}

export default Footer