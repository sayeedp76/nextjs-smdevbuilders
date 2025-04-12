'use client'

import { useState } from 'react'
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

  return (
    <header className="bg-gradient-to-r from-slate-100 via-gray-200 to-slate-300 border-b border-gray-300">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="p-0">
            <span className="sr-only">JK Builders</span>
            <div className="hexagon-container">
              <div className="watermark">
                <span className="watermark-text left">J</span>
                <span className="watermark-text right">K</span>
              </div>
              <Image 
                src="/logo.png" 
                alt="JK Builders" 
                width={800} 
                height={800} 
                className="h-24 w-auto hexagon-shape" 
              />
            </div>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon aria-hidden="true" className="size-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-8 lg:items-center">
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-base font-semibold text-gray-900">
              Projects
              <ChevronDownIcon aria-hidden="true" className="size-5 flex-none text-gray-400" />
            </PopoverButton>
            <PopoverPanel className="absolute top-full -left-8 z-10 mt-3 w-screen max-w-md overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
              <div className="p-4">
                {products.map((item) => (
                  <div
                    key={item.name}
                    className="group relative flex items-center gap-x-6 rounded-lg p-4 text-sm/6 hover:bg-gray-50"
                  >
                    <div className="flex size-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                      <item.icon aria-hidden="true" className={`size-6 ${
                        item.name === 'Plots' ? 'text-green-600' :
                        item.name === 'Residential Houses' ? 'text-blue-600' :
                        item.name === 'Villas' ? 'text-purple-600' :
                        item.name === 'Apartments' ? 'text-orange-600' :
                        'text-red-600'
                      } group-hover:text-indigo-600`} />
                    </div>
                    <div className="flex-auto">
                      <a href={item.href} className="block font-semibold text-gray-900">
                        {item.name}
                        <span className="absolute inset-0" />
                      </a>
                      <p className="mt-1 text-gray-600">{item.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                {callsToAction.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="flex items-center justify-center gap-x-2.5 p-3 text-sm/6 font-semibold text-gray-900 hover:bg-gray-100"
                  >
                    <item.icon aria-hidden="true" className="size-5 flex-none text-gray-400" />
                    {item.name}
                  </a>
                ))}
              </div>
            </PopoverPanel>
          </Popover>

          <Link href="#" className="text-base font-semibold text-gray-900">
            Home
          </Link>
          <Link href="#" className="text-base font-semibold text-gray-900">
            About Us
          </Link>
          <Link href="#" className="text-base font-semibold text-gray-900">
            Services
          </Link>
          <Link href="#" className="text-base font-semibold text-gray-900">
            Facilities
          </Link>
          <Link href="#" className="text-base font-semibold text-gray-900">
            Blogs
          </Link>
        </PopoverGroup>
        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-6 lg:items-center">
          <div className="flex gap-x-4">
            <Button className="px-6 bg-blue-600 hover:bg-blue-700 text-white">
              <UserRoundSearch size={20} className="mr-2" />
              Contact Us
            </Button>
            <Button variant="secondary" className="bg-green-600 hover:bg-green-700 text-white">
              <MapPinHouse size={20} className="mr-2" />
              Visit Now
            </Button>
          </div>
        </div>
      </nav>
      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="p-0">
              <div className="hexagon-container">
                <Image 
                  src="/logo.png" 
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
