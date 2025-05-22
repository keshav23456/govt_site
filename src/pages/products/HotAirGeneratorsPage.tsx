import React from 'react';

const HotAirGeneratorsPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Hot Air Generators</h1>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 mb-4">
          Our industrial hot air generators are designed to provide efficient and reliable heating solutions
          for various industrial applications. These systems utilize advanced technology to generate and
          distribute hot air effectively throughout your facility.
        </p>
        
        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Key Features</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>High thermal efficiency</li>
          <li>Precise temperature control</li>
          <li>Robust construction for industrial use</li>
          <li>Low maintenance requirements</li>
          <li>Compatible with various fuel types</li>
        </ul>

        <h2 className="text-2xl font-semibold text-gray-800 mt-8 mb-4">Applications</h2>
        <ul className="list-disc pl-6 mb-6">
          <li>Industrial drying processes</li>
          <li>Space heating</li>
          <li>Process heating</li>
          <li>Agricultural applications</li>
          <li>Manufacturing facilities</li>
        </ul>

        <div className="bg-gray-50 p-6 rounded-lg mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4">Technical Specifications</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <p className="font-medium">Temperature Range:</p>
              <p className="text-gray-600">50°C - 300°C</p>
            </div>
            <div>
              <p className="font-medium">Capacity Range:</p>
              <p className="text-gray-600">100,000 - 2,000,000 kcal/hr</p>
            </div>
            <div>
              <p className="font-medium">Fuel Options:</p>
              <p className="text-gray-600">Biomass, Oil, Gas</p>
            </div>
            <div>
              <p className="font-medium">Control System:</p>
              <p className="text-gray-600">PLC-based automation</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HotAirGeneratorsPage;