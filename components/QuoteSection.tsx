"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

const QuoteSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Animation variants
  const container: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 },
    },
  };

  const textReveal: Variants = {
    hidden: { y: "100%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.22, 1, 0.36, 1] 
      }, 
    },
  };

  return (
    <section className="bg-black w-full min-h-[80vh] flex flex-col items-center justify-center px-4 sm:px-6 py-16 sm:py-24 md:py-32 overflow-hidden">
      
      {/* Top Line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "circOut" }}
        className="h-[1px] w-12 sm:w-24 bg-[#EAD7B7] mb-8 sm:mb-16 opacity-30 origin-center"
      />

      <div ref={ref} className="w-full max-w-6xl mx-auto text-center z-10 px-2 sm:px-4">
        
        <motion.div 
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="flex flex-col items-center"
        >
          
          {/* Line 1 */}
          <div className="overflow-hidden mb-1 sm:mb-2 w-full">
            <motion.h2 
              variants={textReveal} 
              // Adjusted base text size (text-2xl) to prevent clipping on tiny screens (< 350px)
              className="text-[#EAD7B7] text-2xl min-[375px]:text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-[5rem] font-thin tracking-wide leading-tight"
            >
              I don't just write code.
            </motion.h2>
          </div>

          {/* Line 2: "I engineer" + "experiences" */}
          <div className="overflow-hidden mb-1 sm:mb-2 flex flex-col md:flex-row items-center md:items-baseline justify-center gap-0 md:gap-4 w-full">
            <motion.h2 
              variants={textReveal} 
              className="text-[#EAD7B7] text-2xl min-[375px]:text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-[5rem] font-thin tracking-wide leading-tight"
            >
              I engineer
            </motion.h2>
            
            {/* The Italic Focus Word */}
            <motion.span 
              variants={textReveal} 
              className="font-serif italic text-3xl min-[375px]:text-4xl sm:text-5xl md:text-6xl lg:text-8xl xl:text-[6rem] text-white font-medium tracking-tight mt-1 md:mt-0"
            >
              experiences
            </motion.span>
          </div>

          {/* Line 3 */}
          <div className="overflow-hidden w-full">
            <motion.h2 
              variants={textReveal} 
              className="text-[#EAD7B7] text-2xl min-[375px]:text-3xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-[5rem] font-thin tracking-wide leading-tight"
            >
              that leave a mark.
            </motion.h2>
          </div>

        </motion.div>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-[#EAD7B7] mt-8 sm:mt-12 md:mt-16 text-[10px] sm:text-xs md:text-sm font-light max-w-[280px] sm:max-w-md lg:max-w-lg mx-auto leading-relaxed md:leading-loose tracking-widest uppercase opacity-60"
        >
          My work exists at the intersection of logic and aesthetics. 
          Driven by precision, inspired by art, and dedicated to building 
          the digital future.
        </motion.p>

      </div>

      {/* Bottom Line */}
      <motion.div 
        initial={{ height: 0 }}
        whileInView={{ height: "80px" }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.5 }}
        // Using h-12 on mobile, expanding to h-20 on desktop
        className="w-[1px] bg-[#EAD7B7] mt-10 sm:mt-16 md:mt-20 opacity-20 h-12 sm:h-20"
      />

    </section>
  );
};

export default QuoteSection;