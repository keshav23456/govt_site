import React from 'react';
import { Link } from 'react-router-dom';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage: string;
}

const Hero: React.FC<HeroProps> = ({
  title,
  subtitle,
  ctaText,
  ctaLink,
  backgroundImage,
}) => {
  return (
    <section 
      className="relative bg-cover bg-center h-[80vh] min-h-[600px] flex items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="container-custom relative z-10 text-white">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
            {title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl">
            {subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to={ctaLink} className="btn-accent text-center">
              {ctaText}
            </Link>
            <Link to="/research" className="btn-outline border-white text-white hover:bg-white/10 text-center">
              Research & Development
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;