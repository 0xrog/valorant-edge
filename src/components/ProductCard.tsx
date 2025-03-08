import React from 'react';
import { Check, ShoppingCart, Info } from 'lucide-react';

interface ProductCardProps {
  title: string;
  description: string;
  price: number;
  features: string[];
  icon: React.ReactNode;
  addToCart: () => void;
  featured?: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({ 
  title, 
  description, 
  price, 
  features, 
  icon, 
  addToCart,
  featured = false 
}) => {
  return (
    <div 
      className={`
        relative rounded-2xl overflow-hidden border 
        ${featured 
          ? 'border-purple-500 shadow-lg shadow-purple-500/20' 
          : 'border-gray-800'
        }
        transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl
        bg-gray-900 flex flex-col
      `}
    >
      {featured && (
        <div className="absolute top-0 right-0">
          <div className="bg-gradient-to-r from-purple-500 to-pink-600 text-white text-xs font-bold px-3 py-1 transform rotate-45 translate-x-6 translate-y-3">
            POPULAR
          </div>
        </div>
      )}
      
      <div className="p-6 flex-grow">
        <div className="flex items-center justify-between">
          <div className={`p-3 rounded-lg ${featured ? 'bg-purple-900/40' : 'bg-gray-800'}`}>
            {icon}
          </div>
          <div className="text-2xl font-bold text-white">
            ${price}
            <span className="text-sm text-gray-400 font-normal ml-1">/month</span>
          </div>
        </div>
        <h3 className="mt-4 text-xl font-bold text-white">{title}</h3>
        <p className="mt-2 text-gray-400">{description}</p>
        
        <div className="mt-6 space-y-3">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start">
              <div className="flex-shrink-0">
                <Check className={`h-5 w-5 ${featured ? 'text-purple-400' : 'text-green-500'}`} />
              </div>
              <p className="ml-3 text-sm text-gray-300">{feature}</p>
            </div>
          ))}
        </div>
      </div>
      
      <div className="p-6 pt-0">
        <button
          onClick={addToCart}
          className={`
            w-full flex items-center justify-center px-4 py-3 rounded-md text-white font-medium mb-3
            ${featured 
              ? 'bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700' 
              : 'bg-gray-800 hover:bg-gray-700'
            }
            transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-purple-500
            transform hover:scale-105
          `}
        >
          <ShoppingCart className="mr-2 h-5 w-5" />
          Add to Cart
        </button>
        <div className="flex justify-center">
          <button className="text-xs text-gray-400 hover:text-gray-300 flex items-center">
            <Info className="h-3 w-3 mr-1" />
            View detailed features
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;