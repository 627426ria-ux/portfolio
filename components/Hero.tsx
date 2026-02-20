"use client";

import { useRef } from 'react';
import Image from 'next/image';
import { motion, Variants, useScroll, useTransform, useSpring } from 'framer-motion';

const Hero = () => {
  const containerRef = useRef<HTMLElement>(null);
  
  // 1. Setup Scroll Progress
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });

  // 2. Define Smooth Parallax Transforms
  // Background text moves left
  const textX = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  // Image lifts up slightly
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-10%"]);
  // Top/Bottom content fades and scales out
  const contentOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const contentScale = useTransform(scrollYProgress, [0, 0.5], [1, 0.9]);

  // Smooth out the movement with a spring
  const smoothTextX = useSpring(textX, { stiffness: 100, damping: 30, restDelta: 0.001 });

  const customEase: [number, number, number, number] = [0.16, 1, 0.3, 1];

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const fadeUpBlur: Variants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(10px)' },
    visible: { 
      opacity: 1, 
      y: 0, 
      filter: 'blur(0px)',
      transition: { duration: 1.2, ease: customEase } 
    }
  };

  return (
    <section 
      ref={containerRef}
      className="relative h-[120dvh] w-full bg-black overflow-hidden font-sans selection:bg-[#EAD7B7] selection:text-black"
    >
      <div className="sticky top-0 h-[100dvh] w-full overflow-hidden">
        
        {/* 1. Top Navigation / Pill */}
        <motion.div 
          style={{ opacity: contentOpacity, scale: contentScale }}
          className="absolute top-8 sm:top-10 left-1/2 -translate-x-1/2 z-40 w-[95%] max-w-6xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: customEase, delay: 0.1 }}
        >
          <div className="border border-[#EAD7B7]/20 rounded-full px-4 py-2 sm:px-8 sm:py-3 flex justify-center items-center gap-2 sm:gap-6 text-[#EAD7B7] text-[8px] sm:text-xs tracking-[0.2em] uppercase bg-black/40 backdrop-blur-xl opacity-90 font-light">
            <span>Next.js</span>
            <span className="text-[#EAD7B7]/30">•</span>
            <span>Shopify</span>
            <span className="text-[#EAD7B7]/30">•</span>
            <span>WordPress</span>
          </div>
        </motion.div>

        {/* 2. Top-Mid Text Overlay */}
        <motion.div 
          style={{ opacity: contentOpacity, y: imageY }}
          className="absolute top-[22%] sm:top-[20%] w-full px-6 sm:px-16 flex justify-between items-start z-30 pointer-events-none"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={fadeUpBlur}>
            <h2 className="text-[#EAD7B7] text-lg sm:text-3xl font-thin tracking-[0.15em] uppercase">SHAHAM</h2>
            <p className="text-[#EAD7B7] text-[9px] sm:text-sm font-light mt-1 tracking-[0.3em] uppercase opacity-50">Web Developer</p>
          </motion.div>

          <motion.div variants={fadeUpBlur} className="text-right">
            <p className="text-[#EAD7B7] text-[9px] sm:text-sm font-light tracking-[0.2em] uppercase opacity-50 leading-loose">
              Code that scales.<br />Digital Experiences.
            </p>
          </motion.div>
        </motion.div>

        {/* 3. Background Text - Horizontal Scroll Movement */}
<div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none overflow-hidden w-full">
  <motion.h1 
    // Combined both fontSize and x into one style object
    style={{ fontSize: '18vw', x: smoothTextX }}
    className="text-[#EAD7B7]/10 font-black tracking-tighter w-full text-center leading-none select-none uppercase whitespace-nowrap"
    initial={{ opacity: 0, scale: 0.9, filter: 'blur(20px)' }}
    animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
    transition={{ duration: 1.8, ease: customEase }}
  >
    DEVELOPER DEVELOPER DEVELOPER
  </motion.h1>
</div>

        {/* 4. Portrait Image - Vertical Parallax */}
        {/* 4. Portrait Image - Vertical Parallax */}
<motion.div 
  style={{ y: imageY }}
  // w-[110%]: Increases width beyond the screen to make the person appear larger
  // h-[75%]: Increases height from 65% to 75% for mobile
  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[110%] sm:w-[55%] lg:w-[40%] h-[75%] sm:h-[80%] z-20 pointer-events-none"
  initial={{ opacity: 0, y: 80 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 1.5, ease: customEase, delay: 0.2 }}
>
  <div className="relative w-full h-full">
    <Image
      src="/wmremove-transformed (1).png"
      alt="Portrait"
      fill
      // object-bottom: keeps the feet/waist anchored to the bottom of the screen
      className="object-contain object-bottom drop-shadow-[0_20px_50px_rgba(234,215,183,0.1)]"
      priority
    />
  </div>
</motion.div>

        {/* 5. Bottom Intro - Parallax Lift */}
        <motion.div 
          style={{ opacity: contentOpacity, y: imageY }}
          className="absolute bottom-10 sm:bottom-12 left-0 w-full px-6 sm:px-16 z-30 flex justify-end items-end pointer-events-none"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          <motion.div 
            className="max-w-[260px] sm:max-w-md text-right flex flex-col items-end pointer-events-auto"
            variants={fadeUpBlur}
          >
            <h3 className="text-[#EAD7B7] text-xl sm:text-3xl font-thin tracking-widest uppercase mb-4 drop-shadow-md">
              Crafting <br />
              <span className="font-serif italic text-white font-medium lowercase tracking-normal text-3xl sm:text-5xl block mt-1">
                digital
              </span> 
              realities
            </h3>
            <p className="text-[#EAD7B7] text-[10px] sm:text-sm font-light tracking-wide opacity-60 leading-relaxed max-w-[220px] sm:max-w-none">
              I build premium, high-performance websites using Next.js and Shopify. Bridging the gap between aesthetics and code.
            </p>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;