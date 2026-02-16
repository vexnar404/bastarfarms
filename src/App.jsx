import {BrowserRouter, Routes, Route} from 'react-router-dom'
import AboutUs from './pages/AboutUs'
import Home from './pages/Home'
import ScrollToTop from './components/ScrollToTop'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App
