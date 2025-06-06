import React from 'react';

interface HeroSectionProps {
  content: {
    name?: string;
    title?: string;
    tagline?: string;
  };
}

const HeroSection: React.FC<HeroSectionProps> = ({ content }) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Full-page background with fabric texture */}
      <div className="absolute inset-0 bg-[#f5f0e5] z-0">
        <div className="absolute inset-0 bg-[url('/images/elegant_background.png')] bg-cover bg-center"></div>
      </div>
      
      {/* Content layout */}
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center">
        {/* Left side - Golden Arch */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end">
          <div className="w-full max-w-md">
            <img src="/images/golden_arch.png" alt="" className="w-full h-auto" />
          </div>
        </div>
        
        {/* Right side - Text content */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0 text-center md:text-left md:pl-8">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif mb-4 text-[#3a2a18]">
            {content.name || "Smriti Sharma"}
          </h1>
          <p className="text-xl uppercase tracking-widest mb-6 text-[#3a2a18]">
            {content.title || "FASHION DESIGNER"}
          </p>
          <p className="text-2xl md:text-3xl font-serif italic mb-10 text-[#3a2a18]">
            {content.tagline || "Traditional Luxury, Contemporary Style"}
          </p>
          <a 
            href="#designs" 
            className="inline-block px-8 py-3 border border-[#d4af37] text-[#3a2a18] hover:bg-[#d4af37] hover:text-white transition-colors duration-300"
          >
            PORTFOLIO
          </a>
        </div>
      </div>
      
      {/* Navigation - Single instance */}
      <nav className="absolute top-0 right-0 p-6 z-20">
        <ul className="flex space-x-8">
          <li><a href="#home" className="text-[#3a2a18] hover:text-[#d4af37] transition-colors">HOME</a></li>
          <li><a href="#about" className="text-[#3a2a18] hover:text-[#d4af37] transition-colors">ABOUT</a></li>
          <li><a href="#designs" className="text-[#3a2a18] hover:text-[#d4af37] transition-colors">DESIGNS</a></li>
          <li><a href="#contact" className="text-[#3a2a18] hover:text-[#d4af37] transition-colors">CONTACT</a></li>
        </ul>
      </nav>
    </section>
  );
};

export default HeroSection;
