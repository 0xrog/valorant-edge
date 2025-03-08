import React, { useState } from 'react';
import { ShieldCheck, Zap, Target, Eye, CreditCard, ShoppingCart, Menu, X, ChevronRight, Star } from 'lucide-react';
import ProductCard from './components/ProductCard';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CallToAction from './components/CallToAction';
import TrustBadges from './components/TrustBadges';

function App() {
  const [cartItems, setCartItems] = useState<number>(0);
  
  const addToCart = () => {
    setCartItems(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar cartItems={cartItems} />
      <Hero />
      <TrustBadges />
      <Features />
      <div id="products" className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-extrabold text-center mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Premium Valorant Cheats
          </span>
        </h2>
        <p className="text-gray-300 text-center max-w-2xl mx-auto mb-12">
          Choose the perfect package for your gaming needs. All our products come with 24/7 support and regular updates.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard 
            title="Aimbot Pro"
            description="Advanced aimbot with customizable FOV and smoothness settings"
            price={29.99}
            features={["Auto-aim", "Customizable FOV", "Smoothness control", "Bone selection"]}
            icon={<Target className="h-8 w-8 text-purple-500" />}
            addToCart={addToCart}
          />
          <ProductCard 
            title="ESP Vision"
            description="See enemies through walls with customizable ESP options"
            price={24.99}
            features={["Player ESP", "Item ESP", "Distance indicators", "Health bars"]}
            icon={<Eye className="h-8 w-8 text-blue-500" />}
            addToCart={addToCart}
          />
          <ProductCard 
            title="Ultimate Bundle"
            description="Complete package with all premium features and priority updates"
            price={49.99}
            features={["Aimbot Pro", "ESP Vision", "Recoil control", "Trigger bot", "Priority support"]}
            icon={<Zap className="h-8 w-8 text-yellow-500" />}
            addToCart={addToCart}
            featured={true}
          />
        </div>
      </div>
      <Testimonials />
      <CallToAction />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;