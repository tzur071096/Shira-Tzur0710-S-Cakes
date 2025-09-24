'use client';

import { useState, useEffect } from 'react';
import { Phone, X, MessageCircle } from 'lucide-react';

const StickyBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky bar after scrolling down 300px
      setIsVisible(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!isVisible) return null;

  return (
    <div className={`fixed bottom-0 left-0 right-0 z-50 transition-all duration-300 ${
      isExpanded ? 'translate-y-0' : 'translate-y-0'
    }`}>
      {/* Main Sticky Bar */}
      <div className="bg-gradient-to-r from-pink-500 to-pink-600 text-white shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Left Side - Message */}
            <div className="flex items-center space-x-4">
              <div className="hidden sm:block">
                <div className="flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5" />
                  <span className="font-semibold">Ready to order your custom cake?</span>
                </div>
                <p className="text-sm text-pink-100">Call to make a cake order</p>
              </div>
              <div className="sm:hidden">
                <p className="font-semibold text-sm">Call to make a cake order</p>
              </div>
            </div>

            {/* Right Side - Phone Button */}
            <div className="flex items-center space-x-4">
              <a 
                href="tel:+12146776273"
                className="bg-white text-pink-600 font-bold py-3 px-6 rounded-lg hover:bg-pink-50 transition-all duration-300 transform hover:scale-105 flex items-center space-x-2 shadow-lg"
              >
                <Phone className="w-5 h-5" />
                <span className="hidden sm:inline">+1 214.677.6273</span>
                <span className="sm:hidden">Call Now</span>
              </a>
              
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="p-2 hover:bg-pink-400 rounded-lg transition-colors"
              >
                {isExpanded ? <X className="w-5 h-5" /> : <MessageCircle className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Expanded Options */}
      {isExpanded && (
        <div className="bg-white border-t border-pink-200 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Quick Order Form */}
              <div className="space-y-4">
                <h4 className="font-bold text-gray-900 mb-3">Quick Order</h4>
                <div className="space-y-3">
                  <input
                    type="text"
                    placeholder="Your name"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                  />
                  <input
                    type="tel"
                    placeholder="Phone number"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-transparent text-sm"
                  />
                  <button className="w-full bg-pink-500 text-white py-2 px-4 rounded-lg hover:bg-pink-600 transition-colors text-sm font-semibold">
                    Send Quick Message
                  </button>
                </div>
              </div>

              {/* Contact Options */}
              <div className="space-y-4">
                <h4 className="font-bold text-gray-900 mb-3">Contact Options</h4>
                <div className="space-y-3">
                  <a 
                    href="tel:+12146776273"
                    className="flex items-center space-x-3 p-3 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors"
                  >
                    <Phone className="w-5 h-5 text-pink-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Call Now</div>
                      <div className="text-sm text-gray-600">+1 214.677.6273</div>
                    </div>
                  </a>
                  <button 
                    onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                    className="flex items-center space-x-3 p-3 bg-pink-50 rounded-lg hover:bg-pink-100 transition-colors w-full text-left"
                  >
                    <MessageCircle className="w-5 h-5 text-pink-600" />
                    <div>
                      <div className="font-semibold text-gray-900">Order Form</div>
                      <div className="text-sm text-gray-600">Fill out detailed form</div>
                    </div>
                  </button>
                </div>
              </div>

              {/* Quick Info */}
              <div className="space-y-4">
                <h4 className="font-bold text-gray-900 mb-3">Quick Info</h4>
                <div className="space-y-2 text-sm text-gray-600">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span>Custom cakes starting at $45</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span>3-7 days advance notice</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span>Pickup in Plano, TX</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span>Free consultation included</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default StickyBar;
