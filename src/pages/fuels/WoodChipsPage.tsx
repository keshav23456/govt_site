import React from 'react';
import { CheckCircle, Leaf, Zap, Shield } from 'lucide-react';
const WoodChipsPage: React.FC = () => {
    return (
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-green-800 to-green-600 text-white py-24">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">Wood Chips</h1>
              <p className="text-xl text-green-100">
                Sustainable biomass fuel for large-scale industrial applications.
              </p>
            </div>
          </div>
        </section>
  
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Sustainable & Cost-Effective</h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Our wood chips are sourced from sustainable forestry operations and provide 
                an economical solution for large-scale biomass heating applications.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Leaf className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Sustainable Sourcing</h3>
                <p className="text-gray-600">100% certified sustainable forestry sources</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Zap className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">High Energy Output</h3>
                <p className="text-gray-600">3500 kcal/kg calorific value</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Shield className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Quality Assured</h3>
                <p className="text-gray-600">Consistent size and moisture content</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
export default WoodChipsPage;