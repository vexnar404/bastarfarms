import React, { useState } from 'react';
import bgImage from '../assets/video-one-bg.jpg';
import aboutbf from '../assets/aboutbf.mp4'; 
import { FaPlay, FaTimes } from 'react-icons/fa';

const VideoSection = ({ videoSrc = aboutbf }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <section className="relative overflow-hidden bg-cover bg-center py-24 md:py-32" 
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Decorative lines & corners */}
        <div className="absolute top-0 left-0 w-full h-px bg-white/20"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-white/20"></div>
        <div className="absolute top-0 left-0 w-px h-full bg-white/20"></div>
        <div className="absolute top-0 right-0 w-px h-full bg-white/20"></div>
        <div className="absolute top-0 left-0 w-20 h-20 md:w-32 md:h-32 border-t-2 border-l-2 border-white/10"></div>
        <div className="absolute bottom-0 right-0 w-20 h-20 md:w-32 md:h-32 border-b-2 border-r-2 border-white/10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center text-white">
            <button
              onClick={openModal}
              className="group inline-flex items-center justify-center w-16 h-16 md:w-24 md:h-24 rounded-full bg-white text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300 mb-6 shadow-lg hover:shadow-xl focus:outline-none"
              aria-label="Play video"
            >
              <FaPlay className="w-6 h-6 md:w-8 md:h-8 ml-1 group-hover:scale-110 transition-transform duration-300" />
            </button>

            <h2 className="text-3xl md:text-5xl font-bold max-w-3xl leading-tight">
              Be healthy & eat only <br /> fresh natural Tamarind
            </h2>
          </div>
        </div>
      </section>

      {/* Custom Modal */}
      {isModalOpen && (
        <div
          className="fixed top-16 inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-sm bg-black rounded-2xl overflow-hidden shadow-2xl"
            onClick={(e) => e.stopPropagation()} 
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-red-600/80 transition-colors flex items-center justify-center backdrop-blur-md border border-white/10"
              aria-label="Close modal"
            >
              <FaTimes className="text-lg" />
            </button>

            {/* 16:9 ratio = 56.25% padding-top
               9:16 ratio = 177.78% padding-top (Vertical Video)
            */}
            <div className="relative pt-[177.78%] bg-black"> 
              <video
                src={videoSrc} // FIXED: Uses the prop instead of the hardcoded import
                className="absolute top-0 left-0 w-full h-full object-cover" // CHANGED: object-cover fills the vertical space better
                controls
                autoPlay
                playsInline
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoSection;