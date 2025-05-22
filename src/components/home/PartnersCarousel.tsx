import React from 'react';
import { partners } from '../../data/partners';

const PartnersCarousel: React.FC = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container-custom">
        <h2 className="section-title">Our Partners</h2>
        <p className="section-subtitle">
          We collaborate with leading organizations committed to sustainable energy solutions.
        </p>
        
        <div className="mt-12">
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
            {partners.map((partner, index) => (
              <div 
                key={index} 
                className="w-32 h-20 md:w-40 md:h-24 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
              >
                <img 
                  src={partner.logo} 
                  alt={partner.name} 
                  className="max-h-full max-w-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PartnersCarousel;