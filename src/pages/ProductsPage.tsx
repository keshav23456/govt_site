import React, { useState } from 'react';
import { Filter, Grid, List, Search, Star, TrendingUp, Zap, Shield } from 'lucide-react';

interface Product {
  id: string;
  title: string;
  category: string;
  price: string;
  rating: number;
  reviews: number;
  image: string;
  description: string;
  features: string[];
  specs: {
    capacity: string;
    pressure?: string;
    temperature: string;
    efficiency: string;
    fuel: string;
  };
  badge: string;
  badgeColor: string;
}

interface ProductCardProps {
  product: Product;
  isListView?: boolean;
}

const ProductsPage = () => {
  const [viewMode, setViewMode] = useState('grid');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const products: Product[] = [
    {
      id: 'steam-boilers',
      title: 'Steam Boilers',
      category: 'Boilers',
      price: 'Starting from $25,000',
      rating: 4.8,
      reviews: 156,
      image: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg',
      description: 'Advanced steam boilers engineered for safe and efficient steam generation, perfect for industrial applications.',
      features: ['High Efficiency', 'Automated Controls', 'Safety Systems', 'Remote Monitoring'],
      specs: {
        capacity: '100-5000 kg/hr',
        pressure: '3-10 bar',
        efficiency: 'Up to 85%',
        fuel: 'Biomass',
        temperature: '120-180°C'
      },
      badge: 'Best Seller',
      badgeColor: 'bg-green-500'
    },
    {
      id: 'hot-air-generators',
      title: 'Hot Air Generators',
      category: 'Generators',
      price: 'Starting from $18,000',
      rating: 4.7,
      reviews: 89,
      image: 'https://images.pexels.com/photos/2846615/pexels-photo-2846615.jpeg',
      description: 'Industrial-grade hot air generators for efficient drying and heating processes.',
      features: ['Temperature Control', 'Energy Efficient', 'Multiple Fuel Options', 'Robust Design'],
      specs: {
        capacity: '1,000-50,000 m³/hr',
        temperature: '50-200°C',
        efficiency: 'Up to 85%',
        fuel: 'Biomass/Gas'
      },
      badge: 'Popular',
      badgeColor: 'bg-blue-500'
    },
    {
      id: 'steam-generators',
      title: 'Steam Generators',
      category: 'Generators',
      price: 'Starting from $15,000',
      rating: 4.6,
      reviews: 67,
      image: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg',
      description: 'Compact and efficient steam generation solutions for various industrial processes.',
      features: ['Rapid Production', 'Space Saving', 'Advanced Controls', 'Low Maintenance'],
      specs: {
        capacity: '50-1000 kg/hr',
        pressure: '3-8 bar',
        efficiency: 'Up to 98%',
        fuel: 'Electric/Gas',
        temperature: '100-160°C'
      },
      badge: 'New',
      badgeColor: 'bg-purple-500'
    },
    {
      id: 'thermic-fluid',
      title: 'Thermic Fluid Heaters',
      category: 'Heaters',
      price: 'Starting from $30,000',
      rating: 4.9,
      reviews: 124,
      image: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg',
      description: 'Advanced heat transfer solutions for precise temperature control in industrial processes.',
      features: ['Precise Control', 'High Efficiency', 'Long Lasting', 'Safety Features'],
      specs: {
        capacity: '100-5000 kW',
        temperature: '50-350°C',
        efficiency: 'Up to 90%',
        fuel: 'Biomass/Gas'
      },
      badge: 'Premium',
      badgeColor: 'bg-yellow-500'
    },
    {
      id: 'hot-water-generators',
      title: 'Hot Water Generators',
      category: 'Generators',
      price: 'Starting from $12,000',
      rating: 4.5,
      reviews: 92,
      image: 'https://images.pexels.com/photos/2760243/pexels-photo-2760243.jpeg',
      description: 'Reliable hot water generation systems for industrial and commercial applications.',
      features: ['Consistent Performance', 'Smart Controls', 'Durable Build', 'Easy Maintenance'],
      specs: {
        capacity: '100-10,000 L/hr',
        temperature: 'Up to 95°C',
        efficiency: 'Up to 95%',
        fuel: 'Biomass/Electric'
      },
      badge: 'Eco-Friendly',
      badgeColor: 'bg-green-600'
    }
  ];

  const categories = ['all', ...Array.from(new Set(products.map(p => p.category)))];

  const filteredProducts = products.filter(product => {
    const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
    const searchMatch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       product.description.toLowerCase().includes(searchTerm.toLowerCase());
    return categoryMatch && searchMatch;
  });

  const ProductCard: React.FC<ProductCardProps> = ({ product, isListView = false }) => (
    <div className={`bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden group border border-gray-100 ${
      isListView ? 'flex' : ''
    }`}>
      <div className={`relative overflow-hidden ${isListView ? 'w-80 flex-shrink-0' : 'h-64'}`}>
        <img 
          src={product.image} 
          alt={product.title} 
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute top-4 left-4">
          <span className={`${product.badgeColor} text-white px-3 py-1 rounded-full text-sm font-medium`}>
            {product.badge}
          </span>
        </div>
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2">
          <div className="flex items-center">
            <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
            <span className="ml-1 text-sm font-medium">{product.rating}</span>
          </div>
        </div>
      </div>
      
      <div className={`p-6 ${isListView ? 'flex-1' : ''}`}>
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors duration-300">
            {product.title}
          </h3>
          <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
            {product.category}
          </span>
        </div>
        
        <p className="text-gray-600 mb-4 leading-relaxed">
          {product.description}
        </p>

        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {product.features.map((feature: string, idx: number) => (
              <span 
                key={idx}
                className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {feature}
              </span>
            ))}
          </div>
        </div>

        {isListView && (
          <div className="grid grid-cols-2 gap-4 mb-4 bg-gray-50 p-4 rounded-lg">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="text-sm">
                <span className="font-medium text-gray-700 capitalize">{key}:</span>
                <span className="text-gray-600 ml-1">{value}</span>
              </div>
            ))}
          </div>
        )}

        <div className="flex items-center justify-between pt-4 border-t border-gray-100">
          <div>
            <div className="text-lg font-bold text-blue-600">{product.price}</div>
            <div className="text-sm text-gray-500 flex items-center">
              <Star className="w-3 h-3 fill-yellow-400 text-yellow-400 mr-1" />
              {product.rating} ({product.reviews} reviews)
            </div>
          </div>
          <div className="flex space-x-2">
            <button 
              type="button"
              className="px-4 py-2 text-blue-600 border border-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-200"
            >
              Details
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
              Our Products
            </h1>
            <p className="text-xl text-blue-100 mb-8">
              Discover our comprehensive range of biomass solutions designed for efficiency and sustainability
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                type="button"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Browse Catalog
              </button>
              <button 
                type="button"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Request Quote
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search Section */}
      <section className="py-12 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center space-x-2">
                <Filter className="w-5 h-5 text-gray-500" />
                <span className="font-medium text-gray-700">Filter by:</span>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {categories.map(category => (
                  <button
                    key={category}
                    type="button"
                    onClick={() => setSelectedCategory(category)}
                    className={`px-4 py-2 rounded-full transition-all duration-200 ${
                      selectedCategory === category
                        ? 'bg-blue-600 text-white shadow-md'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {category === 'all' ? 'All Products' : category}
                  </button>
                ))}
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
              
              <div className="flex bg-gray-100 rounded-lg p-1">
                <button
                  type="button"
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded transition-colors duration-200 ${
                    viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                  }`}
                >
                  <Grid className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded transition-colors duration-200 ${
                    viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-200'
                  }`}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {selectedCategory === 'all' ? 'All Products' : selectedCategory}
            </h2>
            <p className="text-gray-600">
              {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'} found
            </p>
          </div>

          <div className={viewMode === 'grid' 
            ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8' 
            : 'space-y-8'
          }>
            {filteredProducts.map(product => (
              <ProductCard 
                key={product.id} 
                product={product} 
                isListView={viewMode === 'list'} 
              />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-12 h-12 text-gray-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
              <p className="text-gray-600 mb-6">Try adjusting your search or filter criteria</p>
              <button 
                type="button"
                onClick={() => {
                  setSelectedCategory('all');
                  setSearchTerm('');
                }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-200"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Our Products?</h2>
            <p className="text-xl text-gray-600">
              Industry-leading features that set our biomass solutions apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <TrendingUp className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">High Efficiency</h3>
              <p className="text-gray-600">
                Our products deliver industry-leading efficiency rates, helping you maximize energy output while minimizing costs.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Safety First</h3>
              <p className="text-gray-600">
                Advanced safety features and monitoring systems ensure reliable and secure operation in all conditions.
              </p>
            </div>
            
            <div className="text-center group">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <Zap className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Smart Technology</h3>
              <p className="text-gray-600">
                Intelligent control systems and remote monitoring capabilities for optimal performance and convenience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-700/50 to-blue-500/50"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl font-bold mb-6">Need Help Choosing?</h2>
            <p className="text-xl text-blue-100 mb-8">
              Our experts are here to help you find the perfect biomass solution for your specific needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                type="button"
                className="bg-green-500 hover:bg-green-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Speak with Expert
              </button>
              <button 
                type="button"
                className="border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                Download Catalog
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;