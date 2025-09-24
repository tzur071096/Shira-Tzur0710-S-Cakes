'use client';

import { GraduationCap, Heart, Users, Award, BookOpen, Coffee } from 'lucide-react';

const About = () => {
  const milestones = [
    {
      year: '2019',
      title: 'Started Baking Journey',
      description: 'What began as a fun hobby quickly turned into a passion for creating beautiful, delicious cakes.'
    },
    {
      year: '2020',
      title: 'First Custom Orders',
      description: 'Started taking custom cake orders for friends and family, building my reputation in the community.'
    },
    {
      year: '2021',
      title: 'University of Texas',
      description: 'Began my studies at UT Austin while continuing to grow my baking business on the side.'
    },
    {
      year: '2022',
      title: 'Baking Workshops',
      description: 'Started teaching summer baking workshops, sharing my knowledge and passion with others.'
    },
    {
      year: '2023',
      title: '200+ Cakes Created',
      description: 'Reached the milestone of creating over 200 custom cakes for various occasions and celebrations.'
    },
    {
      year: '2024',
      title: 'Full-Time Student & Baker',
      description: 'Balancing full-time studies at UT Austin with a thriving custom cake business.'
    }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion-Driven',
      description: 'Every cake is created with love and attention to detail, ensuring each customer feels special.'
    },
    {
      icon: Award,
      title: 'Quality First',
      description: 'Using only the finest ingredients and techniques to create cakes that taste as good as they look.'
    },
    {
      icon: Users,
      title: 'Community Focused',
      description: 'Building relationships with customers and teaching others the joy of baking through workshops.'
    },
    {
      icon: BookOpen,
      title: 'Always Learning',
      description: 'Continuously improving skills through practice, research, and staying updated with baking trends.'
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-pink-600 mb-4">
            <Heart className="w-6 h-6" />
            <span className="text-sm font-semibold uppercase tracking-wide">About Shira</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Meet the Baker Behind the Magic
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A 19-year-old self-taught baker, cake designer, and full-time student at the University of Texas at Austin.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Left Side - Story */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gray-900">My Story</h3>
              <div className="space-y-4 text-lg text-gray-700 leading-relaxed">
                <p>
                  Hi, I'm Shira! What started as a fun hobby in 2019 quickly turned into a full-blown passion 
                  for bringing custom cake visions to life. As a 19-year-old self-taught baker and cake designer, 
                  I've learned that the best ingredients for any cake are creativity, patience, and a whole lot of love.
                </p>
                <p>
                  While I'm currently a full-time student at the University of Texas at Austin, my passion for baking 
                  has never wavered. In fact, it's only grown stronger. I specialize in custom cakes for any occasion, 
                  but you'll also find me whipping up cupcakes, cookies, and running summer baking workshops where I 
                  teach the basics (and the fun!) of baking.
                </p>
                <p>
                  Every cake I create is a unique piece of art, carefully crafted to make your special moments even 
                  more memorable. From intimate birthday celebrations to grand wedding receptions, I bring the same 
                  level of dedication and creativity to every project.
                </p>
              </div>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-pink-600" />
                  </div>
                  <h4 className="font-bold text-gray-900 mb-2">{value.title}</h4>
                  <p className="text-sm text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right Side - Image and Stats */}
          <div className="space-y-8">
            <div className="relative">
              <div className="bg-gradient-to-br from-pink-100 to-pink-200 rounded-3xl p-8">
                <div className="bg-white rounded-2xl p-6 shadow-lg">
                  <div className="text-center">
                    <div className="w-32 h-32 bg-pink-100 rounded-full mx-auto mb-6 flex items-center justify-center">
                      <GraduationCap className="w-16 h-16 text-pink-600" />
                    </div>
                    <h4 className="text-2xl font-bold text-gray-900 mb-2">Shira Tzur</h4>
                    <p className="text-pink-600 font-semibold mb-4">Baker & Student</p>
                    <div className="space-y-2 text-sm text-gray-600">
                      <p>🎓 University of Texas at Austin</p>
                      <p>🎂 Self-taught since 2019</p>
                      <p>👩‍🍳 200+ cakes created</p>
                      <p>📚 Teaching baking workshops</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-pink-50 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">5+</div>
                <div className="text-sm text-gray-600">Years Baking</div>
              </div>
              <div className="bg-pink-50 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">19</div>
                <div className="text-sm text-gray-600">Years Old</div>
              </div>
              <div className="bg-pink-50 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">200+</div>
                <div className="text-sm text-gray-600">Cakes Made</div>
              </div>
              <div className="bg-pink-50 rounded-2xl p-6 text-center">
                <div className="text-3xl font-bold text-pink-600 mb-2">100%</div>
                <div className="text-sm text-gray-600">Self-Taught</div>
              </div>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="bg-gradient-to-br from-pink-50 to-white rounded-3xl p-8 lg:p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">My Journey</h3>
            <p className="text-lg text-gray-600">
              From hobby to passion - here's how my baking journey has evolved over the years.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-pink-200 rounded-full"></div>
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
                  <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
                    <div className="bg-white rounded-2xl p-6 shadow-lg">
                      <div className="text-2xl font-bold text-pink-600 mb-2">{milestone.year}</div>
                      <h4 className="text-xl font-bold text-gray-900 mb-2">{milestone.title}</h4>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  <div className="w-8 h-8 bg-pink-500 rounded-full border-4 border-white shadow-lg flex items-center justify-center z-10">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div className="w-1/2"></div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-pink-100 rounded-2xl p-8">
            <div className="flex items-center justify-center space-x-2 text-pink-600 mb-4">
              <Coffee className="w-6 h-6" />
              <span className="text-lg font-semibold">Ready to Create Something Sweet Together?</span>
            </div>
            <p className="text-gray-700 mb-6 max-w-2xl mx-auto">
              Let's discuss your vision and bring your dream cake to life. Every creation starts with a conversation.
            </p>
            <button 
              onClick={() => document.getElementById('home')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Start Your Order
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
