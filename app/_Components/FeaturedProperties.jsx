'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const FeaturedProperties = () => {
  const properties = [
    {
      title: 'Super Sale',
      price: '$500,000',
      type: 'Limited Time Offer',
      image: '/jkbuilder images/property1.jpg',
    },
    {
      title: 'Paid Partnership',
      price: '$750,000',
      type: 'Best Tour It',
      image: '/jkbuilder images/property2.jpg',
    },
    {
      title: 'Get Down Payment',
      price: '$600,000',
      type: 'Largest Rental',
      image: '/jkbuilder images/property3.jpg',
    },
    {
      title: 'Modern Home',
      price: '$450,000',
      type: 'New Listing',
      image: '/jkbuilder images/property4.jpg',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Featured Properties</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Discover our handpicked selection of premium properties that match your lifestyle and preferences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {properties.map((property, index) => (
            <motion.div
              key={property.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative h-48">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                  {property.type}
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{property.title}</h3>
                <p className="text-blue-600 font-bold text-lg mb-4">{property.price}</p>
                <div className="flex justify-between text-sm text-gray-500">
                  <span>3 Beds</span>
                  <span>2 Baths</span>
                  <span>1,500 sqft</span>
                </div>
                <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  View Details
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProperties; 