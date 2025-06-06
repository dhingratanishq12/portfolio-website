import { FC } from 'react';

const TheWatchfulEyePage: FC = () => {
  // Define the range of pages for The Watchful Eye
  const startPage = 42;
  const endPage = 50;
  const pageNumbers = Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i);

  return (
    <section id="the-watchful-eye" className="relative py-16 px-4 md:px-8 lg:px-16 text-gray-800 overflow-hidden bg-watchful-eye-pattern"> {/* Apply unique background class */}
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Portfolio Page Images */}
        <div className="space-y-8">
          {pageNumbers.map(pageNumber => (
            <div key={pageNumber} id={`watchful-eye-page-${pageNumber}`} className="pt-4">
              <img 
                src={`/images/the_watchful_eye/page-${String(pageNumber).padStart(2, '0')}.png`} 
                alt={`The Watchful Eye - Page ${pageNumber}`} 
                className="w-full h-auto object-contain rounded-lg shadow-md" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TheWatchfulEyePage;

