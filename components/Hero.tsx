"use client";

import Image from 'next/image';
import { motion, Variants } from 'framer-motion';

const Hero = () => {
  // High-end custom easing curve
  const customEase = [0.16, 1, 0.3, 1];

  // Container variant to stagger the load of child elements
  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  // Upgraded fade-up with a subtle blur effect
  const fadeUpBlur: Variants = {
    hidden: { opacity: 0, y: 40, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 1.2, ease: customEase } 
    }
  };

  return (
    <section className="relative h-[100dvh] w-full bg-black overflow-hidden font-sans selection:bg-[#EAD7B7] selection:text-black">
      
      {/* 1. Top Navigation / Services Pill */}
      <motion.div 
        className="absolute top-4 sm:top-6 md:top-8 left-1/2 -translate-x-1/2 z-30 w-[95%] max-w-6xl"
        initial={{ opacity: 0, y: -20, filter: 'blur(5px)' }}
        animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
        transition={{ duration: 1, ease: customEase, delay: 0.1 }}
      >
        <div className="border border-[#EAD7B7]/30 rounded-full px-3 py-2 sm:px-5 sm:py-2.5 md:px-8 md:py-3 flex justify-center flex-wrap gap-x-2 gap-y-1 sm:gap-4 md:gap-6 text-[#EAD7B7] text-[7px] sm:text-[9px] md:text-xs tracking-widest uppercase bg-black/40 backdrop-blur-md opacity-80 font-light">
          <span>Next.js</span>
          <span className="text-[#EAD7B7]/40">•</span>
          <span>Shopify</span>
          <span className="text-[#EAD7B7]/40">•</span>
          <span>WordPress</span>
          <span className="text-[#EAD7B7]/40 hidden sm:inline">•</span>
          <span className="hidden sm:inline">Web Design</span>
        </div>
      </motion.div>

      {/* 2. Top Left & Right Text Overlay */}
      <motion.div 
        className="absolute top-[18%] sm:top-[20%] w-full px-5 sm:px-8 md:px-16 flex justify-between items-start z-30 pointer-events-none"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={fadeUpBlur}>
          <h2 className="text-[#EAD7B7] text-xl sm:text-2xl md:text-3xl font-thin tracking-wide uppercase">SHAHAM</h2>
          <p className="text-[#EAD7B7] text-[10px] sm:text-xs md:text-sm font-light mt-1 md:mt-2 tracking-widest uppercase opacity-60">Web Developer</p>
        </motion.div>

        <motion.div variants={fadeUpBlur} className="text-right hidden md:block">
          <p className="text-[#EAD7B7] text-xs md:text-sm font-light tracking-widest uppercase opacity-60 leading-relaxed">
            Code that scales.<br />Experiences that convert.
          </p>
        </motion.div>
      </motion.div>

      {/* 3. Background Huge Text (Z-Index 10: Behind Subject) */}
      <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none overflow-hidden w-full">
        <motion.h1 
          className="text-[#EAD7B7]/15 font-black tracking-tighter w-full text-center leading-none select-none uppercase whitespace-nowrap"
          // Pure 15.5vw forces the 9-letter word to stretch edge-to-edge flawlessly on all screens
          style={{ fontSize: '15.5vw' }}
          initial={{ opacity: 0, scale: 0.95, filter: 'blur(15px)' }}
          animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
          transition={{ duration: 1.8, ease: customEase }}
        >
          DEVELOPER
        </motion.h1>
      </div>

      {/* 4. Portrait Image Container (Z-Index 20) */}
      <motion.div 
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[95%] sm:w-[75%] md:w-[60%] lg:w-[45%] xl:w-[35%] h-[55%] sm:h-[65%] md:h-[75%] 2xl:h-[80%] z-20 pointer-events-none"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: customEase, delay: 0.2 }}
      >
        <div className="relative w-full h-full">
          <Image
            src="/wmremove-transformed (1).png"
            alt="Portrait of Web Developer"
            fill
            className="object-contain object-bottom drop-shadow-2xl"
            priority
          />
        </div>
      </motion.div>

      {/* 5. Bottom Content Container (Z-Index 30) */}
      <motion.div 
        className="absolute bottom-6 sm:bottom-12 left-0 w-full px-5 sm:px-8 md:px-16 z-30 flex justify-end pointer-events-none"
        variants={staggerContainer}
        initial="hidden"
        animate="visible"
      >
        <motion.div 
          className="max-w-[280px] sm:max-w-xs md:max-w-md text-right flex flex-col items-end pointer-events-auto"
          variants={fadeUpBlur}
        >
          <h3 className="text-[#EAD7B7] text-lg sm:text-xl md:text-2xl font-thin tracking-widest uppercase mb-2 md:mb-3 drop-shadow-md">
            Crafting <span className="font-serif italic text-white font-medium lowercase tracking-normal">digital</span> realities
          </h3>
          <p className="text-[#EAD7B7] text-[10px] sm:text-xs md:text-sm font-light tracking-wide opacity-80 md:opacity-60 leading-relaxed drop-shadow-md">
            I build premium, high-performance websites using Next.js, Shopify, and WordPress. My work bridges the gap between stunning visual aesthetics and highly scalable code.
          </p>
        </motion.div>
      </motion.div>

    </section>
  );
};

export default Hero;