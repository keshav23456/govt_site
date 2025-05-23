import React from 'react';
import { CheckCircle, Leaf, Zap, Shield } from 'lucide-react';

const BriquettesPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary-800 to-primary-600 text-white py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Biomass Briquettes</h1>
            <p className="text-xl text-primary-100">
              Densified blocks made from agricultural waste—ideal for replacing coal in boilers and kilns.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.pexels.com/photos/6976103/pexels-photo-6976103.jpeg"
                alt="Biomass Briquettes"
                className="rounded-xl shadow-2xl w-full h-auto"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-6">Technical Specifications</h2>
              <div className="bg-white p-6 rounded-xl shadow-lg mb-6">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h3 className="font-semibold text-gray-800">Calorific Value</h3>
                    <p className="text-primary-600 font-bold">4800 kcal/kg</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Moisture Content</h3>
                    <p className="text-primary-600 font-bold"> 10%</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Ash Content</h3>
                    <p className="text-primary-600 font-bold">5%</p>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Bulk Density</h3>
                    <p className="text-primary-600 font-bold">700-800 kg/m³</p>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-4">Key Advantages</h3>
              <div className="space-y-3">
                {[
                  'High density and consistent quality',
                  'Low moisture content',
                  'Reduced storage space requirement',
                  'Easy handling and transportation',
                  'Lower emissions compared to coal'
                ].map((advantage, idx) => (
                  <div key={idx} className="flex items-start">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3 mt-0.5" />
                    <span className="text-gray-700">{advantage}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="text-3xl font-bold text-center mb-12">Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              'Industrial boilers',
              'Brick kilns', 
              'Food processing industries',
              'Textile industries'
            ].map((application, idx) => (
              <div key={idx} className="bg-gray-50 p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-8 h-8 text-primary-600" />
                </div>
                <h3 className="text-lg font-semibold">{application}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};
export default BriquettesPage;

