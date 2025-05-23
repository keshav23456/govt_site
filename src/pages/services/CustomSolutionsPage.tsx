import React from 'react';
import { Settings, CheckCircle, Clock, Users } from 'lucide-react';
const CustomSolutionsPage: React.FC = () => {
    return (
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-purple-800 to-purple-600 text-white py-24">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">Custom Solutions</h1>
              <p className="text-xl text-purple-100">
                Tailored biomass systems designed specifically for your unique requirements and applications.
              </p>
            </div>
          </div>
        </section>
  
        <section className="py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Bespoke Engineering Solutions</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Every facility has unique requirements. Our engineering team designs custom biomass solutions 
                  that perfectly match your specific needs, operational constraints, and performance goals.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <span>Custom system design and engineering</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <span>Integration with existing infrastructure</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <span>Scalable and future-proof solutions</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-6 h-6 text-green-500 mr-3" />
                    <span>Turnkey project delivery</span>
                  </div>
                </div>
              </div>
              <div className="rounded-lg overflow-hidden shadow-xl">
                <img 
                  src="https://images.pexels.com/photos/2280571/pexels-photo-2280571.jpeg"
                  alt="Custom solutions"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
export default CustomSolutionsPage;