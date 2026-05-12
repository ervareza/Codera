'use client';

import React from 'react';
import { motion, Variants } from 'motion/react';
import Image from 'next/image';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

export default function Locations() {
  const locations = [
    { city: "San Francisco", region: "North America (HQ)", img: "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2940&auto=format&fit=crop" },
    { city: "London", region: "Europe & UK", img: "https://images.unsplash.com/photo-1513635269975-5969336ac1cb?q=80&w=2940&auto=format&fit=crop" },
    { city: "Singapore", region: "Asia Pacific", img: "https://images.unsplash.com/photo-1525625293386-3f8f99389edd?q=80&w=2940&auto=format&fit=crop" },
    { city: "Jakarta", region: "Southeast Asia", img: "https://images.unsplash.com/photo-1555899434-94d1368aa7af?q=80&w=2940&auto=format&fit=crop" }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-7xl mx-auto w-full">
      <motion.div initial="initial" animate="animate" variants={{ animate: { transition: { staggerChildren: 0.1 } } }}>
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-6">Global reach. Local presence.</h1>
          <p className="text-xl text-gray-500 tracking-tight max-w-2xl mx-auto">Operating across 4 continents to provide localized support for global supply chains.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {locations.map((loc, idx) => (
            <motion.div key={idx} variants={fadeInUp} whileHover={{ y: -5 }} className="relative h-80 rounded-[2.5rem] overflow-hidden group">
              <Image src={loc.img} fill className="object-cover group-hover:scale-105 transition-transform duration-700" alt={loc.city} />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
              <div className="absolute bottom-8 left-8">
                <div className="text-sm font-bold tracking-widest uppercase text-white/70 mb-1">{loc.region}</div>
                <h3 className="text-3xl font-bold text-white tracking-tight">{loc.city}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

