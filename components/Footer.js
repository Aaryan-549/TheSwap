import React from "react";

//INTERNAL IMPORT
import { Twitter, Upwork, Insta, Logo } from "./index";

const Footer = () => {
  // Your personal links
  const projectLinks = [
    { name: "GitHub", url: "https://github.com/Aaryan-549" },
    { name: "Resume", url: "https://www.scribd.com/document/861527782/Aaryan" },
    { name: "LinkedIn", url: "https://www.linkedin.com/in/aaryan-beniwal-941833292/" }
  ];

  // Your interests or technologies
  const techStack = [
    "Solidity", "Next.js","TailwindCSS","Hardhat", "Ethereum", "Web3"
  ];

  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left side - About & Contact */}
          <div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="flex items-center justify-center w-10 h-10 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-lg">
                <Logo />
              </div>
              <span className="text-2xl font-bold tracking-tight bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent">
                TheSwap
              </span>
            </div>
            
            <p className="text-gray-400 mb-6 max-w-md">
              A decentralized exchange for swapping Pokémon-themed tokens. Built with Solidity, React, and Next.js as a personal project to demonstrate Web3 development skills.
            </p>
            
            <div className="mb-8">
              <h3 className="text-white text-sm font-medium mb-2">Get in touch:</h3>
              <a href="mailto:abeniwal_be23@thapar.edu" className="text-emerald-400 hover:text-emerald-300 transition-colors">
                abeniwal_be23@thapar.edu
              </a>
            </div>
            
            <div>
              <h3 className="text-white text-sm font-medium mb-2">Connect with me:</h3>
              <div className="flex space-x-4">
                <a href="https://x.com/0xaaryan" className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-800 hover:bg-emerald-600 transition-colors text-gray-400 hover:text-white">
                  <Twitter />
                </a>
                <a href="https://www.upwork.com/freelancers/~018adee1a7a52bc65d" className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-800 hover:bg-emerald-600 transition-colors text-gray-400 hover:text-white">
                  <Upwork />
                </a>
                <a href="https://www.instagram.com/aaryan_549/" className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-800 hover:bg-emerald-600 transition-colors text-gray-400 hover:text-white">
                  <Insta />
                </a>
                {/* GitHub icon */}
                <a href="https://github.com/Aaryan-549" className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-800 hover:bg-emerald-600 transition-colors text-gray-400 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                {/* LinkedIn icon */}
                <a href="https://www.linkedin.com/in/aaryan-beniwal-941833292/" className="flex items-center justify-center w-9 h-9 rounded-full bg-gray-800 hover:bg-emerald-600 transition-colors text-gray-400 hover:text-white">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          {/* Right side - Projects & Tech Stack */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">My Projects</h3>
              <ul className="space-y-4">
                {projectLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.url} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-emerald-400 transition-colors flex items-center">
                      <span className="inline-block mr-2 w-1.5 h-1.5 bg-emerald-500 rounded-full"></span>
                      {link.name}
                    </a>
                  </li>
                ))}
                <li className="mt-4 pt-4 border-t border-gray-800">
                  <a href="https://github.com/Aaryan-549" target="_blank" rel="noopener noreferrer" className="text-emerald-400 hover:text-emerald-300 transition-colors flex items-center">
                    <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"></path>
                    </svg>
                    View All Projects
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-white mb-6">Tech Stack</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <span key={index} className="px-3 py-1 bg-gray-800 rounded-full text-sm text-gray-300">
                    {tech}
                  </span>
                ))}
                <span className="px-3 py-1 bg-emerald-900/50 text-emerald-400 rounded-full text-sm border border-emerald-800">
                  Pokémon DEX
                </span>
              </div>
              
              {/* Source Code Link */}
              <div className="mt-8">
                <a 
                  href="https://github.com/Aaryan-549/TheSwap" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path>
                  </svg>
                  View Source Code
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-gray-800 py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-500 text-sm">
            Built by Aaryan Beniwal © {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;