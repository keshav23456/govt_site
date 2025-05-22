import React from 'react';
import { Link } from 'react-router-dom';
import { products } from '../../data/products';

const ProductsGrid: React.FC = () => {
  return (
    <section className="section">
      <div className="container-custom">
        <h2 className="section-title">Our Products</h2>
        <p className="section-subtitle">
          Discover our range of sustainable biomass solutions designed for efficiency and environmental responsibility.
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {products.map((product) => (
            <div 
              key={product.id}
              className="card overflow-hidden transition-all duration-300 hover:shadow-xl group"
            >
              <div className="relative overflow-hidden h-64">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-primary-500 text-white py-1 px-3 rounded-full text-sm">
                  {product.category}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{product.description}</p>
                <Link 
                  to={`/products/${product.id}`}
                  className="text-primary-500 font-medium inline-flex items-center group-hover:text-primary-700"
                >
                  Learn more
                  <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Link to="/products" className="btn-primary">
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProductsGrid;