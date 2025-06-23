import React, {useState, useEffect, use} from 'react'
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollPositionY, setScrollPositionY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPositionY(window.scrollPositionY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    }, []);


  return (
    <nav className='fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md borer-b border-stone-200'>
      <div className='max-w-8xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16'>
          <div className='font-coromorant text-2xl font-bold text-charcoal'>
            Art Aesthete
          </div>

          <div className='hidden md:flex space-x-8 font-montserrat font-light'>
            <a href='#home' className='text-stone-700 hover:text-muted-brown transition-colors'>
              Home
            </a>
            <a href='#gallery' className='text-stone-700 hover:text-muted-brown transition-colors'>
              Gallery
            </a>
            <a href='#about' className='text-stone-700 hover:text-muted-brown transition-colors'>
              About
            </a>
            <a href='#contact' className='text-stone-700 hover:text-muted-brown transition-colors'>
              Contact
            </a>
          </div>

          <button className='md:hidden' onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size = {24} /> : <Menu size = {24} />}
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className='md:hidden bg-white border-t border-stone-200'>
          <div className='px-2 pt-2 pb-3 space-y-1'>
            <a href='#home' className='block px-3 py-2 text-stone-700 font-montserrat hover:text-muted-brown transition-colors'>
              Home
            </a>
            <a href='#gallery' className='block px-3 py-2 text-stone-700 font-montserrat hover:text-muted-brown transition-colors'>
              Gallery
            </a>
            <a href='#about' className='block px-3 py-2 text-stone-700 font-montserrat hover:text-muted-brown transition-colors'>
              About
            </a>
            <a href='#contact' className='block px-3 py-2 text-stone-700 font-montserrat hover:text-muted-brown transition-colors'>
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>   
  );
};

export default Navbar;