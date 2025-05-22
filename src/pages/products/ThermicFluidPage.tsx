import React from 'react';

const ThermicFluidPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Thermic Fluid Heaters</h1>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 mb-4">
          Our thermic fluid heaters are designed to provide efficient and reliable heat transfer solutions for industrial processes. These systems use specialized heat transfer fluids to deliver precise temperature control and optimal thermal efficiency.
        </p>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>High thermal efficiency with minimal heat loss</li>
            <li>Precise temperature control for sensitive processes</li>
            <li>Low maintenance requirements and long service life</li>
            <li>Compatible with various heat transfer fluids</li>
            <li>Advanced safety features and monitoring systems</li>
          </ul>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Applications</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Chemical processing</li>
              <li>Pharmaceutical manufacturing</li>
              <li>Food processing</li>
              <li>Textile industry</li>
              <li>Plastic and rubber manufacturing</li>
            </ul>
          </div>
          
          <div className="bg-gray-50 rounded-lg p-6">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Technical Specifications</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>Temperature range: 50°C to 350°C</li>
              <li>Capacity: 100,000 to 2,000,000 kcal/hr</li>
              <li>Pressure rating: Up to 10 bar</li>
              <li>Fuel options: Natural gas, LPG, or biomass</li>
              <li>Automated control systems</li>
            </ul>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Request Information</h2>
          <p className="mb-4">
            Contact our team for detailed specifications, pricing, and customization options for our thermic fluid heaters.
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Contact Sales
          </button>
        </div>
      </div>
    </div>
  );
};

export default ThermicFluidPage;