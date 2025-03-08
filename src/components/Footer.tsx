import React from 'react';
import { Shield, Mail, MessageCircle, CreditCard, Github, Twitter, Youtube } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center">
              <Shield className="h-8 w-8 text-purple-500" />
              <span className="ml-2 text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                ValorantEdge
              </span>
            </div>
            <p className="mt-4 text-gray-400 text-sm">
              Premium Valorant cheats with undetected technology and regular updates to keep you ahead of the game.
            </p>
            <div className="mt-6 flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">Discord</span>
                <MessageCircle className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">Twitter</span>
                <Twitter className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">GitHub</span>
                <Github className="h-6 w-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <span className="sr-only">YouTube</span>
                <Youtube className="h-6 w-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Products</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-white transition-colors duration-200">Aimbot Pro</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-white transition-colors duration-200">ESP Vision</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-white transition-colors duration-200">Ultimate Bundle</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-white transition-colors duration-200">Pricing</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-white transition-colors duration-200">Custom Solutions</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-white transition-colors duration-200">Documentation</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-white transition-colors duration-200">Guides</a>
              </li>
              <li>
                <a href="#faq" className="text-base text-gray-400 hover:text-white transition-colors duration-200">FAQ</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-white transition-colors duration-200">Contact</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-white transition-colors duration-200">Discord Community</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold text-gray-300 tracking-wider uppercase">Legal</h3>
            <ul className="mt-4 space-y-4">
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-white transition-colors duration-200">Privacy Policy</a>
              </li>
               <li>
                <a href="#" className="text-base text-gray-400 hover:text-white transition-colors duration-200">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-white transition-colors duration-200">Refund Policy</a>
              </li>
              <li>
                <div className="flex items-center text-base text-gray-400">
                  <CreditCard className="h-5 w-5 mr-2" />
                  <span>Secure Payments</span>
                </div>
              </li>
              <li>
                <a href="#" className="text-base text-gray-400 hover:text-white transition-colors duration-200">DMCA Policy</a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 border-t border-gray-800 pt-8">
          <p className="text-base text-gray-400 text-center">
            &copy; {new Date().getFullYear()} ValorantEdge. All rights reserved.
          </p>
          <p className="text-sm text-gray-500 text-center mt-2">
            ValorantEdge, oyun deneyiminizi geliştirmek için tasarlanmış premium yazılım çözümleri sunar. 7/24 teknik destek ve %100 memnuniyet garantisi.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;