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
    <section className="bg-black w-full min-h-[80vh] flex flex-col items-center justify-center px-6 py-32">
      
      {/* Top Line */}
      <motion.div 
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, ease: "circOut" }}
        className="h-[1px] w-24 bg-[#EAD7B7] mb-16 opacity-30 origin-center"
      />

      <div ref={ref} className="max-w-6xl mx-auto text-center z-10">
        
        <motion.div 
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          
          {/* Line 1 */}
          <div className="overflow-hidden mb-2">
            <motion.h2 variants={textReveal} className="text-[#EAD7B7] text-4xl md:text-6xl lg:text-7xl font-thin tracking-wide leading-tight">
              I don't just write code.
            </motion.h2>
          </div>

          {/* Line 2: "I engineer" + "experiences" */}
          <div className="overflow-hidden mb-2 flex flex-col md:flex-row items-baseline justify-center gap-4">
            <motion.h2 variants={textReveal} className="text-[#EAD7B7] text-4xl md:text-6xl lg:text-7xl font-thin tracking-wide leading-tight">
              I engineer
            </motion.h2>
            
            {/* THE FIX: font-serif + italic */}
            <motion.span 
              variants={textReveal} 
              className="font-serif italic text-5xl md:text-7xl lg:text-8xl text-white font-medium tracking-tight"
            >
              experiences
            </motion.span>
          </div>

          {/* Line 3 */}
          <div className="overflow-hidden">
            <motion.h2 variants={textReveal} className="text-[#EAD7B7] text-4xl md:text-6xl lg:text-7xl font-thin tracking-wide leading-tight">
              that leave a mark.
            </motion.h2>
          </div>

        </motion.div>

        {/* Subtext */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 0.6, y: 0 }}
          transition={{ delay: 0.8, duration: 1 }}
          className="text-[#EAD7B7] mt-16 text-sm md:text-base font-light max-w-lg mx-auto leading-relaxed tracking-widest uppercase opacity-60"
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
        className="w-[1px] bg-[#EAD7B7] mt-20 opacity-20"
      />

    </section>
  );
};

export default QuoteSection;