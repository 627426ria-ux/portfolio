"use client";

import { useRef, MouseEvent, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, useMotionValue } from "framer-motion";

// Project Data
// Notice: We don't need 'src' anymore because the API fetches it from the 'link'
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
    mouseX.set(e.clientX - rect.left - 40); 
    mouseY.set(e.clientY - rect.top - 40);
  }

  // Generate a dynamic screenshot URL using Microlink's free API
  const dynamicScreenshotUrl = `https://api.microlink.io/?url=${encodeURIComponent(project.link)}&screenshot=true&meta=false&embed=screenshot.url`;

  return (
    <div 
      // Set to a nice desktop aspect ratio (wider than it is tall)
      className="group relative h-[450px] w-[320px] md:h-[65vh] md:w-[45vw] flex-shrink-0 cursor-none"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link href={project.link} target="_blank" className="flex flex-col justify-end w-full h-full relative z-10">
        
        {/* Dynamic Website Preview Frame */}
        <div className="relative w-full h-[80%] overflow-hidden rounded-md bg-zinc-900 pointer-events-none border border-white/5">
          <Image
            fill
            alt={`Preview of ${project.title}`}
            src={dynamicScreenshotUrl}
            // unoptimized is required for external dynamic APIs so Next.js doesn't block it
            unoptimized 
            // object-cover and object-top ensures it looks like a nice top-down desktop window
            className="object-cover object-top transition-all duration-[800ms] ease-[cubic-bezier(0.25,1,0.5,1)] scale-100 group-hover:scale-105"
          />
        </div>

        {/* Project Info */}
        <div className="mt-8 flex flex-col items-start px-2 pointer-events-none">
          <span className="text-[#EAD7B7] text-[10px] md:text-xs uppercase tracking-widest font-light opacity-60 mb-3 group-hover:opacity-100 transition-opacity duration-300">
            0{index + 1} — {project.category}
          </span>
          <h2 className="text-white text-3xl md:text-5xl font-thin tracking-wide leading-none group-hover:text-[#EAD7B7] transition-colors duration-300">
            {project.title}
          </h2>
        </div>
      </Link>

      {/* Floating Cursor (Outside of the overflow-hidden container to prevent clipping) */}
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
        // Using a drop-shadow instead of mix-blend-difference to prevent dark rendering glitches
        className="absolute top-0 left-0 w-[80px] h-[80px] bg-[#EAD7B7] shadow-[0_0_30px_rgba(0,0,0,0.3)] rounded-full flex items-center justify-center pointer-events-none z-50"
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

  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-75%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-black">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-16 md:gap-32 px-6 md:px-12 items-center">
          
          <div className="flex-shrink-0 w-[300px] md:w-[35vw] flex flex-col justify-center h-[60vh] pl-6 md:pl-12">
            <h2 className="text-[#EAD7B7] text-5xl md:text-7xl font-thin tracking-wide leading-tight">
              Recent <br/> 
              <span className="font-cursive text-6xl md:text-8xl lowercase text-white">
                & Works
              </span>
            </h2>

            <p className="text-[#EAD7B7] text-[10px] md:text-xs font-light tracking-widest uppercase mt-10 max-w-sm opacity-60 leading-loose">
              A selection of digital products, websites, and brand experiences crafted with precision.
            </p>

            <div className="mt-16 flex items-center gap-6 opacity-50">
               <div className="w-16 h-[1px] bg-[#EAD7B7]"></div>
               <span className="text-[#EAD7B7] text-[10px] uppercase tracking-widest">Scroll</span>
            </div>
          </div>

          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}

        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedWork;