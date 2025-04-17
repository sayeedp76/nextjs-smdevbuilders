'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const Services = () => {
  return (
    <section className="relative py-20 min-h-screen bg-gradient-to-b from-gray-900 to-gray-800">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl font-bold text-white mb-6">
            Our Services
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive construction and development solutions tailored to your needs
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              title: 'Residential Construction',
              description: 'Custom homes, apartments, and residential complexes built to perfection.',
              image: '/jkbuilder images/villa1.jpg',
              icon: '🏠'
            },
            {
              title: 'Commercial Projects',
              description: 'Office spaces, retail outlets, and commercial complexes with modern amenities.',
              image: '/jkbuilder images/modular 1.jpg',
              icon: '🏢'
            },
            {
              title: 'Interior Design',
              description: 'Stunning interior spaces that reflect your style and enhance functionality.',
              image: '/jkbuilder images/interior1.jpg',
              icon: '🎨'
            },
            {
              title: 'Renovation Services',
              description: 'Transform existing spaces with our expert renovation and remodeling services.',
              image: '/jkbuilder images/interior2.jpg',
              icon: '🔨'
            },
            {
              title: 'Project Management',
              description: 'Professional project management ensuring timely and efficient completion.',
              image: '/jkbuilder images/interior3.jpg',
              icon: '📊'
            },
            {
              title: 'Sustainable Building',
              description: 'Eco-friendly construction solutions for a better future.',
              image: '/jkbuilder images/interior4.jpg',
              icon: '🌱'
            }
          ].map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:border-amber-500 transition-colors"
            >
              <div className="relative h-64">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent" />
              </div>
              <div className="p-6">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{service.title}</h3>
                <p className="text-gray-300">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-20 text-center"
        >
          <h2 className="text-3xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
          <p className="text-xl text-gray-300 mb-8">
            Contact us today for a free consultation and let's bring your vision to life
          </p>
          <button className="bg-amber-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-amber-700 transition-colors shadow-lg">
            Get Started
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Services; 