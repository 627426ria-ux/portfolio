"use client";

const services = [
  {
    id: "01",
    title: "Web Engineering",
    tags: ["React", "Next.js", "TypeScript"],
    description: "Building the backbone of your digital presence with clean, scalable, and modern code."
  },
  {
    id: "02",
    title: "Shopify Solutions", // <--- Broad title covers both
    tags: ["Headless", "Liquid", "Hydrogen"], // <--- "Liquid" = Normal, "Headless" = Advanced
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
  return (
    <section className="bg-black w-full h-screen flex flex-col items-center justify-center py-12 px-6 md:px-12 overflow-hidden">
      
      {/* 1. Minimal Header */}
      <div className="w-full max-w-5xl flex-none mb-12 flex items-end justify-between border-b border-[#EAD7B7]/20 pb-4">
        <h2 className="text-white text-[10px] tracking-[0.4em] uppercase font-light opacity-60">
          Expertise
        </h2>
        <span className="text-[#EAD7B7]/40 font-mono text-[10px]">
          [ Full Stack ]
        </span>
      </div>

      {/* 2. THE GRID */}
      <div className="w-full max-w-5xl flex-1 border-t border-l border-[#EAD7B7]/10 grid grid-cols-1 md:grid-cols-2 md:grid-rows-2">
        
        {services.map((service, index) => (
          <div 
            key={index}
            className="group relative border-b border-r border-[#EAD7B7]/10 p-8 md:p-12 flex flex-col justify-between cursor-pointer transition-colors duration-700 hover:bg-[#EAD7B7] overflow-hidden"
          >
            
            {/* Top: ID & Tags */}
            <div className="w-full flex justify-between items-start z-10">
              <span className="font-mono text-[10px] text-[#EAD7B7]/40 group-hover:text-black/40 transition-colors">
                {service.id}
              </span>
              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {service.tags.map((tag, i) => (
                  <span key={i} className="text-[9px] uppercase tracking-wider text-black/60 font-medium">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Center: Title */}
            <div className="z-10 relative mt-auto mb-auto">
              <h3 className="text-2xl md:text-4xl font-thin tracking-wide text-white group-hover:text-black transition-colors duration-500">
                {service.title}
              </h3>
            </div>

            {/* Bottom: Description (Slide Up) */}
            <div className="z-10 relative h-12 overflow-hidden">
               {/* Default: Arrow */}
               <div className="absolute bottom-0 right-0 transform translate-y-0 transition-transform duration-500 group-hover:-translate-y-10">
                 <span className="text-xl text-[#EAD7B7]/50 font-light">↘</span>
               </div>

               {/* Hover: Text */}
               <div className="transform translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out">
                 <p className="text-black/80 font-serif italic text-sm leading-relaxed max-w-xs">
                   {service.description}
                 </p>
               </div>
            </div>

          </div>
        ))}

      </div>

    </section>
  );
};

export default Services;