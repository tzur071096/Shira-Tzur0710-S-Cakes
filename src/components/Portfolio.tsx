'use client';

import { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Heart, Star } from 'lucide-react';

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  
  // Portfolio images - using the available images from the folder
  const portfolioImages = [
    { id: 1, src: '/images/1.jpg', title: 'Birthday Celebration Cake', category: 'Birthday' },
    { id: 2, src: '/images/2.jpg', title: 'Wedding Cake Elegance', category: 'Wedding' },
    { id: 3, src: '/images/3.jpg', title: 'Chocolate Delight', category: 'Chocolate' },
    { id: 4, src: '/images/4.jpg', title: 'Floral Design Cake', category: 'Floral' },
    { id: 5, src: '/images/5.jpg', title: 'Kids Party Cake', category: 'Kids' },
    { id: 6, src: '/images/6.jpg', title: 'Anniversary Special', category: 'Anniversary' },
    { id: 7, src: '/images/7.jpg', title: 'Graduation Cake', category: 'Graduation' },
    { id: 8, src: '/images/8.jpg', title: 'Holiday Celebration', category: 'Holiday' },
    { id: 9, src: '/images/9.jpg', title: 'Corporate Event Cake', category: 'Corporate' },
    { id: 10, src: '/images/10.jpg', title: 'Baby Shower Cake', category: 'Baby Shower' },
    { id: 12, src: '/images/12.jpg', title: 'Custom Design Cake', category: 'Custom' },
    { id: 13, src: '/images/13.jpg', title: 'Elegant Wedding Cake', category: 'Wedding' },
    { id: 14, src: '/images/14.jpg', title: 'Birthday Surprise', category: 'Birthday' },
    { id: 15, src: '/images/15.jpg', title: 'Holiday Special', category: 'Holiday' },
    { id: 16, src: '/images/16.jpg', title: 'Anniversary Celebration', category: 'Anniversary' },
    { id: 18, src: '/images/18.jpg', title: 'Custom Creation', category: 'Custom' }
  ];

  const categories = ['All', 'Birthday', 'Wedding', 'Chocolate', 'Floral', 'Kids', 'Anniversary', 'Graduation', 'Holiday', 'Corporate', 'Baby Shower', 'Custom'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? portfolioImages 
    : portfolioImages.filter(img => img.category === activeCategory);

  const openModal = (index: number) => {
    setSelectedImage(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    if (selectedImage !== null) {
      setSelectedImage((selectedImage + 1) % filteredImages.length);
    }
  };

  const prevImage = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  return (
    <section id="portfolio" className="py-20 bg-gradient-to-br from-pink-50 to-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-2 text-pink-600 mb-4">
            <Heart className="w-6 h-6" />
            <span className="text-sm font-semibold uppercase tracking-wide">Portfolio</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Sweet Creations
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Each cake tells a story. Here are some of my favorite creations that brought joy to special moments.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeCategory === category
                  ? 'bg-pink-500 text-white shadow-lg transform scale-105'
                  : 'bg-white text-gray-700 hover:bg-pink-100 hover:text-pink-600 shadow-md'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div
              key={image.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer"
              onClick={() => openModal(index)}
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={image.src}
                  alt={image.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <h3 className="font-bold text-lg mb-1">{image.title}</h3>
                  <p className="text-sm opacity-90">{image.category}</p>
                </div>
              </div>
              <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Star className="w-5 h-5 text-pink-500" />
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-pink-600 mb-2">200+</div>
              <div className="text-gray-600">Cakes Created</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-600 mb-2">50+</div>
              <div className="text-gray-600">Wedding Cakes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-600 mb-2">100+</div>
              <div className="text-gray-600">Birthday Cakes</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-pink-600 mb-2">5</div>
              <div className="text-gray-600">Years Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] bg-white rounded-2xl overflow-hidden">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <button
              onClick={prevImage}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>
            <button
              onClick={nextImage}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 backdrop-blur-sm rounded-full p-2 hover:bg-white transition-colors"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
            <img
              src={filteredImages[selectedImage].src}
              alt={filteredImages[selectedImage].title}
              className="w-full h-full object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
              <h3 className="text-2xl font-bold mb-2">{filteredImages[selectedImage].title}</h3>
              <p className="text-lg opacity-90">{filteredImages[selectedImage].category}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Portfolio;
