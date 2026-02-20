"use client";

import { useRef, MouseEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";

// Project Data
const projects = [
  {
    id: 1,
    title: "Loom Abayas",
    category: "E-Commerce",
    link: "https://loomabayas.com",
  },
  {
    id: 2,
    title: "Mavex Mentr",
    category: "Study Abroad Consultancy",
    link: "https://mavexmentr.com",
  },
  {
    id: 3,
    title: "EmirCo DXB",
    category: "Document Clearance Services",
    link: "https://aqua-hedgehog-634598.hostingersite.com/",
  },
  {
    id: 4,
    title: "Spoon Creations",
    category: "Digital Marketing Agency",
    link: "https://www.spooncreations.com/",
  },
  {
    id: 5,
    title: "Golden Spark Cafe",
    category: "Cafe",
    link: "https://www.goldensparkcafe.com/",
  }
];

// --- Individual Project Card ---
const ProjectCard = ({ project, index }: { project: any, index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // Ultra-tight spring to prevent ghosting
  const springConfig = { stiffness: 800, damping: 35, mass: 0.1 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    // Centering the 80x80 cursor (subtracting half of 80)
    mouseX.set(e.clientX - rect.left - 40); 
    mouseY.set(e.clientY - rect.top - 40);
  }

  // Generate a dynamic screenshot URL using Microlink's free API
  const dynamicScreenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(project.link)}&screenshot=true&meta=false&embed=screenshot.url`;

  return (
    <div 
      // md:cursor-none ensures the default cursor hides ONLY on desktop. 
      // Mobile keeps default touch behavior.
      className="group relative h-[400px] w-[280px] sm:h-[450px] sm:w-[320px] md:h-[65vh] md:w-[45vw] flex-shrink-0 md:cursor-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={project.link} target="_blank" className="flex flex-col justify-end w-full h-full relative z-10">
        
        {/* Dynamic Website Preview Frame */}
        <div className="relative w-full h-[75%] md:h-[80%] overflow-hidden rounded-md bg-[#111] pointer-events-none border border-white/5">
          <Image
            fill
            alt={`Preview of ${project.title}`}
            src={dynamicScreenshotUrl}
            unoptimized 
            className="object-cover object-top transition-all duration-[800ms] ease-[cubic-bezier(0.16,1,0.3,1)] scale-100 group-hover:scale-105 opacity-90 group-hover:opacity-100"
          />
        </div>

        {/* Project Info */}
        <div className="mt-6 md:mt-8 flex flex-col items-start px-2 pointer-events-none">
          <span className="text-[#EAD7B7] text-[9px] md:text-[10px] lg:text-xs uppercase tracking-widest font-light opacity-60 mb-2 md:mb-3 group-hover:opacity-100 transition-opacity duration-300">
            0{index + 1} — {project.category}
          </span>
          <h2 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-thin tracking-wide leading-none group-hover:text-[#EAD7B7] transition-colors duration-300">
            {project.title}
          </h2>
        </div>
      </Link>

      {/* Floating Cursor (Hidden on mobile via 'hidden md:flex') */}
      <motion.div 
        style={{ x: springX, y: springY }}
        animate={{ 
          opacity: isHovered ? 1 : 0, 
          scale: isHovered ? 1 : 0.5 
        }}
        transition={{ 
          opacity: { duration: 0.15 },
          scale: { duration: 0.2, ease: "easeOut" }
        }}
        className="hidden md:flex absolute top-0 left-0 w-[80px] h-[80px] bg-[#EAD7B7] shadow-[0_0_30px_rgba(234,215,183,0.4)] rounded-full items-center justify-center pointer-events-none z-50"
      >
        <span className="text-black font-bold text-[8px] tracking-[0.3em]">OPEN</span>
      </motion.div>
    </div>
  );
};

// --- Main Section ---
const FeaturedWork = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  // Pushed the end transform to -80% so the last items are fully visible on screen
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-80%"]);

  return (
    <section ref={targetRef} className="relative h-[400vh] bg-black selection:bg-[#EAD7B7] selection:text-black">
      <div className="sticky top-0 flex h-[100dvh] items-center overflow-hidden">
        
        <motion.div style={{ x }} className="flex gap-12 sm:gap-16 md:gap-32 px-6 sm:px-12 md:px-16 items-center">
          
          {/* Intro Text Block */}
          <div className="flex-shrink-0 w-[280px] sm:w-[300px] md:w-[35vw] flex flex-col justify-center h-[60vh] pl-2 sm:pl-6 md:pl-12">
            <h2 className="text-[#EAD7B7] text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-thin tracking-wide leading-tight">
              Featured <br/> 
              {/* Updated to match the typography system */}
              <span className="font-serif italic text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] text-white font-medium lowercase tracking-tight">
                works
              </span>
            </h2>

            <p className="text-[#EAD7B7] text-[10px] md:text-xs font-light tracking-widest uppercase mt-8 md:mt-10 max-w-xs md:max-w-sm opacity-60 leading-relaxed md:leading-loose">
              A selection of digital products, websites, and brand experiences crafted with precision.
            </p>

            <div className="mt-12 md:mt-16 flex items-center gap-4 md:gap-6 opacity-50">
               <div className="w-12 md:w-16 h-[1px] bg-[#EAD7B7]"></div>
               <span className="text-[#EAD7B7] text-[9px] md:text-[10px] uppercase tracking-widest">Scroll</span>
            </div>
          </div>

          {/* Render Projects */}
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}

          {/* End padding block so the last card doesn't hit the absolute edge of the screen */}
          <div className="flex-shrink-0 w-[5vw] md:w-[10vw]"></div>

        </motion.div>

      </div>
    </section>
  );
};

export default FeaturedWork;