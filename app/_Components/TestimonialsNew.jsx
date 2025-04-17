'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, 
  Building2, 
  Landmark, 
  Building, 
  Hotel, 
  Briefcase, 
  Hammer, 
  PiggyBank, 
  Users, 
  Store,
  ChevronLeft,
  ChevronRight,
  Image as ImageIcon,
  Wallet
} from 'lucide-react';

const TestimonialsNew = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        setActiveIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const testimonials = [
    {
      name: "Rajesh Kumar",
      role: "Property Developer",
      icon: Building,
      content: "Mr. Rakesh's expertise in luxury villa construction is unmatched. The attention to detail and quality of work exceeded our expectations. His team's professionalism and commitment to timelines made the entire process smooth.",
      rating: 5,
      project: "Luxury Villa Project, Whitefield",
      projectImage: "/jkbuilder-images/testimonials/projects/luxury-villa.jpg",
      date: "March 2024"
    },
    {
      name: "Priya Sharma",
      role: "Corporate Real Estate Manager",
      icon: Building2,
      content: "Working with Mr. Rakesh on our corporate office complex was a fantastic experience. His innovative approach to design and strong project management skills ensured our project was delivered on time and within budget.",
      rating: 5,
      project: "Corporate Office Complex, MG Road",
      projectImage: "/jkbuilder-images/testimonials/projects/corporate-office.jpg",
      date: "January 2024"
    },
    {
      name: "Suresh Patel",
      role: "Investment Director",
      icon: Wallet,
      content: "Mr. Rakesh's understanding of investment properties is exceptional. His guidance helped us develop a high-return property portfolio. The construction quality and market insights were invaluable.",
      rating: 5,
      project: "Investment Properties, Electronic City",
      projectImage: "/jkbuilder-images/testimonials/projects/investment-properties.jpg",
      date: "December 2023"
    },
    {
      name: "Meera Reddy",
      role: "Residential Project Lead",
      icon: Home,
      content: "The apartment complex project led by Mr. Rakesh was a masterpiece. His ability to balance luxury amenities with practical living spaces created an outstanding residential community.",
      rating: 5,
      project: "Premium Apartment Complex, Indiranagar",
      projectImage: "/jkbuilder-images/testimonials/projects/apartment-complex.jpg",
      date: "November 2023"
    },
    {
      name: "Vikram Singh",
      role: "Community Developer",
      icon: Users,
      content: "Mr. Rakesh transformed our vision of a gated community into reality. His expertise in large-scale projects and attention to community features was remarkable.",
      rating: 5,
      project: "Gated Community Project, Sarjapur",
      projectImage: "/jkbuilder-images/testimonials/projects/gated-community.jpg",
      date: "September 2023"
    },
    {
      name: "Arjun Reddy",
      role: "Commercial Project Manager",
      icon: Store,
      content: "Mr. Rakesh's project management skills are exceptional. Under his leadership, our commercial project was completed ahead of schedule without compromising on quality. His team's dedication and his vision were instrumental in our success.",
      rating: 5,
      project: "Shopping Mall, Bannerghatta Road",
      projectImage: "/jkbuilder-images/testimonials/projects/shopping-mall.jpg",
      date: "June 2023"
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

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
          <h1 className="text-5xl font-bold text-white mb-6">
            Client Testimonials
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Hear what our clients have to say about their experience with Sai Manjunath Builders and Developers
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="max-w-6xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.5 }}
              className="bg-gray-800 rounded-xl p-8 shadow-lg border border-gray-700"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Project Image */}
                <div className="relative h-64 md:h-96 rounded-lg overflow-hidden bg-gray-700">
                  <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-700">
                    <div className="w-20 h-20 rounded-full bg-gray-600 flex items-center justify-center mb-4">
                      {React.createElement(testimonials[activeIndex].icon, {
                        className: "w-10 h-10 text-amber-500",
                        strokeWidth: 1.5
                      })}
                    </div>
                    <p className="text-gray-400 text-center px-4">
                      {testimonials[activeIndex].project}
                    </p>
                    <p className="text-gray-500 text-sm mt-2">
                      {testimonials[activeIndex].date}
                    </p>
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex flex-col justify-center">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-20 h-20 rounded-full bg-gray-700 flex items-center justify-center">
                      {React.createElement(testimonials[activeIndex].icon, {
                        className: "w-10 h-10 text-amber-500",
                        strokeWidth: 1.5
                      })}
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white">
                        {testimonials[activeIndex].name}
                      </h3>
                      <p className="text-gray-400">
                        {testimonials[activeIndex].role}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                      <svg
                        key={i}
                        className="w-5 h-5 text-amber-500"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <p className="text-gray-300 text-lg mb-6 italic">
                    "{testimonials[activeIndex].content}"
                  </p>

                  {/* Navigation Arrows */}
                  <div className="flex justify-between items-center mt-4">
                    <button
                      onClick={prevTestimonial}
                      className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                      aria-label="Previous testimonial"
                    >
                      <ChevronLeft className="w-6 h-6 text-amber-500" />
                    </button>
                    <button
                      onClick={nextTestimonial}
                      className="p-2 rounded-full bg-gray-700 hover:bg-gray-600 transition-colors"
                      aria-label="Next testimonial"
                    >
                      <ChevronRight className="w-6 h-6 text-amber-500" />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setActiveIndex(index);
                  setIsAutoPlaying(false);
                }}
                className={`w-3 h-3 rounded-full transition-colors ${
                  activeIndex === index
                    ? 'bg-amber-600'
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsNew; 