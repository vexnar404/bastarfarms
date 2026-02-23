import React, { useState } from 'react';
import bgImage from '../assets/video-one-bg.jpg';
import {FaPlay} from 'react-icons/fa';

const VideoSection = ({ 
  videoUrl = 'https://www.youtube.com/watch?v=Get7rqXYrbQ'
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Extract YouTube video ID from URL
  const getYouTubeId = (url) => {
    const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return (match && match[2].length === 11) ? match[2] : null;
  };

  const videoId = getYouTubeId(videoUrl);

  const openModal = (e) => {
    e.preventDefault();
    setIsModalOpen(true);
    // Prevent body scrolling when modal is open
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
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Decorative border lines */}
        <div className="absolute top-0 left-0 w-full h-px bg-white/20"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-white/20"></div>
        <div className="absolute top-0 left-0 w-px h-full bg-white/20"></div>
        <div className="absolute top-0 right-0 w-px h-full bg-white/20"></div>

        {/* Corner accents */}
        <div className="absolute top-0 left-0 w-32 h-32 border-t-2 border-l-2 border-white/10"></div>
        <div className="absolute bottom-0 right-0 w-32 h-32 border-b-2 border-r-2 border-white/10"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="flex flex-col items-center text-center text-white">
            {/* Play Button */}
            <button
              onClick={openModal}
              className="group inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 rounded-full bg-white text-green-600 hover:bg-green-600 hover:text-white transition-all duration-300 mb-6 shadow-lg hover:shadow-xl focus:outline-none"
              aria-label="Play video"
            >
              <FaPlay className="md:w-16 md:h-16 w-12 h-12 group-hover:scale-110 transition-transform duration-300" />
            </button>

            {/* Title */}
            <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold max-w-3xl leading-tight">
              Be healthy & eat only <br /> fresh natural Tamrind
            </h2>
          </div>
        </div>
      </section>

      {/* Custom Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={closeModal}
        >
          <div
            className="relative w-full max-w-4xl bg-black rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
          >
            {/* Close button */}
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 z-10 w-10 h-10 rounded-full bg-black/50 text-white hover:bg-black/70 flex items-center justify-center transition"
              aria-label="Close modal"
            >
              <i className="fas fa-times text-xl"></i>
            </button>

            {/* Video iframe */}
            <div className="relative pt-[56.25%]"> {/* 16:9 aspect ratio */}
              {videoId && (
                <iframe
                  className="absolute top-0 left-0 w-full h-full"
                  src={`https://www.youtube.com/embed/${videoId}?autoplay=1`}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default VideoSection;