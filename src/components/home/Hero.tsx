import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Player } from '@lottiefiles/react-lottie-player';
import { useInView } from 'react-intersection-observer';
import Particles from 'react-particles';
import { loadSlim } from 'tsparticles-slim';
import { Tilt } from 'react-tilt';
import { Leaf } from 'lucide-react';

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
  const particlesInit = async (engine: any) => {
    await loadSlim(engine);
  };

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const defaultTiltOptions = {
    reverse: false,
    max: 15,
    perspective: 1000,
    scale: 1.05,
    speed: 1000,
    transition: true,
    axis: null,
    reset: true,
    easing: "cubic-bezier(.03,.98,.52,.99)",
  };

  return (
    <section 
      ref={ref}
      className="relative bg-cover bg-center h-[90vh] min-h-[600px] flex items-center overflow-hidden"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <Particles
        id="hero-particles"
        init={particlesInit}
        options={{
          particles: {
            number: { value: 50, density: { enable: true, value_area: 800 } },
            color: { value: "#ffffff" },
            opacity: { value: 0.5, random: true },
            size: { value: 3, random: true },
            move: {
              enable: true,
              speed: 2,
              direction: "none",
              random: true,
              straight: false,
              outModes: { default: "out" }
            }
          }
        }}
        className="absolute inset-0 pointer-events-none"
      />
      
      <div className="absolute inset-0 bg-black opacity-60"></div>
      
      <div className="container-custom relative z-10 text-white">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white leading-tight">
              {title}
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-xl md:text-2xl mb-8 text-gray-100 max-w-2xl">
              {subtitle}
            </p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <Tilt options={defaultTiltOptions}>
              <Link 
                to={ctaLink} 
                className="btn-accent text-center relative overflow-hidden group"
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Leaf className="w-5 h-5" />
                  {ctaText}
                </span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 opacity-10"></div>
              </Link>
            </Tilt>

            <Tilt options={defaultTiltOptions}>
              <Link 
                to="/research" 
                className="btn-outline border-white text-white hover:bg-white/10 text-center relative overflow-hidden group"
              >
                <span className="relative z-10">Research & Development</span>
                <div className="absolute inset-0 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300 opacity-10"></div>
              </Link>
            </Tilt>
          </motion.div>
        </div>

        <motion.div
          className="absolute right-10 bottom-10 w-48 h-48"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
        >
          <Player
            autoplay
            loop
            src="https://lottie.host/2b6ee0ad-9f2b-4f69-a1f7-8bd9f64a79f4/uXBGZrJJrE.json"
            style={{ width: '100%', height: '100%' }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;