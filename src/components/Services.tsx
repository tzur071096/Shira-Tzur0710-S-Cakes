'use client';

import { Cake, Heart, Cookie, Users, Star, Clock } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: Cake,
      title: 'Custom Cakes',
      description: 'Bespoke cakes for any occasion - birthdays, weddings, anniversaries, and more.',
      features: ['Custom design consultation', 'Fresh ingredients', 'Delivery available', 'Allergy-friendly options'],
      price: 'Starting at $45',
      popular: true
    },
    {
      icon: Heart,
      title: 'Cupcakes',
      description: 'Delicious cupcakes in various flavors and designs, perfect for parties and events.',
      features: ['Multiple flavors', 'Custom decorations', 'Minimum 1 dozen', 'Same-day pickup'],
      price: 'Starting at $2.50 each'
    },
    {
      icon: Cookie,
      title: 'Cookies',
      description: 'Hand-decorated cookies for special occasions, holidays, and corporate events.',
      features: ['Custom designs', 'Sugar cookies', 'Decorated cookies', 'Bulk orders welcome'],
      price: 'Starting at $3 each'
    },
    {
      icon: Users,
      title: 'Baking Workshops',
      description: 'Learn the basics of baking in fun, hands-on workshops (summer sessions available).',
      features: ['Beginner-friendly', 'All supplies included', 'Take home your creations', 'Small group sizes'],
      price: 'Starting at $35 per person'
    }
  ];

  const pricingTiers = [
    {
      name: 'Basic',
      price: '$45',
      description: 'Perfect for small celebrations',
      features: [
        '6-inch round cake',
        'Basic decoration',
        '2-3 day notice',
        'Pickup only'
      ],
      popular: false
    },
    {
      name: 'Premium',
      price: '$85',
      description: 'Most popular choice',
      features: [
        '8-inch round cake',
        'Custom design',
        'Premium ingredients',
        'Delivery within 10 miles',
        '1 week notice'
      ],
      popular: true
    },
    {
      name: 'Luxury',
      price: '$150',
      description: 'For special occasions',
      features: [
        '10-inch round cake',
        'Complex custom design',
        'Premium ingredients',
        'Free delivery',
        '2 weeks notice',
        'Consultation included'
      ],
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-pink-600 mb-4">
            <Star className="w-6 h-6" />
            <span className="text-sm font-semibold uppercase tracking-wide">Services</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What I Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From custom cakes to baking workshops, I bring creativity and passion to every sweet creation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                service.popular ? 'ring-2 ring-pink-400' : ''
              }`}
            >
              {service.popular && (
                <div className="bg-pink-500 text-white text-xs font-semibold px-3 py-1 rounded-full inline-block mb-4">
                  Most Popular
                </div>
              )}
              <div className="flex items-center space-x-3 mb-4">
                <div className="bg-pink-100 p-3 rounded-lg">
                  <service.icon className="w-6 h-6 text-pink-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900">{service.title}</h3>
              </div>
              <p className="text-gray-600 mb-6">{service.description}</p>
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-2 h-2 bg-pink-400 rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="text-2xl font-bold text-pink-600">{service.price}</div>
            </div>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="bg-gradient-to-br from-pink-50 to-white rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Cake Pricing
            </h3>
            <p className="text-lg text-gray-600">
              Transparent pricing for custom cakes. All prices include consultation and basic decoration.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {pricingTiers.map((tier, index) => (
              <div 
                key={index}
                className={`bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 ${
                  tier.popular ? 'ring-2 ring-pink-400 scale-105' : ''
                }`}
              >
                {tier.popular && (
                  <div className="bg-pink-500 text-white text-sm font-semibold px-4 py-2 rounded-full inline-block mb-6">
                    Most Popular
                  </div>
                )}
                <div className="text-center mb-6">
                  <h4 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h4>
                  <div className="text-4xl font-bold text-pink-600 mb-2">{tier.price}</div>
                  <p className="text-gray-600">{tier.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-3">
                      <div className="w-5 h-5 bg-pink-100 rounded-full flex items-center justify-center">
                        <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 px-6 rounded-lg font-semibold transition-all duration-300 ${
                  tier.popular 
                    ? 'bg-pink-500 hover:bg-pink-600 text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}>
                  Choose {tier.name}
                </button>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <div className="bg-pink-100 rounded-2xl p-6">
              <div className="flex items-center justify-center space-x-2 text-pink-600 mb-2">
                <Clock className="w-5 h-5" />
                <span className="font-semibold">Order Timeline</span>
              </div>
              <p className="text-gray-700">
                Please place your order at least 3-7 days in advance for custom cakes. 
                Rush orders may be available for an additional fee.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
