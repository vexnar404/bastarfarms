import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFacebook, FaInstagram, FaLinkedin, FaPhoneAlt, FaBars, FaTimes } from 'react-icons/fa';
import { IoIosMail } from 'react-icons/io';

import logo from '../assets/logo.png';
import logo2 from '../assets/logo2.png';

// --- CONSTANTS & DATA OUTSIDE COMPONENT (Performance Boost) ---
const navLinks = [
  { name: 'Home', path: '/' },
  { name: 'About us', path: '/about-us' },
  { name: 'Products', path: '/products' },
  { name: 'Our Esteemed Clients', path: '/clients' },
  { name: 'Gallery', path: '/gallery' },
];

const socialLinks = [
  { icon: FaLinkedin, url: 'https://www.linkedin.com/company/bastar-farms-india/', label: 'LinkedIn' },
  { icon: FaFacebook, url: 'https://www.facebook.com/share/1B2g3yJZny/', label: 'Facebook' },
  { icon: FaInstagram, url: 'https://www.instagram.com/bastarfarmsindia?igsh=bDYxYzRwb2hvN3Zr', label: 'Instagram' },
];

const contactInfo = [
  { icon: FaPhoneAlt, text: '+91 84829 50500', link: 'tel:918482950500', iconSize: 12 },
  { icon: IoIosMail, text: 'info@kosshergroup.com', link: 'mailto:info@kosshergroup.com', iconSize: 15 },
];

// Animation Variants
const menuVariants = {
  closed: { x: '100%', transition: { type: 'spring', stiffness: 300, damping: 30 } },
  opened: { x: 0, transition: { type: 'spring', stiffness: 300, damping: 30, staggerChildren: 0.1, delayChildren: 0.2 } }
};

const itemVariants = {
  closed: { opacity: 0, x: 20 },
  opened: { opacity: 1, x: 0 }
};


// --- MAIN COMPONENT ---
function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent background scrolling when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [mobileMenuOpen]);

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);
  const closeMobileMenu = () => setMobileMenuOpen(false);

  return (
    <> {/* Replaced wrapper with React Fragment so sticky works */}
      
      {/* --- TOP BAR (Desktop Only) --- */}
      {/* NOT sticky, so it scrolls away naturally */}
      <div className='hidden lg:block h-10 w-full bg-[#2a491d] relative z-[100]'>
        <div className='max-w-[1440px] mx-auto flex items-center justify-between h-full px-4 lg:px-10'>
          
          <div className='flex items-center gap-8 h-full'>
            <h1 className='text-[#8a9984] text-xs uppercase tracking-wider lg:ml-40'>
              Welcome to Bastar Farms!
            </h1>
            <div className='flex items-center gap-4 px-6 h-full bg-[#233c18]'>
              {socialLinks.map(({ icon: Icon, url, label }, idx) => (
                <a key={idx} href={url} target="_blank" rel="noopener noreferrer" aria-label={label} className='text-white hover:text-[#ffbd3c] transition-colors'>
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          <div className="flex items-center gap-6 h-full">
            {contactInfo.map(({ icon: Icon, text, link, iconSize }, idx) => (
              <div key={idx} className='flex items-center gap-2'>
                <Icon className='text-[#ffbd3c]' size={iconSize} />
                <a href={link} className='text-xs text-[#8a9984] hover:text-white transition-colors'>
                  {text}
                </a>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* --- MAIN HEADER --- */}
      {/* 'sticky top-0' makes it catch the top of the browser */}
      <header className='w-full bg-white shadow-md sticky top-0 z-[110]'>
        <div className="flex items-center w-full max-w-[1440px] h-20">
          
          {/* Logo */}
          <Link to='/' className='h-full bg-[#2a491d] px-8 flex items-center justify-center transition-colors hover:bg-[#233c18]'>
            <img src={logo} alt="Bastar Farms Logo" className='h-12 w-auto object-contain' />
          </Link>

          {/* Desktop Navigation */}
          <nav className='hidden lg:flex items-center gap-8 ml-10 h-full'>
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative text-sm font-semibold uppercase tracking-tight py-2 transition-all duration-300 ${
                    isActive ? 'text-[#2a491d]' : 'text-gray-600 hover:text-[#2a491d]'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {link.name}
                    {isActive && (
                      <motion.div 
                        layoutId="header-underline" 
                        className="absolute bottom-0 left-0 w-full h-[2px] bg-[#2a491d]" 
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Contact Button (Desktop) */}
          <div className="hidden lg:flex ml-auto mr-10">
            <a href="tel:918482950500" className="px-7 py-2.5 rounded-full bg-[#50a72c] text-white text-sm font-bold hover:shadow-lg hover:-translate-y-0.5 transition-all">
              CONTACT US
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            onClick={toggleMobileMenu} 
            className="lg:hidden ml-auto mr-6 p-2 text-[#2a491d]"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </header>

      {/* --- MOBILE MENU --- */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <>
            {/* Backdrop Blur */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobileMenu}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[120] lg:hidden"
            />

            {/* Slide-out Panel */}
            <motion.div
              variants={menuVariants}
              initial="closed"
              animate="opened"
              exit="closed"
              className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white z-[130] shadow-2xl lg:hidden flex flex-col"
            >
              <div className="p-6 flex flex-col h-full">
                
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between mb-10">
                  <img src={logo2} alt="Bastar Farms Logo" className="h-12" />
                  <button onClick={closeMobileMenu} className="p-2 text-gray-500 hover:rotate-90 transition-transform">
                    <FaTimes size={24} />
                  </button>
                </div>

                {/* Mobile Links */}
                <nav className="flex flex-col space-y-6">
                  {navLinks.map((link) => (
                    <motion.div key={link.path} variants={itemVariants}>
                      <NavLink
                        to={link.path}
                        onClick={closeMobileMenu}
                        className={({ isActive }) => 
                          `text-xl font-bold ${isActive ? 'text-[#2a491d]' : 'text-gray-800'}`
                        }
                      >
                        {link.name}
                      </NavLink>
                    </motion.div>
                  ))}
                  <motion.div variants={itemVariants} className="pt-4">
                    <a href="tel:918482950500" onClick={closeMobileMenu} className="block w-full text-center py-4 rounded-xl bg-[#2a491d] text-white font-bold">
                      Contact Us
                    </a>
                  </motion.div>
                </nav>

                {/* Mobile Footer (Contact & Socials) */}
                <div className="mt-auto pt-10 border-t border-gray-100">
                  <p className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-4">Get in Touch</p>
                  
                  <div className="space-y-3 mb-6">
                    {contactInfo.map(({ icon: Icon, text, link }, idx) => (
                      <a key={idx} href={link} className="flex items-center gap-3 text-gray-700 font-medium hover:text-[#50a72c]">
                        <Icon className="text-[#50a72c]" size={16} /> {text}
                      </a>
                    ))}
                  </div>

                  <div className="flex gap-5 text-gray-400">
                    {socialLinks.map(({ icon: Icon, url, label }, idx) => (
                      <a key={idx} href={url} target="_blank" rel="noopener noreferrer" aria-label={label}>
                        <Icon size={22} className="hover:text-[#2a491d] transition-colors" />
                      </a>
                    ))}
                  </div>
                </div>

              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Header;