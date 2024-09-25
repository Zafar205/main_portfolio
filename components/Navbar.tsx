import React from 'react';
import Image from 'next/image';
// import {Socials} from '@/constants'

const Socials = [
  {
    name: "Discord",
    src: "/discord.svg",
    url: "https://discord.com", // Add the Discord link here
  },
  {
    name: "Facebook",
    src: "/facebook.svg",
    url: "https://facebook.com", // Add the Facebook link here
  },
  {
    name: "Instagram",
    src: "/instagram.svg",
    url: "https://instagram.com", // Add the Instagram link here
  },
];

const Navbar = () => {
  return (
    <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
      <div className='w-full h-full flex flex-row items-center justify-between m-auto px-[10px]'>
        <a href='#about-me' className='h-auto w-auto flex flex-row items-center'>
          <Image
            src="/NavLogo.png"
            alt='logo'
            height={70}
            width={70}
            className='cursor-point '
          />
          <span className='font-bold ml-[20px] hidden md:block text-gray-400'>Muhammad Zafar</span> {/* Increased space between logo and text */}
        </a>

        <div className='w-[500px] h-full flex flex-row items-center justify-between md:mr-20'>
          <div className='flex items-center justify-between w-full h-auto border border-[#7042f861] text-white bg-[#0300145e] px-[20px] py-[10px] rounded-full'>
            <a href="#about-me" className='cursor-pointer mx-[15px]'>About</a> {/* Increased margin between links */}
            <a href="#skills" className='cursor-pointer mx-[15px]'>Skills</a> {/* Increased margin between links */}
            <a href="#projects" className='cursor-pointer mx-[15px]'>Projects</a> {/* Increased margin between links */}
          </div>
        </div>

        <div className='flex flex-row gap-5'>
          {
            Socials.map((social) => (
              <a href={social.url} target="_blank" rel="noopener noreferrer" key={social.name}> {/* Add link here */}
                <Image 
                  src={social.src}
                  alt={social.name}
                  width={24}
                  height={24}
                />
              </a>
            ))
          }
        </div>
      </div>
    </div>
  );
};

export default Navbar;
