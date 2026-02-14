import React from 'react'
import headerbg from '../assets/page-header-bg.jpg'
import team from '../assets/team.jpeg'
import founder from '../assets/founder.jpeg'
import sign from '../assets/sign.png'
import core from '../assets/core.png'
import clients from '../assets/clients.png'
import foot from '../assets/foot.png'
import fssai from '../assets/fssai.png'

import c0 from '../assets/Clients Logo/0.jpg'
import c1 from '../assets/Clients Logo/1.png'
import c2 from '../assets/Clients Logo/2.png'
import c3 from '../assets/Clients Logo/3.png'
import c4 from '../assets/Clients Logo/4.png'
import c5 from '../assets/Clients Logo/5.png'
import c6 from '../assets/Clients Logo/6.png'
import c7 from '../assets/Clients Logo/7.png'
import c8 from '../assets/Clients Logo/8.jpg'
import c9 from '../assets/Clients Logo/9.png'
import c10 from '../assets/Clients Logo/10.png'
import c11 from '../assets/Clients Logo/11.png'
import c12 from '../assets/Clients Logo/12.png'
import c13 from '../assets/Clients Logo/13.png'
import c14 from '../assets/Clients Logo/14.png'
import c15 from '../assets/Clients Logo/15.png'
import c16 from '../assets/Clients Logo/16.png'
import c17 from '../assets/Clients Logo/17.png'
import c18 from '../assets/Clients Logo/18.png'
import c19 from '../assets/Clients Logo/19.png'

import i1 from '../assets/i1.svg'
import i2 from '../assets/i2.svg'
import i3 from '../assets/i3.svg'
import i4 from '../assets/i4.svg'

import core1 from '../assets/c1kartikKapoor.png'
import core2 from '../assets/c2yashBirla.png'
import core3 from '../assets/c3balliHangSubba.png'
import core4 from '../assets/c4pravirKrishna.png'
import core5 from '../assets/c5deepakPatil.png'
import core6 from '../assets/c6fasihuddinSyed.png'
import core7 from '../assets/c7mickulArora.png'

import { motion } from 'framer-motion'

function AboutUs() {
    const images = [c0, c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19]

  return (
    <div>
         <section className='relative w-full h-auto bg-cover bg-center py-20 md:py-24' style={{ backgroundImage: `url(${headerbg})` }}>
            <div className='text-white text-center font-semibold'>
                <h1 className='text-7xl'>About Bastar Farms</h1>
                <p className='text-3xl'>Vision and Mission</p>
            </div>
        </section>

        <section className='grid grid-cols-2 justify-items-center gap-20 p-12'>
            <div>
                <h2 className='text-6xl font-bold mb-4'>Who We Are</h2>
                <p className='text-[22px] pr-10'>From the forests of Bastar to kitchens across the
                    country, <span className='font-bold'>Bastar Farms</span> is built around a simple
                    idea of staying close to the source. Operating
                    from our <span className='font-bold'>Lohandiguda</span> processing unit, we
                    transform forest produce into tamarind baased
                    food products while creating meaningful
                    opportunities for local and tribal communities.
                    Every product reflects our commitment to
                    responsible sourcing and sustainable production.
                </p>
            </div>
            <div>
                <img src={team} alt="Our Team" className='w-full h-auto object-cover border-8 rounded-xl border-[#2a491d]' />
            </div>
            <div>
                <img src={founder} alt="Founder" className='w-auto h-[450px] object-contain border-8 rounded-xl border-[#2a491d]' />
            </div>
            <div>
                <h2 className='text-5xl font-semibold mb-4'>Founder's Desk</h2>
                <p className='text-[22px] pr-6'>Bastar Farms is guided by a clear vision to create natural,
                    dependable food while building meaningful livelihoods in Bastar.
                    From the forests of Chhattisgarh, we bring tamarind from local
                    hands to wider markets, turning natural produce into value
                    driven products while creating real economic opportunity for
                    tribal communities.Our journey continues with a long term
                    commitment to building a brand that creates lasting value for
                    customers, communities, and the region we represent.
                </p>
                <img src={sign} alt="Founder's Signature" className='w-40 h-auto object-contain ml-10 mt-8' />
            </div>
        </section>

        <section className='bg-[#50a72c] py-24 text-center text-white flex items-center justify-between gap-8'>
            <div className="ml-24 flex flex-row items-center gap-2">
                <img src={i1} alt="" className='h-16 w-16' />
                <h2 className='text-lg text-left'>Tribal families supported <br />through employment</h2>
            </div>
            <div className='h-12 w-[1px] bg-slate-200'></div>
            <div className="flex flex-row items-center gap-2">
                <img src={i2} alt="" className='h-16 w-16' />
                <h2 className='text-lg text-left'>Over 5 years of <br />operations in Bastar</h2>
            </div>
            <div className='h-12 w-[1px] bg-slate-200'></div>
            <div className="flex flex-row items-center gap-2">
                <img src={i3} alt="" className='h-16 w-16'  />
                <h2 className='text-lg text-left'>Sustainable <br />Forest Sourcing</h2>
            </div>
            <div className='h-12 w-[1px] bg-slate-200'></div>
            <div className="flex flex-row items-center gap-2 mr-24">
                <img src={i4} alt="" className='h-16 w-16'/>
                <h2 className='text-lg text-left'>FSSAI certified for food <br />safety and quality</h2>
            </div>
        </section>

        <section className='py-8'>
            <div className='py-28 text-center text-6xl'> Video showcasing Bastar Farm’s journey</div>
        </section>

        <section className='py-8'>
            <h1 className='text-6xl font-bold text-center mb-12'>Our Core Team</h1>
            <div className='grid grid-cols-3 items-center justify-items-center gap-14 mx-20'>
                <div className='h-[750px] flex flex-col items-center gap-2 border-[1px] pb-4 rounded-xl shadow-sm'>
                    <img src={core1} alt="Core Team" className='w-full h-auto object-cover border-8 rounded-xl border-[#2a491d]' />
                    <h1 className='text-xl font-semibold mt-4'>Kartik Kapoor</h1>
                    <p className='text-lg'>Director</p>
                    <p className='px-6 flex-1 mt-2'>Kartik Kapoor is an India-based entrepreneur and the Founder & Managing Director of Kossher
                         Group, bringing over a decade of hands-on experience in building agricultural businesses from inception to 
                         scale. For the Bastar core team, Kartik’s journey is closely associated with the creation and growth of 
                         Bastar Farms, the flagship consumer brand under Kossher Agro. The brand reflects a strong commitment to 
                         value addition, consistent quality, and meaningful community upliftment.</p>
                </div>

                <div className='h-[750px] flex flex-col items-center gap-2 border-[1px] pb-4 rounded-xl shadow-sm'>
                    <img src={core2} alt="Core Team" className='w-full h-auto object-cover border-8 rounded-xl border-[#2a491d]' />
                    <h1 className='text-xl font-semibold mt-4'>Yash Birla</h1>
                    <p className='text-lg'>CEO</p>
                    <p className='px-6 flex-1 mt-2'>Yash Birla is a core team member and the CEO of Bastar Farms, the flagship consumer brand of 
                        Kossher Agro. With more than a decade of experience in multinational environments, he brings institutional 
                        rigor, operational discipline, and a proven ability to build scalable businesses. He leads the company’s 
                        strategic roadmap with a focus on profitable growth, brand expansion, supply-chain strength, and long-term 
                        value creation. </p>
                </div>

                <div className='h-[750px] flex flex-col items-center gap-2 border-[1px] pb-4 rounded-xl shadow-sm'>
                    <img src={core3} alt="Core Team" className='w-full h-auto object-cover border-8 rounded-xl border-[#2a491d]' />
                    <h1 className='text-xl font-semibold mt-4'>Balli Hang Subba</h1>
                    <p className='text-lg'>Director</p>
                    <p className='px-6 flex-1 mt-2'>Balli Hang Subba is a respected tribal business leader, a founding member of Kossher Agro, 
                        and Director at Bastar Farms. With over a decade of experience across agro and manufacturing ventures, he 
                        brings deep operational knowledge and strong grassroots understanding to the organization.</p>
                </div>

                <div className='h-[750px] flex flex-col items-center gap-2 border-[1px] pb-4 rounded-xl shadow-sm'>
                    <img src={core4} alt="Core Team" className='w-full h-auto object-cover border-8 rounded-xl border-[#2a491d]' />
                    <h1 className='text-xl font-semibold mt-4'>Pravir Krishna</h1>
                    <p className='text-lg'>Executive Director</p>
                    <p className='px-6 flex-1 mt-2'>Pravir Krishna is Executive Director and a distinguished public servant and development 
                        leader, widely recognized for his contribution to India’s tribal and agro-based value chains. As the former 
                        Managing Director of TRIFED, he played a transformative role in strengthening market access, institutional 
                        frameworks, and livelihood opportunities for forest and farm communities.</p>
                </div>

                <div className='h-[750px] flex flex-col items-center gap-2 border-[1px] pb-4 rounded-xl shadow-sm'>
                    <img src={core5} alt="Core Team" className='w-full h-auto object-cover border-8 rounded-xl border-[#2a491d]' />
                    <h1 className='text-xl font-semibold mt-4'>Deepak Patil</h1>
                    <p className='text-lg'>Chief Financial Officer</p>
                    <p className='px-6 flex-1 mt-2'>CA. Deepak Patil is a Pune based Chartered Accountant with over 13 years of experience in 
                        finance and statutory compliance. As Chief Financial Officer at Bastar Farms, he manages financial strategy, 
                        compliance, and sustainable growth initiatives.</p>
                </div>

                <div className='h-[750px] flex flex-col items-center gap-2 border-[1px] pb-4 rounded-xl shadow-sm'>
                    <img src={core6} alt="Core Team" className='w-full h-auto object-cover border-8 rounded-xl border-[#2a491d]' />
                    <h1 className='text-xl font-semibold mt-4'>Fasihuddin Syed</h1>
                    <p className='text-lg'>Food Advisor</p>
                    <p className='px-6 flex-1 mt-2'>Fasihuddin Syed is an India based food industry expert with over 42 years of experience 
                        across product development, processing, and food technology projects. As Food Advisor at Bastar Farms, 
                        he guides product innovation and quality standards for the products.</p>
                </div>

                <div className='h-[750px] flex flex-col items-center gap-2 border-[1px] pb-4 rounded-xl shadow-sm'>
                    <img src={core7} alt="Core Team" className='w-full h-auto object-cover border-8 rounded-xl border-[#2a491d]' />
                    <h1 className='text-xl font-semibold mt-4'>Mickul Arora</h1>
                    <p className='text-lg'>Production Head</p>
                    <p className='px-6 flex-1 mt-2'>Mickul Arora is a passionate team leader with over a decade of experience in managing 
                        manufacturing teams and driving operational excellence. As the Production Head, he leads the operations 
                        at the Lohandiguda facility, ensuring efficient processing of tamarind products, adherence to quality 
                        standards, and continuous improvement in productivity and safety.</p>
                </div>

            </div>
        </section>

        <section className='py-8'>
            <h1 className='text-6xl font-bold text-center mb-4'>Our Esteemed Clients</h1>
            <p className='text-4xl text-center mb-8'>Trusted By Industry Leaders</p>
            <div className='overflow-hidden w-full  bg-gradient-to-br from-[#3a791f] to-[#52af2b] py-6'>
                <motion.div
                    className='flex gap-12'
                    animate={{ x: ['0%', '-100%'] }}
                    transition={{ repeat: Infinity, repeatType: "loop", duration: 30, ease: 'linear' }}
                >
                    {images.concat(images).map((img, index) => (
                        <img key={index} src={img} alt={`Client ${index}`} className='w-[250px] h-auto object-contain' />
                    ))}
                </motion.div>
            </div>
        </section>

        <section className='py-8'>
            <h1 className='text-center text-6xl font-bold'>Certifications</h1>
            <p className='text-center text-2xl font-semibold'>Quality & Copliance</p>

            <div className='flex flex-col mt-8'>
                <p className='text-center text-lg'>Food Safety and Standards Authority of India</p>
                <img src={fssai} alt="FSSAI Certification" className='w-[600px] h-auto object-contain mx-auto mt-4 border-[#2a491d] border-8 rounded-xl' />
            </div>

        </section>

        <section className='pt-8'>
            <img src={foot} alt="Footer" className='w-full h-auto object-cover' />
        </section>
    </div>
   
  )
}

export default AboutUs