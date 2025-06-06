import { FC } from 'react';

const MajestyArchPage: FC = () => {
  return (
    <section id="majesty-arch" className="relative py-16 px-4 md:px-8 lg:px-16 text-gray-800 overflow-hidden" style={{ backgroundColor: "#f5f0e5" }}>
      {/* Animated background */}
      <div className="animated-arch-bg" aria-hidden="true">
        <img src="/images/majesty_arch/majesty_arch_silhouette.png" alt="" className="arch-silhouette arch-1" />
        <img src="/images/majesty_arch/majesty_arch_silhouette.png" alt="" className="arch-silhouette arch-2" />
        <img src="/images/majesty_arch/majesty_arch_silhouette.png" alt="" className="arch-silhouette arch-3" />
      </div>
      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Portfolio Page Images */}
        <div className="space-y-8">
          {Array.from({ length: 12 }, (_, i) => i + 4).map(pageNumber => (
            <div key={pageNumber} id={`majesty-page-${pageNumber}`} className="pt-4"> {/* Add ID and padding-top for scroll target */}
              <img 
                src={`/images/majesty_arch/page-${String(pageNumber).padStart(2, '0')}.png`} 
                alt={`Majesty Arch - Page ${pageNumber}`} 
                className="w-full h-auto object-contain rounded-lg shadow-md" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MajestyArchPage;

