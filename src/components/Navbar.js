// import React, { useState, useEffect } from 'react';
// import { FaBars, FaTimes, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [activeSection, setActiveSection] = useState('home');
  
//   // Handle scroll effect and active section
//   useEffect(() => {
//     const handleScroll = () => {
//       if (window.scrollY > 50) {
//         setScrolled(true);
//       } else {
//         setScrolled(false);
//       }
      
//       // Detect active section
//       const sections = ['home', 'about', 'skills', 'projects', 'contact'];
//       const currentSection = sections.find(section => {
//         const element = document.getElementById(section);
//         if (element) {
//           const rect = element.getBoundingClientRect();
//           return rect.top <= 150 && rect.bottom >= 150;
//         }
//         return false;
//       });
      
//       if (currentSection) {
//         setActiveSection(currentSection);
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navItems = [
//     { name: 'Home', href: '#home' },
//     { name: 'About', href: '#about' },
//     { name: 'Skills', href: '#skills' },
//     { name: 'Projects', href: '#projects' },
//     { name: 'Contact', href: '#contact' },
//   ];

//   const socialLinks = [
//     { icon: <FaGithub />, href: 'https://github.com/IT21297090' },
//     { icon: <FaLinkedin />, href: 'https://www.linkedin.com/in/chamodi-maheesha-a29202216/' },
//     { icon: <FaTwitter />, href: 'https://twitter.com/yourusername' },
//   ];

//   return (
//     <nav 
//       className={`fixed w-full z-50 transition-all duration-300 ${
//         scrolled 
//           ? 'bg-[#070B2A]/95 backdrop-blur-lg shadow-lg shadow-[#7C6BFF]/10 py-3' 
//           : 'bg-transparent py-5'
//       }`}
//     >
//       <div className="container mx-auto px-4 lg:px-8">
//         <div className="flex justify-between items-center">
          
//           {/* Logo with animated underline */}
//           <a 
//             href="#home" 
//             className="group relative text-2xl font-bold"
//             onClick={() => setActiveSection('home')}
//           >
//             <span className="text-white">C</span>
//             <span className="bg-gradient-to-r from-[#7C6BFF] via-[#8B7CFF] to-[#7C6BFF] bg-clip-text text-transparent">
//               J
//             </span>
//             <span className="text-white">AYAMINI</span>
            
//             {/* Logo underline animation */}
//             <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-gradient-to-r from-[#7C6BFF] via-[#8B7CFF] to-[#6D5DF6] group-hover:w-full transition-all duration-300 rounded-full"></span>
//           </a>

//           {/* Desktop Menu with enhanced underline effects */}
//           <div className="hidden lg:flex items-center space-x-1">
//             {navItems.map((item) => {
//               const isActive = activeSection === item.href.substring(1);
//               // Check if this is Skills or Projects item
//               const isHighlighted = item.name === 'Skills' || item.name === 'Projects';
              
//               return (
//                 <a
//                   key={item.name}
//                   href={item.href}
//                   className={`relative px-5 py-2 font-medium transition-all duration-300 group
//                     ${isHighlighted && !isActive ? 'highlight-pulse' : ''}`}
//                   onClick={() => setActiveSection(item.href.substring(1))}
//                 >
//                   {/* Link text */}
//                   <span className={`relative z-10 ${
//                     isActive 
//                       ? 'text-white font-semibold' 
//                       : isHighlighted && !isActive
//                         ? 'text-[#7C6BFF] hover:text-white font-semibold'
//                         : 'text-[#A5AEC0] hover:text-white'
//                   }`}>
//                     {item.name}
//                   </span>
                  
//                   {/* Glow effect for Skills and Projects */}
//                   {isHighlighted && !isActive && (
//                     <span className="absolute inset-0 bg-[#7C6BFF]/5 rounded-lg -z-10 animate-glow"></span>
//                   )}
                  
//                   {/* Active underline - full width when active */}
//                   {isActive && (
//                     <span className="absolute bottom-0 left-0 w-full h-[3px] bg-gradient-to-r from-[#7C6BFF] via-[#8B7CFF] to-[#6D5DF6] rounded-t-full"></span>
//                   )}
                  
//                   {/* Hover underline animation */}
//                   <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-[2px] bg-gradient-to-r from-[#7C6BFF] to-[#6D5DF6] group-hover:w-4/5 transition-all duration-300 rounded-full"></span>
                  
//                   {/* Active background highlight */}
//                   {isActive && (
//                     <span className="absolute inset-0 bg-gradient-to-r from-[#7C6BFF]/10 to-[#6D5DF6]/10 rounded-lg -z-10"></span>
//                   )}

//                   {/* Highlight ring for Skills and Projects */}
//                   {isHighlighted && !isActive && (
//                     <span className="absolute -inset-0.5 rounded-lg bg-gradient-to-r from-[#7C6BFF] to-[#6D5DF6] opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-20"></span>
//                   )}
//                 </a>
//               );
//             })}
            
//             {/* Separator line */}
//             <div className="h-6 w-[1px] bg-gradient-to-b from-transparent via-[#7C6BFF]/30 to-transparent mx-4"></div>
            
//             {/* Social Icons in Desktop */}
//             <div className="flex items-center space-x-4">
//               {socialLinks.map((link, index) => (
//                 <a
//                   key={index}
//                   href={link.href}
//                   target="_blank"
//                   rel="noopener noreferrer"
//                   className="relative text-[#A5AEC0] hover:text-white text-lg 
//                            transition-all duration-300 group"
//                 >
//                   <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">
//                     {link.icon}
//                   </span>
//                   {/* Social icon underline */}
//                   <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 
//                                  w-0 h-[1px] bg-gradient-to-r from-[#7C6BFF] to-[#6D5DF6] 
//                                  group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
//                 </a>
//               ))}
              
//               {/* Hire Me Button with underline effect */}
//               <a
//                 href="#contact"
//                 className="relative ml-4 px-5 py-2.5 rounded-lg font-medium
//                          bg-gradient-to-r from-[#7C6BFF] to-[#6D5DF6] 
//                          text-white hover:shadow-[0_0_25px_rgba(124,107,255,0.4)]
//                          transition-all duration-300 group overflow-hidden"
//                 onClick={() => setActiveSection('contact')}
//               >
//                 {/* Button glow effect */}
//                 <span className="absolute inset-0 bg-gradient-to-r from-[#8B7CFF] to-[#7C6BFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                
//                 <span className="relative z-10 flex items-center">
//                   Hire Me
//                   <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
//                 </span>
                
//                 {/* Button bottom border/glow */}
//                 <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 
//                                w-3/4 h-[2px] bg-gradient-to-r from-transparent via-white to-transparent 
//                                group-hover:w-full transition-all duration-300 rounded-full"></span>
//               </a>
//             </div>
//           </div>

//           {/* Mobile Menu Button */}
//           <button
//             className="lg:hidden text-2xl text-white hover:text-[#7C6BFF] 
//                      transition-colors duration-300 p-2 relative group"
//             onClick={() => setIsOpen(!isOpen)}
//           >
//             {isOpen ? <FaTimes /> : <FaBars />}
//             {/* Mobile button underline */}
//             <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 
//                            w-0 h-[2px] bg-gradient-to-r from-[#7C6BFF] to-[#6D5DF6] 
//                            group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
//           </button>
//         </div>

//         {/* Mobile Menu with enhanced indicators */}
//         {isOpen && (
//           <div className="lg:hidden mt-4 bg-[#0B102F]/95 backdrop-blur-lg 
//                         rounded-xl border border-white/10 shadow-2xl p-2">
//             <div className="space-y-1">
//               {navItems.map((item) => {
//                 const isActive = activeSection === item.href.substring(1);
//                 const isHighlighted = item.name === 'Skills' || item.name === 'Projects';
                
//                 return (
//                   <a
//                     key={item.name}
//                     href={item.href}
//                     className={`relative flex items-center px-4 py-3 rounded-lg font-medium
//                              transition-all duration-300 group ${
//                                isActive 
//                                  ? 'bg-gradient-to-r from-[#7C6BFF]/20 to-[#6D5DF6]/20 text-white' 
//                                  : isHighlighted
//                                    ? 'bg-[#7C6BFF]/10 text-[#7C6BFF] hover:text-white hover:bg-[#7C6BFF]/20 border border-[#7C6BFF]/30'
//                                    : 'text-[#A5AEC0] hover:text-white hover:bg-white/5'
//                              }`}
//                     onClick={() => {
//                       setActiveSection(item.href.substring(1));
//                       setIsOpen(false);
//                     }}
//                   >
//                     {/* Active indicator dot */}
//                     <span className={`w-2 h-2 mr-3 rounded-full transition-all duration-300 ${
//                       isActive 
//                         ? 'bg-gradient-to-r from-[#7C6BFF] to-[#6D5DF6] scale-125' 
//                         : isHighlighted
//                           ? 'bg-[#7C6BFF] group-hover:bg-[#7C6BFF] group-hover:scale-125'
//                           : 'bg-[#7C6BFF]/30 group-hover:bg-[#7C6BFF] group-hover:scale-125'
//                     }`}></span>
                    
//                     {item.name}
                    
//                     {/* Highlight badge for Skills and Projects */}
//                     {isHighlighted && !isActive && (
//                       <span className="ml-2 px-2 py-0.5 text-xs bg-[#7C6BFF]/20 text-[#7C6BFF] rounded-full">
//                         Featured
//                       </span>
//                     )}
                    
//                     {/* Active underline for mobile */}
//                     {isActive && (
//                       <span className="absolute bottom-0 left-4 right-4 h-[2px] bg-gradient-to-r from-[#7C6BFF] to-[#6D5DF6] rounded-full"></span>
//                     )}
                    
//                     {/* Arrow indicator */}
//                     <span className={`ml-auto transition-all duration-300 ${
//                       isActive ? 'text-[#7C6BFF] translate-x-0' : 'opacity-0 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2'
//                     }`}>
//                       →
//                     </span>
//                   </a>
//                 );
//               })}
              
//               {/* Mobile Social Links with underline */}
//               <div className="pt-6 mt-4 border-t border-white/10">
//                 <div className="flex justify-center space-x-6 mb-6">
//                   {socialLinks.map((link, index) => (
//                     <a
//                       key={index}
//                       href={link.href}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className="relative text-2xl text-[#A5AEC0] hover:text-white 
//                                transition-colors duration-300 p-2 group"
//                       onClick={() => setIsOpen(false)}
//                     >
//                       <span className="relative z-10 group-hover:scale-110 transition-transform duration-300">
//                         {link.icon}
//                       </span>
//                       <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 
//                                      w-0 h-[1px] bg-gradient-to-r from-[#7C6BFF] to-[#6D5DF6] 
//                                      group-hover:w-3/4 transition-all duration-300 rounded-full"></span>
//                     </a>
//                   ))}
//                 </div>
                
//                 {/* Mobile Hire Me Button */}
//                 <a
//                   href="#contact"
//                   className="block w-full text-center px-4 py-3.5 rounded-lg font-medium
//                            bg-gradient-to-r from-[#7C6BFF] to-[#6D5DF6] 
//                            text-white hover:shadow-[0_0_20px_rgba(124,107,255,0.3)]
//                            transition-all duration-300 relative overflow-hidden group"
//                   onClick={() => {
//                     setActiveSection('contact');
//                     setIsOpen(false);
//                   }}
//                 >
//                   <span className="absolute inset-0 bg-gradient-to-r from-[#8B7CFF] to-[#7C6BFF] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
//                   <span className="relative z-10 flex items-center justify-center">
//                     Hire Me
//                     <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
//                   </span>
//                 </a>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Add custom animations */}
//       <style jsx>{`
//         @keyframes glow {
//           0%, 100% {
//             opacity: 0.1;
//           }
//           50% {
//             opacity: 0.3;
//           }
//         }
        
//         @keyframes highlightPulse {
//           0%, 100% {
//             text-shadow: 0 0 0px rgba(124,107,255,0);
//           }
//           50% {
//             text-shadow: 0 0 8px rgba(124,107,255,0.5);
//           }
//         }
        
//         .animate-glow {
//           animation: glow 2s ease-in-out infinite;
//         }
        
//         .highlight-pulse {
//           animation: highlightPulse 2s ease-in-out infinite;
//         }
//       `}</style>
//     </nav>
//   );
// };

// export default Navbar;
