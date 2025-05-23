import React, { useState } from 'react';
import { Leaf, Zap, Recycle, TrendingUp, ChevronRight, Filter, Search } from 'lucide-react';

interface Fuel {
  id: string;
  name: string;
  type: string;
  price: string;
  calorificValue: string;
  moisture: string;
  ash: string;
  description: string;
  image: string;
  advantages: string[];
  applications: string[];
  badge: string;
  badgeColor: string;
  sustainability: number;
}

interface FuelCardProps {
  fuel: Fuel;
}

const FuelsPage = () => {
  const [selectedType, setSelectedType] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const fuels = [
    {
      id: 'briquettes',
      name: 'Biomass Briquettes',
      type: 'Briquettes',
      price: '$180-220/ton',
      calorificValue: '4800',
      moisture: '< 10%',
      ash: '< 5%',
      description: 'Densified blocks made from agricultural waste—ideal for replacing coal in boilers and kilns.',
      image: 'https://images.pexels.com/photos/6976103/pexels-photo-6976103.jpeg',
      advantages: [
        'High density and consistent quality',
        'Low moisture content',
        'Reduced storage space requirement',
        'Easy handling and transportation',
        'Lower emissions compared to coal'
      ],
      applications: [
        'Industrial boilers',
        'Brick kilns',
        'Food processing industries',
        'Textile industries'
      ],
      badge: 'Best Seller',
      badgeColor: 'bg-green-500',
      sustainability: 95
    },
    {
      id: 'pellets',
      name: 'Wood Pellets',
      type: 'Pellets',
      price: '$200-250/ton',
      calorificValue: '4500',
      moisture: '< 10%',
      ash: '< 0.7%',
      description: 'Premium-grade wood pellets for efficient and clean energy production.',
      image: 'https://images.pexels.com/photos/6594085/pexels-photo-6594085.jpeg',
      advantages: [
        'High energy density',
        'Uniform size and quality',
        'Automated feeding systems',
        'Clean burning',
        'Sustainable source'
      ],
      applications: [
        'Residential heating',
        'Commercial buildings',
        'District heating',
        'Power plants'
      ],
      badge: 'Premium',
      badgeColor: 'bg-blue-500',
      sustainability: 90
    },
    {
      id: 'wood-chips',
      name: 'Wood Chips',
      type: 'Wood Chips',
      price: '$120-160/ton',
      calorificValue: '3500',
      moisture: '25-35%',
      ash: '< 2%',
      description: 'Sustainable biomass fuel for large-scale industrial applications.',
      image: 'https://images.pexels.com/photos/6594263/pexels-photo-6594263.jpeg',
      advantages: [
        'Cost-effective',
        'Local availability',
        'Renewable resource',
        'Suitable for large systems',
        'Flexible sourcing options'
      ],
      applications: [
        'District heating',
        'Power generation',
        'Process heat',
        'Large boiler systems'
      ],
      badge: 'Eco-Friendly',
      badgeColor: 'bg-green-600',
      sustainability: 88
    },
    {
      id: 'cns',
      name: 'CNS Biomass',
      type: 'CNS',
      price: '$190-230/ton',
      calorificValue: '4800',
      moisture: '< 12%',
      ash: '< 4%',
      description: 'Premium coconut shell biomass for superior energy generation.',
      image: 'https://images.pexels.com/photos/4440173/pexels-photo-4440173.jpeg',
      advantages: [
        'High calorific value',
        'Low ash content',
        'Consistent quality',
        'Sustainable source',
        'Clean burning'
      ],
      applications: [
        'Industrial boilers',
        'Power plants',
        'Process industries',
        'Gasification systems'
      ],
      badge: 'High Energy',
      badgeColor: 'bg-orange-500',
      sustainability: 92
    }
  ];

  const types = ['all', ...Array.from(new Set(fuels.map(fuel => fuel.type)))];

  const filteredFuels = fuels.filter(fuel => {
    const typeMatch = selectedType === 'all' || fuel.type === selectedType;
    const searchMatch = fuel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       fuel.description.toLowerCase().includes(searchTerm.toLowerCase());
    return typeMatch && searchMatch;
  });

  const FuelCard: React.FC<FuelCardProps> = ({ fuel }) => (
    <div className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-100">
      <div className="relative overflow-hidden h-64">
        <img 
          src={fuel.image} 
          alt={fuel.name} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className={`${fuel.badgeColor} text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg`}>
            {fuel.badge}
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-lg p-2">
          <div className="text-center">
            <div className="text-lg font-bold text-blue-600">{fuel.calorificValue}</div>
            <div className="text-xs text-gray-600">kcal/kg</div>
          </div>
        </div>
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-lg p-2">
            <div className="flex items-center justify-between text-sm">
              <span className="text-gray-600">Sustainability</span>
              <div className="flex items-center">
                <div className="w-16 h-2 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-green-500 transition-all duration-700"
                    style={{ width: fuel.sustainability + '%' }}
                  ></div>
                </div>
                <span className="ml-2 font-medium text-green-600">{fuel.sustainability}%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            {fuel.name}
          </h3>
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            {fuel.type}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {fuel.description}
        </p>

        <div className="grid grid-cols-3 gap-4 mb-4 bg-gray-50 p-4 rounded-lg">
          <div className="text-center">
            <div className="text-sm font-medium text-gray-700">Moisture</div>
            <div className="text-blue-600 font-bold">{fuel.moisture}</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-medium text-gray-700">Ash</div>
            <div className="text-blue-600 font-bold">{fuel.ash}</div>
          </div>
          <div className="text-center">
            <div className="text-sm font-medium text-gray-700">Price</div>
            <div className="text-blue-600 font-bold text-sm">{fuel.price}</div>
          </div>
        </div>

        <div className="mb-4">
          <h4 className="font-semibold text-gray-800 mb-2">Key Applications</h4>
          <div className="flex flex-wrap gap-2">
            {fuel.applications.slice(0, 3).map((app: string, idx: number) => (
              <span 
                key={idx}
                className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
              >
                {app}
              </span>
            ))}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <button 
            type="button"
            className="text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200 flex items-center group/btn"
          >
            Learn More
            <ChevronRight className="ml-1 w-4 h-4 transition-transform duration-200 group-hover/btn:translate-x-1" />
          </button>
          <div className="flex space-x-2">
            <button 
              type="button"
              className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200"
            >
              Sample
            </button>
            <button 
              type="button"
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-800 via-blue-700 to-blue-600 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-white leading-tight">
              Biomass Fuels
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Sustainable fuel solutions for cleaner, more efficient energy production
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                type="button"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 flex items-center justify-center"
              >
                <Leaf className="w-5 h-5 mr-2" />
                Explore Fuels
              </button>
              <button 
                type="button"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Request Samples
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Leaf className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">100%</div>
              <div className="text-gray-600">Renewable</div>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">85%</div>
              <div className="text-gray-600">Efficiency</div>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">70%</div>
              <div className="text-gray-600">Cost Savings</div>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <Recycle className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">Zero</div>
              <div className="text-gray-600">Net Emissions</div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Section */}
      <section className="py-12 bg-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-500" />
                <span className="font-medium text-gray-700">Filter by type:</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {types.map(type => (
                  <button
                    key={type}
                    onClick={() => setSelectedType(type)}
                    className={`px-4 py-2 rounded-full transition-all duration-200 ${
                      selectedType === type
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
                    }`}
                  >
                    {type === 'all' ? 'All Fuels' : type}
                  </button>
                ))}
              </div>
            </div>

            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search fuels..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Fuels Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {selectedType === 'all' ? 'All Biomass Fuels' : selectedType}
            </h2>
            <p className="text-gray-600">
              {filteredFuels.length} {filteredFuels.length === 1 ? 'fuel' : 'fuels'} available
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-2 gap-8">
            {filteredFuels.map(fuel => (
              <FuelCard key={fuel.id} fuel={fuel} />
            ))}
          </div>

          {filteredFuels.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No fuels found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
              <button 
                onClick={() => {
                  setSelectedType('all');
                  setSearchTerm('');
                }}
                type="button"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Why Choose Our Biomass Fuels?</h2>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Leaf className="w-6 h-6 text-green-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Sustainable Sourcing</h3>
                    <p className="text-gray-600">All our biomass fuels are sourced from sustainable, renewable materials and agricultural waste.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">High Energy Density</h3>
                    <p className="text-gray-600">Our processing techniques ensure maximum calorific value and energy output per kg of fuel.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-orange-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Cost-Effective</h3>
                    <p className="text-gray-600">Significant cost savings compared to traditional fossil fuels, with stable pricing.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Recycle className="w-6 h-6 text-purple-600" />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Environmental Impact</h3>
                    <p className="text-gray-600">Dramatically reduce your carbon footprint with our clean-burning biomass alternatives.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img 
                src="https://images.pexels.com/photos/4491452/pexels-photo-4491452.jpeg" 
                alt="Biomass fuel production" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/50 to-blue-500/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Ready to Make the Switch?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Contact our team to discuss your biomass fuel requirements and get samples delivered to your facility.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Request Samples
              </button>
              <button className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105">
                Get Custom Quote
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FuelsPage;