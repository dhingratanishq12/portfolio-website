
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface DesignItem {
  id: number;
  title: string;
  description: string;
  image: string;
  link?: string;
}

interface DesignsSectionProps {
  content: {
    traditional: DesignItem[];
    modern: DesignItem[];
  };
}

// Reusable Project Slider Component
const ProjectSlider: React.FC<{ projects: DesignItem[], categoryTitle: string, categoryId: string }> = ({ projects, categoryTitle }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Determine items per page based on screen size (adjust breakpoints as needed)
  // This is a simplified approach; a more robust solution might use window resize listeners
  const getItemsPerPage = () => {
    if (typeof window !== 'undefined') {
        if (window.innerWidth >= 1024) return 3; // lg
        if (window.innerWidth >= 768) return 2; // md
    }
    return 1; // default/mobile
  };
  
  // Recalculate itemsPerPage (ideally on resize, but simplified here)
  const itemsPerPage = getItemsPerPage(); 
  const totalPages = Math.ceil(projects.length / itemsPerPage);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalPages);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalPages) % totalPages);
  };

  // Hover functionality simplified - using CSS only
  const handleMouseEnter = () => {
    // Hover effect handled by CSS only
  };

  const handleMouseLeave = () => {
    // Hover effect handled by CSS only
  };

  // Calculate the projects to display for the current page
  const startIndex = currentIndex * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProjects = projects.slice(startIndex, endIndex);

  return (
    <div className="mb-20">
      <div className="flex items-center mb-10">
        <div className="h-px bg-[#d4af37] flex-grow"></div>
        <h3 className="text-3xl font-serif px-6 text-[#3a2a18]">{categoryTitle}</h3>
        <div className="h-px bg-[#d4af37] flex-grow"></div>
      </div>

      <div className="relative">
        {/* Cards Container - Use grid for simplicity with pagination */} 
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProjects.map(project => (
            <Link to={project.link || '#'} key={project.id} className="block">
              <div 
                className="relative overflow-hidden rounded-sm shadow-lg hover:shadow-xl transition-shadow duration-300 h-80 group"
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
                />
                <div 
                  className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <h4 className="text-2xl font-serif text-white mb-2">{project.title}</h4>
                </div>
              </div>
            </Link>
          ))}
          {/* Fill empty grid cells if needed for consistent height, or adjust styling */} 
          {[...Array(itemsPerPage - currentProjects.length)].map((_, i) => (
            <div key={`placeholder-${i}`} className="hidden md:block lg:block"></div> // Placeholders for layout consistency
          ))}
        </div>

        {/* Navigation Arrows - Only show if more than one page */}
        {totalPages > 1 && (
          <>
            <button 
              onClick={handlePrev} 
              className="absolute top-1/2 left-0 transform -translate-y-1/2 -translate-x-12 bg-white/50 hover:bg-white/80 rounded-full p-2 shadow-md transition text-stone-700 hover:text-stone-900 z-10"
              aria-label={`Previous ${categoryTitle} projects`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
            </button>
            <button 
              onClick={handleNext} 
              className="absolute top-1/2 right-0 transform -translate-y-1/2 translate-x-12 bg-white/50 hover:bg-white/80 rounded-full p-2 shadow-md transition text-stone-700 hover:text-stone-900 z-10"
              aria-label={`Next ${categoryTitle} projects`}
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
            </button>
          </>
        )}
      </div>
    </div>
  );
};

const DesignsSection: React.FC<DesignsSectionProps> = ({ content }) => {
  const traditionalProjects = content.traditional || [];
  const modernProjects = content.modern || [];

  return (
    <section id="designs" className="py-20 px-6 md:px-12 bg-[#f5f0e5]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-16 text-[#3a2a18]">Designs</h2>
        
        {/* Traditional Wear Slider */}
        {traditionalProjects.length > 0 && (
            <ProjectSlider projects={traditionalProjects} categoryTitle="Traditional Wear" categoryId="traditional" />
        )}
        
        {/* Modern Wear Slider */}
        {modernProjects.length > 0 && (
            <ProjectSlider projects={modernProjects} categoryTitle="Modern Wear" categoryId="modern" />
        )}
      </div>
    </section>
  );
};

export default DesignsSection;

