import { useState, useEffect } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import Gallery from './pages/Gallery'
import Products from './pages/Product'

import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
import Header from './components/Header'
import Privacy from './pages/Privacy'
import Clients from './pages/Clients'

function App() {
  const [isLive, setIsLive] = useState(true);

  useEffect(() => {
    const checkStatus = async () => {
      try {
        // PASTE YOUR RAW GIST URL HERE:
        const response = await fetch('https://gist.githubusercontent.com/vexnar404/2f10fba876acabf916fb237716bbd455/raw/status.json');
        const data = await response.json();
        
        // If your gist says false, lock the site
        if (data.isActive === false) {
          setIsLive(false);
        }
      } catch (error) {
        // If the check fails (e.g. bad internet), let the site load normally
        console.error("Status check bypassed.");
      }
    };

    checkStatus();
  }, []);

  // THE BACKDOOR SCREEN: What shows if isActive is false
  if (!isLive) {
    return (
      <div className="flex items-center justify-center h-screen w-screen bg-slate-900">
        <div className="text-center text-white">
           <h1 className="text-3xl font-bold mb-4">Service Suspended</h1>
           <p className="text-slate-400">Please contact the developer for assistance.</p>
        </div>
      </div>
    );
  }
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path='/gallery' element={<Gallery />} />
        <Route path='/products' element={<Products />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/clients' element={<Clients />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
