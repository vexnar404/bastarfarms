import React from 'react';

// Importing logos
import c1 from '../assets/logo file/1.png';
import c2 from '../assets/logo file/2.png';
import c3 from '../assets/logo file/3.png';
import c4 from '../assets/logo file/4.png';
import c5 from '../assets/logo file/5.png';
import c6 from '../assets/logo file/6.png';
import c7 from '../assets/logo file/7.png';
import c8 from '../assets/logo file/8.png';
import c9 from '../assets/logo file/9.png';
import c10 from '../assets/logo file/10.png';
import c11 from '../assets/logo file/11.png';
import c12 from '../assets/logo file/12.png';
import c13 from '../assets/logo file/13.png';
import c14 from '../assets/logo file/14.png';
import c15 from '../assets/logo file/15.png';
import c16 from '../assets/logo file/16.png';
import c17 from '../assets/logo file/17.png';
import c18 from '../assets/logo file/18.png';
import c19 from '../assets/logo file/19.png';
import c20 from '../assets/logo file/20.png';
import c21 from '../assets/logo file/21.png';

const Clients = () => {
  // Array of client objects. 
  // You can update the 'name' fields to match specific companies for c1-c21 later.
  const clients = [
    { id: 1, img: c1, name: "Kendriya Bhandar" },
    { id: 2, img: c2, name: "Kaka Halwai" },
    { id: 3, img: c3, name: "Sodexo" },
    { id: 4, img: c4, name: "Quess" },
    { id: 5, img: c5, name: "Novotel" },
    { id: 6, img: c6, name: "Mother's Recipe" },
    { id: 7, img: c7, name: "Adamya Chetana" },
    { id: 8, img: c8, name: "Government of India" },
    { id: 9, img: c9, name: "Government of Chhattisgarh" },
    { id: 10, img: c10, name: "Bikaner Sweets" },
    { id: 11, img: c11, name: "Akshaya Patra" },
    { id: 12, img: c12, name: "TAJ Sats" },
    { id: 13, img: c13, name: "Raddison Blu" },
    { id: 14, img: c14, name: "Miracle Resources" },
    { id: 15, img: c15, name: "Sangeetha" },
    { id: 16, img: c16, name: "Big Basket" },
    { id: 17, img: c17, name: "Rassense" },
    { id: 18, img: c18, name: "Sri Raghavendra Hotels" },
    { id: 19, img: c19, name: "Compass-Group" },
    { id: 20, img: c20, name: "Chhattisgarh Herbals" },
    { id: 21, img: c21, name: "Udupi" },
  ];

  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-caveat text-green-600 mb-2">
            Our Clients
          </h2>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Esteemed Clients
          </h1>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {clients.map((client) => (
            <div key={client.id} className="flex flex-col items-center group">
              
              {/* Logo Container */}
              <div className="h-44 w-full flex items-center justify-center p-4 transition-transform duration-300 group-hover:scale-105">
                <img 
                  src={client.img} 
                  alt={client.name} 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
              
              {/* Name Label */}
              <div className="mt-4 w-full bg-gray-100 rounded-lg py-2 text-center">
                <span className="text-gray-800 font-semibold text-lg">
                  {client.name}
                </span>
              </div>

            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;