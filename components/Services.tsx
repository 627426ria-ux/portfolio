"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Web Development",
    tags: ["React", "Next.js", "TypeScript"],
    description: "Building the backbone of your digital presence with clean, scalable, and modern code."
  },
  {
    id: "02",
    title: "Shopify Solutions",
    tags: ["Headless", "Liquid", "Hydrogen"],
    description: "From custom Liquid themes to ultra-fast headless storefronts. Scalable commerce for any stage."
  },
  {
    id: "03",
    title: "WordPress",
    tags: ["Headless", "ACF", "PHP"],
    description: "Custom WordPress solutions that are secure, fast, and easy to manage."
  },
  {
    id: "04",
    title: "Technical SEO",
    tags: ["Schema", "Core Vitals", "Analytics"],
    description: "Optimizing structure and speed to ensure your content dominates search results."
  }
];

const Services = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  // Custom easing for that premium feel
  const customEase = [0.16, 1, 0.3, 1];

  // Parent container stagger effect
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  // Individual grid item fade & slide up
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30, filter: 'blur(5px)' },
    visible: {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      transition: { duration: 1, ease: customEase },
    },
  };

  // Header line animation
  const headerVariants: Variants = {
    hidden: { opacity: 0, scaleX: 0 },
    visible: {
      opacity: 1,
      scaleX: 1,
      transition: { duration: 1.2, ease: "circOut" },
    },
  };

  return (
    // Changed to min-h-[100dvh] and added vertical padding so it never overflows on small phones
    <section className="bg-black w-full min-h-[100dvh] flex flex-col items-center justify-center py-24 px-6 md:px-12 overflow-hidden selection:bg-[#EAD7B7] selection:text-black">
      
      {/* 1. Minimal Header */}
      <div className="w-full max-w-5xl flex-none mb-12">
        <div className="flex items-end justify-between pb-4">
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white text-[10px] sm:text-xs tracking-[0.4em] uppercase font-light opacity-60"
          >
            Expertise
          </motion.h2>
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-[#EAD7B7]/40 font-mono text-[10px] sm:text-xs tracking-widest"
          >
            [ Full Stack ]
          </motion.span>
        </div>
        {/* Animated Border Line */}
        <motion.div 
          variants={headerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="w-full h-[1px] bg-[#EAD7B7]/20 origin-left"
        />
      </div>

      {/* 2. THE GRID */}
      <motion.div 
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        // border-t and border-l on the container, combined with border-b and border-r on the items, creates the perfect 1px grid
        className="w-full max-w-5xl flex-1 border-t border-l border-[#EAD7B7]/10 grid grid-cols-1 md:grid-cols-2 md:grid-rows-2"
      >
        
        {services.map((service, index) => (
          <motion.div 
            key={index}
            variants={itemVariants}
            className="group relative border-b border-r border-[#EAD7B7]/10 p-8 sm:p-10 md:p-12 min-h-[250px] md:min-h-[300px] flex flex-col justify-between cursor-pointer transition-colors duration-700 hover:bg-[#EAD7B7] overflow-hidden"
          >
            
            {/* Top: ID & Tags */}
            <div className="w-full flex justify-between items-start z-10 relative">
              <span className="font-mono text-[10px] sm:text-xs text-[#EAD7B7]/40 group-hover:text-black/40 transition-colors duration-500">
                {service.id}
              </span>
              
              {/* Tags reveal on hover */}
              <div className="flex flex-wrap justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100 max-w-[70%]">
                {service.tags.map((tag, i) => (
                  <span key={i} className="text-[8px] sm:text-[9px] uppercase tracking-widest text-black/60 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Center: Title */}
            <div className="z-10 relative mt-auto mb-auto py-8">
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-thin tracking-wide text-white group-hover:text-black transition-colors duration-500">
                {service.title}
              </h3>
            </div>

            {/* Bottom: Description (Slide Up) */}
            <div className="z-10 relative h-16 sm:h-12 overflow-hidden flex items-end">
               
               {/* Default State: Arrow */}
               <div className="absolute bottom-0 right-0 transform translate-y-0 transition-transform duration-500 ease-out group-hover:-translate-y-16">
                 <span className="text-xl md:text-2xl text-[#EAD7B7]/50 font-light group-hover:text-black/20 transition-colors">↘</span>
               </div>

               {/* Hover State: Text */}
               <div className="transform translate-y-[120%] group-hover:translate-y-0 transition-transform duration-500 ease-out w-full pr-8">
                 <p className="text-black/80 font-serif italic text-xs sm:text-sm leading-relaxed md:leading-loose">
                   {service.description}
                 </p>
               </div>

            </div>

          </motion.div>
        ))}

      </motion.div>

    </section>
  );
};

export default Services;