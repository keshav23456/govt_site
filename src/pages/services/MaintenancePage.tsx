import React from 'react';
import { Settings, CheckCircle, Clock, Users } from 'lucide-react';
const MaintenancePage: React.FC = () => {
    return (
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-blue-800 to-blue-600 text-white py-24">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">Maintenance & Support</h1>
              <p className="text-xl text-blue-100">
                24/7 technical support and comprehensive maintenance programs to ensure optimal system performance.
              </p>
            </div>
          </div>
        </section>
  
        <section className="py-20">
          <div className="container-custom">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                  <Clock className="w-8 h-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">24/7 Support</h3>
                <p className="text-gray-600">Round-the-clock emergency support and technical assistance.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                  <Settings className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Preventive Care</h3>
                <p className="text-gray-600">Scheduled maintenance to prevent issues before they occur.</p>
              </div>
              
              <div className="bg-white p-8 rounded-xl shadow-lg">
                <div className="w-16 h-16 bg-purple-100 rounded-lg flex items-center justify-center mb-6">
                  <CheckCircle className="w-8 h-8 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold mb-4">Quality Assurance</h3>
                <p className="text-gray-600">Regular inspections and performance optimization.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
export default MaintenancePage;