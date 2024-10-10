"use client";
import { slideInFromLeft, slideInFromRight, slideInFromTop } from '@/utils/motion';
import {motion} from 'framer-motion';
import React from 'react';
import { SparklesIcon } from '@heroicons/react/24/outline';
import Image from 'next/image'; 
import { Typewriter } from 'react-simple-typewriter';

function HeroContent() {
  return (
    <motion.div initial='hidden' animate='visible' className='flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]'>

        <div className='h-full w-full flex flex-col gap-5 justify-center m-auto text-start'>
            <motion.div 
            variants={slideInFromTop}
            className='Welcome-box py-[10px] px-[12px] border border-[#7842f88b] opacity-[0.9]'>
            <SparklesIcon className='text-[#b49bff] mr-[10px] h-5 w-5'/>
            <h1 className='Welcome-text text-[13px]'>
                FullStack Developer portfolio
            </h1>
            </motion.div>

            <motion.div
            variants={slideInFromLeft(0.5)} 
            className='flex flex-col gap-6 mt-6 text-4xl font-bold text-white max-w-[800px] w-auto h-auto'>
                <span>
                  <Typewriter
                    words={['Providing the best Experience', "Modern Web Designs"]}
                    loop={false}
                    cursor
                    cursorStyle='|'
                    typeSpeed={100}
                    deleteSpeed={100}
                    delaySpeed={1000}
                  />
                  <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500'>
                    {/* the best */}
                  </span>
                  {/* Project Experience */}
                </span>
            </motion.div>

            <motion.p variants={slideInFromLeft(0.8)} className='text-lg text-gray-400 my-5 max-w-[600px]'>
                I&apos;am a Full Stack Developer with Experience in Website and Software Development. Check out my projects and skills.
            </motion.p>

            <motion.a href='/Zafar.cv.pdf' variants={slideInFromLeft(1)} className='py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]' download>
                My Resume
            </motion.a>

        </div>

        <motion.div variants={slideInFromRight(0.8)} className='hidden md:flex w-full h-full items-center justify-center'>
                <Image src="/heroimage2.png"
                        alt="work icons"
                        height={900} 
                        width={900}/>
        </motion.div>

    </motion.div>
  )
}

export default HeroContent;
