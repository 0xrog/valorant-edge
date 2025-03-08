import React from 'react';
import { ShieldCheck, CreditCard, Clock, RefreshCw } from 'lucide-react';

const TrustBadges: React.FC = () => {
  return (
    <div className="bg-gray-900 py-8 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="flex items-center justify-center md:justify-start">
            <ShieldCheck className="h-6 w-6 text-purple-400 mr-2" />
            <span className="text-sm text-gray-300">Undetected Technology</span>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <CreditCard className="h-6 w-6 text-purple-400 mr-2" />
            <span className="text-sm text-gray-300">Secure Payments</span>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <Clock className="h-6 w-6 text-purple-400 mr-2" />
            <span className="text-sm text-gray-300">24/7 Support</span>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <RefreshCw className="h-6 w-6 text-purple-400 mr-2" />
            <span className="text-sm text-gray-300">Regular Updates</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBadges;