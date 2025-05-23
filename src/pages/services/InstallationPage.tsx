import React from 'react';
import { Settings, CheckCircle, Clock, Users } from 'lucide-react';

const InstallationPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="bg-gradient-to-br from-primary-800 to-primary-600 text-white py-24">
        <div className="container-custom">
          <div className="max-w-3xl">
            <h1 className="text-5xl font-bold mb-6">Installation Services</h1>
            <p className="text-xl text-primary-100">
              Professional installation and commissioning of biomass systems with expert guidance throughout the process.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Professional Installation Process</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Settings className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-2">Site Assessment</h3>
                    <p className="text-gray-600">Comprehensive evaluation of your facility to ensure optimal system placement and performance.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-2">System Integration</h3>
                    <p className="text-gray-600">Seamless integration with your existing infrastructure and utilities.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Users className="w-6 h-6 text-primary-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold mb-2">Training & Support</h3>
                    <p className="text-gray-600">Comprehensive operator training and ongoing technical support.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img 
                src="https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg"
                alt="Installation process"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default InstallationPage;