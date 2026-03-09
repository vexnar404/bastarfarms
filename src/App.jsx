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
