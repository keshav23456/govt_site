import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Twitter, Linkedin, Mail } from 'lucide-react';
import Logo from '../ui/Logo';
import NewsletterForm from '../forms/NewsletterForm';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Column 1: Logo and About */}
          <div>
            <Link to="/" className="flex items-center mb-4">
              <Logo size={40} color="white" />
              <span className="ml-2 text-xl font-bold">Nature Biomass</span>
            </Link>
            <p className="text-gray-400 mb-4">
              Sustainable biomass solutions for a cleaner future. Delivering innovative renewable energy systems since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" className="text-gray-400 hover:text-primary-300" aria-label="Twitter">
                <Twitter size={20} />
              </a>
              <a href="https://instagram.com" className="text-gray-400 hover:text-primary-300" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-primary-300" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
              <a href="mailto:info@naturebiomass.com" className="text-gray-400 hover:text-primary-300" aria-label="Email">
                <Mail size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-400 hover:text-primary-300 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-400 hover:text-primary-300 transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/team" className="text-gray-400 hover:text-primary-300 transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-gray-400 hover:text-primary-300 transition-colors">
                  Research & Development
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-primary-300 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Research */}
          <div>
            <h3 className="text-lg font-bold mb-4">Research Areas</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/research" className="text-gray-400 hover:text-primary-300 transition-colors">
                  Biomass Technology
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-gray-400 hover:text-primary-300 transition-colors">
                  Sustainable Energy
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-gray-400 hover:text-primary-300 transition-colors">
                  Process Innovation
                </Link>
              </li>
              <li>
                <Link to="/research" className="text-gray-400 hover:text-primary-300 transition-colors">
                  Environmental Impact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-4">Subscribe to Our Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Stay updated with our latest news and research developments.
            </p>
            <NewsletterForm />
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="pt-8 border-t border-gray-800 mt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm mb-4 md:mb-0">
              © {new Date().getFullYear()} Nature Biomass Solutions. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy-policy" className="text-gray-500 text-sm hover:text-primary-300">
                Privacy Policy
              </Link>
              <Link to="/terms-of-service" className="text-gray-500 text-sm hover:text-primary-300">
                Terms of Service
              </Link>
              <Link to="/sitemap" className="text-gray-500 text-sm hover:text-primary-300">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;