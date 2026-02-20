"use client";

import { useState, useEffect, useRef, MouseEvent } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useSpring, useMotionValue } from "framer-motion";

const Footer = () => {
  // --- Live Time Logic ---
  const [time, setTime] = useState<string>("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      // Format: HH:MM AM/PM
      setTime(now.toLocaleTimeString("en-US", { 
        hour: "2-digit", 
        minute: "2-digit",
        hour12: false // Set to true if you prefer AM/PM
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
    // Calculate distance from center
    const distanceX = e.clientX - centerX;
    const distanceY = e.clientY - centerY;
    
    // Apply magnetic pull (divide by a factor to dampen the movement)
    x.set(distanceX * 0.3);
    y.set(distanceY * 0.3);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <footer className="bg-black w-full min-h-screen flex flex-col justify-between px-6 md:px-12 pt-32 pb-12 overflow-hidden relative">
      
      {/* 1. Main Call to Action */}
      <div className="flex-1 flex flex-col justify-center relative z-10">
        
        {/* Profile Image + Text */}
        <div className="flex flex-col md:flex-row items-start md:items-center gap-6 mb-4">
          
          <h2 className="text-white text-6xl md:text-9xl font-thin tracking-tight leading-none">
            Let's work
          </h2>
        </div>

        {/* Second Line */}
        <h2 className="text-[#EAD7B7] font-serif italic text-6xl md:text-9xl leading-none">
          together
        </h2>
        
        {/* Horizontal Divider Line */}
        <div className="w-full h-[1px] bg-[#EAD7B7]/20 mt-16 md:mt-24 relative flex items-center">
            
            {/* The Magnetic "Get in Touch" Button */}
            <div className="absolute right-0 md:right-24 -top-[75px] md:-top-[90px]">
              <motion.div
                ref={ref}
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{ x: springX, y: springY }}
                className="w-[150px] h-[150px] md:w-[180px] md:h-[180px] bg-[#EAD7B7] rounded-full flex items-center justify-center cursor-pointer group relative z-20"
              >
                <Link href="mailto:contact@loomabayas.com" className="absolute inset-0 z-20"></Link>
                <span className="text-black text-sm uppercase tracking-widest font-medium group-hover:scale-110 transition-transform duration-300">
                  Get in touch
                </span>
              </motion.div>
            </div>

        </div>

        {/* Contact Pills */}
        <div className="flex flex-col md:flex-row gap-4 mt-12 md:mt-16">
          <Link 
            href="mailto:hello@arik.com" 
            className="border border-[#EAD7B7]/20 rounded-full px-8 py-4 text-white hover:bg-[#EAD7B7] hover:text-black transition-all duration-300 text-sm uppercase tracking-widest"
          >shahammoidu616@gmail.com
          </Link>
          <Link 
            href="tel:+91 7012381292" 
            className="border border-[#EAD7B7]/20 rounded-full px-8 py-4 text-white hover:bg-[#EAD7B7] hover:text-black transition-all duration-300 text-sm uppercase tracking-widest"
          >
            +91 7012381292
          </Link>
        </div>

      </div>

      {/* 2. Bottom Meta Bar */}
      <div className="flex flex-col md:flex-row items-end md:items-center justify-between mt-24 text-[#EAD7B7]/40 text-[10px] uppercase tracking-widest font-mono border-t border-[#EAD7B7]/10 pt-8">
        
        {/* Left: Version & Copyright */}
        <div className="flex flex-col gap-2 mb-8 md:mb-0">
          <span>Version</span>
          <span className="text-white">2026 © Edition</span>
        </div>

        {/* Center: Live Time */}
        

        {/* Right: Socials */}
        <div className="flex flex-col gap-2 text-right">
          <span>Socials</span>
          <div className="flex gap-6 text-white">
            
            <Link href="#" className="hover:text-[#EAD7B7] transition-colors">LinkedIn</Link>
          </div>
        </div>

      </div>

    </footer>
  );
};

export default Footer;