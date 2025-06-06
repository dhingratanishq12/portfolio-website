import { FC } from 'react';

const MidnightHeritagePage: FC = () => {
  // Define the correct range of pages for Midnight Heritage
  const startPage = 27;
  const endPage = 36;
  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return (
    // Updated background to solid dark charcoal and adjusted text color for contrast
    <section 
      id="midnight-heritage" 
      className="relative py-16 px-4 md:px-8 lg:px-16 text-gray-300 overflow-hidden" 
      style={{ backgroundColor: '#1a202c', backgroundImage: 'none' }} // Solid dark background with no image
    >
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Portfolio Page Images */}
        <div className="space-y-8">
          {pageNumbers.map(pageNumber => (
            <div key={pageNumber} id={`midnight-heritage-page-${pageNumber}`} className="pt-4 bg-gray-800/20 rounded-lg shadow-md"> {/* Added subtle background to images for definition */}
              <img 
                src={`/images/midnight_heritage/page-${String(pageNumber).padStart(2, '0')}.png`} 
                alt={`Midnight Heritage - Page ${pageNumber}`} 
                className="w-full h-auto object-contain rounded-lg" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MidnightHeritagePage;

