import React from 'react';
import { CheckCircle, Leaf, Zap, Shield } from 'lucide-react';
const CNSPage: React.FC = () => {
    return (
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-orange-800 to-orange-600 text-white py-24">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">CNS Biomass</h1>
              <p className="text-xl text-orange-100">
                Premium coconut shell biomass for superior energy generation.
              </p>
            </div>
          </div>
        </section>
  
        <section className="py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.pexels.com/photos/4440173/pexels-photo-4440173.jpeg"
                  alt="CNS Biomass"
                  className="rounded-xl shadow-2xl w-full h-auto"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Superior Energy Performance</h2>
                <p className="text-lg text-gray-600 mb-6">
                  Coconut Shell (CNS) biomass offers exceptional energy density and clean burning 
                  characteristics, making it ideal for industrial power generation applications.
                </p>
                
                <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
                  <h3 className="text-xl font-bold mb-4">Performance Metrics</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between">
                      <span className="font-medium">Calorific Value:</span>
                      <span className="text-orange-600 font-bold">4800 kcal/kg</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Ash Content:</span>
                      <span className="text-orange-600 font-bold"> 4%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Moisture:</span>
                      <span className="text-orange-600 font-bold"> 12%</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="font-medium">Bulk Density:</span>
                      <span className="text-orange-600 font-bold">550-650 kg/m³</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex space-x-4">
                  <button className="btn-primary">Request Sample</button>
                  <button className="btn-outline">Get Quote</button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
export default CNSPage;