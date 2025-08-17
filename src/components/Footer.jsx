import React from 'react'
import {FaFacebook, FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";


const Footer = () => {
  return (
    <div  className='bg-black'>
           <div className='max-w-[1200px] flex flex-col md:flex-row justify-between items-center py-4 px-10 mx-auto'>
                <div>
                     <h1 className='text-white'>© 2025 Rohit. All rights reserved.</h1>
                </div>
                <div className='flex flex-row items-center gap-2'>
                    <a href="#" className="bg-[#0d1126] p-1 rounded-lg flex flex-col items-center">
                        <FaGithub className="text-sky-400 text-xl"/>
                    </a>
                    <a href="#"className="bg-[#0d1126] p- rounded-lg flex flex-col items-center">
                        <FaLinkedin className="text-sky-400 text-xl"/>
                    </a>
                    <a href="#" className="bg-[#0d1126] p-1 rounded-lg flex flex-col items-center">
                        <FaInstagram className="text-sky-400 text-xl"/>
                    </a>
                    <a href="#" className="bg-[#0d1126] p-1 rounded-lg flex flex-col items-center">
                        <FaFacebook className="text-sky-400 text-xl"/>
                    </a>
                </div>
           </div>
    </div>
  )
}

export default Footer