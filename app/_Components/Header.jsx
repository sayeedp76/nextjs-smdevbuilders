'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  HomeIcon,
  BuildingOfficeIcon,
  BuildingStorefrontIcon,
  MapIcon,
  BuildingLibraryIcon,
  PlayCircleIcon,
  PhoneIcon,
  Bars3Icon,
  XMarkIcon,
} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import {
  Phone,
  Mail,
  MapPin,
  Menu,
  X,
  ChevronDown,
  Building2,
  Home,
  Briefcase,
  Users,
  Award
} from 'lucide-react'

import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { MapPinHouse, UserRoundSearch } from 'lucide-react'

const products = [
  { name: 'Plots', description: 'Premium residential and commercial plots', href: '#', icon: MapIcon },
  { name: 'Residential Houses', description: 'Modern and spacious residential homes', href: '#', icon: HomeIcon },
  { name: 'Villas', description: 'Luxury villas with premium amenities', href: '#', icon: BuildingLibraryIcon },
  { name: 'Apartments', description: 'Contemporary apartment complexes', href: '#', icon: BuildingOfficeIcon },
  { name: 'Commercial Spaces', description: 'Prime commercial properties', href: '#', icon: BuildingStorefrontIcon }
]
const callsToAction = [
  { name: 'View All Projects', href: '#', icon: PlayCircleIcon },
  { name: 'Book a Site Visit', href: '#', icon: PhoneIcon },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Contact', href: '/contact' },
  ]

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-2">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <a href="tel:+919876543210" className="flex items-center hover:text-amber-300 transition-colors">
                <Phone className="w-4 h-4 mr-2" />
                <span className="text-sm">+91 98765 43210</span>
              </a>
              <a href="mailto:info@saimanjunathbuilders.com" className="flex items-center hover:text-amber-300 transition-colors">
                <Mail className="w-4 h-4 mr-2" />
                <span className="text-sm">info@saimanjunathbuilders.com</span>
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <a href="#" className="flex items-center hover:text-amber-300 transition-colors">
                <MapPin className="w-4 h-4 mr-2" />
                <span className="text-sm">Bangalore, India</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="py-4">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="relative w-48 h-16">
              <Image
                src="/jkbuilder images/1745699234675.png"
                alt="JK Builders"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                className="object-contain"
              />
            </Link>

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-lg font-medium transition-colors ${
                    scrolled ? 'text-gray-800 hover:text-blue-600' : 'text-white hover:text-amber-300'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="/contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full hover:from-blue-700 hover:to-purple-700 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Get a Quote
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-white focus:outline-none"
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={{
          open: { opacity: 1, height: "auto" },
          closed: { opacity: 0, height: 0 }
        }}
        className="md:hidden bg-white shadow-lg"
      >
        <div className="container mx-auto px-4 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block py-3 text-gray-800 hover:text-blue-600 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="block mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2 rounded-full text-center hover:from-blue-700 hover:to-purple-700 transition-all duration-300"
            onClick={() => setIsOpen(false)}
          >
            Get a Quote
          </Link>
        </div>
      </motion.div>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="p-0">
              <div className="hexagon-container">
                <Image 
                  src="/jkbuilder images/1745699234675.png" 
                  alt="JK Builders" 
                  width={600} 
                  height={600} 
                  className="h-20 w-auto hexagon-shape" 
                />
              </div>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pr-3.5 pl-3 text-base font-semibold text-gray-900 hover:bg-gray-50">
                    Projects
                    <ChevronDownIcon aria-hidden="true" className="size-5 flex-none group-data-open:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                    {products.map((item) => (
                      <DisclosureButton
                        key={item.name}
                        as="a"
                        href={item.href}
                        className="block rounded-lg py-2 pr-3 pl-6 text-sm font-semibold text-gray-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </DisclosureButton>
                    ))}
                  </DisclosurePanel>
                </Disclosure>
                <Link href="#" className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">
                  Home
                </Link>
                <Link href="#" className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">
                  About Us
                </Link>
                <Link href="#" className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">
                  Services
                </Link>
                <Link href="#" className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">
                  Facilities
                </Link>
                <Link href="#" className="block rounded-lg px-3 py-2 text-base font-semibold text-gray-900 hover:bg-gray-50">
                  Blogs
                </Link>
              </div>
              <div className="py-6 space-y-4">
                <Button variant="secondary" className="w-full">
                  <MapPinHouse size={20} className="mr-2" />
                  Visit Now
                </Button>
                <Button className="w-full">
                  <UserRoundSearch size={20} className="mr-2" />
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
      <style jsx>{`
        .hexagon-container {
          position: relative;
          width: fit-content;
        }
        .hexagon-shape {
          clip-path: polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);
          transition: transform 0.3s ease;
        }
        .hexagon-shape:hover {
          transform: scale(1.05);
        }
        .watermark {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: 0;
          width: 120%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .watermark-text {
          font-size: 4rem;
          font-weight: bold;
          color: rgba(0, 0, 0, 0.1);
          font-family: 'Montserrat', sans-serif;
          font-style: italic;
          transform: skew(-10deg) rotate(-5deg);
          letter-spacing: 2px;
        }
        .watermark-text.left {
          margin-left: -2rem;
        }
        .watermark-text.right {
          margin-right: -2rem;
        }
      `}</style>
    </header>
  )
}
