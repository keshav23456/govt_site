import React from 'react';
import { CheckCircle, Leaf, Zap, Shield } from 'lucide-react';
const PelletsPage: React.FC = () => {
    return (
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-blue-800 to-blue-600 text-white py-24">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">Wood Pellets</h1>
              <p className="text-xl text-blue-100">
                Premium-grade wood pellets for efficient and clean energy production.
              </p>
            </div>
          </div>
        </section>
  
        <section className="py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Premium Quality Pellets</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Our wood pellets are manufactured to the highest standards, ensuring consistent quality 
                  and optimal performance in all types of pellet heating systems.
                </p>
                
                <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
                  <h3 className="text-xl font-bold mb-4">Quality Certifications</h3>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="flex items-center">
                      <Shield className="w-5 h-5 text-green-500 mr-2" />
                      <span>ENplus A1</span>
                    </div>
                    <div className="flex items-center">
                      <Shield className="w-5 h-5 text-green-500 mr-2" />
                      <span>ISO 17225-2</span>
                    </div>
                    <div className="flex items-center">
                      <Leaf className="w-5 h-5 text-green-500 mr-2" />
                      <span>FSC Certified</span>
                    </div>
                    <div className="flex items-center">
                      <Leaf className="w-5 h-5 text-green-500 mr-2" />
                      <span>PEFC Certified</span>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <img 
                  src="https://images.pexels.com/photos/6594085/pexels-photo-6594085.jpeg"
                  alt="Wood Pellets"
                  className="rounded-xl shadow-2xl w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
export default PelletsPage;
  
