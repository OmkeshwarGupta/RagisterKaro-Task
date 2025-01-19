import React from 'react';
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { FaInstagram, FaFacebook, FaTwitter, FaPinterest } from "react-icons/fa";

const Banner = () => {
  return (
   <div>
     <div className='bg-[#1C4670] w-full h-12 flex flex-row items-center justify-end pr-8 gap-4'>
      {/* Email */}
      <div className='flex justify-center items-center gap-2'>
        <a href="mailto:info@registerkaro.in" target="_blank" rel="noopener noreferrer">
          <MdEmail className='text-white' size={20} />
        </a>
        <a href="mailto:info@registerkaro.in" target="_blank" rel="noopener noreferrer">
          <span className='text-white hidden md:block'>www.registerkaro.in</span>
        </a>
      </div>

      {/* Vertical Line */}
      <div className='w-[1px] h-6' style={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, #D0D0D0 50%, rgba(0, 0, 0, 0) 100%)' }}></div>

      {/* Phone */}
      <div className='flex justify-center items-center gap-2'>
        <a href="tel:+918447746183" target="_blank" rel="noopener noreferrer">
          <FaPhone className='text-white' size={18} />
        </a>
        <a href="tel:+918447746183" target="_blank" rel="noopener noreferrer">
          <span className='text-white hidden md:block'>+918447746183</span>
        </a>
      </div>

      {/* Vertical Line */}
      <div className='w-[1px] h-6' style={{ background: 'linear-gradient(0deg, rgba(0, 0, 0, 0) 0%, #D0D0D0 50%, rgba(0, 0, 0, 0) 100%)' }}></div>

      {/* Social Media */}
      <div className='flex flex-row gap-4'>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram className='text-white' size={20} />
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <FaFacebook className='text-white' size={20} />
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter className='text-white' size={20} />
        </a>
        <a href="https://www.pinterest.com" target="_blank" rel="noopener noreferrer">
          <FaPinterest className='text-white' size={20} />
        </a>
      </div>
    </div>
     <h1 className="text-3xl font-bold text-[#272D37] px-8 mt-8">
     Task<span className="text-[#FFA229]">Manager</span>
   </h1>
   </div>
  );
};

export default Banner;
