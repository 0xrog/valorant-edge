import React from 'react';
import { ArrowRight, Shield } from 'lucide-react';

const CallToAction: React.FC = () => {
  return (
    <div className="bg-gray-900 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-800 to-pink-700 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black opacity-60" />
          </div>
          <div className="relative px-6 py-16 sm:px-12 sm:py-20 lg:py-24 lg:px-16">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div>
                <div className="flex items-center">
                  <Shield className="h-10 w-10 text-white" />
                  <h2 className="ml-3 text-3xl font-extrabold tracking-tight text-white">
                    Ready to dominate?
                  </h2>
                </div>
                <p className="mt-6 text-lg text-gray-200 max-w-3xl">
                  Join thousands of satisfied players who have taken their gameplay to the next level with ValorantEdge. 
                  Our premium cheats are constantly updated to ensure you stay ahead of the competition.
                </p>
                <div className="mt-8 flex space-x-4">
                  <a
                    href="#products"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-gray-900 bg-white hover:bg-gray-100 transition-colors duration-300"
                  >
                    Get Started
                  </a>
                  <a
                    href="#"
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-purple-900 bg-opacity-60 hover:bg-opacity-70 transition-colors duration-300"
                  >
                    Learn more
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </div>
              </div>
              <div className="mt-12 lg:mt-0 flex justify-center">
                <div className="bg-gray-900 bg-opacity-50 backdrop-blur-sm rounded-lg p-8 border border-purple-500/30 transform rotate-3 hover:rotate-0 transition-transform duration-300">
                  <div className="text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">Limited Time Offer</h3>
                    <p className="text-gray-300 mb-6">Get 20% off on all products with code:</p>
                    <div className="bg-purple-900/50 border border-purple-500/30 rounded-md px-4 py-2 font-mono text-xl text-white mb-6">
                      EDGE20
                    </div>
                    <p className="text-sm text-gray-400">Offer valid until June 30, 2025</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallToAction;