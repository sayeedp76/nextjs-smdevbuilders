'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Home, 
  Building2, 
  Crown, 
  PiggyBank, 
  Leaf, 
  Smartphone,
  Check,
  Image as ImageIcon
} from 'lucide-react';

const PropertyCard = ({ 
  title, 
  description, 
  imageSrc, 
  features, 
  link, 
  icon: Icon 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [imageError, setImageError] = useState(false);

  return (
    <div className="group bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
      <div className="relative h-48 w-full">
        {imageError ? (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-gray-700">
            <Icon className="w-16 h-16 text-gray-400 mb-4" />
            <p className="text-gray-400 text-center">Image not available</p>
          </div>
        ) : (
          <Image
            src={imageSrc}
            alt={title}
            fill
            className={`object-cover transition-transform duration-300 group-hover:scale-105 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            onLoadingComplete={() => setIsLoading(false)}
            onError={() => setImageError(true)}
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        )}
        {isLoading && !imageError && (
          <div className="absolute inset-0 bg-gray-700 animate-pulse" />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <h3 className="text-2xl font-bold text-white">{title}</h3>
        </div>
      </div>
      <div className="p-6">
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="space-y-2">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-2 text-gray-300">
              <Check className="w-4 h-4 text-amber-500" />
              <span>{feature}</span>
            </div>
          ))}
        </div>
        <Link 
          href={link} 
          className="inline-block mt-6 text-amber-500 hover:text-amber-400 transition-colors"
        >
          Explore {title} →
        </Link>
      </div>
    </div>
  );
};

const Home = () => {
  const propertyCategories = [
    {
      title: "Residential Properties",
      description: "Find your perfect home in our premium residential projects",
      imageSrc: "/jkbuilder-images/properties/residential.jpg",
      features: [
        "Luxury Apartments",
        "Gated Communities",
        "Independent Houses",
        "Plots & Land"
      ],
      link: "/properties/residential",
      icon: Home
    },
    {
      title: "Commercial Properties",
      description: "Premium commercial spaces for your business needs",
      imageSrc: "/jkbuilder-images/properties/commercial.jpg",
      features: [
        "Office Complexes",
        "Retail Spaces",
        "Tech Parks",
        "Warehouses"
      ],
      link: "/properties/commercial",
      icon: Building2
    },
    {
      title: "Premium Properties",
      description: "Exclusive luxury properties for discerning clients",
      imageSrc: "/jkbuilder-images/properties/premium.jpg",
      features: [
        "Luxury Villas",
        "Penthouses",
        "Beachfront Properties",
        "Heritage Homes"
      ],
      link: "/properties/premium",
      icon: Crown
    },
    {
      title: "Investment Properties",
      description: "High-return investment opportunities",
      imageSrc: "/jkbuilder-images/properties/investment.jpg",
      features: [
        "Rental Properties",
        "Commercial Plots",
        "Mixed-Use Developments",
        "REIT Opportunities"
      ],
      link: "/properties/investment",
      icon: PiggyBank
    },
    {
      title: "Green Properties",
      description: "Eco-friendly and sustainable living spaces",
      imageSrc: "/jkbuilder-images/properties/green.jpg",
      features: [
        "Green Buildings",
        "Sustainable Communities",
        "Solar-Powered Homes",
        "Water Conservation Projects"
      ],
      link: "/properties/green",
      icon: Leaf
    },
    {
      title: "Smart Properties",
      description: "Tech-integrated modern living spaces",
      imageSrc: "/jkbuilder-images/properties/smart.jpg",
      features: [
        "Smart Homes",
        "IoT-Enabled Buildings",
        "Automated Communities",
        "Digital Security Systems"
      ],
      link: "/properties/smart",
      icon: Smartphone
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <Image
            src="/jkbuilder-images/hero-bg.jpg"
            alt="Sai Manjunath Builders Hero"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Sai Manjunath Builders
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Your Trusted Construction Partner
          </p>
          <Link 
            href="/contact" 
            className="bg-amber-600 text-white px-8 py-3 rounded-full text-lg hover:bg-amber-700 transition-colors"
          >
            Get Started
          </Link>
        </div>
      </section>

      {/* Property Categories */}
      <section className="py-20 bg-gradient-to-b from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">
              Search And Tour With Sai Manjunath Builders
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Discover your dream property with Sai Manjunath Builders. We offer a wide range of residential and commercial properties.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {propertyCategories.map((category, index) => (
              <PropertyCard key={index} {...category} />
            ))}
          </div>
        </div>
      </section>

      {/* Rest of the sections */}
      // ... existing code ...
    </div>
  );
};

export default Home; 