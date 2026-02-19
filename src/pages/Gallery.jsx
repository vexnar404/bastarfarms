import React from 'react'
import inauguration1 from '../assets/InaugurationDay/1.jpg'
import inauguration2 from '../assets/InaugurationDay/2.jpg'
import inauguration3 from '../assets/InaugurationDay/3.jpg'
import inauguration4 from '../assets/InaugurationDay/4.jpg'
import inauguration5 from '../assets/InaugurationDay/5.jpg'
import inauguration6 from '../assets/InaugurationDay/6.jpg'

function Gallery() {
    const images = [
        { id: 1, src: inauguration1, alt: 'Chief Minister viewing facility' },
        { id: 2, src: inauguration2, alt: 'Chief Minister at control panel' },
        { id: 3, src: inauguration3, alt: 'Chief Minister with team' },
        { id: 4, src: inauguration4, alt: 'Team seated at event' },
        { id: 5, src: inauguration5, alt: 'Plaque unveiling' },
        { id: 6, src: inauguration6, alt: 'Presenting memento' },
    ];
  return (
    <div>
        <section className="bg-white py-16 px-6 md:px-20 font-sans">
            <div className="max-w-7xl mx-auto">
                {/* Header Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 border-t-4 border-black pt-4">
                <div className="max-w-3xl">
                    <h1 className="text-4xl md:text-5xl font-black text-black mb-4">
                    Inauguration of Bastar Farms Facility
                    </h1>
                    <p className="text-[#2a491d] text-lg font-bold leading-tight">
                    Inauguration of our food processing facility in Bastar by Hon'ble Chief <br className="hidden md:block" />
                    Minister of Chhattisgarh, Shri Bhupesh Baghel.
                    </p>
                </div>
                <div className="mt-4 md:mt-0">
                    <span className="text-xl font-bold text-black uppercase tracking-widest">
                    December 2022
                    </span>
                </div>
                </div>

                {/* Image Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {images.map((img) => (
                    <div 
                    key={img.id} 
                    className="relative aspect-[4/5] overflow-hidden rounded-2xl border-4 border-[#2a491d] shadow-lg group"
                    >
                    <img 
                        src={img.src} 
                        alt={img.alt} 
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    {/* Optional overlay on hover */}
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                ))}
                </div>

            </div>
        </section>
    </div>
  )
}

export default Gallery