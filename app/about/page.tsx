'use client';

import React from 'react';
import { motion, Variants } from 'motion/react';
import Image from 'next/image';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

export default function AboutUs() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <motion.div initial="initial" animate="animate" variants={{ animate: { transition: { staggerChildren: 0.2 } } }}>
        <motion.div variants={fadeInUp} className="max-w-3xl mb-20">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-8">Driving the future of global logistics.</h1>
          <p className="text-xl md:text-2xl text-gray-500 tracking-tight leading-relaxed">
            Founded in 2018, Codera was born from a simple realization: managing a fleet shouldn't require a Ph.D. in data science. We set out to build the most intuitive, powerful, and scalable telematics platform on the market.
          </p>
        </motion.div>

        <motion.div variants={fadeInUp} className="w-full h-[400px] md:h-[600px] relative rounded-[3rem] overflow-hidden mb-24 shadow-xl">
          <Image src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2940&auto=format&fit=crop" fill className="object-cover" alt="Codera founding team" priority />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-t border-gray-100 pt-16">
          <motion.div variants={fadeInUp}>
            <div className="text-5xl font-black tracking-tighter text-black mb-2">150k+</div>
            <div className="text-lg font-bold text-gray-900 mb-2">Connected Vehicles</div>
            <p className="text-gray-500 text-sm leading-relaxed">From local delivery vans to international heavy-haulers, our network is constantly expanding.</p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <div className="text-5xl font-black tracking-tighter text-black mb-2">32</div>
            <div className="text-lg font-bold text-gray-900 mb-2">Countries Served</div>
            <p className="text-gray-500 text-sm leading-relaxed">Our infrastructure complies with global data standards, enabling cross-border operations natively.</p>
          </motion.div>
          <motion.div variants={fadeInUp}>
            <div className="text-5xl font-black tracking-tighter text-black mb-2">99.99%</div>
            <div className="text-lg font-bold text-gray-900 mb-2">Uptime Reliability</div>
            <p className="text-gray-500 text-sm leading-relaxed">Built on enterprise-grade cloud architecture, ensuring your data is always accessible when you need it.</p>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}

