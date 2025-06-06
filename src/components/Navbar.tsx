
import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom'; // Import useNavigate

// Updated project data structure for the dropdown
const designProjects = [
  { title: "Majesty Arch", link: "/designs/majesty-arch" },
  { title: "Phool", link: "/designs/phool" },
  { title: "Midnight Heritage", link: "/designs/midnight-heritage" }, // Added back
  { title: "Neel", link: "/designs/neel" },
  { title: "The Watchful Eye", link: "/designs/the-watchful-eye" },
];

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDesignsDropdownOpen, setIsDesignsDropdownOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate(); // Get navigate function

  // Updated function to handle instant jump instead of smooth scroll
  const handleScrollLink = (hash: string) => {
    setIsMobileMenuOpen(false); // Close mobile menu
    setIsDesignsDropdownOpen(false); // Close dropdown

    // Ensure hash starts with #
    const targetHash = hash.startsWith('#') ? hash : `#${hash}`;
    const elementId = targetHash.substring(1);

    if (location.pathname === '/') {
      // Already on home page, jump instantly
      if (elementId === 'home') {
         window.scrollTo({ top: 0, behavior: 'auto' });
      } else {
        const element = document.getElementById(elementId);
        element?.scrollIntoView({ behavior: 'auto', block: 'start' });
      }
    } else {
      // Not on home page, navigate to home and pass hash in state
      // Use elementId (without #) for state to simplify checking later
      navigate('/', { state: { scrollToId: elementId } });
    }
  };

  // Function to handle direct links (no change needed here)
  const handleDirectLink = () => {
    setIsMobileMenuOpen(false); // Close mobile menu
    setIsDesignsDropdownOpen(false); // Close dropdown
  };

  return (
    <nav 
      className="sticky top-0 left-0 right-0 z-30 bg-white/80 backdrop-blur-md shadow-sm py-3 px-6 md:px-12"
      onMouseLeave={() => setIsDesignsDropdownOpen(false)} // Close dropdown on mouse leave from nav
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        {/* Updated Home link to use handleScrollLink for consistency */}
        <div className="text-2xl font-playfair font-bold text-stone-800">
          <button onClick={() => handleScrollLink("#home")} className="hover:text-stone-600 transition-colors">Smriti Sharma</button>
        </div>

        {/* Desktop Menu - Links now use buttons calling handleScrollLink */} 
        <div className="hidden md:flex space-x-6 items-center">
          <button onClick={() => handleScrollLink("#home")} className="nav-link">Home</button>
          <button onClick={() => handleScrollLink("#about")} className="nav-link">About</button>
          {/* Designs Dropdown */}
          <div 
            className="relative" 
            onMouseEnter={() => setIsDesignsDropdownOpen(true)} 
          >
            <button 
              onClick={() => handleScrollLink("#designs")} 
              className="nav-link flex items-center"
            >
              Designs
              <svg className={`w-4 h-4 ml-1 transition-transform duration-200 ${isDesignsDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
            </button>
            {isDesignsDropdownOpen && (
              <div 
                className="absolute top-full left-1/2 transform -translate-x-1/2 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-40"
                onMouseLeave={() => setIsDesignsDropdownOpen(false)} // Close on mouse leave from dropdown itself
              >
                {designProjects.map((project) => (
                  <Link
                    key={project.title}
                    to={project.link} // Direct link for project pages
                    className="block px-4 py-2 text-sm text-stone-700 hover:bg-stone-100"
                    onClick={handleDirectLink} // Use direct link handler here
                  >
                    {project.title}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <button onClick={() => handleScrollLink("#contact")} className="nav-link">Contact</button>
        </div>

        {/* Mobile Menu Button (no change) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 focus:outline-none text-stone-700 hover:text-stone-900"
            aria-label="Toggle menu"
          >
             {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu - Links now use buttons calling handleScrollLink */} 
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-1 bg-white/95 backdrop-blur-md p-4 rounded-b-lg shadow-lg mx-4 z-30">
          <div className="flex flex-col space-y-4 items-center">
            <button onClick={() => handleScrollLink("#home")} className="nav-link">Home</button>
            <button onClick={() => handleScrollLink("#about")} className="nav-link">About</button>
            {/* Mobile Designs Links */}
            <div className="w-full text-center">
              <span className="nav-link font-semibold">Designs</span>
              <div className="flex flex-col items-center space-y-2 mt-2">
                {designProjects.map((project) => (
                    <Link
                      key={project.title}
                      to={project.link} // Direct link for project pages
                      className="block text-sm text-stone-600 hover:text-stone-900"
                      onClick={handleDirectLink} // Use direct link handler here
                    >
                      {project.title}
                    </Link>
                  ))}
              </div>
            </div>
            <button onClick={() => handleScrollLink("#contact")} className="nav-link">Contact</button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

