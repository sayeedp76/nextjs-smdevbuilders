'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Building2, Award, Users, Star, ArrowRight } from 'lucide-react';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-r from-amber-500/10 to-transparent" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-grey mb-6">
              About Sai Manjunath Builders
            </h1>
            <div className="w-24 h-1 bg-amber-500 mx-auto mb-8" />
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Building dreams with excellence and integrity since 1995
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-lg overflow-hidden"
            >
              <Image
                src="/jkbuilder-images/about/about-image.jpg"
                alt="Sai Manjunath Builders Office"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <h3 className="text-2xl font-bold text-white mb-2">Our Legacy</h3>
                <p className="text-gray-300">Building Excellence Since 1995</p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-amber-500">
                <h3 className="text-2xl font-bold text-white mb-4">Our Story</h3>
                <p className="text-gray-300">
                  Founded in 1995, Sai Manjunath Builders has grown from a small construction company to one of Bangalore's most trusted builders. Our journey has been marked by consistent quality, innovation, and customer satisfaction.
                </p>
              </div>
              <div className="bg-gray-800/50 p-6 rounded-lg border-l-4 border-amber-500">
                <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
                <p className="text-gray-300">
                  To create exceptional living and working spaces that enhance quality of life while maintaining the highest standards of construction and design.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16 bg-gray-800/50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Our Leadership Team</h2>
            <div className="w-24 h-1 bg-amber-500 mx-auto" />
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 p-6 rounded-lg border border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mr-4">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Mr. Rakesh</h3>
                  <p className="text-amber-500">Founder & CEO</p>
                </div>
              </div>
              <p className="text-gray-300">
                With over 25 years of experience in the construction industry, Mr. Rakesh leads our company with vision and expertise.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 p-6 rounded-lg border border-gray-700"
            >
              <div className="flex items-center mb-4">
                <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center mr-4">
                  <Building2 className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Mallesh Rai</h3>
                  <p className="text-amber-500">Chief Architect</p>
                </div>
              </div>
              <p className="text-gray-300">
                Our Chief Architect, Mallesh K, brings innovative design solutions and technical expertise to every project.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 p-6 rounded-lg text-center border border-gray-700"
            >
              <Award className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">50+</h3>
              <p className="text-gray-300">Projects Completed</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 p-6 rounded-lg text-center border border-gray-700"
            >
              <Star className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">25+</h3>
              <p className="text-gray-300">Years of Experience</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="bg-gray-800/50 p-6 rounded-lg text-center border border-gray-700"
            >
              <Users className="w-12 h-12 text-amber-500 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">1000+</h3>
              <p className="text-gray-300">Happy Clients</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gray-800/50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">Ready to Start Your Project?</h2>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Contact us today to discuss your construction needs and let us help bring your vision to life.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-amber-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors"
            >
              Get in Touch
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs; 