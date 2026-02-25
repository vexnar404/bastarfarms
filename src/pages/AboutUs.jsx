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
            <motion.section 
                initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}
                className='relative w-full h-auto bg-cover bg-center py-12 md:py-24' style={{ backgroundImage: `url(${headerbg})` }}
            >
                <motion.div 
                    initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}
                    className='text-white text-center px-4'
                >
                    <h1 className='text-4xl md:text-7xl font-bold'>About Bastar Farms</h1>
                    <p className='text-2xl md:text-4xl font-caveat font-semibold mt-2'>Vision and Mission</p>
                </motion.div>
            </motion.section>

            {/* Who We Are & Founder Section */}
            <section className='grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 p-6 md:p-16 items-center max-w-7xl mx-auto'>
                {/* Who We Are Text */}
                <motion.div 
                    initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                    className='order-1'
                >
                    <h2 className='text-4xl md:text-6xl font-bold mb-4'>Who We Are</h2>
                    <p className='text-lg md:text-[22px] leading-relaxed'>
                        From the forests of Bastar to kitchens across the country, <span className='font-bold'>Bastar Farms</span> is built around a simple idea of staying close to the source. Operating from our <span className='font-bold'>Lohandiguda</span> processing unit, we transform forest produce into tamarind based food products while creating meaningful opportunities for local and tribal communities.
                    </p>
                </motion.div>
                {/* Team Image */}
                <motion.div 
                    initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                    className='order-2'
                >
                    <img src={team} alt="Our Team" className='w-full h-[300px] md:h-[400px] object-cover border-4 md:border-8 rounded-xl border-[#2a491d]' />
                </motion.div>

                {/* Founder Image */}
                <motion.div 
                    initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                    className='order-4 md:order-3'
                >
                    <img src={founder} alt="Founder" className='w-full md:w-auto h-auto md:h-[400px] object-contain border-4 md:border-8 rounded-xl border-[#2a491d] mx-auto' />
                </motion.div>
                {/* Founder Text */}
                <motion.div 
                    initial={{ opacity: 0, x: 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}
                    className='order-3 md:order-4'
                >
                    <h2 className='text-4xl md:text-6xl font-bold mb-4'>Founder's Desk</h2>
                    <p className='text-lg md:text-[22px] leading-relaxed'>
                        Bastar Farms is guided by a clear vision to create natural, dependable food while building meaningful livelihoods in Bastar. From the forests of Chhattisgarh, we bring tamarind from local hands to wider markets, turning natural produce into value driven products.
                    </p>
                    <img src={sign} alt="Founder's Signature" className='w-32 md:w-40 h-auto object-contain mt-4' />
                </motion.div>
            </section>

            {/* Stats Section - Responsive Flex */}
            <section className='bg-[#50a72c] py-12 text-white px-6'>
                <div className='max-w-7xl mx-auto grid grid-cols-2 lg:flex gap-8 items-center text-center md:text-left'>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="flex flex-col md:flex-row items-center gap-4">
                        <img src={i1} alt="" className='h-16 w-16' />
                        <h2 className='text-sm md:text-lg'>Tribal families supported <br className='hidden md:block'/>through employment</h2>
                    </motion.div>
                    <div className='hidden lg:block h-8 w-[1px] bg-slate-100'></div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="flex flex-col md:flex-row items-center gap-4">
                        <img src={i2} alt="" className='h-16 w-16' />
                        <h2 className='text-sm md:text-lg'>Over 5 years of <br className='hidden md:block'/>operations in Bastar</h2>
                    </motion.div>
                    <div className='hidden lg:block h-8 w-[1px] bg-slate-100'></div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.3 }} className="flex flex-col md:flex-row items-center gap-4">
                        <img src={i3} alt="" className='h-16 w-16' />
                        <h2 className='text-sm md:text-lg'>Sustainable <br className='hidden md:block'/>Forest Sourcing</h2>
                    </motion.div>
                    <div className='hidden lg:block h-8 w-[1px] bg-slate-100'></div>
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.4 }} className="flex flex-col md:flex-row items-center gap-4">
                        <img src={i4} alt="" className='h-16 w-16' />
                        <h2 className='text-sm md:text-lg'>FSSAI certified for food <br className='hidden md:block'/>safety and quality</h2>
                    </motion.div>
                </div>
            </section>

            {/* Video & Team */}
            <motion.section initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className='py-12'>
                <VideoSection />
            </motion.section>
            
            <section className='py-12 px-4'>
                <motion.h1 
                    initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
                    className='text-4xl md:text-6xl font-bold text-center mb-12'
                >
                    Our Core Team
                </motion.h1>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, delay: 0.2 }}>
                    <TeamSection />
                </motion.div>
            </section>

            {/* Clients Slider */}
            <section className='py-12'>
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    <h1 className='text-4xl md:text-6xl font-bold text-center mb-2'>Our Esteemed Clients</h1>
                    <p className='text-xl md:text-3xl font-caveat text-center mb-8'>Trusted By Industry Leaders</p>
                </motion.div>
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
                <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                    <h1 className='text-center text-4xl md:text-6xl font-bold'>Certifications</h1>
                    <p className='text-center font-caveat text-2xl md:text-3xl font-semibold mb-8'>Quality & Compliance</p>
                </motion.div>
                <div className='flex flex-col lg:flex-row gap-8 items-center max-w-4xl mx-auto'>
                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
                        <p className='text-center font-bold text-md md:text-lg mb-4'>Food Safety and Standards Authority of India</p>
                        <img src={fssai} alt="FSSAI Certification" className='w-full md:w-auto max-h-[470px] md:max-h-[600px] object-contain border-4 md:border-8 border-[#2a491d] rounded-xl' />
                    </motion.div>
                    <motion.div initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.4 }}>
                        <p className='text-center font-bold text-md md:text-lg mb-4'>Food Safety Supervisor</p>
                        <img src={fostac} alt="FSSAI Certification" className='w-full md:w-auto max-h-[470px] md:max-h-[600px] object-contain border-4 md:border-8 border-[#2a491d] rounded-xl' />
                    </motion.div>
                </div>
            </section>
        </div>
    )
}

export default AboutUs;