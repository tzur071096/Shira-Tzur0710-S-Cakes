'use client';

import { MapPin, Phone, Mail, Clock, Instagram, Facebook, MessageCircle } from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '+1 214.677.6273',
      description: 'Call or text for orders and inquiries'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'shira@shirascakes.com',
      description: 'Send us your cake vision and requirements'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: '7909 Kettlewood Ct, Plano, TX',
      description: 'Pickup available by appointment'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'By Appointment',
      description: 'Flexible scheduling for consultations'
    }
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: 'Instagram',
      url: 'https://www.instagram.com/shirascakes/',
      handle: '@shirascakes',
      color: 'from-pink-500 to-purple-600'
    },
    {
      icon: Facebook,
      name: 'Facebook',
      url: 'https://www.facebook.com/cakesbyshira',
      handle: 'Cakes by Shira',
      color: 'from-blue-500 to-blue-700'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-pink-600 mb-4">
            <MessageCircle className="w-6 h-6" />
            <span className="text-sm font-semibold uppercase tracking-wide">Contact</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Let&apos;s Create Something Sweet Together
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to bring your cake vision to life? Get in touch and let&apos;s discuss your special occasion.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Side - Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get In Touch</h3>
              <p className="text-lg text-gray-600 mb-8">
                I&apos;d love to hear about your vision and help make your special occasion even more memorable. 
                Whether it&apos;s a birthday, wedding, or any celebration, let&apos;s create something amazing together.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <div key={index} className="bg-pink-50 rounded-2xl p-6 hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="bg-pink-100 p-3 rounded-lg">
                      <info.icon className="w-6 h-6 text-pink-600" />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{info.title}</h4>
                    </div>
                  </div>
                  <p className="text-lg font-semibold text-gray-900 mb-2">{info.details}</p>
                  <p className="text-sm text-gray-600">{info.description}</p>
                </div>
              ))}
            </div>

            {/* Social Media */}
            <div className="bg-gradient-to-br from-pink-50 to-white rounded-2xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Follow My Journey</h4>
              <div className="space-y-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-4 p-4 rounded-xl bg-gradient-to-r ${social.color} text-white hover:shadow-lg transition-all duration-300 transform hover:scale-105`}
                  >
                    <social.icon className="w-6 h-6" />
                    <div>
                      <div className="font-semibold">{social.name}</div>
                      <div className="text-sm opacity-90">{social.handle}</div>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right Side - Map and Additional Info */}
          <div className="space-y-8">
            {/* Map */}
            <div className="bg-gray-100 rounded-2xl overflow-hidden shadow-lg">
              <div className="h-64 bg-gradient-to-br from-pink-100 to-pink-200 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-pink-600 mx-auto mb-4" />
                  <h4 className="text-lg font-bold text-gray-900 mb-2">7909 Kettlewood Ct</h4>
                  <p className="text-gray-600">Plano, TX</p>
                  <p className="text-sm text-gray-500 mt-2">Pickup available by appointment</p>
                </div>
              </div>
            </div>

            {/* Quick Order Info */}
            <div className="bg-pink-50 rounded-2xl p-8">
              <h4 className="text-xl font-bold text-gray-900 mb-6">Quick Order Info</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">1</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Contact Me</h5>
                    <p className="text-sm text-gray-600">Call, text, or use the order form to discuss your vision</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Design Consultation</h5>
                    <p className="text-sm text-gray-600">We&apos;ll discuss flavors, design, and timeline</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-white text-xs font-bold">3</span>
                  </div>
                  <div>
                    <h5 className="font-semibold text-gray-900">Creation & Delivery</h5>
                    <p className="text-sm text-gray-600">I&apos;ll create your perfect cake and arrange pickup/delivery</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Emergency Contact */}
            <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl p-6 text-white">
              <div className="flex items-center space-x-3 mb-4">
                <Phone className="w-6 h-6" />
                <h4 className="text-lg font-bold">Need a Rush Order?</h4>
              </div>
              <p className="text-sm opacity-90 mb-4">
                For last-minute orders or urgent requests, call me directly. I&apos;ll do my best to accommodate your needs.
              </p>
              <a 
                href="tel:+12146776273"
                className="bg-white text-pink-600 font-semibold py-2 px-4 rounded-lg hover:bg-pink-50 transition-colors inline-block"
              >
                Call Now: +1 214.677.6273
              </a>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-pink-100 to-pink-200 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Order?</h3>
            <p className="text-lg text-gray-600 mb-6">
              Use the order form above or give me a call to discuss your custom cake vision.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
                className="btn-primary"
              >
                Order Form
              </button>
              <a 
                href="tel:+12146776273"
                className="btn-secondary"
              >
                Call Directly
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
