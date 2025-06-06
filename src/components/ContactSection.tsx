import React from 'react';

interface ContactSectionProps {
  content: {
    email: string;
    phone: string;
    instagram: string; // Should be a full URL
    linkedin?: string; // Add optional LinkedIn URL
    address: string;
    introText?: string;
  };
}

const ContactSection: React.FC<ContactSectionProps> = ({ content }) => {
  // Formspree endpoint - Will need to be replaced with the actual ID after Formspree account setup
  const formspreeEndpoint = "https://formspree.io/f/xeqyqzgj"; // Using a temporary ID that will need to be replaced

  return (
    <section id="contact" className="py-20 px-6 md:px-12 bg-[#f5f0e5]">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif text-center mb-10 text-[#3a2a18]">Contact</h2>
        
        <p className="text-center text-lg mb-12">
          {content.introText || "I'd love to hear from you. Whether you're interested in a custom design, collaboration, or have any questions about my work, please feel free to reach out."}
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-white p-8 shadow-md">
            <h3 className="text-2xl font-serif mb-6 text-[#3a2a18]">Get in Touch</h3>
            
            <div className="space-y-4">
              <div>
                <p className="font-medium">Email</p>
                <a href={`mailto:${content.email}`} className="text-[#d4af37] hover:underline break-words">{content.email}</a>
              </div>
              
              <div>
                <p className="font-medium">Phone</p>
                <p>{content.phone}</p>
              </div>
              
              <div>
                <p className="font-medium">Instagram</p>
                <a href={content.instagram} target="_blank" rel="noopener noreferrer" className="text-[#d4af37] hover:underline break-words">{content.instagram.replace('https://', '')}</a>
              </div>

              {content.linkedin && (
                <div>
                  <p className="font-medium">LinkedIn</p>
                  <a href={content.linkedin} target="_blank" rel="noopener noreferrer" className="text-[#d4af37] hover:underline break-words">{content.linkedin.replace('https://www.', '')}</a>
                </div>
              )}
              
              <div>
                <p className="font-medium">Studio Address</p>
                <p>{content.address}</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 shadow-md">
            <h3 className="text-2xl font-serif mb-6 text-[#3a2a18]">Send a Message</h3>
            
            {/* Formspree Integration */}
            <form action={formspreeEndpoint} method="POST" className="space-y-4">
              <div>
                <label htmlFor="name" className="block mb-1">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" // Add name attribute for Formspree
                  className="w-full border border-gray-300 p-2 focus:outline-none focus:border-[#d4af37]" 
                  required // Add required attribute
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-1">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="_replyto" // Use _replyto for Formspree reply-to field
                  className="w-full border border-gray-300 p-2 focus:outline-none focus:border-[#d4af37]" 
                  required // Add required attribute
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-1">Message</label>
                <textarea 
                  id="message" 
                  name="message" // Add name attribute for Formspree
                  rows={4} 
                  className="w-full border border-gray-300 p-2 focus:outline-none focus:border-[#d4af37]"
                  required // Add required attribute
                ></textarea>
              </div>
              
              {/* Optional: Add a hidden field for subject if desired */}
              {/* <input type="hidden" name="_subject" value="New message from Portfolio Website!" /> */}

              <button 
                type="submit" 
                className="bg-[#3a2a18] text-white px-6 py-2 hover:bg-[#d4af37] transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

