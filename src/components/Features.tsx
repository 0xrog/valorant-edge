import React from 'react';
import { ShieldCheck, Zap, Target, Eye, CreditCard, Clock, RefreshCw, Lock } from 'lucide-react';

const Features: React.FC = () => {
  const features = [
    {
      name: 'Undetected Technology',
      description: 'Our cheats use advanced technology to remain undetected by Valorant\'s anti-cheat system.',
      icon: <ShieldCheck className="h-8 w-8 text-purple-500" />
    },
    {
      name: 'Instant Delivery',
      description: 'Get access to your purchased cheats immediately after payment confirmation.',
      icon: <Zap className="h-8 w-8 text-purple-500" />
    },
    {
      name: 'Precision Aimbot',
      description: 'Customizable aimbot with adjustable FOV, smoothness, and bone targeting.',
      icon: <Target className="h-8 w-8 text-purple-500" />
    },
    {
      name: 'Advanced ESP',
      description: 'See enemies through walls with customizable ESP features and distance indicators.',
      icon: <Eye className="h-8 w-8 text-purple-500" />
    },
    {
      name: 'Secure Payment',
      description: 'Multiple secure payment options including cryptocurrency for maximum privacy.',
      icon: <CreditCard className="h-8 w-8 text-purple-500" />
    },
    {
      name: '24/7 Support',
      description: 'Our dedicated support team is available around the clock to assist you.',
      icon: <Clock className="h-8 w-8 text-purple-500" />
    },
    {
      name: 'Regular Updates',
      description: 'We constantly update our cheats to ensure compatibility with the latest game patches.',
      icon: <RefreshCw className="h-8 w-8 text-purple-500" />
    },
    {
      name: 'HWID Protection',
      description: 'Our advanced hardware ID protection system ensures your account stays secure.',
      icon: <Lock className="h-8 w-8 text-purple-500" />
    }
  ];

  return (
    <div id="features" className="py-16 bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-purple-400 font-semibold tracking-wide uppercase">Features</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Why Choose ValorantEdge?
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-300 lg:mx-auto">
            Our premium cheats offer the best features with regular updates to keep you ahead of the game.
          </p>
        </div>

        <div className="mt-16">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div 
                key={index} 
                className="bg-gray-900 rounded-lg p-6 border border-gray-800 hover:border-purple-500 transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg hover:shadow-purple-500/10"
              >
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-gray-800 text-white mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-medium text-white">{feature.name}</h3>
                <p className="mt-2 text-base text-gray-300">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;