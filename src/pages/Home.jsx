import {useState, useEffect} from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Link } from 'react-router-dom'

import headerimg from '../assets/main-slider-img-1.png'
import headerbg from '../assets/main-slider-bg-shape.png'
import tamarind_pulp from '../assets/tamarind_pulp.png'
import tamarind_paste from '../assets/tamarind_paste.png'
import tamarind_bhel_puri from '../assets/tamarind_bhel_puri.png'
import pani_puri from '../assets/pani_puri.png'
import tamarind_date from '../assets/tamarind_date.png'
import tamarind_chilli from '../assets/tamarind_chilli.png'

import tamarindTreeImg from '../assets/31.png'
import tamarindBowlImg from '../assets/32.png'
import bfvideo from '../assets/bastarfarms.mp4'
import bf1 from '../assets/bf1.mp4'

import icon1 from '../assets/ICONS 1/14.png'
import icon2 from '../assets/ICONS 1/15.png'
import icon3 from '../assets/ICONS 1/16.png'
import icon4 from '../assets/ICONS 1/17.png'
import icon5 from '../assets/ICONS 1/18.png'
import icon6 from '../assets/ICONS 1/19.png'

import icon7 from '../assets/ICONS 2/20.png'
import icon8 from '../assets/ICONS 2/21.png'
import icon9 from '../assets/ICONS 2/22.png'
import icon10 from '../assets/ICONS 2/23.png'
import icon11 from '../assets/ICONS 2/24.png'
import icon12 from '../assets/ICONS 2/25.png'

import img1 from '../assets/img1.jpg'
import img2 from '../assets/img2.jpg'
import img3 from '../assets/img3.jpg'

import q1 from '../assets/1.png'

import i70 from '../assets/i70.jpeg'


function Home() {
  const features = [
    { icon: icon7, title: "Natural & Chemical Free" },
    { icon: icon8, title: "Authentic taste, true to source" },
    { icon: icon9, title: "Made by tribal communities" },
    { icon: icon10, title: "Quality controlled at every stage" },
    { icon: icon11, title: "Supplied smoothly across India" },
    { icon: icon12, title: "Sustainable Practices" },
  ];

  const images = [
    { src: img1, alt: "Team sorting tamarind" },
    { src: img2, alt: "Bastar Farms team group photo" },
    { src: img3, alt: "Workers at the packaging station" },
  ];

  const slides = [
    {
      sub: "Trusted by Kitchens Everywhere",
      main: "Choose the healthy food.",
      tagline: "" 
    },
    {
      sub: "Experience the",
      main: "Taste of Tradition.",
      tagline: "Rooted in Bastar. Built on Quality."
    }
  ];

  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 8000); 

    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <div className='overflow-x-hidden'>
      
      {/* ================= HERO SECTION ================= */}
      <section className='relative w-full min-h-[600px] lg:min-h-[700px] py-10 md:py-24 flex items-center'>
        <img 
          src={headerbg} 
          alt="background" 
          className="absolute inset-0 w-full h-full object-cover -z-10 bg-[#f2f2f2]" 
        />
        {/* Added max-w-7xl mx-auto to center content perfectly on ultra-wides */}
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center w-full px-6 gap-10 z-10">
          <div className="flex flex-col items-center lg:items-start w-full lg:w-1/2 gap-6 text-center lg:text-left">
            
            <div className="min-h-[220px] md:min-h-[300px] flex flex-col justify-center w-full"> 
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.8 }}
                  className="w-full"
                >
                  <h2 className='text-2xl md:text-3xl font-medium'>
                    {slides[index].sub}
                  </h2>
                  <h1 className='text-5xl md:text-8xl text-[#2a491d] font-bold leading-tight mt-2'>
                    {slides[index].main}
                  </h1>
                  {slides[index].tagline && (
                    <p className="text-xl md:text-2xl font-bold text-[#50a72c] mt-4 tracking-wide">
                      {slides[index].tagline}
                    </p>
                  )}
                </motion.div>
              </AnimatePresence>
            </div>

            <div className='flex flex-wrap items-center justify-center lg:justify-start gap-4 md:gap-8 w-full'>
              <Link to="/products">
                <button className='bg-[#2a491d] text-white font-semibold text-xl md:text-2xl px-8 py-3 rounded-full hover:bg-[#1e3515] transition-all'>
                  View Products
                </button>
              </Link>
              <Link to="/about-us">
                <button className='bg-[#ffbd3c] text-white font-semibold text-xl md:text-2xl px-8 py-3 rounded-full hover:bg-[#e6a82a] transition-all'>
                  Our Story
                </button>
              </Link>
            </div>
          </div>

          <div className='w-full lg:w-1/2 flex justify-center'>
            <img src={headerimg} alt="Header" className='w-full max-w-[600px] h-auto object-contain' />
          </div>
        </div>
    </section>

      {/* ================= PRODUCTS SECTION ================= */}
      <section className='w-full py-20 bg-white px-6 md:px-16'>
        {/* Wrapped in centered max-w container */}
        <div className="max-w-7xl mx-auto flex flex-col items-center gap-12 text-center">
          <div className='space-y-4'>
            <h2 className='text-2xl md:text-3xl font-bold text-[#50a72c]'>Our Delights</h2>
            <h1 className='text-4xl md:text-5xl font-bold text-[#2a491d]'>From heart of Bastar <br /> to your Table</h1>
          </div>

          {/* Product Grid 1 */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 md:gap-10 w-full max-w-5xl mx-auto">
            {[
              { img: tamarind_pulp, title: "Tamarind Pulp", desc: "When nothing prevents our to we like best be." },
              { img: tamarind_paste, title: "Tamarind Paste", desc: "Rich, tangy tamarind paste enhancing global cuisines." }
            ].map((item, i) => (
              <div key={i} className="relative w-full group">
                <div className="relative z-10 flex justify-center">
                  <div className="w-48 h-48 md:w-64 md:h-64 bg-white rounded-full shadow-lg flex items-center justify-center p-4 transition-transform group-hover:scale-105">
                    <img src={item.img} alt={item.title} className="w-full h-full object-contain" />
                  </div>
                </div>
                <div className="bg-[#f4f7f1] rounded-2xl pt-24 pb-8 px-6 -mt-24 min-h-[220px]">
                  <h2 className="text-[#2a491d] text-2xl font-bold mb-4">{item.title}</h2>
                  <p className="text-gray-500 text-sm md:text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Product Grid 2 */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16 md:gap-8 w-full mt-10">
            {[
              { img: tamarind_bhel_puri, title: "Tamarind Bhel Puri", desc: "Balanced tangy sweetness for bhel and chaat mixes." },
              { img: pani_puri, title: "Pani Puri", desc: "Sharp and refreshing sourness for pani puri water." },
              { img: tamarind_date, title: "Tamarind Date", desc: "Rich sweet sour base for chutneys and snacks." },
              { img: tamarind_chilli, title: "Tamarind Chilli", desc: "Adds heat and depth to sauces and street food." }
            ].map((item, i) => (
              <div key={i} className="relative w-full group">
                <div className="relative z-10 flex justify-center">
                  <div className="w-40 h-40 md:w-56 md:h-56 bg-white rounded-full shadow-lg flex items-center justify-center p-4 transition-transform group-hover:scale-105">
                    <img src={item.img} alt={item.title} className="w-full h-full object-contain" />
                  </div>
                </div>
                <div className="bg-[#f4f7f1] rounded-2xl pt-24 pb-8 px-4 -mt-20 min-h-[200px]">
                  <h2 className="text-[#2a491d] text-xl font-bold mb-3">{item.title}</h2>
                  <p className="text-gray-500 text-xs md:text-sm">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= HOUSEHOLD SECTION ================= */}
      <section className='relative w-full h-screen py-16 px-6 md:px-14'>
        <img 
          src={headerbg} 
          alt="background" 
          className="absolute inset-0 w-full h-full object-cover -z-10 bg-[#1a3a1f]" 
        />
        <div className="max-w-7xl mx-auto w-full z-10">
          <h1 className='text-4xl md:text-6xl text-white font-bold text-center mb-6'>Authentic Taste, Everyday Reliability</h1>
          
          <div className='flex flex-col lg:flex-row w-full gap-32 items-center lg:justify-center'>
            {/* Video Container */}
            <div className="h-[640px] overflow-hidden shadow-inner rounded-3xl flex-shrink-0">
               <video src={bfvideo} autoPlay loop muted playsInline className="w-full h-full object-contain" />
            </div>

            {/* List Content */}
            <div className="flex flex-col gap-4 text-center lg:text-left">
              <h1 className='text-3xl md:text-5xl font-bold leading-tight text-slate-200'>For households and <br /> professional kitchens</h1>
              <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 gap-4 text-left'>
                {[
                  { icon: icon1, t: "Consistent taste, Ready to Use", p: "So your food tastes the same every time." },
                  { icon: icon2, t: "Easy to Use", p: "Works well in daily recipes and high volume." },
                  { icon: icon3, t: "Naturally sourced", p: "Sourced directly from Bastar forests." },
                  { icon: icon4, t: "No Artificial Additives", p: "No added colors or synthetic additives." },
                  { icon: icon5, t: "Hygienically Processed", p: "Processed under strict hygiene standards." },
                  { icon: icon6, t: "Trusted by Cooks", p: "From family kitchens to restaurant counters." }
                ].map((item, i) => (
                  <div key={i} className='flex items-center gap-4'>
                    <img src={item.icon} alt="icon" className='w-12 h-12 md:w-16 md:h-16 flex-shrink-0' />
                    <div>
                      <h2 className='text-lg md:text-2xl font-bold text-gray-100'>{item.t}</h2>
                      <p className='text-sm md:text-lg text-gray-300'>{item.p}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-2">
                <Link to='/about-us'>
                  <button className='bg-[#ffbd3c] px-8 py-4 rounded-xl text-black font-bold text-lg hover:shadow-lg hover:bg-[#e6a82a] transition-all'>
                    Our Bastar Family
                  </button>
                </Link>
              </div>
            </div>

          
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE SECTION ================= */}
      <section className="relative w-full h-screen bg-[#1a3a1f] overflow-hidden flex items-center py-20 px-6">
        <div className="max-w-7xl mx-auto w-full relative flex items-center">
          
          <div className="z-10 w-full lg:w-[55%] text-white text-center lg:text-left">
            <p className="text-emerald-400 italic font-medium mb-2 text-lg">Why Choose Bastar Farms</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-10 max-w-xl leading-tight mx-auto lg:mx-0">
              Few reasons for people choosing Bastar Farms
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
              {features.map((f, i) => (
                <div key={i} className="flex flex-col items-center text-center p-4 bg-white/5 rounded-xl border border-white/10 hover:bg-white/10 transition-all">
                  <img src={f.icon} alt={f.title} className="w-10 h-10 md:w-12 md:h-12 mb-3" />
                  <p className="text-xs md:text-sm font-semibold leading-snug">{f.title}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Decorative Diamonds anchored to the screen edge so they stay flush right */}
          <div className="absolute top-1/2 -right-48 -translate-y-1/2 hidden lg:block opacity-20 lg:opacity-100 pointer-events-none">
            <div className="relative w-[650px] h-[650px] rotate-45 rounded-[100px] bg-[#142d19] overflow-hidden shadow-2xl border-[15px] border-[#1a3a1f]">
              <div className="grid grid-cols-2 grid-rows-2 w-full h-full gap-6 p-6">
                <div className="relative overflow-hidden rounded-[40px] bg-[#142d19]">
                  <img src={tamarindTreeImg} alt="Tamarind" className="absolute top-1/2 left-1/2 w-[210%] h-[210%] max-w-none object-cover -translate-x-1/2 -translate-y-1/2 -rotate-45" />
                </div>
                <div className="bg-[#2d4d44] rounded-[40px] shadow-lg" />
                <div className="flex items-center justify-center">
                  <div className="w-40 h-40 bg-[#f4d06f] rounded-[40px] shadow-xl" />
                </div>
                <div className="relative overflow-hidden rounded-[40px] bg-[#142d19]">
                  <img src={tamarindBowlImg} alt="Tamarind" className="absolute top-1/2 left-1/2 w-[210%] h-[210%] max-w-none object-cover -translate-x-1/2 -translate-y-1/2 -rotate-45" />
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ================= HOW THINGS ARE DONE & BULLETPROOF BANNER ================= */}
      <section className="bg-white py-16 relative overflow-hidden">
        
        {/* Top Split Area */}
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10 items-center mb-20 md:px-12">
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-6xl font-bold text-amber-800 mb-6 leading-tight">
              How things are done <br /> at Bastar Farms
            </h2>
            <p className="text-gray-700 text-2xl lg:pr-10 leading-relaxed">
              At Bastar Farms, tamarind is sourced directly from
              the forests around Bastar and processed at our
              Lohandiguda unit. The same people who live here
              work on sorting, processing, and packing every batch.
              We focus on keeping the taste natural, the process
              clean, and the quality consistent.
            </p>
          </div>
          <div className="rounded-3xl overflow-hidden shadow-xl w-full border-4 border-[#1a3a1f]">
            <video src={bf1} alt="Bastar Farms Team" className="w-full h-[300px] md:h-[400px] object-cover" autoPlay muted loop playsInline />
          </div>
        </div>

        {/* ================= BULLETPROOF GREEN BANNER ================= */}
        <div className="w-full mx-auto relative mt-48 lg:mt-32 mb-20 -top-8">
          <div className="relative w-full flex flex-col lg:flex-row items-center justify-end">
            
            {/* The Overlapping Brown Horizontal Oval */}
            <div className="absolute top-0 -left-8 -translate-y-[60%] lg:top-1/2 lg:-translate-y-1/2 -translate-x-1/2 lg:left-0 lg:translate-x-0 w-[350px] h-[280px] lg:w-[450px] lg:h-[300px] bg-[#a06822] rounded-[50%] flex items-center justify-center shadow-2xl z-20">
              <img 
                src={q1} 
                alt="Products" 
                className="w-[85%] md:w-[75%] h-auto object-contain drop-shadow-2xl relative hover:scale-105 transition-transform duration-500" 
              />
            </div>

            {/* The Green Background Box */}
            <div className="bg-[#8ac24c] w-full lg:w-[85%] flex flex-col lg:flex-row items-center justify-between py-8 px-8 lg:pr-16 lg:pl-[280px] xl:pl-[320px] gap-8 shadow-md relative z-10 mt-16 lg:mt-0">
              <h3 className="text-2xl md:text-3xl font-bold text-black max-w-xl leading-snug text-center lg:text-left pt-20 lg:pt-0">
                Quality food is not just ingredients, but the people and place behind it.
              </h3>
              <Link to="/contact">
                <button className="bg-[#fab855] hover:bg-[#e5a54c] text-black font-bold text-lg py-4 px-10 rounded-xl transition-all shadow-md flex-shrink-0 whitespace-nowrap">
                  Contact Us Now!
                </button>
              </Link>
            </div>
            
          </div>
        </div>

      </section>

      {/* ================= COMMUNITY GRID ================= */}
      <section className="bg-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-black uppercase mb-4 text-[#1a3a1f]">Working with the communities of Bastar</h2>
          <p className="text-gray-700 text-lg mb-12 max-w-3xl mx-auto">Our processing unit in Lohandiguda operates with a one hundred percent local and tribal workforce.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, index) => (
              <div key={index} className="aspect-square overflow-hidden border-[3px] border-[#1a3a1f] rounded-lg shadow-sm">
                <img src={img.src} alt={img.alt} className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home;