const ConsultingPage: React.FC = () => {
    return (
      <div className="min-h-screen bg-gray-50">
        <section className="bg-gradient-to-br from-green-800 to-green-600 text-white py-24">
          <div className="container-custom">
            <div className="max-w-3xl">
              <h1 className="text-5xl font-bold mb-6">Energy Consulting</h1>
              <p className="text-xl text-green-100">
                Expert energy consulting services to optimize your biomass energy systems and improve efficiency.
              </p>
            </div>
          </div>
        </section>
  
        <section className="py-20">
          <div className="container-custom">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Our Consulting Services</h2>
              <p className="text-xl text-gray-600">Comprehensive energy solutions tailored to your needs</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-3">Energy Audits</h3>
                <p className="text-gray-600">Comprehensive assessment of your current energy usage and efficiency opportunities.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-3">System Optimization</h3>
                <p className="text-gray-600">Fine-tuning existing systems for maximum performance and cost savings.</p>
              </div>
              
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                <h3 className="text-xl font-bold mb-3">ROI Analysis</h3>
                <p className="text-gray-600">Detailed financial analysis to demonstrate return on investment.</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  };
export default ConsultingPage;