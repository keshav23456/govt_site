import React from 'react';
import { ArrowRight, Flame } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-gray-900 to-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-flex items-center gap-2 bg-blue-600/10 px-4 py-2 rounded-full">
              <Flame className="w-5 h-5 text-blue-500" />
              <span className="text-blue-400 font-medium">Leading Energy Solutions</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
              Powering Tomorrow's <span className="text-blue-500">Sustainable Future</span>
            </h1>
            
            <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
              Delivering innovative energy solutions with cutting-edge technology and eco-friendly practices for a cleaner, more efficient world.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="/products"
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 transition duration-150 ease-in-out"
              >
                Explore Products
                <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a
                href="/contact"
                className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-base font-medium rounded-lg text-white hover:bg-gray-700 transition duration-150 ease-in-out"
              >
                Contact Us
              </a>
            </div>
          </div>
          
          <div className="relative">
            <div className="aspect-w-16 aspect-h-9 rounded-2xl overflow-hidden bg-gray-700/50 backdrop-blur-sm">
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-purple-600/20 mix-blend-overlay"></div>
              <div className="p-8 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <div className="w-24 h-24 mx-auto bg-blue-500/10 rounded-full flex items-center justify-center">
                    <Flame className="w-12 h-12 text-blue-400" />
                  </div>
                  <p className="text-lg font-medium text-gray-300">
                    Trusted by Industry Leaders
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;