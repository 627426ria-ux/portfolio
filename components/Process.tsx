"use client";

import { useState, useEffect, useRef, MouseEvent } from "react";
import Link from "next/link";
import { motion, useSpring, useMotionValue } from "framer-motion";

const Footer = () => {
  // --- Live Time Logic ---
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString("en-US", { 
        hour: "2-digit", 
        minute: "2-digit",
        hour12: false 
      }));
    };
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // --- Magnetic Button Logic ---
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: MouseEvent) => {
    if (!ref.current) return;
    const { left, top, width, height } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    x.set(distanceX * 0.3);
    y.set(distanceY * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <footer className="bg-black w-full min-h-screen flex flex-col justify-between px-6 md:px-12 pt-24 md:pt-32 pb-10 overflow-hidden relative selection:bg-[#EAD7B7] selection:text-black">
      
      {/* 1. Main Call to Action */}
      <div className="flex-1 flex flex-col justify-center relative z-10">
        
        <div className="flex flex-col items-start gap-1 md:gap-2 mb-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-white text-5xl sm:text-7xl md:text-9xl font-thin tracking-tight leading-[0.9]"
          >
            Let's work
          </motion.h2>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[#EAD7B7] font-serif italic text-5xl sm:text-7xl md:text-9xl leading-[0.9]"
          >
            together
          </motion.h2>
        </div>
        
        {/* Divider + Right Aligned Button */}
        <div className="w-full h-[1px] bg-[#EAD7B7]/20 mt-16 md:mt-24 relative flex items-center justify-end">
            
            {/* The Magnetic Button - Positioned consistently on the right */}
            <div className="absolute right-0 md:right-24 -top-[70px] md:-top-[90px]">
              <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ x: springX, y: springY }}
                className="w-[140px] h-[140px] md:w-[180px] md:h-[180px] bg-[#EAD7B7] rounded-full flex items-center justify-center cursor-pointer group relative z-20"
              >
                <Link href="mailto:shahammoidu616@gmail.com" className="absolute inset-0 z-20"></Link>
                <span className="text-black text-[11px] md:text-sm uppercase tracking-widest font-medium group-hover:scale-110 transition-transform duration-300">
                  Get in touch
                </span>
              </motion.div>
            </div>
        </div>

        {/* Contact Info - Pushed further down on mobile to prevent overlapping with the circle */}
        <div className="flex flex-col md:flex-row gap-3 mt-28 md:mt-16">
          <Link 
            href="mailto:shahammoidu616@gmail.com" 
            className="border border-[#EAD7B7]/20 rounded-full px-6 py-4 text-white hover:bg-[#EAD7B7] hover:text-black transition-all duration-300 text-[10px] md:text-sm uppercase tracking-widest text-center"
          >
            shahammoidu616@gmail.com
          </Link>
          <Link 
            href="tel:+917012381292" 
            className="border border-[#EAD7B7]/20 rounded-full px-6 py-4 text-white hover:bg-[#EAD7B7] hover:text-black transition-all duration-300 text-[10px] md:text-sm uppercase tracking-widest text-center"
          >
            +91 7012381292
          </Link>
        </div>

      </div>

      {/* 2. Bottom Meta Bar */}
      <div className="flex flex-row items-center justify-between mt-20 text-[#EAD7B7]/40 text-[8px] md:text-[10px] uppercase tracking-[0.2em] font-mono border-t border-[#EAD7B7]/10 pt-8">
        
        <div className="flex flex-col gap-1">
          <span>Version</span>
          <span className="text-white">2026 Edition</span>
        </div>

        <div className="hidden md:flex flex-col gap-1 text-center">
          <span>Local Time</span>
          <span className="text-white">{time} IN</span>
        </div>

        <div className="flex flex-col gap-1 text-right">
          <span>Socials</span>
          <div className="flex gap-4 md:gap-6 text-white">
            <Link href="#" className="hover:text-[#EAD7B7] transition-colors">LinkedIn</Link>
            <Link href="#" className="hover:text-[#EAD7B7] transition-colors">Github</Link>
          </div>
        </div>

      </div>

    </footer>
  );
};

export default Footer;