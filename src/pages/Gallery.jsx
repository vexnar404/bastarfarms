import React from 'react';

import headerbg from '../assets/page-header-bg.jpg'

// --- INAUGURATION & DISPATCH IMAGES ---
import inauguration1 from '../assets/gallery/InaugurationDay/1.jpg';
import inauguration2 from '../assets/gallery/InaugurationDay/2.jpg';
import inauguration3 from '../assets/gallery/InaugurationDay/3.jpg';
import inauguration4 from '../assets/gallery/InaugurationDay/4.jpg';
import inauguration5 from '../assets/gallery/InaugurationDay/5.jpg';
import inauguration6 from '../assets/gallery/InaugurationDay/6.jpg';

import dispatch1 from '../assets/gallery/dispatch/1.jpg';
import dispatch2 from '../assets/gallery/dispatch/2.jpg';
import dispatch3 from '../assets/gallery/dispatch/3.jpg';
import dispatch4 from '../assets/gallery/dispatch/4.jpg';
import dispatch5 from '../assets/gallery/dispatch/5.jpg';
import dispatch6 from '../assets/gallery/dispatch/6.jpg';

import flowermaker1 from '../assets/gallery/flowermaker/1.jpg';
import flowermaker2 from '../assets/gallery/flowermaker/2.jpg';
import flowermaker3 from '../assets/gallery/flowermaker/3.jpg';
import flowermaker4 from '../assets/gallery/flowermaker/4.jpg';
import flowermaker5 from '../assets/gallery/flowermaker/5.jpg';
import flowermaker6 from '../assets/gallery/flowermaker/6.jpg';

import healthcamp1 from '../assets/gallery/healthcamp/1.jpg';
import healthcamp2 from '../assets/gallery/healthcamp/2.jpg';
import healthcamp3 from '../assets/gallery/healthcamp/3.jpg';

import pgstudents1 from '../assets/gallery/pgstudents/1.jpg';
import pgstudents2 from '../assets/gallery/pgstudents/2.jpg';
import pgstudents3 from '../assets/gallery/pgstudents/3.jpg';
import pgstudents4 from '../assets/gallery/pgstudents/4.jpg';
import pgstudents5 from '../assets/gallery/pgstudents/5.jpg';
import pgstudents6 from '../assets/gallery/pgstudents/6.jpg';

import faic1 from '../assets/gallery/faic/1.jpg';
import faic2 from '../assets/gallery/faic/2.jpg';
import faic3 from '../assets/gallery/faic/3.jpg';
import faic4 from '../assets/gallery/faic/4.jpg';
import faic5 from '../assets/gallery/faic/5.jpg';
import faic6 from '../assets/gallery/faic/6.jpg';

import krishibhawan1 from '../assets/gallery/krishibhawan/1.jpg';
import krishibhawan2 from '../assets/gallery/krishibhawan/2.jpg';
import krishibhawan3 from '../assets/gallery/krishibhawan/3.jpg';

import kerala1 from '../assets/gallery/kerela/1.jpg';
import kerala2 from '../assets/gallery/kerela/2.jpg';
import kerala3 from '../assets/gallery/kerela/3.jpg';

// Note: Ensure your bundler handles .mp4 imports correctly
import spmoments1 from '../assets/gallery/specialmoments/1.mp4';
import spmoments2 from '../assets/gallery/specialmoments/2.jpg';
import spmoments3 from '../assets/gallery/specialmoments/3.jpeg';
import spmoments4 from '../assets/gallery/specialmoments/4.mp4';


// --- DATA ARRAYS ---
const inauguarationData = [
  { id: 1, src: inauguration1, alt: 'Chief Minister viewing facility' },
  { id: 2, src: inauguration2, alt: 'Chief Minister at control panel' },
  { id: 3, src: inauguration3, alt: 'Chief Minister with team' },
  { id: 4, src: inauguration4, alt: 'Team seated at event' },
  { id: 5, src: inauguration5, alt: 'Plaque unveiling' },
  { id: 6, src: inauguration6, alt: 'Presenting memento' },
];

const dispatchData = [
  { id: 1, src: dispatch1, alt: 'Group photo outdoors' },
  { id: 2, src: dispatch2, alt: 'Kossher team indoors' },
  { id: 3, src: dispatch3, alt: 'Team outdoors' },
  { id: 4, src: dispatch4, alt: 'Inspecting products' },
  { id: 5, src: dispatch5, alt: 'Truck dispatch' },
  { id: 6, src: dispatch6, alt: 'Loading boxes' },
];

const eventsData = [
  {
    id: 'flower-makers',
    title: 'Tamarind Flower Makers Visit',
    date: 'January 2022',
    description: 'Tamarind flower makers from the Bastar division visiting Bastar Farms for skill development and plant interaction.',
    borderColor: '#3a692a', 
    hasBorder: true,
    gridClass: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3', // 3 images per row
    images: [
      { src: flowermaker1, alt: 'Group photo indoors' },
      { src: flowermaker2, alt: 'Team meeting' },
      { src: flowermaker3, alt: 'Discussion' },
      { src: flowermaker4, alt: 'Group photo outdoors' },
      { src: flowermaker5, alt: 'Touring facility' },
      { src: flowermaker6, alt: 'Product display' },
    ]
  },
  {
    id: 'health-camp',
    title: 'Health Camp at Bastar Facility',
    date: 'September 2023',
    description: 'Health camp conducted at our Bastar facility for employees and the local tribal community.',
    borderColor: '#3a692a',
    hasBorder: true,
    gridClass: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3', // 3 images per row
    images: [
      { src: healthcamp1, alt: 'Health checkup queue' },
      { src: healthcamp2, alt: 'Doctor consultation' },
      { src: healthcamp3, alt: 'Medical staff' },
    ]
  },
  {
    id: 'pg-students',
    title: 'Plant Demonstration for PG Students',
    date: 'December 2023',
    description: "Interactive session led by Bastar Farms' tribal team for students of Government Post Graduate College, Jagdalpur.",
    borderColor: '#4a332a', 
    hasBorder: true,
    gridClass: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3', // 3 images per row
    images: [
      { src: pgstudents1, alt: 'Students arriving' },
      { src: pgstudents2, alt: 'Touring machines' },
      { src: pgstudents3, alt: 'Group photo inside' },
      { src: pgstudents4, alt: 'Observing equipment' },
      { src: pgstudents5, alt: 'Sorting demonstration' },
      { src: pgstudents6, alt: 'Processing explanation' },
    ]
  },
  {
    id: 'faic-2024',
    title: 'Representing Bastar at FAIC 2024',
    date: 'September 2024',
    description: 'Showcasing our products and engaging with industry stakeholders at the exhibition.',
    borderColor: '#a67b27',
    hasBorder: true,
    gridClass: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3', // 3 images per row
    images: [
      { src: faic1, alt: 'FAIC Booth team' },
      { src: faic2, alt: 'Explaining products' },
      { src: faic3, alt: 'Product handover' }, // Fixed: Removed the row-span override
      { src: faic4, alt: 'Selfie at booth' },
      { src: faic5, alt: 'Customer interaction' },
      { src: faic6, alt: 'Team at FAIC' },
    ]
  },
  {
    id: 'krishi-bhawan',
    title: 'Meaningful Meeting at Krishi Bhawan',
    date: 'August 2025',
    description: "Meeting with Hon'ble Minister of State for Agriculture and Farmers Welfare, Shri Ramnath Thakur, at Krishi Bhawan.",
    borderColor: '#4a332a',
    hasBorder: true,
    gridClass: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3', // 3 images per row
    images: [
      { src: krishibhawan1, alt: 'Meeting pose 1' },
      { src: krishibhawan2, alt: 'Presenting products' },
      { src: krishibhawan3, alt: 'Discussion over desk' },
    ]
  },
  {
    id: 'kerala-launch',
    title: 'Official Launch in Kerala',
    date: 'October 2025',
    description: 'Official launch of Bastar Farms Premium Tamarind Paste in collaboration with the Kerala Hotel and Restaurant Association (KHRA).',
    borderColor: '#3a692a',
    hasBorder: true,
    gridClass: 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3', // 3 images per row
    images: [
      { src: kerala1, alt: 'Handing over paste' },
      { src: kerala2, alt: 'Audience seated' },
      { src: kerala3, alt: 'News clipping' },
    ]
  },
];

const SpecialMoments = [
  { src: spmoments1, alt: 'A Day with Our Team', caption: 'A Day with Our Team & Mr. Pravir Krishna', gridCol: 'md:col-span-7' },
  { src: spmoments2, alt: 'Health Camp Collage', caption: 'Health Camp For Community', gridCol: 'md:col-span-5' },
  { src: spmoments3, alt: 'Meeting with Minister', caption: "Meeting with Hon'ble Minister Chirag Paswan", gridCol: 'md:col-span-4' },
  { src: spmoments4, alt: 'Festive Celebrations', caption: 'Festive Celebrations at Bastar Farms', gridCol: 'md:col-span-8' },
];


// --- REUSABLE MINI-COMPONENTS (OPTIMIZATION) ---

// Section Header with Line and Date perfectly side-by-side
const SectionHeader = ({ title, description, date, hasBorder = true }) => (
  <div className="w-full mb-10">
    <div className="flex items-center gap-6 mb-6">
      {hasBorder && <div className="h-[3px] bg-black flex-grow"></div>}
      {date && (
        <span className="text-xl md:text-2xl font-bold text-black whitespace-nowrap">
          {date}
        </span>
      )}
    </div>
    <div>
      <h1 className="text-4xl md:text-5xl font-black text-black mb-3 md:mb-4">{title}</h1>
      <p className="text-[#2a491d] text-lg font-bold leading-tight max-w-4xl">{description}</p>
    </div>
  </div>
);

// Media Renderer for Images/Video
const MediaRenderer = ({ src, alt }) => {
  const isVideo = src.endsWith('.mp4') || src.endsWith('.webm');
  const mediaClasses = "w-full h-full object-cover transition-transform duration-500 group-hover:scale-105";

  if (isVideo) {
    return (
      <video src={src} autoPlay loop muted playsInline className={mediaClasses} />
    );
  }
  return <img src={src} alt={alt} loading="lazy" className={mediaClasses} />;
};


// --- MAIN COMPONENT ---
function Gallery() {
  return (
    <div className="w-full bg-white overflow-hidden pb-20">

      <section className='relative w-full h-auto bg-cover bg-center py-12 md:py-24' style={{ backgroundImage: `url(${headerbg})` }}>
          <div className='text-white text-center px-4'>
              <h1 className='text-4xl md:text-6xl font-bold'>Happy Moments at Bastar Farms</h1>
          </div>
      </section>
      
      {/* 1. INAUGURATION SECTION */}
      <section className="bg-white py-16 px-6 md:px-20 font-sans max-w-7xl mx-auto">
        <SectionHeader 
          title="Inauguration of Bastar Farms Facility"
          description={<>Inauguration of our food processing facility in Bastar by Hon'ble Chief <br className="hidden md:block" /> Minister of Chhattisgarh, Shri Bhupesh Baghel.</>}
          date="December 2022"
          hasBorder={true}
        />
        {/* Strictly 3 images per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {inauguarationData.map((img) => (
            <div key={img.id} className="relative h-64 md:h-80 overflow-hidden rounded-2xl border-[4px] border-[#2a491d] shadow-lg group">
              <MediaRenderer src={img.src} alt={img.alt} />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </section>

      {/* 2. DISPATCH SECTION */}
      <section className="bg-white py-16 px-6 md:px-20 font-sans max-w-7xl mx-auto">
        <SectionHeader 
          title="First Tamarind Consignment Dispatch"
          description={<>Ceremony held in the presence of Hon. MP Shri Deepak Baij, District Collector <br className="hidden md:block" /> Shri Chandan Kumar, SDM Shri Mahesh Kashyap, and senior officials.</>}
          date="January 2022"
          hasBorder={true}
        />
        {/* Simplified strictly to 3 images per row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {dispatchData.map((img) => (
            <div key={img.id} className="relative h-64 md:h-80 overflow-hidden rounded-2xl border-[4px] border-[#50a72c] shadow-sm group">
              <MediaRenderer src={img.src} alt={img.alt} />
            </div>
          ))}
        </div>
      </section>

      {/* 3. TIMELINE EVENTS SECTION */}
      <section className="bg-white py-16 px-6 md:px-20 font-sans max-w-7xl mx-auto space-y-24">
        {eventsData.map((event) => (
          <div key={event.id}>
            <SectionHeader 
              title={event.title}
              description={event.description}
              date={event.date}
              hasBorder={event.hasBorder}
            />
            {/* Strictly 3 images per row for all events */}
            <div className={`grid gap-6 ${event.gridClass}`}>
              {event.images.map((img, idx) => (
                <div key={idx} className="relative h-64 md:h-80 overflow-hidden rounded-xl border-[4px] shadow-sm group" style={{ borderColor: event.borderColor }}>
                  <MediaRenderer src={img.src} alt={img.alt} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* 4. SPECIAL MOMENTS SECTION (Masonry Layout remains as is) */}
      <section className="bg-white py-16 px-6 md:px-20 font-sans max-w-7xl mx-auto pt-8">
        <h1 className="text-4xl md:text-5xl font-bold text-black mb-10">More Special Moments at Bastar</h1>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">
          {SpecialMoments.map((item, idx) => (
            <div key={idx} className={`flex flex-col ${item.gridCol}`}>
              <div className="relative overflow-hidden rounded-2xl border-[4px] border-[#6b4226] shadow-md group h-64 md:h-80 lg:h-[400px] w-full">
                <MediaRenderer src={item.src} alt={item.alt} />
              </div>
              <p className="text-center text-[#1a3a1f] font-bold text-lg mt-4 px-2">{item.caption}</p>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default Gallery;