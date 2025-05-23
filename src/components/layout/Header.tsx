import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown, Leaf } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [currentPath, setCurrentPath] = useState('/');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const handleDropdownEnter = (dropdown) => {
    setActiveDropdown(dropdown);
  };

  const handleDropdownLeave = () => {
    setActiveDropdown(null);
  };

  const handleNavClick = (path) => {
    setCurrentPath(path);
    setIsOpen(false);
    setActiveDropdown(null);
  };

  const Logo = ({ size = 24, color }) => (
    <Leaf size={size} className={color ? `text-${color}` : 'text-primary-500'} />
  );

  const productLinks = [
    { name: 'Steam Boilers', path: '/products/steam-boilers', description: 'Industrial steam generation systems' },
    { name: 'Hot Air Generators', path: '/products/hot-air-generators', description: 'Efficient heating solutions' },
    { name: 'Steam Generators', path: '/products/steam-generators', description: 'Compact steam production' },
    { name: 'Thermic Fluid Heaters', path: '/products/thermic-fluid', description: 'Heat transfer systems' },
    { name: 'Hot Water Generators', path: '/products/hot-water-generators', description: 'Commercial water heating' }
  ];

  const serviceLinks = [
    { name: 'Installation Services', path: '/services/installation', description: 'Professional system setup' },
    { name: 'Maintenance & Support', path: '/services/maintenance', description: '24/7 technical support' },
    { name: 'Energy Consulting', path: '/services/consulting', description: 'Efficiency optimization' },
    { name: 'Custom Solutions', path: '/services/custom-solutions', description: 'Tailored biomass systems' }
  ];

  const fuelLinks = [
    { name: 'Biomass Briquettes', path: '/fuels/briquettes', description: 'High-density fuel blocks' },
    { name: 'Wood Pellets', path: '/fuels/pellets', description: 'Premium wood pellets' },
    { name: 'Wood Chips', path: '/fuels/wood-chips', description: 'Industrial biomass fuel' },
    { name: 'CNS Biomass', path: '/fuels/cns', description: 'Coconut shell biomass' }
  ];

  const MegaDropdown = ({ 
    title, 
    links, 
    isActive 
  }) => (
    <div className="relative group">
      <button
        className={`nav-link font-medium hover:text-primary-500 flex items-center transition-all duration-300 ${
          isActive ? 'text-primary-500' : ''
        }`}
        onMouseEnter={() => handleDropdownEnter(title)}
      >
        {title}
        <ChevronDown className={`ml-1 h-4 w-4 transition-transform duration-300 ${
          activeDropdown === title ? 'rotate-180' : ''
        }`} />
      </button>
      
      <div
        className={`absolute left-0 mt-2 w-80 bg-white rounded-xl shadow-2xl border border-gray-100 transition-all duration-300 transform ${
          activeDropdown === title 
            ? 'opacity-100 visible translate-y-0' 
            : 'opacity-0 invisible -translate-y-4'
        }`}
        onMouseEnter={() => handleDropdownEnter(title)}
        onMouseLeave={handleDropdownLeave}
      >
        <div className="p-4">
          <div className="grid gap-2">
            {links.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavClick(link.path)}
                className="group block p-3 rounded-lg hover:bg-primary-50 transition-all duration-200 text-left w-full"
              >
                <div className="flex items-start">
                  <div className="flex-1">
                    <div className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                      {link.name}
                    </div>
                    <div className="text-sm text-gray-500 mt-1">
                      {link.description}
                    </div>
                  </div>
                  <ChevronDown className="h-4 w-4 text-gray-400 rotate-[-90deg] group-hover:text-primary-500 transition-colors" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-500 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-4">
        <div className="flex items-center justify-between">
          <button 
            onClick={() => handleNavClick('/')}
            className="flex items-center group"
          >
            <div className="transition-transform duration-300 group-hover:scale-110">
              <Logo size={40} />
            </div>
            <span className="ml-3 text-xl font-bold text-primary-800 transition-colors duration-300 group-hover:text-primary-600">
              Nature Biomass
            </span>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <button 
              onClick={() => handleNavClick('/')}
              className={`nav-link font-medium hover:text-primary-500 transition-all duration-300 ${
                currentPath === '/' ? 'text-primary-500' : ''
              }`}
            >
              Home
            </button>
            
            <button 
              onClick={() => handleNavClick('/about')}
              className={`nav-link font-medium hover:text-primary-500 transition-all duration-300 ${
                currentPath === '/about' ? 'text-primary-500' : ''
              }`}
            >
              About Us
            </button>

            <MegaDropdown 
              title="Products" 
              links={productLinks} 
              isActive={currentPath.startsWith('/products')} 
            />

            <MegaDropdown 
              title="Services" 
              links={serviceLinks} 
              isActive={currentPath.startsWith('/services')} 
            />

            <MegaDropdown 
              title="Biomass Fuels" 
              links={fuelLinks} 
              isActive={currentPath.startsWith('/fuels')} 
            />

            <button 
              onClick={() => handleNavClick('/team')}
              className={`nav-link font-medium hover:text-primary-500 transition-all duration-300 ${
                currentPath === '/team' ? 'text-primary-500' : ''
              }`}
            >
              Team
            </button>
            
            <button 
              onClick={() => handleNavClick('/research')}
              className={`nav-link font-medium hover:text-primary-500 transition-all duration-300 ${
                currentPath === '/research' ? 'text-primary-500' : ''
              }`}
            >
              Research
            </button>
          </nav>

          <div className="hidden lg:block">
            <button 
              onClick={() => handleNavClick('/contact')}
              className="btn-primary shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex items-center p-2 rounded-lg hover:bg-gray-100 transition-colors duration-200"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-xl border-t border-gray-100 transition-all duration-500 ease-in-out ${
          isOpen 
            ? 'opacity-100 visible translate-y-0' 
            : 'opacity-0 invisible -translate-y-full'
        }`}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl py-6">
          <nav className="flex flex-col space-y-4">
            <button 
              onClick={() => handleNavClick('/')}
              className="py-3 font-medium hover:text-primary-500 transition-colors duration-200 border-b border-gray-100 text-left"
            >
              Home
            </button>
            <button 
              onClick={() => handleNavClick('/about')}
              className="py-3 font-medium hover:text-primary-500 transition-colors duration-200 border-b border-gray-100 text-left"
            >
              About Us
            </button>

            {/* Mobile Products Menu */}
            <div className="py-3 border-b border-gray-100">
              <div className="font-medium text-gray-900 mb-3">Products</div>
              <div className="pl-4 space-y-2">
                {productLinks.map((link) => (
                  <button
                    key={link.path}
                    onClick={() => handleNavClick(link.path)}
                    className="block py-2 text-gray-600 hover:text-primary-500 transition-colors duration-200 text-left w-full"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Services Menu */}
            <div className="py-3 border-b border-gray-100">
              <div className="font-medium text-gray-900 mb-3">Services</div>
              <div className="pl-4 space-y-2">
                {serviceLinks.map((link) => (
                  <button
                    key={link.path}
                    onClick={() => handleNavClick(link.path)}
                    className="block py-2 text-gray-600 hover:text-primary-500 transition-colors duration-200 text-left w-full"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Mobile Fuels Menu */}
            <div className="py-3 border-b border-gray-100">
              <div className="font-medium text-gray-900 mb-3">Biomass Fuels</div>
              <div className="pl-4 space-y-2">
                {fuelLinks.map((link) => (
                  <button
                    key={link.path}
                    onClick={() => handleNavClick(link.path)}
                    className="block py-2 text-gray-600 hover:text-primary-500 transition-colors duration-200 text-left w-full"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={() => handleNavClick('/team')}
              className="py-3 font-medium hover:text-primary-500 transition-colors duration-200 border-b border-gray-100 text-left"
            >
              Team
            </button>
            <button 
              onClick={() => handleNavClick('/research')}
              className="py-3 font-medium hover:text-primary-500 transition-colors duration-200 border-b border-gray-100 text-left"
            >
              Research
            </button>
            <button 
              onClick={() => handleNavClick('/contact')}
              className="btn-primary text-center mt-4 transform hover:scale-105 transition-all duration-300"
            >
              Contact Us
            </button>
          </nav>
        </div>
      </div>

      <style jsx>{`
        .nav-link {
          position: relative;
          color: #374151;
          transition: color 0.2s;
        }
        
        .nav-link:hover {
          color: #48944f;
        }
        
        .nav-link::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 0;
          height: 2px;
          background-color: #48944f;
          transition: width 0.3s;
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .btn-primary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.75rem 1.5rem;
          font-weight: 500;
          border-radius: 0.5rem;
          background-color: #48944f;
          color: white;
          transition: all 0.3s;
          border: none;
          cursor: pointer;
        }
        
        .btn-primary:hover {
          background-color: #377740;
          transform: scale(1.05);
        }
        
        .container {
          max-width: 1280px;
          margin: 0 auto;
          padding: 0 1rem;
        }
        
        @media (min-width: 640px) {
          .container {
            padding: 0 1.5rem;
          }
        }
        
        @media (min-width: 1024px) {
          .container {
            padding: 0 2rem;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;