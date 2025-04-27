'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Building2, Award, Users, Clock, CheckCircle2, Home, Shield, Star, Heart, DollarSign, Building } from 'lucide-react';

const About = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-sky-100">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative h-[600px] w-full"
          >
            <Image
              src="/jkbuilder images/intro1.jpg"
              alt="About SM Builders"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover rounded-lg shadow-xl"
              priority
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">About SM Builders</h2>
            <p className="text-blue-800 mb-8">
              Sai Manjunath Builders is a leading construction company dedicated to delivering high-quality projects with a focus on innovation, sustainability, and customer satisfaction. With years of experience in the industry, we have built a reputation for excellence and reliability.
            </p>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Building className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-blue-900 mb-2">$50M+</h3>
                <p className="text-blue-700">Projects Value</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Shield className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-blue-900 mb-2">100%</h3>
                <p className="text-blue-700">Quality Guarantee</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <Star className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-blue-900 mb-2">4.9/5</h3>
                <p className="text-blue-700">Customer Rating</p>
              </div>
              <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <DollarSign className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-lg font-semibold text-blue-900 mb-2">25+</h3>
                <p className="text-blue-700">Awards Won</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 