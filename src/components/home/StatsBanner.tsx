import React from 'react';
import CountUp from 'react-countup';
import { useInView } from 'react-intersection-observer';

interface Stat {
  number: string;
  label: string;
  description: string;
}

interface StatsBannerProps {
  stats: Stat[];
}

const StatsBanner: React.FC<StatsBannerProps> = ({ stats }) => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  const parseNumber = (numStr: string) => {
    const cleanNum = numStr.replace(/[^0-9.-]/g, '');
    return parseFloat(cleanNum);
  };

  return (
    <section className="bg-primary-50 py-20" ref={ref}>
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-800">Our Impact</h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            Making a difference with sustainable biomass solutions.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const numericValue = parseNumber(stat.number);
            const suffix = stat.number.replace(/[0-9.-]/g, '');
            
            return (
              <div 
                key={index} 
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="text-4xl md:text-5xl font-bold mb-2 text-primary-600">
                  {inView && (
                    <CountUp
                      end={numericValue}
                      duration={2.5}
                      separator=","
                      suffix={suffix}
                      decimals={stat.number.includes('.') ? 1 : 0}
                    />
                  )}
                </div>
                <div className="text-xl font-semibold mb-2 text-gray-800">{stat.label}</div>
                <p className="text-gray-600">{stat.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StatsBanner;