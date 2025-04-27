'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Building2, Home, Briefcase, Award, Users, Phone, Mail, MapPin } from 'lucide-react';

const Services = () => {
  const services = [
    {
      title: 'Residential Construction',
      description: 'Custom homes and luxury residences built to your specifications',
      icon: <Home className="w-8 h-8 text-blue-600" />,
      image: '/jkbuilder images/villa1.jpg'
    },
    {
      title: 'Commercial Projects',
      description: 'Office buildings, retail spaces, and commercial complexes',
      icon: <Building2 className="w-8 h-8 text-blue-600" />,
      image: '/jkbuilder images/penthouse.jpg'
    },
    {
      title: 'Interior Design',
      description: 'Professional interior design services for residential and commercial spaces',
      icon: <Briefcase className="w-8 h-8 text-blue-600" />,
      image: '/jkbuilder images/interior1.jpg'
    },
    {
      title: 'Project Management',
      description: 'End-to-end project management and consulting services',
      icon: <Award className="w-8 h-8 text-blue-600" />,
      image: '/jkbuilder images/modular 1.jpg'
    },
    {
      title: 'Renovation Services',
      description: 'Complete renovation and remodeling solutions',
      icon: <Users className="w-8 h-8 text-blue-600" />,
      image: '/jkbuilder images/interior2.jpg'
    },
    {
      title: 'Consultation',
      description: 'Expert advice and guidance for your construction projects',
      icon: <Phone className="w-8 h-8 text-blue-600" />,
      image: '/jkbuilder images/interior3.jpg'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-sky-100">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-blue-900 mb-4">Our Services</h2>
          <p className="text-blue-800 max-w-2xl mx-auto">
            Comprehensive construction solutions tailored to your needs
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="relative h-48">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold text-blue-900 mb-2">{service.title}</h3>
                <p className="text-blue-700">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;