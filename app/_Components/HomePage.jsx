'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { 
  Building2, 
  Home, 
  Briefcase, 
  Award, 
  Users, 
  Phone, 
  Mail, 
  MapPin,
  ChevronRight,
  Star,
  CheckCircle2,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

const HomePage = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const sections = [
    {
      id: 'hero',
      title: 'Building Dreams, Creating Legacies',
      description: 'Transforming visions into reality with excellence and integrity',
      bg: 'bg-gradient-to-b from-gray-900 to-gray-800',
    },
    {
      id: 'about',
      title: 'About Us',
      description: 'Your trusted partner in construction and development',
      bg: 'bg-gray-800',
    },
    {
      id: 'services',
      title: 'Our Services',
      description: 'Comprehensive solutions for all your construction needs',
      bg: 'bg-gray-900',
    },
    {
      id: 'projects',
      title: 'Featured Projects',
      description: 'Showcasing our excellence in construction',
      bg: 'bg-gray-800',
    },
    {
      id: 'testimonials',
      title: 'Client Testimonials',
      description: 'What our clients say about us',
      bg: 'bg-gray-900',
    },
    {
      id: 'contact',
      title: 'Get in Touch',
      description: 'Let\'s discuss your project',
      bg: 'bg-gray-800',
    },
  ];

  const featuredProjects = [
    {
      id: 1,
      title: 'Luxury Villa',
      location: 'Beverly Hills',
      image: '/jkbuilder images/luxury 1.jpg',
      type: 'Residential'
    },
    {
      id: 2,
      title: 'Office Complex',
      location: 'Downtown',
      image: '/jkbuilder images/penthouse.jpg',
      type: 'Commercial'
    },
    {
      id: 3,
      title: 'Apartment Complex',
      location: 'City Center',
      image: '/jkbuilder images/modular 1.jpg',
      type: 'Residential'
    },
    {
      id: 4,
      title: 'Shopping Mall',
      location: 'Westside',
      image: '/jkbuilder images/interior1.jpg',
      type: 'Commercial'
    },
    {
      id: 5,
      title: 'Gated Community',
      location: 'Suburbs',
      image: '/jkbuilder images/villa2.jpg',
      type: 'Residential'
    },
    {
      id: 6,
      title: 'Investment Properties',
      location: 'Multiple Locations',
      image: '/jkbuilder images/indipendent1.jpg',
      type: 'Commercial'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/jkbuilder images/intro1.jpg"
            alt="JK Builders Hero"
            fill
            sizes="100vw"
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-blue-900/80 to-transparent" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold mb-6"
          >
            Building Dreams,<br />Creating Legacies
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl mb-8"
          >
            Transforming visions into reality with excellence and innovation
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <Link
              href="/contact"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors"
            >
              Get Started
            </Link>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gradient-to-br from-blue-50 to-sky-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">About Us</h2>
              <p className="text-blue-800 mb-6">
                With over 20 years of experience in the construction industry, we have built a reputation for excellence, reliability, and innovation. Our team of skilled professionals is committed to delivering high-quality projects that exceed client expectations.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <Building2 className="w-8 h-8 text-blue-600 mb-2" />
                  <h3 className="text-blue-900 font-semibold">20+ Years</h3>
                  <p className="text-blue-700">Experience</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md">
                  <Award className="w-8 h-8 text-blue-600 mb-2" />
                  <h3 className="text-blue-900 font-semibold">50+ Projects</h3>
                  <p className="text-blue-700">Completed</p>
                </div>
              </div>
            </div>
            <div className="relative h-96">
              <Image
                src="/images/about/company.jpg"
                alt="About Sai Manjunath Builders and Developers"
                fill
                className="object-cover rounded-lg shadow-xl"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Our Services</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Comprehensive construction solutions tailored to your needs
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Home className="w-8 h-8 text-amber-500" />,
                title: 'Residential Construction',
                description: 'Custom homes, apartments, and residential complexes',
              },
              {
                icon: <Building2 className="w-8 h-8 text-amber-500" />,
                title: 'Commercial Projects',
                description: 'Office buildings, retail spaces, and commercial complexes',
              },
              {
                icon: <Briefcase className="w-8 h-8 text-amber-500" />,
                title: 'Project Management',
                description: 'End-to-end project management and consulting',
              },
            ].map((service, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -10 }}
                className="bg-gray-800 p-6 rounded-lg"
              >
                {service.icon}
                <h3 className="text-xl font-semibold text-white mt-4 mb-2">
                  {service.title}
                </h3>
                <p className="text-gray-300">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20 bg-gradient-to-br from-sky-100 to-blue-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-blue-900 mb-4">Featured Projects</h2>
            <p className="text-blue-800 max-w-2xl mx-auto">
              Explore our latest and most impressive construction projects that showcase our commitment to quality and innovation.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="relative h-64">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                    {project.type}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-blue-900 mb-2">{project.title}</h3>
                  <p className="text-blue-700 mb-4">{project.location}</p>
                  <Link
                    href={`/projects/${project.id}`}
                    className="text-blue-600 hover:text-blue-800 font-medium"
                  >
                    View Details →
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-5xl font-bold mb-2">50+</h3>
              <p className="text-xl">Projects Completed</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-5xl font-bold mb-2">100%</h3>
              <p className="text-xl">Client Satisfaction</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-5xl font-bold mb-2">15+</h3>
              <p className="text-xl">Years Experience</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gradient-to-br from-sky-50 to-blue-100">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-2 gap-12"
          >
            <div>
              <h2 className="text-4xl font-bold text-blue-900 mb-6">Get in Touch</h2>
              <p className="text-blue-800 mb-8">
                Have a project in mind? Let's discuss how we can help bring it to life.
              </p>
              <div className="space-y-4">
                <div className="flex items-center text-blue-800">
                  <Phone className="w-5 h-5 mr-3 text-blue-600" />
                  <span>+91 1234567890</span>
                </div>
                <div className="flex items-center text-blue-800">
                  <Mail className="w-5 h-5 mr-3 text-blue-600" />
                  <span>info@saimanjunathbuilders.com</span>
                </div>
                <div className="flex items-center text-blue-800">
                  <MapPin className="w-5 h-5 mr-3 text-blue-600" />
                  <span>123 Main Street, City, State</span>
                </div>
              </div>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-xl">
              <form className="space-y-6">
                <div>
                  <label className="block text-blue-800 mb-2">Name</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 bg-blue-50 text-blue-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-blue-800 mb-2">Email</label>
                  <input
                    type="email"
                    className="w-full px-4 py-2 bg-blue-50 text-blue-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <div>
                  <label className="block text-blue-800 mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 bg-blue-50 text-blue-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white px-6 py-3 rounded-lg font-semibold hover:from-blue-700 hover:to-blue-900 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default HomePage; 