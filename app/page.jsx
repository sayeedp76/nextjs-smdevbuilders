'use client';

import React, { useState, useEffect } from 'react';
import Banner from './_Components/Banner';
import About from './_Components/About';
import Stats from './_Components/Stats';
import Process from './_Components/Process';
import Gallery from './_Components/Gallery';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Hero from './_Components/Hero';
import AboutUs from './_Components/AboutUs';
import Services from './_Components/Services';
import Contact from './_Components/Contact';

const introImages = [
  {
    src: '/jkbuilder images/intro1.jpg',
    title: 'Building Dreams into Reality',
    description: 'Expert construction services for your perfect space'
  },
  {
    src: '/jkbuilder images/intro2.jpg',
    title: 'Quality Craftsmanship',
    description: 'Precision and excellence in every project'
  },
  {
    src: '/jkbuilder images/intro3.jpg',
    title: 'Modern Architecture',
    description: 'Contemporary designs that stand the test of time'
  },
  {
    src: '/jkbuilder images/intro4.jpg',
    title: 'Sustainable Construction',
    description: 'Eco-friendly solutions for a better future'
  }
];

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % introImages.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % introImages.length);
    setIsAutoPlaying(false);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + introImages.length) % introImages.length);
    setIsAutoPlaying(false);
  };

  return (
    <main className="bg-gray-50">
      {/* Hero Carousel Section */}
      <section className="relative h-[80vh] overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0"
          >
            <div className="relative w-full h-full">
              <Image
                src={introImages[currentIndex].src}
                alt={introImages[currentIndex].title}
                fill
                sizes="100vw"
                style={{ objectFit: 'cover' }}
                priority
                quality={100}
                unoptimized={true}
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-b from-gray-900/70 to-gray-900/40" />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center text-white max-w-4xl px-4"
              >
                <h1 className="text-5xl md:text-6xl font-bold mb-4">
                  {introImages[currentIndex].title}
                </h1>
                <p className="text-xl md:text-2xl mb-8">
                  {introImages[currentIndex].description}
                </p>
                <button className="bg-amber-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-amber-700 transition-colors shadow-lg">
                  Explore Our Work
                </button>
              </motion.div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-amber-600 hover:bg-amber-700 p-2 rounded-full transition-all z-10 shadow-lg"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-amber-600 hover:bg-amber-700 p-2 rounded-full transition-all z-10 shadow-lg"
        >
          <svg
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Indicators */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {introImages.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setCurrentIndex(index);
                setIsAutoPlaying(false);
              }}
              className={`w-3 h-3 rounded-full transition-all ${
                currentIndex === index ? 'bg-amber-600 w-8' : 'bg-white bg-opacity-50'
              }`}
            />
          ))}
        </div>
      </section>

      <Banner />
      
      {/* Why Choose Us Section */}
      <section className="py-20 relative overflow-hidden">
        {/* Brick Pattern Background */}
        <div className="absolute inset-0 bg-[#f5f5f5]">
          <div className="absolute inset-0 opacity-10">
            <div className="grid grid-cols-8 gap-0">
              {Array.from({ length: 16 }).map((_, i) => (
                <div key={i} className="h-12 border-b border-r border-gray-300" />
              ))}
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose Sai Manjunath Builders and Developers?</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We stand out in the market with our commitment to excellence and customer satisfaction
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                title: 'Expert Craftsmanship',
                description: 'Our team of skilled professionals delivers exceptional quality in every project.',
                icon: '🏗️'
              },
              {
                title: 'Timely Delivery',
                description: 'We complete projects on schedule, ensuring your vision becomes reality without delay.',
                icon: '⏱️'
              },
              {
                title: 'Quality Materials',
                description: 'We use only the finest materials, ensuring durability and longevity.',
                icon: '🏠'
              },
              {
                title: 'Customer Satisfaction',
                description: 'Your satisfaction is our priority, reflected in our 100% client approval rate.',
                icon: '⭐'
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 relative overflow-hidden group"
              >
                {/* Brick Pattern Overlay */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity">
                  <div className="grid grid-cols-4 gap-0 h-full">
                    {Array.from({ length: 8 }).map((_, i) => (
                      <div key={i} className="h-6 border-b border-r border-amber-600" />
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-amber-600 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors">
                    {feature.description}
                  </p>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-600 to-amber-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <About />
      <Stats />
      <Process />

      {/* Our Services Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Comprehensive Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              From concept to completion, we handle every aspect of your construction project
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Residential Construction',
                description: 'Custom homes, apartments, and residential complexes built to perfection.',
                image: '/jkbuilder images/villa1.jpg'
              },
              {
                title: 'Commercial Projects',
                description: 'Office spaces, retail outlets, and commercial complexes with modern amenities.',
                image: '/jkbuilder images/modular 1.jpg'
              },
              {
                title: 'Interior Design',
                description: 'Stunning interior spaces that reflect your style and enhance functionality.',
                image: '/jkbuilder images/interior1.jpg'
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-gray-100"
              >
                <div className="relative h-64">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    style={{ objectFit: 'cover' }}
                    priority={index === 0}
                    quality={100}
                    unoptimized={true}
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Gallery />

      {/* Contact Information Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Head Office */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Head Office</h3>
                <p className="text-gray-600">
                  2PG9+Q28, Vinayak Layout, Medahalli, Bengaluru, Karnataka 560049
                </p>
              </motion.div>

              {/* Phone Numbers */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Phone</h3>
                <p className="text-gray-600 mb-2">+91 95358 65555</p>
              </motion.div>

              {/* Email Addresses */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-white p-8 rounded-xl shadow-lg"
              >
                <h3 className="text-xl font-bold text-gray-900 mb-4">Email</h3>
                <p className="text-gray-600 mb-2">rakeshmohan7999@gmail.com</p>
              </motion.div>
            </div>

            {/* Business Hours */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="mt-8 bg-white p-8 rounded-xl shadow-lg max-w-2xl mx-auto"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <p className="text-gray-600 font-semibold">Monday - Friday</p>
                  <p className="text-gray-600">9:00 AM - 6:00 PM</p>
                </div>
                <div>
                  <p className="text-gray-600 font-semibold">Saturday</p>
                  <p className="text-gray-600">10:00 AM - 4:00 PM</p>
                </div>
                <div className="md:col-span-2">
                  <p className="text-gray-600 font-semibold">Sunday</p>
                  <p className="text-gray-600">10:00 AM - 4:00 PM</p>
                </div>
              </div>
            </motion.div>

            {/* Google Maps */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-8 w-full max-w-4xl mx-auto rounded-xl overflow-hidden shadow-xl"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.9999999999995!2d77.7175751!3d13.0270428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTM!5e0!3m2!1sen!2sin!4v1744642685147!5m2!1sen!2sin"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full"
              ></iframe>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Start Your Project?</h2>
            <p className="text-xl text-gray-300 mb-8">
              Contact Sai Manjunath Builders and Developers today for a free consultation and let's bring your vision to life
            </p>
            <button className="bg-amber-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-amber-700 transition-colors shadow-lg">
              Get Started
            </button>
          </motion.div>
        </div>
      </section>
    </main>
  );
} 