import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import logo from '../assets/whitelogotrans.png'
import { FaLinkedin, FaFacebook, FaInstagram, FaPhoneAlt } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import { FaLocationDot } from 'react-icons/fa6'

function Footer() {
  return (
    <footer className='bg-[#2a491d] w-full py-4 md:pt-12 md:pb-4'>
      <div className='max-w-7xl mx-auto px-6 md:px-12'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-24 pt-4'>
          
          {/* Column 1: Brand & Socials */}
          <div className="flex flex-col items-start gap-6">
            <img src={logo} alt="Bastar Farms Logo" className='h-28 md:h-32 object-contain -ml-2 -mt-8' />
            {/* <p className='text-gray-200 text-xl leading-relaxed max-w-sm'>
              Quality begins at the source, supporting tribal livelihoods through responsible local manufacturing.
            </p> */}
            <div className='md:ml-3 -mt-8'>
              <p className='text-white font-semibold text-lg md:text-xl mb-4'>Stay in Touch</p>
              <div className="flex items-center gap-5">
                <a href="https://www.linkedin.com/company/bastar-farms-india/" target="_blank" rel="noopener noreferrer" className="group">
                  <FaLinkedin className='text-white group-hover:text-[#ffbd3c] transition-all duration-300' size={24}/>
                </a>
                <a href="https://www.facebook.com/share/1B2g3yJZny/" target="_blank" rel="noopener noreferrer" className="group">
                  <FaFacebook className='text-white group-hover:text-[#ffbd3c] transition-all duration-300' size={24}/>
                </a>
                <a href="https://www.instagram.com/bastarfarmsindia?igsh=bDYxYzRwb2hvN3Zr" target="_blank" rel="noopener noreferrer" className="group">
                  <FaInstagram className='text-white group-hover:text-[#ffbd3c] transition-all duration-300' size={24}/>
                </a>    
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links & Legal */}
          <div className="flex flex-row md:flex-col lg:flex-row justify-between lg:justify-start lg:gap-16 text-white">
            <div className="flex flex-col gap-4">
              <h2 className='text-lg md:text-2xl font-bold border-b-2 border-[#50a72c] w-fit mb-2'>Navigation</h2>
              <ul className="space-y-3">
                <li><NavLink to="/" className="text-gray-200 hover:text-[#ffbd3c] transition-colors text-base md:text-lg">Home</NavLink></li>
                <li><NavLink to="/about-us" className="text-gray-200 hover:text-[#ffbd3c] transition-colors text-base md:text-lg">About Us</NavLink></li>
                <li><NavLink to="/products" className="text-gray-200 hover:text-[#ffbd3c] transition-colors text-base md:text-lg">Products</NavLink></li>
                <li><NavLink to="/clients" className="text-gray-200 hover:text-[#ffbd3c] transition-colors text-base md:text-lg">Clients</NavLink></li>
              </ul>
            </div>

            <div className="flex flex-col gap-4 mt-0 md:mt-8 lg:mt-0">
              <h2 className='text-lg md:text-2xl font-bold border-b-2 border-[#50a72c] w-fit mb-2'>Legal</h2>
              <ul className="space-y-3 text-gray-200">
                <li className="hover:text-[#ffbd3c] cursor-pointer transition-colors md:text-lg"><NavLink to="/privacy">Privacy Policy</NavLink></li>
                <li className="hover:text-[#ffbd3c] cursor-pointer transition-colors md:text-lg"><NavLink to="/privacy">Terms of Service</NavLink></li>
              </ul>
            </div>
          </div>

          {/* Column 3: Contact Info */}
          <div className="flex flex-col items-start gap-4">
            <h2 className='text-lg md:text-2xl font-bold border-b-2 border-[#50a72c] w-fit mb-2 text-white'>Contact Us</h2>
          
            <div className="space-y-2">
              <div className='flex items-start gap-2 group'>
                <FaPhoneAlt className='text-[#ffbd3c] mt-1' size={16}/>
                <a href="tel:918482950500" className='text-sm md:text-lg text-gray-200 group-hover:text-white transition-colors'>
                  +91 (848) 29 - 50500
                </a>
              </div>
              <div className="flex items-start gap-3 group">
                <IoIosMail className='text-[#ffbd3c] mt-0.5' size={20}/>
                <a href="mailto:info@kosshergroup.com" className='text-sm md:text-lg text-gray-200 group-hover:text-white transition-colors'>
                  info@kosshergroup.com
                </a>    
              </div>
              <div className="flex items-start gap-3">
                <FaLocationDot className='text-[#ffbd3c] mt-1' size={18}/>
                <p className='text-sm md:text-lg text-gray-200 leading-relaxed'>
                  Plot No 558 A, Chindgaon, <br />
                  Lohandiguda Dist:, Chhattisgarh 494010
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright bar */}
        <div className='mt-4 pt-2 border-t border-white/10 text-center'>
           <p className='text-gray-400 text-xs'>
             &copy; {new Date().getFullYear()} Bastar Farms. All rights reserved.
           </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer