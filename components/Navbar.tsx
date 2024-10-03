'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { Menu } from 'lucide-react';

const Socials = [
  {
    name: "Discord",
    src: "/discord.svg",
    url: "https://discord.com", 
  },
  {
    name: "Facebook",
    src: "/facebook.svg",
    url: "https://facebook.com", 
  },
  {
    name: "Instagram",
    src: "/instagram.svg",
    url: "https://instagram.com", 
  },
];

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10'>
        <div className='w-full h-full flex flex-row items-center justify-between m-auto'>
          
          {/* Logo */}
          <a href='#about-me' className='h-auto w-auto flex flex-row items-center'>
            <Image
              src="/NavLogo.png"
              alt='logo'
              height={70}
              width={70}
              className='cursor-pointer'
            />
            <span className='font-bold ml-[20px] hidden md:block text-gray-400'>Muhammad Zafar</span>
          </a>

          {/* Navigation Links - Desktop */}
          <div className='hidden md:flex items-center justify-between w-[500px] h-full md:mr-20'>
            <div className='flex items-center justify-between w-full h-auto border border-[#7042f861] text-white bg-[#0300145e] px-[20px] py-[10px] rounded-full'>
              <a href="#about-me" className='cursor-pointer mx-[15px] text-base'>About</a>
              <a href="#skills" className='cursor-pointer mx-[15px] text-base'>Skills</a>
              <a href="#projects" className='cursor-pointer mx-[15px] text-base'>Projects</a>
            </div>
          </div>

          {/* Social Media Links - Desktop */}
          <div className='hidden md:flex flex-row gap-5'>
            {Socials.map((social) => (
              <a href={social.url} target="_blank" rel="noopener noreferrer" key={social.name}>
                <Image 
                  src={social.src}
                  alt={social.name}
                  width={24}
                  height={24}
                />
              </a>
            ))}
          </div>

          {/* Hamburger Menu - Mobile */}
          <button className='md:hidden text-white' onClick={toggleMenu}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className='md:hidden fixed top-[65px] left-0 w-full bg-[#03001417] backdrop-blur-md z-50'>
          <div className='flex flex-col items-center py-4'>
            <a href="#about-me" className='cursor-pointer my-2 text-white' onClick={toggleMenu}>About</a>
            <a href="#skills" className='cursor-pointer my-2 text-white' onClick={toggleMenu}>Skills</a>
            <a href="#projects" className='cursor-pointer my-2 text-white' onClick={toggleMenu}>Projects</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;