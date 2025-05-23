import React from 'react';
import { Settings, Wrench, Users, Lightbulb, Phone, CheckCircle } from 'lucide-react';

const ServicesPage = () => {
  const services = [
    {
      id: 'installation',
      title: 'Installation Services',
      description: 'Professional installation and commissioning of biomass systems with expert guidance throughout the process.',
      icon: Settings,
      features: [
        'Site assessment and planning',
        'Professional installation by certified technicians',
        'System commissioning and testing',
        'Operator training and documentation',
        'Performance optimization',
        'Compliance with local regulations'
      ],
      benefits: [
        'Guaranteed system performance',
        'Reduced installation time',
        'Professional expertise',
        'Warranty coverage'
      ]
    },
    {
      id: 'maintenance',
      title: 'Maintenance & Support',
      description: '24/7 technical support and comprehensive maintenance programs to ensure optimal system performance.',
      icon: Wrench,
      features: [
        '24/7 emergency support hotline',
        'Preventive maintenance programs',
        'Remote monitoring capabilities',
        'Spare parts inventory management',
        'Performance diagnostics',
        'Regular system inspections'
      ],
      benefits: [
        'Maximum uptime',
        'Extended equipment life',
        'Reduced operating costs',
        'Peace of mind'
      ]
    },
    {
      id: 'consulting',
      title: 'Energy Consulting',
      description: 'Expert energy consulting services to optimize your biomass energy systems and improve efficiency.',
      icon: Lightbulb,
      features: [
        'Energy audit and assessment',
        'System optimization recommendations',
        'Cost-benefit analysis',
        'Environmental impact assessment',
        'Regulatory compliance guidance',
        'ROI calculations'
      ],
      benefits: [
        'Improved efficiency',
        'Cost savings identification',
        'Environmental benefits',
        'Strategic planning'
      ]
    },
    {
      id: 'custom-solutions',
      title: 'Custom Solutions',
      description: 'Tailored biomass systems designed specifically for your unique requirements and applications.',
      icon: Users,
      features: [
        'Custom system design',
        'Application-specific solutions',
        'Integration with existing systems',
        'Scalable configurations',
        'Advanced control systems',
        'Turnkey project delivery'
      ],
      benefits: [
        'Perfect fit for needs',
        'Optimized performance',
        'Future-proof design',
        'Single-point responsibility'
      ]
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Consultation',
      description: 'Initial consultation to understand your requirements and assess your site.'
    },
    {
      step: '02',
      title: 'Design',
      description: 'Custom system design tailored to your specific needs and applications.'
    },
    {
      step: '03',
      title: 'Installation',
      description: 'Professional installation by our certified technical team.'
    },
    {
      step: '04',
      title: 'Support',
      description: 'Ongoing support and maintenance to ensure optimal performance.'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-800 via-primary-700 to-primary-600 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container-custom relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Our Services
            </h1>
            <p className="text-xl text-primary-100 mb-8">
              Comprehensive biomass energy solutions from consultation to ongoing support
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-accent transform hover:scale-105 transition-all duration-300">
                Get Started
              </button>
              <button className="btn-outline border-white text-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Complete Service Portfolio</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From initial consultation to ongoing support, we provide comprehensive services to ensure your biomass systems perform at their best.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <div 
                  key={service.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-100"
                >
                  <div className="p-8">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <div className="ml-4">
                        <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300">
                          {service.title}
                        </h3>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Key Features</h4>
                        <ul className="space-y-2">
                          {service.features.slice(0, 3).map((feature, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Benefits</h4>
                        <ul className="space-y-2">
                          {service.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start text-sm text-gray-600">
                              <CheckCircle className="w-4 h-4 text-primary-500 mr-2 mt-0.5 flex-shrink-0" />
                              {benefit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-6 pt-6 border-t border-gray-100">
                      <button className="text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200 group/btn">
                        Learn more about {service.title.toLowerCase()}
                        <span className="ml-2 transform transition-transform duration-200 group-hover/btn:translate-x-1 inline-block">→</span>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Process</h2>
            <p className="text-xl text-gray-600">
              A streamlined approach to delivering exceptional biomass solutions
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    {step.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <div className="w-8 h-0.5 bg-gradient-to-r from-primary-300 to-primary-500"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary-700/50 to-primary-500/50"></div>
        <div className="container-custom relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Get Started?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Contact our team to discuss your biomass energy needs and discover how our services can help optimize your operations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-accent transform hover:scale-105 transition-all duration-300">
                <Phone className="w-5 h-5 mr-2" />
                Contact Us Today
              </button>
              <button className="btn-outline border-white text-white hover:bg-white/10 transform hover:scale-105 transition-all duration-300">
                Request a Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;