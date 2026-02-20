"use client";

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const Hero = () => {
  const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.8, ease: "easeOut" } 
    }
  };

  return (
    <section className="relative h-screen w-full bg-black flex flex-col items-center justify-start pt-20 overflow-hidden">
      
      {/* Portrait Image Container */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <div className="relative w-full h-full">
          <Image
            src="/wmremove-transformed.png"
            alt="Portrait of Web Designer"
            fill
            // object-contain: Ensures the full image is visible without cropping
            // object-center: Centers the image in the screen
            className="object-contain object-center opacity-80"
            priority
          />
          {/* REMOVED: The gradient overlay div has been completely deleted here */}
        </div>
      </div>

      {/* Main Text Content */}
      <div className="relative z-10 flex flex-col items-center text-center mt-[45vh]">
        <motion.h1 
          className="text-[#EAD7B7] text-5xl md:text-7xl font-thin tracking-wide leading-tight"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
        >
          Web Designer
          <br />
          <span className="font-cursive text-6xl md:text-8xl lowercase">
            & Developer
          </span>
        </motion.h1>

        <motion.p 
          className="text-[#EAD7B7] text-xs md:text-sm font-light tracking-widest uppercase mt-8 max-w-md opacity-70"
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ delay: 0.3 }}
        >
          Premium web design, development, and SEO services to help your business stand out.
        </motion.p>
      </div>

      {/* "My Services" Indicator at Bottom */}
      <motion.div 
        className="absolute bottom-10 flex flex-col items-center text-[#EAD7B7] text-[10px] uppercase tracking-widest font-light cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.7 }}
        transition={{ delay: 1, duration: 1 }}
      >
        <span className="mb-2">My Services</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 animate-bounce">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 13.5 12 21m0 0-7.5-7.5M12 21V3" />
        </svg>
      </motion.div>

    </section>
  );
};

export default Hero;