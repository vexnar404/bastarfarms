import {FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt} from 'react-icons/fa';
import {IoIosMail} from 'react-icons/io';
import {Link, NavLink} from 'react-router-dom';
import { useState, useEffect } from 'react';

function Header() {
  return (
    <section>
        <div className='h-10 w-full bg-[#2a491d]'>
            <div className='ml-64 flex items-center justify-between h-full'>
                <div className='flex items-center justify-center gap-8 h-full'>
                    <h1 className='text-[#8a9984] text-sm px-8'>Welcome to Bastar Farms!</h1>
                    <div className='flex items-center justify-center gap-6 px-10 h-full bg-[#233c18]'>
                        <a href="https://www.linkedin.com/company/bastar-farms" target="_blank" rel="noopener noreferrer">
                            <FaLinkedin className='text-white hover:text-[#ffbd3c] transition-all duration-300 cursor-pointer' size={15}/>
                        </a>
                        <a href="https://www.facebook.com/bastarfarms" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className='text-white hover:text-[#ffbd3c] transition-all duration-300 cursor-pointer' size={15}/>
                        </a>
                        <a href="https://www.instagram.com/bastarfarmsindia" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className='text-white hover:text-[#ffbd3c] transition-all duration-300 cursor-pointer' size={15}/>
                        </a>    
                    </div>
                </div>

                <div className="flex items-center justify-center gap-8 h-full">
                    <div className='flex items-center justify-center gap-2 px-4 h-full'>
                        <FaPhoneAlt className='text-[#ffbd3c]' size={15}/>
                        <a href="tel:918482950500">
                            <p className='text-sm text-[#8a9984] hover:text-white transition-all duration-300 cursor-pointer'>+ 91 ( 848 ) 29 - 50500</p>
                        </a>
                    </div>
                    <div className="flex items-center justify-center gap-2 px-4 h-full">
                        <IoIosMail className='text-[#ffbd3c]' size={17}/>
                        <a href="mailto:info@kosshergroup.com">
                            <p className='text-sm text-[#8a9984] hover:text-white transition-all duration-300 cursor-pointer'>info@kosshergroup.com</p>
                        </a>    
                    </div>
                </div>
            </div>
        </div>

        <header className='w-full '>
            <div className="flex items-center w-full h-20">
                <Link to='/' className='min-w-60 h-full bg-[#3d6a2a]' >
                    <img src='./src/assets/logo.png' alt="bastar farm logo" className='h-16 mx-auto object-cover' />
                </Link>

                <nav className='hidden md:flex items-center justify-center gap-16 ml-8 h-full'>
                    <NavLink
                    to="/"
                    className='text-gray-700 py-6 hover:text-[#2a491d] border-b-[1.5px] border-transparent hover:border-[#2a491d] transition-all duration-200'
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/about-us"
                        className='text-gray-700 py-6 hover:text-[#2a491d] border-b-[1.5px] border-transparent hover:border-[#2a491d] transition-all duration-200'
                    >
                        About us
                    </NavLink>
                    <NavLink
                        to="/products"
                        className='text-gray-700 py-6 hover:text-[#2a491d] border-b-[1.5px] border-transparent hover:border-[#2a491d] transition-all duration-200'
                    >
                        Products
                    </NavLink>
                    <NavLink
                        to="/clients"
                        className='text-gray-700 py-6 hover:text-[#2a491d] border-b-[1.5px] border-transparent hover:border-[#2a491d] transition-all duration-200'
                    >
                        Our Esteemed Clients
                    </NavLink>
                    <NavLink
                        to="/gallery"
                        className='text-gray-700 py-6 hover:text-[#2a491d] border-b-[1.5px] border-transparent hover:border-[#2a491d] transition-all duration-200'
                    >
                        Gallery
                    </NavLink>
                </nav>

                <div className="hidden md:block ml-auto mr-8">
                    <Link
                        to="/contact"
                        className="relative overflow-hidden px-8 py-3 rounded-full bg-[#50a72c] text-white bg-gradient-to-br from-[#50a72c] to-[#3d8020] bg-[length:200%_100%] bg-left hover:bg-right transition-all duration-300 ease-in-out"
                    >

                        Contact Us
                    </Link>
                </div>
            </div>
        </header>
    </section>
  )
}

export default Header