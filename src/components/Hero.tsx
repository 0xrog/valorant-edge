import React from 'react';
import { ChevronRight, Shield, Play, Star } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-1.2.1&auto=format&fit=crop&w=2850&q=80" 
          alt="Valorant background" 
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-gray-900/80 to-gray-900"></div>
      </div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
        <div className="text-center">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-900/30 border border-purple-500/30 mb-6">
            <span className="animate-pulse h-2 w-2 rounded-full bg-purple-500 mr-2"></span>
            <span className="text-sm font-medium text-purple-300">New features available</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
            <span className="block">Dominate Valorant with</span>
            <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Premium Cheats
            </span>
          </h1>
          <p className="mt-6 max-w-lg mx-auto text-xl text-gray-300">
            Gain the competitive edge with our undetected, premium Valorant cheats. 
            Stay ahead of the competition with regular updates and 24/7 support.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0">
            <div className="rounded-md shadow">
              <a
                href="#products"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 md:py-4 md:text-lg md:px-10 transition-all duration-300 transform hover:scale-105"
              >
                View Products
              </a>
            </div>
            <div className="sm:ml-3 rounded-md shadow">
              <a
                href="#features"
                className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-gray-200 bg-gray-800 hover:bg-gray-700 md:py-4 md:text-lg md:px-10 transition-all duration-300"
              >
                Learn More
                <ChevronRight className="ml-2 h-5 w-5" />
              </a>
            </div>
            <div className="sm:ml-3">
              <button className="flex items-center text-purple-300 hover:text-purple-200 transition-colors duration-300">
                <div className="flex items-center justify-center h-10 w-10 rounded-full bg-purple-900/30 border border-purple-500/30">
                  <Play className="h-4 w-4 ml-0.5" />
                </div>
                <span className="ml-2 text-sm font-medium">Watch Demo</span>
              </button>
            </div>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            <div className="flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <img 
                    key={i}
                    className="inline-block h-8 w-8 rounded-full ring-2 ring-gray-900" 
                    src={`https://images.unsplash.com/photo-1570295999919-56ceb5ecca6${i}?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80`}
                    alt="" 
                  />
                ))}
              </div>
              <span className="ml-2 text-sm font-medium text-gray-400">Trusted by 2,000+ players</span>
            </div>
            <div className="flex items-center">
              <div className="flex text-yellow-400">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-sm font-medium text-gray-400">4.9/5 from 500+ reviews</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="relative">
        <div className="absolute inset-0 flex items-center" aria-hidden="true">
          <div className="w-full border-t border-gray-800"></div>
        </div>
      </div>
    </div>
  );
};

export default Hero;