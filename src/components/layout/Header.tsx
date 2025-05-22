import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import Logo from '../ui/Logo';

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [productsDropdownOpen, setProductsDropdownOpen] = useState(false);
  const [fuelsDropdownOpen, setFuelsDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setProductsDropdownOpen(false);
    setFuelsDropdownOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const productLinks = [
    { name: 'Steam Boilers', path: '/products/steam-boilers' },
    { name: 'Wood Fired Hot Air Generators', path: '/products/hot-air-generators' },
    { name: 'Electric Hot Water Boilers', path: '/products/electric-hot-water' },
    { name: 'Steam Generators', path: '/products/steam-generators' },
    { name: 'Thermic Fluid Heater', path: '/products/thermic-fluid' },
    { name: 'Hot Water Generators', path: '/products/hot-water-generators' },
  ];

  const fuelLinks = [
    { name: 'Biomass Briquettes', path: '/fuels/briquettes' },
    { name: 'Biomass Pellets', path: '/fuels/pellets' },
    { name: 'Biomass Wood Chips', path: '/fuels/wood-chips' },
    { name: 'Cashew Nuts Shell (CNS)', path: '/fuels/cashew-nut-shell' },
  ];

  return (
    <header 
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md' : 'bg-transparent'
      }`}
    >
      <div className="container-custom py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <Logo size={40} />
            <span className="ml-2 text-xl font-bold text-primary-800">Nature Biomass</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link to="/" className="nav-link font-medium hover:text-primary-500">
              Home
            </Link>
            <Link to="/about" className="nav-link font-medium hover:text-primary-500">
              About Us
            </Link>

            {/* Products Dropdown */}
            <div className="relative group">
              <button
                className="nav-link font-medium hover:text-primary-500 flex items-center"
                onMouseEnter={() => setProductsDropdownOpen(true)}
                onMouseLeave={() => setProductsDropdownOpen(false)}
              >
                Products & Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {productsDropdownOpen && (
                <div
                  className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2"
                  onMouseEnter={() => setProductsDropdownOpen(true)}
                  onMouseLeave={() => setProductsDropdownOpen(false)}
                >
                  {productLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-4 py-2 text-gray-800 hover:bg-primary-50 hover:text-primary-600"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Biomass Fuels Dropdown */}
            <div className="relative group">
              <button
                className="nav-link font-medium hover:text-primary-500 flex items-center"
                onMouseEnter={() => setFuelsDropdownOpen(true)}
                onMouseLeave={() => setFuelsDropdownOpen(false)}
              >
                Biomass Fuels
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {fuelsDropdownOpen && (
                <div
                  className="absolute left-0 mt-2 w-64 bg-white rounded-lg shadow-lg py-2"
                  onMouseEnter={() => setFuelsDropdownOpen(true)}
                  onMouseLeave={() => setFuelsDropdownOpen(false)}
                >
                  {fuelLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block px-4 py-2 text-gray-800 hover:bg-primary-50 hover:text-primary-600"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/team" className="nav-link font-medium hover:text-primary-500">
              Team
            </Link>
            <Link to="/research" className="nav-link font-medium hover:text-primary-500">
              Research & Development
            </Link>
          </nav>

          <div className="hidden lg:block">
            <Link to="/contact" className="btn-primary">
              Contact Us
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden flex items-center p-2"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`lg:hidden absolute top-full left-0 w-full bg-white shadow-md transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-y-0' : '-translate-y-full'
        }`}
      >
        <div className="container mx-auto py-4 px-4">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="py-2 font-medium hover:text-primary-500">
              Home
            </Link>
            <Link to="/about" className="py-2 font-medium hover:text-primary-500">
              About Us
            </Link>

            {/* Mobile Products Menu */}
            <div className="py-2">
              <button
                className="flex items-center justify-between w-full font-medium hover:text-primary-500"
                onClick={() => setProductsDropdownOpen(!productsDropdownOpen)}
              >
                Products & Services
                <ChevronDown className="h-4 w-4" />
              </button>
              {productsDropdownOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {productLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block py-2 text-gray-800 hover:text-primary-500"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile Fuels Menu */}
            <div className="py-2">
              <button
                className="flex items-center justify-between w-full font-medium hover:text-primary-500"
                onClick={() => setFuelsDropdownOpen(!fuelsDropdownOpen)}
              >
                Biomass Fuels
                <ChevronDown className="h-4 w-4" />
              </button>
              {fuelsDropdownOpen && (
                <div className="pl-4 mt-2 space-y-2">
                  {fuelLinks.map((link) => (
                    <Link
                      key={link.path}
                      to={link.path}
                      className="block py-2 text-gray-800 hover:text-primary-500"
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link to="/team" className="py-2 font-medium hover:text-primary-500">
              Team
            </Link>
            <Link to="/research" className="py-2 font-medium hover:text-primary-500">
              Research & Development
            </Link>
            <Link to="/contact" className="btn-primary text-center mt-4">
              Contact Us
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;