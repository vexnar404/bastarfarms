import React from 'react'
import headerbg from '../assets/main-slider-bg-shape.png'

function Home() {
  return (
    <div>
      <section className='relative w-full h-[500px] bg-cover bg-center py-20 md:py-24'>
        <img src={headerbg} alt="" className='w-full h-full' />
      </section>
    </div>
  )
}

export default Home