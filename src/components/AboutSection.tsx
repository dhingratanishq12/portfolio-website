import React from 'react';

interface AboutSectionProps {
  content: {
    title: string;
    description: string;
    highlights: string[];
  };
}

const AboutSection: React.FC<AboutSectionProps> = ({ content }) => {
  return (
    <section id="about" className="py-20 px-6 md:px-12 bg-[#f8f5ef]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-10 text-[#3a2a18]">{content.title}</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-1/2">
            <p className="text-lg mb-6 leading-relaxed">{content.description}</p>
            
            <ul className="space-y-3">
              {content.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-[#d4af37] mr-2">•</span>
                  <span>{highlight}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="w-full md:w-1/2 mt-8 md:mt-0">
            <div className="relative">
              <div className="absolute inset-0 border-2 border-[#d4af37] transform translate-x-4 translate-y-4"></div>
              <img 
                src="/images/elegant_background.png" 
                alt="Smriti Sharma" 
                className="relative z-10 w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
