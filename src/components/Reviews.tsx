'use client';

import { Star, Quote, Heart, ThumbsUp } from 'lucide-react';

const Reviews = () => {
  const reviews = [
    {
      id: 1,
      name: 'Sarah Johnson',
      location: 'Plano, TX',
      rating: 5,
      date: '2 weeks ago',
      title: 'Absolutely Amazing Wedding Cake!',
      content: 'Shira created the most beautiful wedding cake for our special day. The design was exactly what we envisioned, and it tasted incredible. All our guests were raving about it. Shira was professional, creative, and so easy to work with throughout the entire process.',
      occasion: 'Wedding',
      image: '/images/2.jpg'
    },
    {
      id: 2,
      name: 'Michael Chen',
      location: 'Dallas, TX',
      rating: 5,
      date: '1 month ago',
      title: 'Perfect Birthday Surprise',
      content: 'My daughter\'s 10th birthday cake was absolutely perfect! Shira captured her love for unicorns and made the most magical cake. The attention to detail was incredible, and my daughter was over the moon. Highly recommend!',
      occasion: 'Birthday',
      image: '/images/1.jpg'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      location: 'Frisco, TX',
      rating: 5,
      date: '3 weeks ago',
      title: 'Delicious and Beautiful',
      content: 'I ordered cupcakes for my office party and they were a huge hit! Not only were they gorgeous, but they tasted amazing. Everyone was asking where I got them. Shira\'s attention to detail and flavor combinations are outstanding.',
      occasion: 'Corporate',
      image: '/images/9.jpg'
    },
    {
      id: 4,
      name: 'David Thompson',
      location: 'Plano, TX',
      rating: 5,
      date: '2 months ago',
      title: 'Anniversary Cake to Remember',
      content: 'For our 25th anniversary, Shira created a stunning cake that was both beautiful and delicious. The chocolate flavor was rich and perfect, and the design was elegant. She really understood what we wanted and delivered beyond our expectations.',
      occasion: 'Anniversary',
      image: '/images/6.jpg'
    },
    {
      id: 5,
      name: 'Lisa Martinez',
      location: 'Allen, TX',
      rating: 5,
      date: '1 week ago',
      title: 'Baking Workshop was Fantastic!',
      content: 'I attended one of Shira\'s summer baking workshops and learned so much! She\'s an excellent teacher - patient, knowledgeable, and fun. I left with new skills and delicious treats. Can\'t wait for the next workshop!',
      occasion: 'Workshop',
      image: '/images/5.jpg'
    },
    {
      id: 6,
      name: 'Jennifer Williams',
      location: 'McKinney, TX',
      rating: 5,
      date: '3 weeks ago',
      title: 'Baby Shower Hit!',
      content: 'The baby shower cake was absolutely perfect! The design was adorable and the taste was incredible. All the guests loved it, and it was the centerpiece of our celebration. Shira really knows how to make special occasions even more special.',
      occasion: 'Baby Shower',
      image: '/images/10.jpg'
    }
  ];

  const stats = [
    { number: '4.9', label: 'Average Rating', icon: Star },
    { number: '150+', label: 'Happy Customers', icon: Heart },
    { number: '98%', label: 'Would Recommend', icon: ThumbsUp },
    { number: '200+', label: 'Cakes Delivered', icon: Quote }
  ];

  return (
    <section id="reviews" className="py-20 bg-gradient-to-br from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-pink-600 mb-4">
            <Star className="w-6 h-6" />
            <span className="text-sm font-semibold uppercase tracking-wide">Reviews</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            What My Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take my word for it - hear from the amazing people who've trusted me with their special occasions.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="flex items-center justify-center mb-4">
                  <div className="bg-pink-100 p-3 rounded-full">
                    <stat.icon className="w-6 h-6 text-pink-600" />
                  </div>
                </div>
                <div className="text-3xl font-bold text-pink-600 mb-2">{stat.number}</div>
                <div className="text-sm text-gray-600">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {reviews.map((review) => (
            <div key={review.id} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center">
                      <span className="text-pink-600 font-bold text-lg">
                        {review.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900">{review.name}</h4>
                      <p className="text-sm text-gray-600">{review.location}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center space-x-1 mb-1">
                      {[...Array(5)].map((_, i) => (
                        <Star 
                          key={i} 
                          className={`w-4 h-4 ${i < review.rating ? 'text-yellow-400 fill-current' : 'text-gray-300'}`} 
                        />
                      ))}
                    </div>
                    <p className="text-xs text-gray-500">{review.date}</p>
                  </div>
                </div>

                {/* Content */}
                <div className="mb-4">
                  <h5 className="font-semibold text-gray-900 mb-2">{review.title}</h5>
                  <p className="text-gray-700 text-sm leading-relaxed">{review.content}</p>
                </div>

                {/* Occasion Badge */}
                <div className="flex items-center justify-between">
                  <span className="bg-pink-100 text-pink-600 px-3 py-1 rounded-full text-xs font-semibold">
                    {review.occasion}
                  </span>
                  <Quote className="w-5 h-5 text-pink-300" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Featured Review */}
        <div className="bg-white rounded-3xl shadow-xl p-8 lg:p-12">
          <div className="text-center mb-8">
            <div className="flex items-center justify-center space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 text-yellow-400 fill-current" />
              ))}
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Featured Review</h3>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="bg-pink-50 rounded-2xl p-8">
              <div className="flex items-center space-x-4 mb-6">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center">
                  <span className="text-pink-600 font-bold text-xl">SJ</span>
                </div>
                <div>
                  <h4 className="text-xl font-bold text-gray-900">Sarah Johnson</h4>
                  <p className="text-gray-600">Wedding Client • Plano, TX</p>
                </div>
              </div>
              
              <blockquote className="text-lg text-gray-700 italic leading-relaxed mb-6">
                "Working with Shira was an absolute dream! From our initial consultation to the final delivery, 
                she was professional, creative, and incredibly talented. Our wedding cake was not only stunning 
                but also delicious. Every guest commented on how beautiful and tasty it was. Shira truly has a 
                gift for bringing visions to life. I can't recommend her enough!"
              </blockquote>

              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-600 font-semibold">5.0/5.0</span>
                </div>
                <div className="text-pink-600 font-semibold">Verified Customer</div>
              </div>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-pink-500 to-pink-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Create Your Perfect Cake?</h3>
            <p className="text-lg mb-6 opacity-90">
              Join hundreds of satisfied customers who've trusted Shira with their special occasions.
            </p>
            <button 
              onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-white text-pink-600 font-semibold py-3 px-8 rounded-lg hover:bg-pink-50 transition-all duration-300 transform hover:scale-105"
            >
              Order Your Cake Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;
