
import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import DesignsSection from './components/DesignsSection';
import ContactSection from './components/ContactSection';
import PhoolPage from './components/PhoolPage';
import MajestyArchPage from './components/MajestyArchPage';
import NeelPage from './components/NeelPage';
import MidnightHeritagePage from './components/MidnightHeritagePage';
import TheWatchfulEyePage from './components/TheWatchfulEyePage';
import Navbar from './components/Navbar';

// Helper component to scroll to top on *initial* route change (standard behavior)
const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Only scroll to top if not navigating with a specific scroll target
    if (!window.history.state?.usr?.scrollToId) {
        window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
};

// Updated HomeSections component to handle instant jump
const HomeSections = ({ content }: { content: any }) => {
  const location = useLocation();

  useEffect(() => {
    // Check if we navigated here with a scrollToId state
    const state = location.state as { scrollToId?: string }; // Type assertion
    if (state?.scrollToId) {
      const { scrollToId } = state;
      // Use setTimeout to ensure the element is rendered before scrolling
      setTimeout(() => {
        if (scrollToId === 'home') {
          window.scrollTo({ top: 0, behavior: 'auto' }); // Jump to top for #home
        } else {
          const element = document.getElementById(scrollToId);
          if (element) {
            element.scrollIntoView({ behavior: 'auto', block: 'start' }); // Jump instantly to the top of the element
          }
        }
        // Clear the state after scrolling to prevent re-triggering
        // Use window.history.replaceState to modify state without navigation
        window.history.replaceState({}, ''); 
      }, 0); // Timeout 0 pushes execution after current render cycle
    }
  }, [location.state]); // Re-run effect if location.state changes

  return (
    <>
      {/* Add id="home" to a wrapper or HeroSection if needed */}
      <div id="home">
        <HeroSection content={content.general} />
      </div>
      <AboutSection content={content.about} />
      <DesignsSection content={{ traditional: content.traditional, modern: content.modern }} />
      <ContactSection content={content.contact} />
    </>
  );
};

// Component to conditionally render Navbar based on route
const MainContent = ({ content }: { content: any }) => {
  const location = useLocation();
  const showNavbar = location.pathname !== '/';

  return (
    <>
      <ScrollToTop />
      {showNavbar && <Navbar />} {/* Conditionally render Navbar */}
      <Routes>
        <Route path="/" element={<HomeSections content={content} />} />
        <Route path="/designs/phool" element={<PhoolPage />} />
        <Route path="/designs/majesty-arch" element={<MajestyArchPage />} />
        <Route path="/designs/midnight-heritage" element={<MidnightHeritagePage />} />
        <Route path="/designs/neel" element={<NeelPage />} />
        <Route path="/designs/the-watchful-eye" element={<TheWatchfulEyePage />} />
      </Routes>
    </>
  );
}

function App() {
  // Define project data (ensure image paths are correct)
  const traditionalProjects = [
    { id: 1, title: "Majesty Arch", description: "A collection inspired by the grandeur of Indian architectural heritage, featuring intricate gold embroidery on luxurious fabrics.", image: "/images/preview_majesty_arch.png", link: "/designs/majesty-arch" },
    { id: 2, title: "Phool", description: "Celebrating the beauty of floral motifs in traditional Indian design, with delicate embroidery on soft pastel backgrounds.", image: "/images/preview_phool.png", link: "/designs/phool" },
    { id: 3, title: "Midnight Heritage", description: "A dramatic collection that explores the richness of Indian heritage against deep midnight blues and blacks.", image: "/images/preview_midnight_heritage.png", link: "/designs/midnight-heritage" }
  ];
  const modernProjects = [
    { id: 4, title: "Neel", description: "Exploring shades of indigo through tie-dye and watercolor techniques.", image: "/images/preview_neel.png", link: "/designs/neel" },
    { id: 5, title: "The Watchful Eye", description: "A collection inspired by nature's intricate details and patterns.", image: "/images/preview_watchful_eye.png", link: "/designs/the-watchful-eye" }
  ];

  // Updated contact details
  const [content] = useState({
    general: { name: "Smriti Sharma", title: "FASHION DESIGNER", tagline: "Traditional Luxury, Contemporary Style" },
    about: { 
      title: "About Me", 
      description: "Fashion designer specializing in the fusion of traditional Indian craftsmanship with contemporary design aesthetics. My work celebrates the rich heritage of Indian textiles and techniques while embracing modern silhouettes and sensibilities.", 
      highlights: [
        "Trained at School Of Fashion Technology",
        "Specialized in Ethnic and Modernwear",
        "Worked in Lakme Fashion Week and Bridal Asia'"
      ] 
    },
    traditional: traditionalProjects,
    modern: modernProjects,
    contact: { 
      email: "smritiwork09@gmail.com", 
      phone: "8005789470", 
      instagram: "https://www.instagram.com/smriti_sharma130?igsh=azdoOXB5Z3dhbTh2", 
      linkedin: "https://www.linkedin.com/in/smriti-sharma-b9531a363", // Added LinkedIn
      address: "Pushkar, Rajasthan", 
      introText: "I'd love to hear from you about custom designs, collaborations, or any questions about my work."
    }
  });

  return (
    <Router>
      <MainContent content={content} />
    </Router>
  );
}

export default App;

