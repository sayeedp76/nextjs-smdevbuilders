'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const Services = () => {
  const services = [
    {
      title: 'PLANNING',
      description: 'We create an idea of a beautiful and perfect house for you that you can make the most peaceful home',
      image: '/jkbuilder images/planning-icon.png',
    },
    {
      title: 'ARCHITECTURE',
      description: 'We deliver the plans for diverse projects and keep all the essential rules guided by the government',
      image: '/jkbuilder images/architecture-icon.png',
    },
    {
      title: 'CONSTRUCTION',
      description: 'We have trained worker with top-notch quality of raw material and responsible attitude towards the work',
      image: '/jkbuilder images/construction-icon.png',
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
          <h2 className="text-3xl font-bold text-gray-900 mb-4">WHAT WE DO?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We build commercial and housing projects with top-notch quality and affordability.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="relative w-20 h-20 mx-auto mb-4">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-center mb-2">{service.title}</h3>
              <p className="text-gray-600 text-center">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 