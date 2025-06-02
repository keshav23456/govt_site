import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Hero from '../components/home/Hero';
import ProductsGrid from '../components/home/ProductsGrid';
import StatsBanner from '../components/home/StatsBanner';
import PartnersCarousel from '../components/home/PartnersCarousel';
import NewsletterForm from '../components/forms/NewsletterForm';

gsap.registerPlugin(ScrollTrigger);

const HomePage: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  const stats = [
    {
      number: "46%",
      label: "Biofuel Production ↑",
      description: "Increase in sustainable biofuel production through our solutions"
    },
    {
      number: "$117B",
      label: "Market Value",
      description: "Projected biomass market value by 2030"
    },
    {
      number: "3.5%",
      label: "Transport Energy Share",
      description: "Biomass contribution to global transport energy"
    },
    {
      number: "72%",
      label: "Emission Reduction",
      description: "Average CO2 reduction achieved with our systems"
    }
  ];

  useEffect(() => {
    // Parallax effect for sections
    gsap.utils.toArray('.parallax-section').forEach((section: any) => {
      gsap.to(section, {
        y: 50,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true
        }
      });
    });

    // Fade in animations for sections
    gsap.utils.toArray('.fade-in-section').forEach((section: any) => {
      gsap.from(section, {
        opacity: 0,
        y: 50,
        duration: 1,
        scrollTrigger: {
          trigger: section,
          start: "top 80%",
          toggleActions: "play none none reverse"
        }
      });
    });
  }, []);

  return (
    <>
      <Hero
        title="Sustainable Biomass Solutions for a Cleaner Future"
        subtitle="Leading the way in renewable energy with innovative biomass technologies that reduce emissions and increase efficiency."
        ctaText="Explore Solutions"
        ctaLink="/products"
        backgroundImage="https://images.pexels.com/photos/2559941/pexels-photo-2559941.jpeg"
      />
      
      <StatsBanner stats={stats} />

      <motion.section 
        className="section bg-white parallax-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-6">About Nature Biomass</h2>
              <p className="text-lg text-gray-600 mb-6">
                Since 2010, we've been at the forefront of sustainable energy solutions, 
                helping businesses transition to cleaner, more efficient biomass technologies. 
                Our innovative approach combines cutting-edge engineering with environmental 
                responsibility.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link to="/about" className="btn-primary">
                  Learn More About Us
                </Link>
              </motion.div>
            </motion.div>
            <motion.div 
              className="rounded-lg overflow-hidden shadow-xl"
              initial={{ x: 100, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
            >
              <img 
                src="https://images.pexels.com/photos/4491881/pexels-photo-4491881.jpeg"
                alt="About Nature Biomass"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </motion.section>
      
      <ProductsGrid />
      
      <motion.section 
        className="section bg-gray-50 fade-in-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container-custom">
          <h2 className="section-title">What Our Clients Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Nature Biomass Solutions has transformed our energy infrastructure, reducing our carbon footprint while saving us money.",
                author: "Sarah Chen",
                role: "Operations Director, GreenTech Industries",
                image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg"
              },
              {
                quote: "Their innovative approach to biomass solutions has set new standards in sustainable energy production.",
                author: "Michael Rodriguez",
                role: "CEO, EcoSystems Global",
                image: "https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg"
              },
              {
                quote: "The expertise and dedication of their team made our transition to biomass energy seamless and efficient.",
                author: "Emma Thompson",
                role: "Sustainability Manager, CleanEnergy Alliance",
                image: "https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg"
              }
            ].map((testimonial, index) => (
              <motion.div 
                key={index}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ y: -10 }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.author}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h3 className="font-semibold text-lg">{testimonial.author}</h3>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-gray-700 italic">"{testimonial.quote}"</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
      
      <PartnersCarousel />
      
      <motion.section 
        className="section bg-primary-50 fade-in-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <div className="container-custom">
          <motion.div 
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">Stay Updated</h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter to get the latest updates on biomass solutions, industry news, and exclusive offers.
            </p>
            <div className="max-w-md mx-auto">
              <NewsletterForm />
            </div>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default HomePage;