'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const GetInTouch = () => {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <Image
          src="/jkbuilder images/0001.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      <div className="container mx-auto px-6 py-20 relative z-10">
        {/* Page Heading */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 bg-gradient-to-r from-teal-400 to-blue-400 text-transparent bg-clip-text">
            Connect With Us
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            We’re here to help! Get in touch with us for inquiries, projects, or collaboration opportunities.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/70 backdrop-blur-md p-8 rounded-lg shadow-xl"
          >
            <h3 className="text-2xl font-bold text-white mb-6">
              Drop us a message!
            </h3>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-white mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-2 rounded-md bg-gray-900 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-white mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 rounded-md bg-gray-900 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-white mb-2">
                  Your Message
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="w-full px-4 py-2 rounded-md bg-gray-900 text-white placeholder-gray-400 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  placeholder="Type your message here"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full py-3 px-6 bg-teal-500 text-white font-semibold rounded-md hover:bg-teal-600 transition"
              >
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="bg-gray-800/70 backdrop-blur-md p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Our Location
              </h3>
              <p className="text-gray-300">
                No 005, JK Sambrama, 1st Cross, Medahalli Virgonagar Post, Bangalore 560049
              </p>
            </div>

            <div className="bg-gray-800/70 backdrop-blur-md p-8 rounded-lg shadow-xl">
              <h3 className="text-2xl font-bold text-white mb-6">
                Reach Us On
              </h3>
              <p className="text-gray-300">Phone: +91 95358 65555</p>
              <p className="text-gray-300">Email: rakeshmohan7999@gmail.com</p>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="rounded-lg overflow-hidden shadow-xl"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.005925272344!2d77.5942773!3d12.9715987!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBangalore%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1647852345678!5m2!1sen!2sin"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-[400px]"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
};

export default GetInTouch;