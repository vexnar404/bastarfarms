import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPhoneAlt, FaCheckCircle, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { BsArrowRight, BsArrowDown } from 'react-icons/bs';

import headerbg from '../assets/page-header-bg.jpg'

import tamarindpaste1 from "../assets/PRODUCT PAGE/Tamarind Paste/1.png"
import tamarindpaste2 from "../assets/PRODUCT PAGE/Tamarind Paste/2.png"
import tamarindpaste3 from "../assets/PRODUCT PAGE/Tamarind Paste/3.jpg"
import bhelpuri1 from "../assets/PRODUCT PAGE/Bhel puri/1.png"
import bhelpuri2 from "../assets/PRODUCT PAGE/Bhel puri/2.png"
import bhelpuri3 from "../assets/PRODUCT PAGE/Bhel puri/3.jpg"
import panipuri1 from "../assets/PRODUCT PAGE/Pani puri/1.png"
import panipuri2 from "../assets/PRODUCT PAGE/Pani puri/2.png"
import panipuri3 from "../assets/PRODUCT PAGE/Pani puri/3.jpg"
import tamarinddate1 from "../assets/PRODUCT PAGE/Tamarind date/1.jpg"
import tamarinddate2 from "../assets/PRODUCT PAGE/Tamarind date/2.jpg"
import tamarinddate3 from "../assets/PRODUCT PAGE/Tamarind date/3.jpg"
import tamarindchilli1 from "../assets/PRODUCT PAGE/Tamarind Chilli/1.png"
import tamarindchilli2 from "../assets/PRODUCT PAGE/Tamarind Chilli/2.png"
import tamarindchilli3 from "../assets/PRODUCT PAGE/Tamarind Chilli/3.jpg"

// --- REPLACE THESE WITH YOUR ACTUAL IMAGES ---
// For the demo, I'm using placeholder arrays for each product
const imgPaste = [tamarindpaste1, tamarindpaste2, tamarindpaste3]; 
const imgBhel = [bhelpuri1, bhelpuri2, bhelpuri3]; 
const imgPani = [panipuri1, panipuri2, panipuri3]; 
const imgDate = [tamarinddate1, tamarinddate2, tamarinddate3]; 
const imgChilli = [tamarindchilli1, tamarindchilli2, tamarindchilli3]; 

// --- DYNAMIC PRODUCT DATA ---
// --- DYNAMIC PRODUCT DATA ---
const productsData = {
  'Tamarind Paste': {
    images: imgPaste, // Make sure these variables exist above
    title: 'Tamarind Paste',
    tagline: 'A perfect balance of sour and spice to bring your recipes to life.',
    description: [
      'Raw material: Ripe tamarind',
      'Form: Seedless pulp',
      'Texture: Thick and smooth',
      'Taste profile: Naturally sour',
      'Color: Deep brown'
    ],
    storage: [
      'Store in a cool and dry place',
      'Refrigerate after opening',
      'Use a clean, dry spoon'
    ],
    packaging: [
      'Available pack sizes: 200 g, 700g, 1 kg, Horeca pack 5kg',
      'Packaging type: Food grade sealed pack',
      'Shelf life: 12 months from manufacturing'
    ],
    bestSuitedFor: 'Best for Indian Curries (Rassam, Sambhar, etc.), Chaat Chutneys, Tamarind Rice, Non-Veg Marination.',
    features: [
      'Thick, tangy, and versatile condiment',
      'Perfect for sweet and savory dishes',
      'Forest-sourced, processed by Bastar tribes'
    ],
    faqs: [
      { id: 1, q: "Are Bastar Farms products suitable for vegetarians?", a: "Yes, all our products are 100% vegetarian and naturally sourced from the forests of Bastar." },
      { id: 2, q: "Can I use your chutneys and pastes for non-Indian dishes?", a: "Absolutely! While our products are designed with Indian flavors in mind, they work wonderfully as marinades, dips, or condiments for a variety of cuisines." }
    ]
  },
  'Tamarind Date': {
    images: imgDate,
    title: 'Tamarind Date Chutney',
    tagline: 'A rich blend of sweet dates and tangy tamarind crafted to enhance the taste of snacks and chaat.',
    description: [
      'Raw material: Dates and tamarind blend',
      'Form: Chutney',
      'Texture: Thick and smooth',
      'Taste profile: Sweet with tangy notes',
      'Color: Deep brown'
    ],
    storage: [
      'Store in a cool and dry place',
      'Refrigerate after opening',
      'Use a clean, dry spoon'
    ],
    packaging: [
      'Available pack sizes: 150 gm, 1kg',
      'Packaging type: Food grade sealed pack',
      'Shelf life: 12 months from manufacturing'
    ],
    bestSuitedFor: 'Ideal as a dip for samosas, sandwiches, fried snacks, chaat, and dahi vada. Also suitable for flavour enhancement in street food preparations.',
    features: [
      'Rich sweet and tangy flavour profile',
      'Perfect pairing for snacks and chaat',
      'Forest sourced tamarind',
      'Processed by tribal communities of Bastar'
    ],
    faqs: []
  },
  'Bhel Puri': {
    images: imgBhel,
    title: 'Tamarind Bhel Puri',
    tagline: 'A tangy sweet chutney crafted to bring the authentic street food flavour to every plate of bhel puri.',
    description: [
      'Raw material: Tamarind based chutney blend',
      'Form: Chutney',
      'Texture: Smooth and pourable',
      'Taste profile: Sweet and tangy',
      'Color: Brown'
    ],
    storage: [
      'Store in a cool and dry place',
      'Refrigerate after opening',
      'Use a clean, dry spoon'
    ],
    packaging: [
      'Available pack sizes: 150 gm, 1kg',
      'Packaging type: Food grade sealed pack',
      'Shelf life: 12 months from manufacturing'
    ],
    bestSuitedFor: 'Best suited for bhel puri preparation, chaat mixes, snack toppings, and street food flavour enhancement. Can also be used in sauces, beverages, and tamarind based recipes.',
    features: [
      'Tangy sweet chutney for bhel puri',
      'Perfect balance of iconic street food flavours',
      'Forest sourced tamarind',
      'Processed by tribal communities of Bastar'
    ],
    faqs: []
  },
  'Pani Puri': {
    images: imgPani,
    title: 'Tamarind Pani Puri',
    tagline: 'A sweet tangy chutney crafted to deliver authentic street food flavour in every pani puri bite.',
    description: [
      'Raw material: Tamarind based chutney blend',
      'Form: Liquid chutney concentrate',
      'Texture: Thick and smooth',
      'Taste profile: Sweet and tangy',
      'Color: Brown'
    ],
    storage: [
      'Store in a cool and dry place',
      'Refrigerate after opening',
      'Use a clean, dry spoon'
    ],
    packaging: [
      'Available pack sizes: 150 gm, 1kg',
      'Packaging type: Food grade sealed pack',
      'Shelf life: 12 months from manufacturing'
    ],
    bestSuitedFor: 'Add 2 cups (400 ml) of chilled water to 2 tablespoons of Bastar Farms Pani Puri Chutney. Add boondi as per taste. Add 1 teaspoon of mashed potato to puri and fill with prepared pani puri water. Pack serves approximately 80 to 90 puris.',
    features: [
      'Sweet tangy punch for pani puri',
      'Authentic street food flavour',
      'Forest sourced tamarind',
      'Processed by tribal communities of Bastar'
    ],
    faqs: []
  },
  'Tamarind Chilli': {
    images: imgChilli,
    title: 'Tamarind Chilli',
    tagline: 'A bold blend of tangy tamarind and chilli crafted to add instant flavour to everyday cooking.',
    description: [
      'Raw material: Tamarind with chilli blend',
      'Form: Paste',
      'Texture: Thick and smooth',
      'Taste profile: Tangy with spicy notes',
      'Color: Reddish brown'
    ],
    storage: [
      'Store in a cool and dry place',
      'Refrigerate after opening',
      'Use a clean, dry spoon'
    ],
    packaging: [
      'Available pack sizes: 150 g, 1kg\nCustomized packaging available on request',
      'Packaging type: Food grade sealed pack',
      'Shelf life: 12 months from manufacturing'
    ],
    bestSuitedFor: 'Best suited for chaat preparations, pani puri, bhel mixes, chutneys, marinades, street food recipes, and flavour enhancement in curries.',
    features: [
      'Thick and flavour rich blend',
      'Balanced sour and spicy taste',
      'Forest sourced tamarind',
      'Processed by tribal communities of Bastar'
    ],
    faqs: []
  },
  'Tamarind Pulp': {
    images: imgPaste, // Replace with your pulp image array if different
    title: 'Tamarind Pulp',
    tagline: 'Consistent, kitchen ready tamarind pulp crafted for professional culinary use.',
    description: [
      'Raw material: Ripe tamarind',
      'Form: Seedless pulp',
      'Texture: Thick and uniform',
      'Taste profile: Naturally sour with balanced acidity',
      'Colour: Deep brown',
      'Processing: Hygienically processed and pasteurized'
    ],
    storage: [
      'Store in a cool and dry place',
      'Refrigerate after opening',
      'Use a clean, dry spoon',
      'Seal tightly after each use'
    ],
    packaging: [
      'Available pack sizes: 5 kg HORECA pack',
      'Packaging type: Food grade bulk pack',
      'Shelf life: 12 months from manufacturing'
    ],
    bestSuitedFor: 'Ideal for large scale preparation of curries, gravies, rasam, sambhar, chutneys, marinades, tamarind rice, and institutional cooking applications.',
    features: [
      'Consistent batch to batch quality',
      'Ready to use for commercial kitchens',
      'Forest sourced tamarind',
      'Processed at source in Bastar'
    ],
    faqs: []
  }
};


const ProductPage = () => {
  // States
  const [activeTab, setActiveTab] = useState('Tamarind Paste');
  const [openFaq, setOpenFaq] = useState(2); 
  const [imgIndex, setImgIndex] = useState(0); // Tracks current image in carousel

  const currentProduct = productsData[activeTab];

  // Handlers
  const handleTabChange = (tabName) => {
    setActiveTab(tabName);
    setOpenFaq(null); 
    setImgIndex(0); // Reset image to first one when swapping products
  };

  const toggleFaq = (id) => {
    setOpenFaq(openFaq === id ? null : id);
  };

  // Carousel Logic
  const nextImg = () => setImgIndex((prev) => (prev === currentProduct.images.length - 1 ? 0 : prev + 1));
  const prevImg = () => setImgIndex((prev) => (prev === 0 ? currentProduct.images.length - 1 : prev - 1));

  // Framer Motion Drag (Swipe) Logic
  const handleDragEnd = (e, { offset, velocity }) => {
    const swipe = offset.x;
    if (swipe < -50) { // Swiped left
      nextImg();
    } else if (swipe > 50) { // Swiped right
      prevImg();
    }
  };

  return (
    <div className="w-full bg-white overflow-hidden pb-20">

        <section className='relative w-full h-auto bg-cover bg-center py-12 md:py-24' style={{ backgroundImage: `url(${headerbg})` }}>
            <div className='text-white text-center px-4'>
                <h1 className='text-4xl md:text-6xl font-bold'>Our Products</h1>
            </div>
        </section>
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 mt-20">
        
        {/* ================= LEFT SIDEBAR ================= */}
        <div className="w-full lg:w-1/4 flex flex-col gap-8">
          {/* Category Navigation */}
          <div className="flex flex-col gap-3">
            {Object.keys(productsData).map((cat) => (
              <button
                key={cat}
                onClick={() => handleTabChange(cat)}
                className={`flex items-center justify-between w-full px-6 py-4 rounded-md font-bold text-left transition-colors duration-300 ${
                  activeTab === cat
                    ? 'bg-[#50a72c] text-white shadow-md'
                    : 'bg-[#f4f7f1] text-[#2a491d] hover:bg-[#e6ecd9]'
                }`}
              >
                {cat}
                {activeTab === cat && <BsArrowRight className="text-white" />}
              </button>
            ))}
          </div>

          {/* Contact Card */}
          <div className="bg-[#1a3a1f] rounded-xl p-8 text-center text-white shadow-xl mt-4">
            <h3 className="text-2xl font-bold mb-8 leading-tight">We're selling <br /> natural products</h3>
            <div className="flex justify-center mb-6">
              <div className="bg-[#ffbd3c] w-16 h-16 rounded-full flex items-center justify-center shadow-lg">
                <FaPhoneAlt className="text-white text-xl" />
              </div>
            </div>
            <p className="text-sm text-gray-300 mb-2">Call us to get more details</p>
            <p className="text-xl font-bold">+ 91 ( 848 ) 29 - 50500</p>
          </div>
        </div>

        {/* ================= RIGHT CONTENT AREA ================= */}
        <div className="w-full lg:w-3/4 flex flex-col gap-10">
          
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab} // Retriggers fade when clicking sidebar
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              className="flex flex-col gap-10"
            >
              
              {/* --- SWIPEABLE IMAGE CAROUSEL --- */}
              <div className="relative w-full bg-[#fcfdfa] rounded-2xl border border-gray-100 flex items-center justify-center p-8 overflow-hidden min-h-[300px] md:min-h-[400px] group">
                {/* Background Grid Pattern */}
                <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(#2a491d 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
                
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={imgIndex} // Retriggers slide when index changes
                    src={currentProduct.images[imgIndex]} 
                    alt={`${currentProduct.title} ${imgIndex + 1}`}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.2 }}
                    drag="x" // Enables swipe
                    dragConstraints={{ left: 0, right: 0 }} // Snaps back
                    dragElastic={0.2}
                    onDragEnd={handleDragEnd}
                    className="relative z-10 w-full max-w-sm md:max-w-md object-contain cursor-grab active:cursor-grabbing"
                  />
                </AnimatePresence>

                {/* Left/Right Carousel Controls (Hidden on mobile, visible on hover for Desktop) */}
                <button onClick={prevImg} className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 p-3 rounded-full shadow-md text-[#2a491d] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white md:block hidden">
                  <FaChevronLeft />
                </button>
                <button onClick={nextImg} className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/80 p-3 rounded-full shadow-md text-[#2a491d] opacity-0 group-hover:opacity-100 transition-opacity hover:bg-white md:block hidden">
                  <FaChevronRight />
                </button>

                {/* Pagination Dots */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-20">
                  {currentProduct.images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => setImgIndex(idx)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${imgIndex === idx ? 'bg-[#50a72c] w-6' : 'bg-gray-300 hover:bg-gray-400'}`}
                    />
                  ))}
                </div>

                {/* Floating Yellow Icon Box */}
                {/* <div className="absolute top-6 right-6 bg-[#ffbd3c] p-4 rounded-xl shadow-lg z-20 hidden sm:block pointer-events-none">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                     <path d="M4 19V5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v14"/>
                     <path d="M4 19h16"/>
                     <path d="M8 11h8"/>
                     <path d="M8 15h8"/>
                  </svg>
                </div> */}
              </div>
              {/* --- END CAROUSEL --- */}


              {/* --- TEXT CONTENT --- */}
              <div className="space-y-10">
                
                {/* Title & Tagline */}
                <div>
                  <h1 className="text-4xl md:text-5xl font-extrabold text-[#1a3a1f] mb-4">
                    {currentProduct.title}
                  </h1>
                  <p className="text-xl md:text-2xl text-[#50a72c] font-semibold leading-relaxed">
                    {currentProduct.tagline}
                  </p>
                </div>

                {/* 3-Column Grid for Specs (Description, Storage, Packaging) */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 bg-[#f4f7f1] p-8 rounded-2xl border border-gray-100">
                  
                  {/* Description List */}
                  <div>
                    <h3 className="text-lg font-bold text-[#1a3a1f] mb-3 border-b-2 border-[#50a72c] pb-2 inline-block">
                      Description
                    </h3>
                    <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                      {currentProduct.description.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2 text-[#50a72c]">•</span> 
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Storage List */}
                  <div>
                    <h3 className="text-lg font-bold text-[#1a3a1f] mb-3 border-b-2 border-[#50a72c] pb-2 inline-block">
                      Storage & Care
                    </h3>
                    <ul className="space-y-2 text-gray-700 text-sm md:text-base">
                      {currentProduct.storage.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2 text-[#50a72c]">•</span> 
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Packaging List */}
                  <div>
                    <h3 className="text-lg font-bold text-[#1a3a1f] mb-3 border-b-2 border-[#50a72c] pb-2 inline-block">
                      Packaging Details
                    </h3>
                    <ul className="space-y-2 text-gray-700 text-sm md:text-base whitespace-pre-line">
                      {currentProduct.packaging.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="mr-2 text-[#50a72c]">•</span> 
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Best Suited For */}
                <div>
                  <h2 className="text-2xl font-extrabold text-[#1a3a1f] mb-3">Best Suited For</h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {currentProduct.bestSuitedFor}
                  </p>
                </div>

                {/* Key Highlights / Features */}
                <div>
                  <h2 className="text-2xl font-extrabold text-[#1a3a1f] mb-4">Key Highlights</h2>
                  <ul className="space-y-4">
                    {currentProduct.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <FaCheckCircle className="text-[#ffbd3c] text-xl mt-1 flex-shrink-0" />
                        <span className="text-gray-800 font-bold text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>
              {/* --- END TEXT CONTENT --- */}

              {/* ================= FAQ SECTION =================
              <div className="mt-8 space-y-4">
                {currentProduct.faqs.map((faq) => {
                  const isOpen = openFaq === faq.id;
                  return (
                    <div 
                      key={faq.id} 
                      className={`border rounded-xl transition-all duration-300 ${isOpen ? 'border-gray-200 shadow-lg' : 'border-gray-200'}`}
                    >
                      <button
                        onClick={() => toggleFaq(faq.id)}
                        className="w-full flex items-center justify-between p-6 bg-white rounded-xl text-left"
                      >
                        <span className={`text-xl font-bold pr-4 transition-colors ${isOpen ? 'text-[#50a72c]' : 'text-[#1a3a1f]'}`}>
                          {faq.q}
                        </span>
                        <span className="flex-shrink-0">
                          {isOpen ? (
                            <BsArrowDown className="text-[#ffbd3c] text-xl" />
                          ) : (
                            <BsArrowRight className="text-gray-400 text-xl" />
                          )}
                        </span>
                      </button>
                      
                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <div className="px-6 pb-6 bg-white rounded-b-xl text-gray-600 text-lg leading-relaxed">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div> */}

            </motion.div>
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
};

export default ProductPage;