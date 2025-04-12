'use client';

import React from 'react';
import Banner from './_Components/Banner';
import Services from './_Components/Services';
import About from './_Components/About';
import Stats from './_Components/Stats';
import Process from './_Components/Process';
import Projects from './_Components/Projects';
import Contact from './_Components/Contact';
import Footer from './_Components/Footer';

export default function Home() {
  return (
    <main>
      <Banner />
      <Services />
      <About />
      <Stats />
      <Process />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
} 