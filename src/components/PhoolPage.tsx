
import { FC, useState, useRef } from 'react';

const PhoolPage: FC = () => {
  const [tooltipContent, setTooltipContent] = useState<string | null>(null);
  const [tooltipPosition, setTooltipPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      setTooltipPosition({ x: e.clientX - rect.left + 10, y: e.clientY - rect.top + 10 });
    }
  };

  const handleMouseOver = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    const garmentName = target.getAttribute('data-garment-name');
    if (garmentName) {
      setTooltipContent(garmentName);
    }
  };

  const handleMouseOut = () => {
    setTooltipContent(null);
  };

  // TODO: Refine hover area positioning and dimensions based on the image layout
  const hoverAreas = [
    { name: 'Pink Kurta Set', gridClass: 'sketch-1 col-start-1 row-start-1 row-span-2' },
    { name: 'Red & Gold Kurta Set', gridClass: 'sketch-2 col-start-1 row-start-3' }, // Adjusted row starts assuming 3 rows might be better
    { name: 'White Embroidered Kurta Set', gridClass: 'sketch-3 col-start-2 row-start-1 row-span-2' },
    { name: 'Yellow Patterned Kurta Set', gridClass: 'sketch-4 col-start-2 row-start-3' },
    { name: 'Pink & Green Kurta Set', gridClass: 'sketch-5 col-start-3 row-start-1 row-span-2' },
    { name: 'Red Kurta with Green Vest', gridClass: 'sketch-6 col-start-3 row-start-3' },
  ];

  return (
    <section id="phool" className="relative py-16 px-4 md:px-8 lg:px-16 text-gray-800 overflow-hidden" style={{ backgroundColor: '#f5f0e5', backgroundImage: 'none' }}> {/* Explicit solid cream background with no image */}
      {/* Motion graphics removed for plain background */}
      <div className="relative z-10 max-w-6xl mx-auto"> {/* Added relative z-10 to content */}
        {/* Title Image */}
        <img src="/images/phool/title.png" alt="Phool Collection Title" className="mx-auto mb-12 w-1/2 object-contain" />

        {/* Concept, Motifs & Prints - Using original portfolio image */}
        <div className="mb-12">
          <img src="/images/phool/concept_motifs.png" alt="Phool Concept, Motifs and Prints" className="w-full object-contain" />
        </div>

        {/* Palette, Fabrics, Mood */}
        <div className="mb-12">
          <h2 className="text-3xl font-serif mb-8 text-center text-green-800">Mood & Materials</h2>
          <img src="/images/phool/palette_fabrics_mood.png" alt="Phool Palette, Fabrics, Mood" className="w-full object-contain" />
        </div>

        {/* Client Profile & Looks - Using original portfolio image */}
        <div className="mb-12">
            <img src="/images/phool/client_profile_looks.png" alt="Phool Client Profile and Looks" className="w-full object-contain" />
        </div>

        {/* Sketches with Hover Effect */}
        <h2 className="text-3xl font-serif mb-8 text-center text-green-800">Sketches</h2>
        <div ref={containerRef} onMouseMove={handleMouseMove} className="relative mb-12 bg-gray-100 p-4 rounded">
          <img src="/images/phool/sketches.png" alt="Phool Sketches" className="w-full object-contain pointer-events-none" />
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1">
            {hoverAreas.map((area) => (
              <div
                key={area.name}
                className={`hover-target ${area.gridClass} border-transparent border hover:border-blue-300 cursor-pointer`}
                data-garment-name={area.name}
                onMouseOver={handleMouseOver}
                onMouseOut={handleMouseOut}
              ></div>
            ))}
          </div>
          {/* Tooltip to display name */}
          {tooltipContent && (
            <div
              id="garment-tooltip"
              className="absolute bg-black text-white text-sm px-2 py-1 rounded pointer-events-none shadow-lg z-10"
              style={{ left: `${tooltipPosition.x}px`, top: `${tooltipPosition.y}px` }}
            >
              {tooltipContent}
            </div>
          )}
        </div>

        {/* Flat Sketches */}
        <h2 className="text-3xl font-serif mb-8 text-center text-green-800">Flats</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <img src="/images/phool/flat_1.png" alt="Phool Flat Sketch 1" className="w-full object-contain bg-gray-50 p-2 rounded" />
          <img src="/images/phool/flat_2.png" alt="Phool Flat Sketch 2" className="w-full object-contain bg-gray-50 p-2 rounded" />
          <img src="/images/phool/flat_3.png" alt="Phool Flat Sketch 3" className="w-full object-contain bg-gray-50 p-2 rounded" />
          <img src="/images/phool/flat_4.png" alt="Phool Flat Sketch 4" className="w-full object-contain bg-gray-50 p-2 rounded" />
          <img src="/images/phool/flat_5.png" alt="Phool Flat Sketch 5" className="w-full object-contain bg-gray-50 p-2 rounded" />
          <img src="/images/phool/flat_6.png" alt="Phool Flat Sketch 6" className="w-full object-contain bg-gray-50 p-2 rounded" />
        </div>

      </div>
    </section>
  );
};

export default PhoolPage;

