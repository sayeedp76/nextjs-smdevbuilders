'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Banner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  };

  const properties = [
    {
      title: "Residential",
      description: "Premium Houses & Apartments",
      icon: "/jkbuilder images/apartments-icon.png",
    },
    {
      title: "Commercial",
      description: "Office Spaces & Retail",
      icon: "/jkbuilder images/sale-icon.png",
    },
    {
      title: "Premium",
      description: "Luxury Villas & Penthouses",
      icon: "/jkbuilder images/rent-icon.png",
    },
    {
      title: "Industrial",
      description: "Warehouses & Factories",
      icon: "/jkbuilder images/sale-icon.png",
    },
    {
      title: "Land",
      description: "Plots & Agricultural Spaces",
      icon: "/jkbuilder images/rent-icon.png",
    },
    {
      title: "Hospitality",
      description: "Hotels & Resorts",
      icon: "/jkbuilder images/apartments-icon.png",
    },
    {
      title: "Retail Spaces",
      description: "Shops & Malls",
      icon: "/jkbuilder images/sale-icon.png",
    },
    {
      title: "Smart Homes",
      description: "AI-Powered Residences",
      icon: "/jkbuilder images/apartments-icon.png",
    },
    {
      title: "Medical Facilities",
      description: "Clinics & Healthcare Buildings",
      icon: "/jkbuilder images/rent-icon.png",
    },
  ];

  return (
    <div className="relative bg-gradient-to-br from-black via-gray-900 to-gray-800 overflow-hidden min-h-[850px] py-12">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-pink-600/10 to-purple-600/10 opacity-75 animate-pulse" />

      <div className="container mx-auto px-4 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Text Section */}
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm bg-gray-900/50 px-4 py-2 rounded-full backdrop-blur-md shadow-lg text-blue-400"
            >
              <span className="font-bold">SM BUILDERS</span> - Pioneering the Future
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-5xl lg:text-6xl font-bold text-gray-200 tracking-wide"
            >
              Explore <span className="text-blue-400 glow-on-text">Futuristic Properties</span> with SM Developers
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="text-lg text-gray-300"
            >
              Discover luxury residences and cutting-edge commercial spaces built for tomorrow.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="flex gap-4"
            >
              <Button className="bg-gradient-to-br from-blue-600 to-purple-600 px-8 py-3 text-white text-lg rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition-transform">
                Explore Now
              </Button>
              <Button className="bg-white/20 backdrop-blur-md px-8 py-3 text-blue-200 text-lg rounded-lg border border-blue-400 hover:bg-blue-600/30 hover:text-white transition-all">
                Learn More
              </Button>
            </motion.div>
          </div>

          {/* Image/Interactive Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.8 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              <Image
                src="/jkbuilder images/1745699234675.png"
                alt="SM Builders Logo"
                fill
                className="rounded-lg shadow-2xl border-2 border-blue-400 hover:scale-105 transition-transform"
              />
              {/* Optional Glow Overlay */}
              <div className="absolute inset-0 rounded-lg border-2 border-blue-400/50 animate-pulse" />
            </div>
          </motion.div>
        </div>

        {/* Property Categories */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {properties.map((item, index) => (
            <motion.div
              key={item.title}
              className="text-center p-4 bg-gray-900/70 rounded-lg hover:shadow-lg transform hover:scale-105 transition-all group"
              variants={itemVariants}
            >
              <div className="relative w-20 h-20 mx-auto mb-4">
                <Image
                  src={item.icon}
                  alt={item.title}
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p className="font-semibold text-gray-200">{item.title}</p>
              <p className="text-sm text-gray-400 mt-1">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;