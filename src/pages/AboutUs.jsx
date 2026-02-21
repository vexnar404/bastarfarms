import React from 'react'
import headerbg from '../assets/page-header-bg.jpg'
import team from '../assets/team.jpeg'
import sign from '../assets/sign.png'
import core from '../assets/core.png'
import clients from '../assets/clients.png'
import foot from '../assets/foot.png'
import fssai from '../assets/fssai.png'
import fostac from '../assets/fostac.jpeg'


import c1 from '../assets/logo file/1.png'
import c2 from '../assets/logo file/2.png'
import c3 from '../assets/logo file/3.png'
import c4 from '../assets/logo file/4.png'
import c5 from '../assets/logo file/5.png'
import c6 from '../assets/logo file/6.png'
import c7 from '../assets/logo file/7.png'
import c8 from '../assets/logo file/8.png'
import c9 from '../assets/logo file/9.png'
import c10 from '../assets/logo file/10.png'
import c11 from '../assets/logo file/11.png'
import c12 from '../assets/logo file/12.png'
import c13 from '../assets/logo file/13.png'
import c14 from '../assets/logo file/14.png'
import c15 from '../assets/logo file/15.png'
import c16 from '../assets/logo file/16.png'
import c17 from '../assets/logo file/17.png'
import c18 from '../assets/logo file/18.png'
import c19 from '../assets/logo file/19.png'
import c20 from '../assets/logo file/20.png'
import c21 from '../assets/logo file/21.png'

import i1 from '../assets/i1.svg'
import i2 from '../assets/i2.svg'
import i3 from '../assets/i3.svg'
import i4 from '../assets/i4.svg'

import founder from '../assets/founder.png'

import { motion } from 'framer-motion'
import VideoSection from '../components/Video'
import TeamSection from '../components/TeamSection'

function AboutUs() {
    const images = [c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21]

    return (
        <div className='w-full overflow-x-hidden'>
            {/* Header Section */}
            <section className='relative w-full h-auto bg-cover bg-center py-12 md:py-24' style={{ backgroundImage: `url(${headerbg})` }}>
                <div className='text-white text-center px-4'>
                    <h1 className='text-4xl md:text-7xl font-bold'>About Bastar Farms</h1>
                    <p className='text-xl md:text-3xl font-semibold mt-2'>Vision and Mission</p>
                </div>
            </section>

            {/* Who We Are & Founder Section */}
            <section className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 p-6 md:p-16 items-center max-w-7xl mx-auto'>
                {/* Who We Are Text */}
                <div className='order-1'>
                    <h2 className='text-4xl md:text-6xl font-bold mb-4'>Who We Are</h2>
                    <p className='text-lg md:text-[22px] leading-relaxed'>
                        From the forests of Bastar to kitchens across the country, <span className='font-bold'>Bastar Farms</span> is built around a simple idea of staying close to the source. Operating from our <span className='font-bold'>Lohandiguda</span> processing unit, we transform forest produce into tamarind based food products while creating meaningful opportunities for local and tribal communities.
                    </p>
                </div>
                {/* Team Image */}
                <div className='order-2'>
                    <img src={team} alt="Our Team" className='w-full h-[300px] md:h-[400px] object-cover border-4 md:border-8 rounded-xl border-[#2a491d]' />
                </div>

                {/* Founder Image */}
                <div className='order-4 md:order-3'>
                    <img src={founder} alt="Founder" className='w-full md:w-auto h-[350px] md:h-[400px] object-contain border-4 md:border-8 rounded-xl border-[#2a491d] mx-auto' />
                </div>
                {/* Founder Text */}
                <div className='order-3 md:order-4'>
                    <h2 className='text-4xl md:text-5xl font-semibold mb-4'>Founder's Desk</h2>
                    <p className='text-lg md:text-[22px] leading-relaxed'>
                        Bastar Farms is guided by a clear vision to create natural, dependable food while building meaningful livelihoods in Bastar. From the forests of Chhattisgarh, we bring tamarind from local hands to wider markets, turning natural produce into value driven products.
                    </p>
                    <img src={sign} alt="Founder's Signature" className='w-32 md:w-40 h-auto object-contain mt-4' />
                </div>
            </section>

            {/* Stats Section - Responsive Flex */}
            <section className='bg-[#50a72c] py-12 text-white px-6'>
                <div className='max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:flex gap-8 items-center text-center md:text-left'>
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <img src={i1} alt="" className='h-12 w-12 md:h-16 md:w-16' />
                        <h2 className='text-sm md:text-lg'>Tribal families supported <br className='hidden md:block'/>through employment</h2>
                    </div>
                    <div className='hidden lg:block h-8 w-[1px] bg-slate-100'></div>
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <img src={i2} alt="" className='h-12 w-12 md:h-16 md:w-16' />
                        <h2 className='text-sm md:text-lg'>Over 5 years of <br className='hidden md:block'/>operations in Bastar</h2>
                    </div>
                    <div className='hidden lg:block h-8 w-[1px] bg-slate-100'></div>
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <img src={i3} alt="" className='h-12 w-12 md:h-16 md:w-16' />
                        <h2 className='text-sm md:text-lg'>Sustainable <br className='hidden md:block'/>Forest Sourcing</h2>
                    </div>
                    <div className='hidden lg:block h-8 w-[1px] bg-slate-100'></div>
                    <div className="flex flex-col md:flex-row items-center gap-4">
                        <img src={i4} alt="" className='h-12 w-12 md:h-16 md:w-16' />
                        <h2 className='text-sm md:text-lg'>FSSAI certified for food <br className='hidden md:block'/>safety and quality</h2>
                    </div>
                </div>
            </section>

            {/* Video & Team */}
            <section className='py-12 px-4'><VideoSection /></section>
            
            <section className='py-12 px-4'>
                <h1 className='text-4xl md:text-6xl font-bold text-center mb-12'>Our Core Team</h1>
                <TeamSection />
            </section>

            {/* Clients Slider */}
            <section className='py-12'>
                <h1 className='text-4xl md:text-6xl font-bold text-center mb-2'>Our Esteemed Clients</h1>
                <p className='text-xl md:text-3xl text-center mb-8'>Trusted By Industry Leaders</p>
                <div className='overflow-hidden w-full bg-gradient-to-br from-[#3a791f] to-[#52af2b] py-10'>
                    <motion.div
                        className='flex w-max gap-8 md:gap-12'
                        animate={{ x: ['0%', '-50%'] }}
                        transition={{ repeat: Infinity, repeatType: "loop", duration: 40, ease: 'linear' }}
                    >
                        {[...images, ...images].map((img, index) => (
                            <img key={index} src={img} alt={`Client ${index}`} className='w-[150px] md:w-[250px] h-auto object-contain flex-shrink-0' />
                        ))}
                    </motion.div>
                </div>
            </section>

            {/* Certifications */}
            <section className='py-12 px-6'>
                <h1 className='text-center text-4xl md:text-6xl font-bold'>Certifications</h1>
                <p className='text-center text-xl md:text-2xl font-semibold mb-8'>Quality & Compliance</p>
                <div className='flex flex-col lg:flex-row gap-8 items-center max-w-4xl mx-auto'>
                    <div>
                        <p className='text-center text-md md:text-lg mb-4'>Food Safety and Standards Authority of India</p>
                        <img src={fssai} alt="FSSAI Certification" className='w-full md:w-auto max-h-[400px] md:max-h-[600px] object-contain border-4 md:border-8 border-[#2a491d] rounded-xl' />
                    </div>
                    <div>
                        <p className='text-center text-md md:text-lg mb-4'>Food Safety Supervisor</p>
                        <img src={fostac} alt="FSSAI Certification" className='w-full md:w-auto max-h-[400px] md:max-h-[600px] object-contain border-4 md:border-8 border-[#2a491d] rounded-xl' />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs;