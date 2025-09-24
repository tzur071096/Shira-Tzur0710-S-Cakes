'use client';

import { Instagram, Facebook, ExternalLink, Heart, MessageCircle } from 'lucide-react';

const SocialFeeds = () => {
  // Mock Instagram posts
  const instagramPosts = [
    {
      id: 1,
      image: '/images/1.jpg',
      caption: 'Birthday cake magic ✨ Custom unicorn cake for a special 8-year-old!',
      likes: 42,
      comments: 8,
      date: '2 days ago'
    },
    {
      id: 2,
      image: '/images/2.jpg',
      caption: 'Wedding cake elegance 💕 This 3-tier beauty was the centerpiece of a perfect day',
      likes: 67,
      comments: 12,
      date: '5 days ago'
    },
    {
      id: 3,
      image: '/images/3.jpg',
      caption: 'Chocolate lovers unite! 🍫 Rich chocolate cake with ganache drizzle',
      likes: 89,
      comments: 15,
      date: '1 week ago'
    },
    {
      id: 4,
      image: '/images/4.jpg',
      caption: 'Floral design perfection 🌸 Spring vibes with this delicate flower cake',
      likes: 56,
      comments: 9,
      date: '1 week ago'
    }
  ];

  // Mock Facebook posts
  const facebookPosts = [
    {
      id: 1,
      content: 'Just finished another amazing baking workshop! Teaching the basics of cake decorating to a wonderful group of students. The joy on their faces when they see their creations is priceless! 🎂✨',
      image: '/images/5.jpg',
      likes: 23,
      comments: 5,
      shares: 3,
      date: '3 days ago'
    },
    {
      id: 2,
      content: 'Behind the scenes: Creating a custom wedding cake for Sarah and Michael. Every detail matters when it comes to your special day! 💕',
      image: '/images/6.jpg',
      likes: 45,
      comments: 8,
      shares: 2,
      date: '1 week ago'
    },
    {
      id: 3,
      content: 'Summer baking workshops are back! 🎉 Limited spots available for our July sessions. Perfect for beginners who want to learn the art of cake decorating.',
      image: '/images/7.jpg',
      likes: 34,
      comments: 12,
      shares: 7,
      date: '2 weeks ago'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-pink-600 mb-4">
            <Heart className="w-6 h-6" />
            <span className="text-sm font-semibold uppercase tracking-wide">Social Media</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Follow My Baking Journey
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            See my latest creations, behind-the-scenes moments, and baking tips on social media.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Instagram Feed */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-pink-500 to-purple-600 p-6">
              <div className="flex items-center space-x-3">
                <Instagram className="w-8 h-8 text-white" />
                <div>
                  <h3 className="text-xl font-bold text-white">Instagram</h3>
                  <p className="text-pink-100">@shirascakes</p>
                </div>
                <a 
                  href="https://www.instagram.com/shirascakes/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="ml-auto"
                >
                  <ExternalLink className="w-5 h-5 text-white hover:text-pink-200 transition-colors" />
                </a>
              </div>
            </div>

            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                {instagramPosts.map((post) => (
                  <div key={post.id} className="bg-gray-50 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                    <div className="aspect-square overflow-hidden">
                      <img 
                        src={post.image} 
                        alt={post.caption}
                        className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-4">
                      <p className="text-sm text-gray-700 mb-3 line-clamp-2">{post.caption}</p>
                      <div className="flex items-center justify-between text-xs text-gray-500">
                        <div className="flex items-center space-x-3">
                          <div className="flex items-center space-x-1">
                            <Heart className="w-3 h-3 text-red-500" />
                            <span>{post.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MessageCircle className="w-3 h-3 text-gray-400" />
                            <span>{post.comments}</span>
                          </div>
                        </div>
                        <span>{post.date}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <a 
                  href="https://www.instagram.com/shirascakes/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Instagram className="w-5 h-5" />
                  <span>Follow on Instagram</span>
                </a>
              </div>
            </div>
          </div>

          {/* Facebook Feed */}
          <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 p-6">
              <div className="flex items-center space-x-3">
                <Facebook className="w-8 h-8 text-white" />
                <div>
                  <h3 className="text-xl font-bold text-white">Facebook</h3>
                  <p className="text-blue-100">Cakes by Shira</p>
                </div>
                <a 
                  href="https://www.facebook.com/cakesbyshira" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="ml-auto"
                >
                  <ExternalLink className="w-5 h-5 text-white hover:text-blue-200 transition-colors" />
                </a>
              </div>
            </div>

            <div className="p-6">
              <div className="space-y-6">
                {facebookPosts.map((post) => (
                  <div key={post.id} className="border-b border-gray-100 pb-6 last:border-b-0 last:pb-0">
                    <div className="flex items-start space-x-3 mb-3">
                      <div className="w-10 h-10 bg-pink-100 rounded-full flex items-center justify-center">
                        <span className="text-pink-600 font-bold text-sm">ST</span>
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <span className="font-semibold text-gray-900">Shira Tzur</span>
                          <span className="text-gray-500">•</span>
                          <span className="text-sm text-gray-500">{post.date}</span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-gray-700 mb-4 leading-relaxed">{post.content}</p>
                    
                    {post.image && (
                      <div className="mb-4">
                        <img 
                          src={post.image} 
                          alt="Facebook post"
                          className="w-full h-48 object-cover rounded-lg"
                        />
                      </div>
                    )}
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4 text-red-500" />
                          <span>{post.likes}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MessageCircle className="w-4 h-4 text-gray-400" />
                          <span>{post.comments}</span>
                        </div>
                        <span>{post.shares} shares</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="mt-6 text-center">
                <a 
                  href="https://www.facebook.com/cakesbyshira" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105"
                >
                  <Facebook className="w-5 h-5" />
                  <span>Follow on Facebook</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Stats */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Join My Community</h3>
            <p className="text-gray-600">Follow along for baking tips, behind-the-scenes content, and the latest cake creations.</p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-gradient-to-r from-pink-500 to-purple-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Instagram className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">1.2K</div>
              <div className="text-sm text-gray-600">Instagram Followers</div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-blue-500 to-blue-700 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Facebook className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">850</div>
              <div className="text-sm text-gray-600">Facebook Followers</div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-pink-500 to-pink-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-white" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">5.0</div>
              <div className="text-sm text-gray-600">Average Rating</div>
            </div>
            <div className="text-center">
              <div className="bg-gradient-to-r from-pink-400 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-white font-bold text-lg">200+</span>
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-2">200+</div>
              <div className="text-sm text-gray-600">Happy Customers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialFeeds;
