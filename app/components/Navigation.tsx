"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ${
      isScrolled ? 'top-2' : 'top-4'
    }`}>
      <div className={`mx-auto px-6 transition-all duration-300 ${
        isScrolled ? 'max-w-6xl' : 'max-w-7xl'
      }`}>
        <div className={`flex items-center justify-between rounded-2xl transition-all duration-300 ${
          isScrolled 
            ? 'bg-white/95 backdrop-blur-xl shadow-xl border border-border/20 h-14' 
            : 'bg-white/80 backdrop-blur-lg shadow-lg h-16'
        } px-6`}>
          <div className="flex-shrink-0">
            <Link href="/" className="block group">
              <Image
                src="/northstar_logo.jpg"
                alt="Northstar Logo"
                width={isScrolled ? 32 : 40}
                height={isScrolled ? 32 : 40}
                className="rounded-lg transition-all duration-300 group-hover:scale-110"
                priority
              />
            </Link>
          </div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              href="/about" 
              className="text-secondary-600 hover:text-primary transition-colors duration-200 font-medium relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/services" 
              className="text-secondary-600 hover:text-primary transition-colors duration-200 font-medium relative group"
            >
              Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/gallery" 
              className="text-secondary-600 hover:text-primary transition-colors duration-200 font-medium relative group"
            >
              Gallery
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <Link 
              href="/contact" 
              className="text-secondary-600 hover:text-primary transition-colors duration-200 font-medium relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-200 group-hover:w-full"></span>
            </Link>
            <a 
              href="tel:416-356-8269" 
              className="bg-primary hover:bg-primary-600 text-white px-4 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 shadow-md hover:shadow-lg transform hover:scale-105 flex items-center justify-center"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
            </a>
          </nav>
          
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className="text-secondary hover:text-primary focus:outline-none transition-colors duration-200 p-2"
            >
              <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-2 mx-6">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-xl border border-border/20 py-4">
            <div className="space-y-2 px-4">
              <Link 
                href="/about" 
                className="block px-4 py-3 rounded-xl text-base font-medium text-secondary hover:text-primary hover:bg-surface/50 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                About
              </Link>
              <Link 
                href="/services" 
                className="block px-4 py-3 rounded-xl text-base font-medium text-secondary hover:text-primary hover:bg-surface/50 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Services
              </Link>
              <Link 
                href="/gallery" 
                className="block px-4 py-3 rounded-xl text-base font-medium text-secondary hover:text-primary hover:bg-surface/50 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Gallery
              </Link>
              <Link 
                href="/contact" 
                className="block px-4 py-3 rounded-xl text-base font-medium text-secondary hover:text-primary hover:bg-surface/50 transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </Link>
              <div className="pt-2 border-t border-border/20">
                <a 
                  href="tel:416-356-8269" 
                  className="flex items-center justify-center px-4 py-3 rounded-xl text-base font-semibold text-white bg-primary hover:bg-primary-600 transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <svg className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                  </svg>
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navigation;

