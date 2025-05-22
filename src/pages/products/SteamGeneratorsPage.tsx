import React from 'react';

const SteamGeneratorsPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-6">Steam Generators</h1>
      <div className="prose max-w-none">
        <p className="text-lg text-gray-700 mb-4">
          Our industrial steam generators provide efficient and reliable steam generation for various applications.
          Built with advanced technology and robust materials, these units deliver consistent performance while
          maintaining high energy efficiency standards.
        </p>
        
        <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Key Features</h2>
          <ul className="list-disc pl-6 space-y-2">
            <li>Rapid steam generation with quick start-up times</li>
            <li>Advanced control systems for precise operation</li>
            <li>High thermal efficiency and low energy consumption</li>
            <li>Compact design for space-efficient installation</li>
            <li>Built-in safety features and monitoring systems</li>
            <li>Low maintenance requirements and long service life</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SteamGeneratorsPage;