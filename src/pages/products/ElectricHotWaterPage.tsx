import React from 'react';

const ElectricHotWaterPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Electric Hot Water Systems</h1>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 mb-4">
          Our electric hot water systems provide efficient and reliable heating solutions for industrial and commercial applications.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 my-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>High efficiency electric heating elements</li>
              <li>Advanced temperature control systems</li>
              <li>Compact design for space optimization</li>
              <li>Multiple safety features</li>
              <li>Low maintenance requirements</li>
            </ul>
          </div>
          
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Applications</h2>
            <ul className="list-disc list-inside space-y-2 text-gray-600">
              <li>Industrial process heating</li>
              <li>Commercial water heating</li>
              <li>Healthcare facilities</li>
              <li>Food and beverage industry</li>
              <li>Chemical processing</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 rounded-lg p-6 my-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Technical Specifications</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <div>
              <h3 className="font-medium text-gray-700">Power Range</h3>
              <p className="text-gray-600">10kW - 500kW</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-700">Temperature Range</h3>
              <p className="text-gray-600">20°C - 95°C</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-700">Pressure Rating</h3>
              <p className="text-gray-600">Up to 10 bar</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-700">Control System</h3>
              <p className="text-gray-600">Digital PID controller</p>
            </div>
          </div>
        </div>

        <div className="bg-blue-50 rounded-lg p-6 my-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Benefits</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="font-medium text-gray-700">Energy Efficient</h3>
              <p className="text-gray-600">High thermal efficiency with minimal heat loss</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-700">Easy Installation</h3>
              <p className="text-gray-600">Plug-and-play design for quick setup</p>
            </div>
            <div>
              <h3 className="font-medium text-gray-700">Low Maintenance</h3>
              <p className="text-gray-600">Minimal servicing requirements</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ElectricHotWaterPage;