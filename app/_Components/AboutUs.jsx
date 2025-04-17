'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutUs = () => {
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
          <h1 className="text-4xl font-bold text-white mb-4">
            About Sai Manjunath Builders and Developers
          </h1>
          <p className="text-gray-700 mb-6">
            Founded in 1995, Sai Manjunath Builders and Developers has grown from a small construction company to one of the most trusted names in the industry. Our journey began with a simple mission: to build quality homes and commercial spaces that stand the test of time.
          </p>
        </motion.div>

        {/* Company Overview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white">Our Story</h2>
            <p className="text-gray-300 leading-relaxed">
              Over the years, we've completed over 500 projects, ranging from residential complexes to commercial buildings, each reflecting our commitment to quality and customer satisfaction.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[400px] rounded-lg overflow-hidden shadow-xl"
          >
            <img
              src="/jkbuilder images/ethinic design.jpg"
              alt="Ethnic Design"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Our Mission</h3>
            <p className="text-gray-300 leading-relaxed">
              To deliver exceptional construction services that exceed client expectations through innovative solutions, sustainable practices, and unwavering commitment to quality.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-gray-800 p-8 rounded-lg shadow-lg border border-gray-700"
          >
            <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
            <p className="text-gray-300 leading-relaxed">
              To be the leading construction company known for transforming architectural dreams into reality while setting new standards in quality, sustainability, and customer satisfaction.
            </p>
          </motion.div>
        </div>

        {/* Core Values */}
        <div className="mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">Our Core Values</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality',
                description: 'We never compromise on quality, ensuring every project meets the highest standards.',
                icon: '🏗️'
              },
              {
                title: 'Integrity',
                description: 'We conduct business with honesty, transparency, and ethical practices.',
                icon: '🤝'
              },
              {
                title: 'Innovation',
                description: 'We embrace new technologies and methods to deliver better results.',
                icon: '💡'
              }
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-800 p-6 rounded-lg shadow-lg text-center border border-gray-700"
              >
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-300">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white">Our Leadership Team</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'John Kumar',
                position: 'Founder & CEO',
                image: '/jkbuilder images/testimony1.jpg'
              },
              {
                name: 'Sarah Patel',
                position: 'Chief Architect',
                image: '/jkbuilder images/testimony2.webp'
              },
              {
                name: 'Michael Chen',
                position: 'Project Director',
                image: '/jkbuilder images/testimony3.jpg'
              }
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-gray-700"
              >
                <div className="relative h-64">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-xl font-bold text-white mb-2">{member.name}</h3>
                  <p className="text-gray-300">{member.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs; 