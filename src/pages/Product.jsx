import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCheckCircle } from 'react-icons/fa';
import { BsArrowDown, BsArrowRight } from 'react-icons/bs';

import headerbg from '../assets/page-header-bg.jpg';

// --- IMAGE IMPORTS ---
import tamarindpaste1 from "../assets/PRODUCT PAGE/Tamarind Paste/1.png";
import tamarindpaste2 from "../assets/PRODUCT PAGE/Tamarind Paste/2.png";
import tamarindpaste3 from "../assets/PRODUCT PAGE/Tamarind Paste/3.jpg";
import bhelpuri1 from "../assets/PRODUCT PAGE/Bhel puri/1.png";
import bhelpuri2 from "../assets/PRODUCT PAGE/Bhel puri/2.png";
import bhelpuri3 from "../assets/PRODUCT PAGE/Bhel puri/3.jpg";
import panipuri1 from "../assets/PRODUCT PAGE/Pani puri/1.png";
import panipuri2 from "../assets/PRODUCT PAGE/Pani puri/2.png";
import panipuri3 from "../assets/PRODUCT PAGE/Pani puri/3.jpg";
import tamarinddate1 from "../assets/PRODUCT PAGE/Tamarind date/1.jpg";
import tamarinddate2 from "../assets/PRODUCT PAGE/Tamarind date/2.jpg";
import tamarinddate3 from "../assets/PRODUCT PAGE/Tamarind date/3.jpg";
import tamarindchilli1 from "../assets/PRODUCT PAGE/Tamarind Chilli/1.png";
import tamarindchilli2 from "../assets/PRODUCT PAGE/Tamarind Chilli/2.png";
import tamarindchilli3 from "../assets/PRODUCT PAGE/Tamarind Chilli/3.jpg";

import hero1 from '../assets/36.png';
import hero2 from '../assets/37.png';
import hero3 from '../assets/38.png';
import hero4 from '../assets/39.png';
import hero5 from '../assets/40.png';

import back1 from '../assets/PRODUCT PAGE/Bhel puri/back.png';
import back2 from '../assets/PRODUCT PAGE/Pani puri/back.png';
import back3 from '../assets/PRODUCT PAGE/Tamarind Chilli/back.png';
import back4 from '../assets/PRODUCT PAGE/Tamarind Paste/back.png';
import back5 from '../assets/PRODUCT PAGE/Tamarind date/back.png';

import icon1 from '../assets/PRODUCT PAGE/ICONS/27.png';
import icon2 from '../assets/PRODUCT PAGE/ICONS/28.png';
import icon3 from '../assets/PRODUCT PAGE/ICONS/29.png';
import icon4 from '../assets/PRODUCT PAGE/ICONS/30.png';

const imgPaste = [hero4, tamarindpaste2, tamarindpaste3 ]; 
const imgBhel = [hero1,  bhelpuri2, bhelpuri3 ]; 
const imgPani = [hero2, panipuri2, panipuri3]; 
const imgDate = [hero5, tamarinddate2, tamarinddate3]; 
const imgChilli = [hero3, tamarindchilli2, tamarindchilli3]; 

const imgpasteh = [tamarindpaste1];
const imgbhelh = [bhelpuri1];
const imgpanih = [panipuri1];
const imgdateh = [tamarinddate1];
const imgchillih = [tamarindchilli1];

const imgpasteb = [back4];
const imgbhelb = [back1];
const imgpanib = [back2];
const imgdateb = [back5];
const imgchillib = [back3];

// --- GLOBAL STATIC DATA (Optimized to prevent re-renders) ---

// 1. Same FAQs for all products
const globalFaqs = [
  { id: 1, q: "Is it ready to use or does it need dilution?", a: "Most products are ready to use. Pani Puri chutney is a concentrate and should be diluted as per instructions." },
  { id: 2, q: "How long does it stay fresh after opening?", a: "When refrigerated and handled properly, it remains usable as per the shelf life mentioned on the pack." },
  { id: 3, q: "Are your products pasteurized?", a: "Yes. Our products undergo hygienic processing and pasteurization to ensure safety and consistency." },
  { id: 4, q: "Can I use this as a base for my own recipes?", a: "Yes. Many chefs and home cooks use it as a base for sauces, marinades, and flavour blends." },
  { id: 5, q: "Are the products safe for commercial kitchens and HoReCa use?", a: "Yes. Our processing standards, batch consistency, and packaging are designed to meet the needs of restaurants, caterers, and institutional buyers." },
  { id: 6, q: "Are your products suitable for export or bulk supply?", a: "Yes. We cater to bulk, private label, and export requirements subject to order specifications and regulatory compliance." },
  { id: 7, q: "Are Bastar Farms products suitable for vegetarians?", a: "Yes, all Bastar Farms products are vegetarian and crafted to cater to diverse dietary preferences. These can be used for Non-Vegarians as well." },
  { id: 8, q: "Can I use your chutneys and pastes for non-Indian dishes?", a: "Absolutely! While our products are designed with Indian flavors in mind, they work wonderfully as marinades, dips, or condiments for a variety of cuisines." },
  { id: 9, q: "What makes Bastar Farms products unique?", a: "Our products are crafted from authentic, forest-sourced ingredients and processed by tribal communities of Bastar, ensuring unmatched quality and flavor." },
  { id: 10, q: "Can I use Bastar Farms Tamarind Paste for desserts?", a: "Yes, our Tamarind Paste adds a unique tangy sweetness to desserts like tamarind candies, tarts, and even fusion recipes." }
];

// 2. Trust Banner Features mapped dynamically
const trustFeatures = [
  { icon: icon1, text: "Natural &\nChemical Free" },
  { icon: icon2, text: "Sourced Directly\nfrom Bastar" },
  { icon: icon3, text: "Safety Tested &\nPasteurized" },
  { icon: icon4, text: "Controlled Facility\nPackaging" }
];

// 3. Dynamic Product Data
const productsData = {
  'Tamarind Paste': {
    images: imgPaste,
    imagesh: imgpasteh,
    imagesb: imgpasteb,
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
    ]
  },
  'Tamarind Date': {
    images: imgDate,
    imagesh: imgdateh,
    imagesb: imgdateb,
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
    ]
  },
  'Bhel Puri': {
    images: imgBhel,
    imagesh: imgbhelh,
    imagesb: imgbhelb,
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
    ]
  },
  'Pani Puri': {
    images: imgPani,
    imagesh: imgpanih,
    imagesb: imgpanib,
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
    ]
  },
  'Tamarind Chilli': {
    images: imgChilli,
    imagesh: imgchillih,
    imagesb: imgchillib,
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
    ]
  },
  // 'Tamarind Pulp': {
  //   images: imgPaste, 
  //   imagesh: imgpasteh,
  //   title: 'Tamarind Pulp',
  //   tagline: 'Consistent, kitchen ready tamarind pulp crafted for professional culinary use.',
  //   description: [
  //     'Raw material: Ripe tamarind',
  //     'Form: Seedless pulp',
  //     'Texture: Thick and uniform',
  //     'Taste profile: Naturally sour with balanced acidity',
  //     'Colour: Deep brown',
  //     'Processing: Hygienically processed and pasteurized'
  //   ],
  //   storage: [
  //     'Store in a cool and dry place',
  //     'Refrigerate after opening',
  //     'Use a clean, dry spoon',
  //     'Seal tightly after each use'
  //   ],
  //   packaging: [
  //     'Available pack sizes: 5 kg HORECA pack',
  //     'Packaging type: Food grade bulk pack',
  //     'Shelf life: 12 months from manufacturing'
  //   ],
  //   bestSuitedFor: 'Ideal for large scale preparation of curries, gravies, rasam, sambhar, chutneys, marinades, tamarind rice, and institutional cooking applications.',
  //   features: [
  //     'Consistent batch to batch quality',
  //     'Ready to use for commercial kitchens',
  //     'Forest sourced tamarind',
  //     'Processed at source in Bastar'
  //   ]
  // }
};

// --- HELPER COMPONENT FOR BOLDING TEXT ---
const SpecListItem = ({ text }) => {
  if (text.includes(':')) {
    const parts = text.split(':');
    return (
      <li className="flex items-start text-lg md:text-xl">
        <span className="font-black text-black mr-3">•</span>
        <span>
          <span className="font-extrabold text-gray-900">{parts[0]}:</span>
          <span className="text-gray-700">{parts.slice(1).join(':')}</span>
        </span>
      </li>
    );
  }
  return (
    <li className="flex items-start text-lg md:text-xl">
      <span className="font-black text-black mr-3">•</span>
      <span className="text-gray-700">{text}</span>
    </li>
  );
};


const ProductPage = () => {
  const [activeTab, setActiveTab] = useState('Tamarind Chilli');
  const [mainImgIndex, setMainImgIndex] = useState(0);
  const [openFaq, setOpenFaq] = useState(null);

  const currentProduct = productsData[activeTab];

  const handleProductSwitch = (productKey) => {
    setActiveTab(productKey);
    setMainImgIndex(0);
    setOpenFaq(null);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleFaq = (id) => setOpenFaq(openFaq === id ? null : id);

  return (
    <div className="w-full bg-white overflow-hidden font-sans">
      
      {/* PAGE HEADER */}
      {/* <section className='relative w-full h-auto bg-cover bg-center py-12 md:py-24' style={{ backgroundImage: `url(${headerbg})` }}>
        <div className='text-white text-center px-4'>
          <h1 className='text-4xl md:text-6xl font-bold'>Our Products</h1>
        </div>
      </section> */}

      <section className="hidden md:flex w-full bg-[#2a491d] py-4 border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          
          <div className="flex flex-wrap justify-center gap-8">
            {Object.keys(productsData)
              .filter(key => key !== activeTab)
              .map(key => (
                <button 
                  key={key} 
                  onClick={() => handleProductSwitch(key)}
                  className="flex flex-col items-center bg-white p-3 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 w-48 group"
                >
                  <img 
                    src={productsData[key].imagesh[0]} 
                    alt={key} 
                    className="h-32 object-contain mb-4 group-hover:scale-110 transition-transform duration-300" 
                  />
                  <h3 className="font-extrabold text-[#1a3a1f] text-lg leading-tight">{key}</h3>
                  <span className="text-[#50a72c] text-sm font-bold mt-2 opacity-0 group-hover:opacity-100 transition-opacity">View Details →</span>
                </button>
            ))}
          </div>
        </div>
      </section>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4 }}
        >
          
          {/* ================= 1. HERO SECTION ================= */}
          <section className="max-w-7xl mx-auto px-6 pb-6 md:py-16 flex flex-col md:flex-row items-center justify-center gap-4 lg:gap-20">
            {/* Left: Main Image */}
            <div className="w-full md:w-1/2 relative rounded-3xl h-[450px] overflow-hidden">
              <img 
                src={currentProduct.images[mainImgIndex]} 
                alt={currentProduct.title} 
                className="relative w-full h-full object-contain transition-all duration-300"
              />
            </div>
            <div className="flex flex-wrap md:hidden gap-3 md:gap-4">
                {currentProduct.images.map((img, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setMainImgIndex(idx)}
                    className={`w-20 h-20 md:w-24 md:h-24 p-2 rounded-xl border-2 transition-all duration-300 bg-white shadow-sm flex items-center justify-center flex-shrink-0
                      ${mainImgIndex === idx ? 'border-[#50a72c] scale-105 shadow-md' : 'border-gray-200 hover:border-[#50a72c]'}`}
                  >
                    <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>

            {/* Right: Title, Tagline, Thumbnails */}
            <div className="w-full md:w-1/2 flex flex-col items-start text-left">
              <h1 className="text-4xl md:text-6xl font-black text-[#1a3a1f] uppercase tracking-tight mb-4 leading-none">
                {currentProduct.title}
              </h1>
              <p className="text-xl md:text-2xl text-gray-700 font-medium mb-10 leading-relaxed">
                {currentProduct.tagline}
              </p>

              {/* Thumbnail Gallery */}
              <div className="hidden md:flex flex-wrap gap-3 md:gap-4 mt-2">
                {currentProduct.images.map((img, idx) => (
                  <button 
                    key={idx} 
                    onClick={() => setMainImgIndex(idx)}
                    className={`w-20 h-20 md:w-24 md:h-24 p-2 rounded-xl border-2 transition-all duration-300 bg-white shadow-sm flex items-center justify-center flex-shrink-0
                      ${mainImgIndex === idx ? 'border-[#50a72c] scale-105 shadow-md' : 'border-gray-200 hover:border-[#50a72c]'}`}
                  >
                    <img src={img} alt={`Thumbnail ${idx}`} className="w-full h-full object-contain" />
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* ================= 2. GREEN FEATURE BAR ================= */}
          <section className="w-full bg-[#3a692a] py-8">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 text-white text-center md:text-left">
              {trustFeatures.map((feature, idx) => (
                <div key={idx} className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-4">
                  <img src={feature.icon} alt="Icon" className='w-16 h-16' />
                  <span className="font-bold text-sm md:text-base leading-tight whitespace-pre-line">
                    {feature.text}
                  </span>
                </div>
              ))}
            </div>
          </section>

          {/* ================= 3. INGREDIENTS & SPECS ================= */}
          <section className="max-w-7xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row gap-8 items-center">
            <div className="w-full md:w-2/3 text-center md:text-left">
              <h2 className="text-lg md:text-xl font-bold text-gray-800 tracking-wider mb-2">Ingredients and Specifications</h2>
              <h1 className="text-4xl md:text-5xl font-black text-[#1a3a1f]">What's in The Blend</h1>
            </div>
            
            <div className="w-full md:w-2/3 border-l-4 border-[#50a72c] pl-6 md:pl-10">
              <ul className="space-y-2">
                {currentProduct.description.map((item, idx) => (
                  <SpecListItem key={idx} text={item} />
                ))}
              </ul>
            </div>
          </section>

          {/* ================= 4. DARK GREEN DETAILS SECTION ================= */}
          <section className="w-full bg-[#416a30] text-white py-16 md:py-24 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-4 items-center relative z-10">
              
              {/* Left Column */}
              <div className="space-y-12">
                <div>
                  <h3 className="text-[#ffbd3c] text-3xl font-extrabold mb-4">Storage & Care</h3>
                  <ul className="space-y-2 text-lg opacity-90">
                    {currentProduct.storage.map((item, idx) => (
                      <li key={idx}>• {item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-[#ffbd3c] text-3xl font-extrabold mb-4">Best Suited For</h3>
                  <p className="text-lg leading-relaxed opacity-90">{currentProduct.bestSuitedFor}</p>
                </div>
              </div>

              {/* Center Image */}
              <div className='w-full'>
                <img 
                  src={currentProduct.imagesb[0]} 
                  alt={currentProduct.title} 
                  className="w-full flex items-center justify-center object-cover drop-shadow-2xl hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Right Column */}
              <div className="space-y-12">
                <div>
                  <h3 className="text-[#ffbd3c] text-3xl font-extrabold mb-4">Packaging Details</h3>
                  <ul className="space-y-2 text-lg opacity-90 whitespace-pre-line">
                    {currentProduct.packaging.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>
                <div>
                  <ul className="space-y-4">
                    {currentProduct.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <FaCheckCircle className="text-[#ffbd3c] text-2xl flex-shrink-0" />
                        <span className="text-lg font-bold">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

            </div>
          </section>

          {/* ================= 5. FAQ SECTION (Global FAQs) ================= */}
          <section className="max-w-7xl mx-auto px-6 py-20 bg-gray-50/50">
            <h2 className="text-4xl font-black text-center text-[#1a3a1f] mb-12">Frequently Asked Questions</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {globalFaqs.map((faq) => {
                const isOpen = openFaq === faq.id;
                return (
                  <div key={faq.id} className="h-fit">
                    <button
                      onClick={() => toggleFaq(faq.id)}
                      className={`w-full flex items-start justify-between p-6 bg-white rounded-xl text-left border transition-all duration-300 ${isOpen ? 'border-[#50a72c] shadow-md' : 'border-gray-200 shadow-sm hover:border-gray-300'}`}
                    >
                      <span className={`text-lg font-bold pr-4 transition-colors ${isOpen ? 'text-[#50a72c]' : 'text-[#1a3a1f]'}`}>
                        {faq.q}
                      </span>
                      <span className="flex-shrink-0 mt-1">
                        {isOpen ? <BsArrowDown className="text-[#ffbd3c] text-xl" /> : <BsArrowRight className="text-gray-400 text-xl" />}
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
                          <div className="px-6 pb-6 pt-2 bg-white rounded-b-xl border-x border-b border-slate-200 text-gray-600 text-md leading-relaxed">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </section>

        </motion.div>
      </AnimatePresence>

      {/* ================= 6. VIEW OTHER PRODUCTS (Navigation) ================= */}
      <section className="hidden md:flex w-full bg-[#2a491d] py-4 border-gray-200">
        <div className="max-w-7xl mx-auto px-6 text-center">
          
          <div className="flex flex-wrap justify-center gap-8">
            {Object.keys(productsData)
              .filter(key => key !== activeTab)
              .map(key => (
                <button 
                  key={key} 
                  onClick={() => handleProductSwitch(key)}
                  className="flex flex-col items-center bg-white p-3 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 w-48 group"
                >
                  <img 
                    src={productsData[key].imagesh[0]} 
                    alt={key} 
                    className="h-32 object-contain mb-4 group-hover:scale-110 transition-transform duration-300" 
                  />
                  <h3 className="font-extrabold text-[#1a3a1f] text-lg leading-tight">{key}</h3>
                  <span className="text-[#50a72c] text-sm font-bold mt-2 opacity-0 group-hover:opacity-100 transition-opacity">View Details →</span>
                </button>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default ProductPage;