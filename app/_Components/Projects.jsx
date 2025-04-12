'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');
  const [hoveredProject, setHoveredProject] = useState(null);

  // Category-specific colors for buttons and accents
  const categoryColors = {
    residential: 'bg-blue-600 hover:bg-blue-700',
    commercial: 'bg-purple-600 hover:bg-purple-700',
    plots: 'bg-emerald-600 hover:bg-emerald-700',
    layouts: 'bg-orange-600 hover:bg-orange-700',
    all: 'bg-gray-800 hover:bg-gray-900'
  };

  const projects = [
    {
      id: 1,
      title: 'Luxury Villa Project',
      category: 'residential',
      image: '/jkbuilder images/villa-1.jpg',
      description: 'Modern luxury villa with smart home features',
      features: ['Smart Home Integration', 'Landscaped Garden', 'Swimming Pool'],
      year: '2023',
      area: '4500 sq.ft',
      location: 'Mumbai, India'
    },
    {
      id: 2,
      title: 'Commercial Complex',
      category: 'commercial',
      image: '/jkbuilder images/commercial-1.jpg',
      description: 'State-of-the-art commercial space',
      features: ['Retail Spaces', 'Office Complex', 'Parking Facility'],
      year: '2022',
      area: '12000 sq.ft',
      location: 'Delhi, India'
    },
    {
      id: 3,
      title: 'Apartment Complex',
      category: 'residential',
      image: '/jkbuilder images/apartment-1.jpg',
      description: 'Modern apartment living',
      features: ['Gym', 'Swimming Pool', 'Community Center'],
      year: '2023',
      area: '8000 sq.ft',
      location: 'Bangalore, India'
    },
    {
      id: 4,
      title: 'Shopping Mall',
      category: 'commercial',
      image: '/jkbuilder images/mall-1.jpg',
      description: 'Premium shopping experience',
      features: ['Food Court', 'Entertainment Zone', 'Parking'],
      year: '2022',
      area: '25000 sq.ft',
      location: 'Hyderabad, India'
    },
    {
      id: 5,
      title: 'Premium Plots - Phase 1',
      category: 'plots',
      image: '/jkbuilder images/destinationalparks.jpg',
      description: 'Premium residential plots with all amenities',
      features: ['Gated Community', '24/7 Security', 'Water Supply'],
      year: '2023',
      area: '2400 sq.ft',
      location: 'Chennai, India'
    },
    {
      id: 6,
      title: 'Layout Development - Phase 1',
      category: 'layouts',
      image: '/jkbuilder images/under construct archtitect.jpg',
      description: 'Well-planned residential layout',
      features: ['Wide Roads', 'Parks', 'Drainage System'],
      year: '2023',
      area: '50000 sq.ft',
      location: 'Pune, India'
    },
    {
      id: 7,
      title: 'Premium Plots - Phase 2',
      category: 'plots',
      image: '/jkbuilder images/villa2.jpg',
      description: 'Luxury residential plots with premium amenities',
      features: ['Club House', 'Jogging Track', 'Children\'s Play Area'],
      year: '2023',
      area: '3000 sq.ft',
      location: 'Bangalore, India'
    },
    {
      id: 8,
      title: 'Layout Development - Phase 2',
      category: 'layouts',
      image: '/jkbuilder images/modular 1.jpg',
      description: 'Modern township layout with smart features',
      features: ['Smart City Features', 'Solar Power', 'Waste Management'],
      year: '2023',
      area: '75000 sq.ft',
      location: 'Mumbai, India'
    },
    {
      id: 9,
      title: 'Premium Plots - Phase 3',
      category: 'plots',
      image: '/jkbuilder images/luxury 1.jpg',
      description: 'Exclusive residential plots in prime location',
      features: ['Landscaped Gardens', 'Community Hall', 'Shopping Center'],
      year: '2023',
      area: '3500 sq.ft',
      location: 'Hyderabad, India'
    },
    {
      id: 10,
      title: 'Layout Development - Phase 3',
      category: 'layouts',
      image: '/jkbuilder images/modular2.jpg',
      description: 'Eco-friendly residential layout',
      features: ['Rainwater Harvesting', 'Green Spaces', 'Electric Vehicle Charging'],
      year: '2023',
      area: '60000 sq.ft',
      location: 'Delhi, India'
    }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section className="relative py-20 min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Our Projects
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our portfolio of successful projects that showcase our expertise and commitment to quality.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Project Filters and Grid */}
          <div className="lg:w-2/3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="flex flex-wrap justify-center gap-4 mb-12"
            >
              {['all', 'residential', 'commercial', 'plots', 'layouts'].map((filter) => (
                <motion.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`px-6 py-2 rounded-full transition-all ${
                    activeFilter === filter
                      ? categoryColors[filter] + ' text-white shadow-lg'
                      : 'bg-white text-gray-600 hover:bg-gray-100'
                  }`}
                >
                  {filter.charAt(0).toUpperCase() + filter.slice(1)}
                </motion.button>
              ))}
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <AnimatePresence>
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white/90 backdrop-blur-sm rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-all"
                    onHoverStart={() => setHoveredProject(project.id)}
                    onHoverEnd={() => setHoveredProject(null)}
                  >
                    <div className="relative h-64 group">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300" />
                      <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                        <motion.h3 
                          className="text-xl font-bold mb-2"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.2 }}
                        >
                          {project.title}
                        </motion.h3>
                        <motion.div 
                          className="flex gap-4 text-sm"
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.3 }}
                        >
                          <span>{project.year}</span>
                          <span>{project.area}</span>
                          <span>{project.location}</span>
                        </motion.div>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="text-gray-600 mb-4">{project.description}</p>
                      <ul className="space-y-2">
                        {project.features.map((feature, i) => (
                          <motion.li 
                            key={i} 
                            className="flex items-center text-gray-600"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.1 * i }}
                          >
                            <svg className={`w-5 h-5 mr-2 ${
                              project.category === 'residential' ? 'text-blue-600' :
                              project.category === 'commercial' ? 'text-purple-600' :
                              project.category === 'plots' ? 'text-emerald-600' :
                              'text-orange-600'
                            }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`mt-6 w-full py-2 px-4 rounded-md text-white transition-colors ${categoryColors[project.category]}`}
                      >
                        View Details
                      </motion.button>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>

          {/* Blueprint Section */}
          <div className="hidden lg:block lg:w-1/3 relative">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="sticky top-20"
            >
              <div className="bg-white/90 backdrop-blur-sm p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Project Planning
                </h3>
                <p className="text-gray-600 mb-6">
                  Our expert team ensures meticulous planning and execution of every project, from initial design to final construction.
                </p>
                <div className="relative h-[600px] rounded-lg overflow-hidden">
                  <Image
                    src="/jkbuilder images/blueprint-bg.jpg"
                    alt="Architectural Blueprint"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-black/10"></div>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="mt-6 w-full py-3 px-6 rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-all"
                >
                  Schedule a Consultation
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects; 