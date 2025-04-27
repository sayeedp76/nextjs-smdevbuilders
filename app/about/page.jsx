'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const AboutPage = () => {
  return (
    <section className="relative py-20 min-h-screen bg-gradient-to-r from-indigo-200 via-purple-100 to-pink-200">
      <div className="container mx-auto px-4">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-6xl font-extrabold text-indigo-800 tracking-wide mb-6">
            Who We Are
          </h1>
          <p className="text-xl md:text-2xl text-purple-600 max-w-4xl mx-auto">
            At <span className="font-semibold text-indigo-600">Sai Manjunath Builders</span>, we craft more than just structures — we create spaces where life thrives.
          </p>
        </motion.div>

        {/* About Image + Story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="relative h-[420px] rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/jkbuilder images/testimony3.jpg" 
              alt="Sai Manjunath Builders and Developers Logo"
              fill
              className="object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl font-bold text-purple-800">Our Journey</h2>
            <p className="text-purple-600 text-lg">
              Established in <strong>2010</strong>, Sai Manjunath Builders began with a simple vision: to redefine urban living through impeccable design, innovation, and trust.
            </p>
            <p className="text-purple-600 text-lg">
              Today, we are recognized for our uncompromising quality and timely project delivery. Each of our developments reflects a commitment to craftsmanship and sustainable construction.
            </p>
          </motion.div>
        </div>

        {/* Mission and Vision */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-24">
          {[
            {
              title: 'Our Mission',
              text: 'To shape skylines and redefine lifestyles by delivering premium, sustainable, and customer-focused construction solutions.',
            },
            {
              title: 'Our Vision',
              text: 'To be a benchmark in the construction industry, known for integrity, innovation, and exceeding expectations.',
            },
          ].map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-white p-10 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-purple-700 mb-4">{item.title}</h3>
              <p className="text-purple-600 text-lg">{item.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Certifications and Awards */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl font-bold text-purple-800">Our Certifications & Awards</h2>
            <p className="text-purple-600 mt-2 text-lg">
              Recognized and celebrated for excellence in the industry.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                title: 'LEED Gold Certification',
                year: '2020',
                description: 'Acknowledging our commitment to green building and sustainability.',
                icon: '🏆',
              },
              {
                title: 'Best Builder Award',
                year: '2022',
                description: 'Awarded for exceptional architectural design and innovation.',
                icon: '🥇',
              },
              {
                title: 'Customer Choice Award',
                year: '2023',
                description: 'Recognized by our clients for outstanding project delivery.',
                icon: '⭐',
              },
            ].map((award, index) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-xl shadow-xl text-center"
              >
                <div className="text-6xl text-indigo-800 mb-4">{award.icon}</div>
                <h3 className="text-2xl font-semibold text-purple-700">{award.title}</h3>
                <p className="text-purple-600">{award.year}</p>
                <p className="text-purple-600 mt-2">{award.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Core Values */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-purple-800">Our Core Values</h2>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality',
                description: 'Every project is a reflection of our dedication to high standards and attention to detail.',
                icon: '🏗️',
              },
              {
                title: 'Integrity',
                description: 'Transparency, honesty, and ethical practices form the foundation of all our relationships.',
                icon: '🤝',
              },
              {
                title: 'Innovation',
                description: 'We harness technology and creativity to build smarter, faster, and more sustainably.',
                icon: '💡',
              },
            ].map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white p-8 rounded-lg shadow-md text-center"
              >
                <div className="text-5xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-bold text-purple-800 mb-2">{value.title}</h3>
                <p className="text-purple-600 text-base">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Leadership Team */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-14"
          >
            <h2 className="text-3xl font-bold text-purple-800">Meet the Leadership</h2>
            <p className="text-purple-600 mt-2 text-lg">
              A visionary team that drives our commitment to excellence.
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {[
              {
                name: 'Rakesh K',
                position: 'Founder & CEO',
                image: '/jkbuilder images/testimony1.jpg',
              },
              {
                name: 'Mallesh Roy',
                position: 'Chief Architect',
                image: '/jkbuilder images/testimony2.webp',
              },
              {
                name: 'Shahid Afridi',
                position: 'Project Director',
                image: '/jkbuilder images/testimony3.jpg',
              },
            ].map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-white rounded-lg shadow-xl overflow-hidden"
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
                  <h3 className="text-xl font-bold text-purple-800 mb-1">{member.name}</h3>
                  <p className="text-indigo-600 font-medium">{member.position}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;