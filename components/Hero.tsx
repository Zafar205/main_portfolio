import React from 'react'
import HeroContent from './HeroContent'

function Hero() {
  return (
    <div className='flex flex-col h-full w-full'>
        <video loop autoPlay muted 
        className='rotate-180 absolute top-[-340px] left-0 z-[1] w-full h-full object-cover' >

            <source src='/blackhole.webm' type='video/webm' />

        </video >
        <HeroContent/>
    </div>
  )
}

export default Hero