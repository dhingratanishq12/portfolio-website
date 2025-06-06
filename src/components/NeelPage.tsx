import { FC } from 'react';

const NeelPage: FC = () => {
  // Define the range of pages for Neel
  const startPage = 37;
  const endPage = 41;
  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return (
    <section id="neel" className="relative py-16 px-4 md:px-8 lg:px-16 text-gray-800 overflow-hidden bg-neel-pattern"> {/* Apply unique background class */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Portfolio Page Images */}
        <div className="space-y-8">
          {pageNumbers.map(pageNumber => (
            <div key={pageNumber} id={`neel-page-${pageNumber}`} className="pt-4"> 
              <img 
                src={`/images/neel/page-${String(pageNumber).padStart(2, '0')}.png`} 
                alt={`Neel - Page ${pageNumber}`} 
                className="w-full h-auto object-contain rounded-lg shadow-md" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NeelPage;

