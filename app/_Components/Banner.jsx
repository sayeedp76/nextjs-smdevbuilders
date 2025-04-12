'use client';

import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { motion, AnimatePresence } from 'framer-motion';

const Banner = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-sm bg-gray-100 inline-block px-4 py-2 rounded-full"
          >
            <span className="font-bold text-blue-600">JK Builders</span> - Your Trusted Construction Partner
          </motion.p>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl lg:text-5xl font-bold"
          >
            Search And Tour With <span className="text-blue-600">JKM Builders</span>
          </motion.h1>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-600 text-lg"
          >
            Discover your dream property with JKM Builders. We offer a wide range of residential and commercial properties.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="flex gap-4"
          >
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg">
              Explore Now
            </Button>
          </motion.div>

          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div 
              className="text-center p-4 hover:bg-gray-50 rounded-lg transition-all group"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative w-20 h-20 mx-auto mb-4">
                <Image 
                  src="/jkbuilder images/apartments-icon.png" 
                  alt="Residential Properties" 
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p className="font-semibold text-gray-900">Residential</p>
              <p className="text-sm text-gray-600 mt-1">Premium Houses & Apartments</p>
            </motion.div>
            <motion.div 
              className="text-center p-4 hover:bg-gray-50 rounded-lg transition-all group"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative w-20 h-20 mx-auto mb-4">
                <Image 
                  src="/jkbuilder images/sale-icon.png" 
                  alt="Commercial Properties" 
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p className="font-semibold text-gray-900">Commercial</p>
              <p className="text-sm text-gray-600 mt-1">Office Spaces & Retail</p>
            </motion.div>
            <motion.div 
              className="text-center p-4 hover:bg-gray-50 rounded-lg transition-all group"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative w-20 h-20 mx-auto mb-4">
                <Image 
                  src="/jkbuilder images/rent-icon.png" 
                  alt="Premium Properties" 
                  fill
                  className="object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <p className="font-semibold text-gray-900">Premium</p>
              <p className="text-sm text-gray-600 mt-1">Luxury Villas & Penthouses</p>
            </motion.div>
          </motion.div>
        </div>

        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.8 }}
          className="relative"
        >
          <div className="w-full max-w-lg mx-auto">
            <div className="relative flex items-center">
              <div className="absolute flex items-center left-3">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-slate-600">
                  <path d="M8.25 4.5a3.75 3.75 0 1 1 7.5 0v8.25a3.75 3.75 0 1 1-7.5 0V4.5Z" />
                  <path d="M6 10.5a.75.75 0 0 1 .75.75v1.5a5.25 5.25 0 1 0 10.5 0v-1.5a.75.75 0 0 1 1.5 0v1.5a6.751 6.751 0 0 1-6 6.709v2.291h3a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1 0-1.5h3v-2.291a6.751 6.751 0 0 1-6-6.709v-1.5A.75.75 0 0 1 6 10.5Z" />
                </svg>
                <div className="h-6 border-l border-slate-200 ml-2.5"></div>
              </div>

              <input
                className="w-full bg-white placeholder:text-slate-400 text-slate-700 text-lg border border-slate-200 rounded-lg pr-3 pl-14 py-3 transition duration-300 ease-in-out focus:outline-none focus:border-blue-400 hover:border-slate-300 shadow-sm focus:shadow"
                placeholder="Search properties..." 
              />
              
              <button
                className="absolute right-3 rounded-md bg-blue-600 p-2.5 text-white transition-all hover:bg-blue-700 focus:bg-blue-700"
                type="button"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clipRule="evenodd" />
                </svg>
              </button> 
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Banner;