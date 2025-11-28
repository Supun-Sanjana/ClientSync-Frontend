import { Menu, X } from 'lucide-react';
import React from 'react'
import { Link } from 'react-router';

const Navbar = () => {
  
    const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <img src="./ClientSync.png" alt="ClientSync logo" className='w-11 h-11' />
            <span className="font-bold text-xl text-slate-900 tracking-tight">ClientSync CRM</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-slate-600 hover:text-indigo-600 transition">Features</a>
            <a href="#pricing" className="text-slate-600 hover:text-indigo-600 transition">Pricing</a>
            <Link to="/login" className="bg-indigo-600 text-white px-5 py-2 rounded-full font-medium hover:bg-indigo-700 transition shadow-lg shadow-indigo-200">
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-slate-600">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full">
          <div className="px-4 pt-2 pb-6 space-y-2 shadow-lg">
            <a href="#features" className="block py-2 text-slate-600">Features</a>
            <a href="#pricing" className="block py-2 text-slate-600">Pricing</a>
            <Link to="/clients" className='w-full mt-4 bg-indigo-600 text-white py-3 rounded-lg font-medium'>Get Started</Link>
            
          </div>
        </div>
      )}
    </nav>
  );
  
}

export default Navbar