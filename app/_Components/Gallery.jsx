'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const images = [
    {
      id: 1,
      src: '/jkbuilder images/villa1.jpg',
      alt: 'Luxury Villa Project',
      category: 'Residential'
    },
    {
      id: 2,
      src: '/jkbuilder images/penthouse.jpg',
      alt: 'Penthouse Project',
      category: 'Commercial'
    },
    {
      id: 3,
      src: '/jkbuilder images/modular 1.jpg',
      alt: 'Modular Home Project',
      category: 'Residential'
    },
    {
      id: 4,
      src: '/jkbuilder images/interior1.jpg',
      alt: 'Interior Design Project',
      category: 'Interior'
    },
    {
      id: 5,
      src: '/jkbuilder images/villa2.jpg',
      alt: 'Modern Villa Project',
      category: 'Residential'
    },
    {
      id: 6,
      src: '/jkbuilder images/interior2.jpg',
      alt: 'Luxury Interior Project',
      category: 'Interior'
    },
    {
      id: 7,
      src: '/jkbuilder images/luxury 1.jpg',
      alt: 'Luxury Home Project',
      category: 'Residential'
    },
    {
      id: 8,
      src: '/jkbuilder images/interior3.jpg',
      alt: 'Contemporary Interior Project',
      category: 'Interior'
    },
    {
      id: 9,
      src: '/jkbuilder images/interior4.jpg',
      alt: 'Modern Interior Project',
      category: 'Interior'
    }
  ];

  const categories = ['All', 'Residential', 'Commercial', 'Interior'];
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredImages = activeCategory === 'All' 
    ? images 
    : images.filter(img => img.category === activeCategory);

  const handleImageClick = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const handleClose = () => {
    setSelectedImage(null);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? filteredImages.length - 1 : prevIndex - 1
    );
    setSelectedImage(filteredImages[currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1]);
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === filteredImages.length - 1 ? 0 : prevIndex + 1
    );
    setSelectedImage(filteredImages[currentIndex === filteredImages.length - 1 ? 0 : currentIndex + 1]);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-sky-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Gallery</h2>
          <p className="text-blue-800 max-w-2xl mx-auto">
            Explore our collection of completed projects and ongoing constructions
          </p>
        </motion.div>

        {/* Category Filter */}
        <div className="flex justify-center gap-4 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                activeCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-blue-600 hover:bg-blue-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative group cursor-pointer overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow"
              onClick={() => handleImageClick(image, index)}
            >
              <div className="relative h-64">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity">
                  <h3 className="text-lg font-semibold">{image.alt}</h3>
                  <p className="text-sm">{image.category}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage && (
          <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
            <button
              onClick={handleClose}
              className="absolute top-4 right-4 text-white hover:text-blue-400 transition-colors"
            >
              <X size={32} />
            </button>
            <button
              onClick={handlePrev}
              className="absolute left-4 text-white hover:text-blue-400 transition-colors"
            >
              <ChevronLeft size={48} />
            </button>
            <button
              onClick={handleNext}
              className="absolute right-4 text-white hover:text-blue-400 transition-colors"
            >
              <ChevronRight size={48} />
            </button>
            <div className="relative w-full max-w-4xl h-[80vh]">
              <Image
                src={selectedImage.src}
                alt={selectedImage.alt}
                fill
                sizes="(max-width: 1200px) 100vw, 80vw"
                className="object-contain"
                priority
              />
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;