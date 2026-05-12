'use client';

import React from 'react';
import { motion, Variants } from 'motion/react';
import Image from 'next/image';
import { Truck, Bus, Package, Hammer } from 'lucide-react';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const staggerContainer: Variants = {
  animate: { transition: { staggerChildren: 0.15 } }
};

export default function Solutions() {
  const industries = [
    { title: 'Logistics & Freight', desc: 'Optimize long-haul routes and monitor vehicle health in real-time. Reduce fuel consumption and prevent unexpected breakdowns.', icon: <Truck className="w-8 h-8" /> },
    { title: 'Last-Mile Delivery', desc: 'Ensure timely deliveries with precision tracking and dynamic routing. Keep customers updated with accurate ETAs.', icon: <Package className="w-8 h-8" /> },
    { title: 'Passenger Transport', desc: 'Guarantee passenger safety and schedule adherence. Monitor driver behavior and cabin conditions continuously.', icon: <Bus className="w-8 h-8" /> },
    { title: 'Construction & Heavy', desc: 'Track expensive assets across multiple job sites. Prevent theft and monitor equipment utilization rates.', icon: <Hammer className="w-8 h-8" /> }
  ];

  return (
    <div className="flex flex-col min-h-screen pt-32 pb-24 px-6 max-w-7xl mx-auto w-full">
      <motion.div initial="initial" animate="animate" variants={staggerContainer} className="flex flex-col items-center">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">Tailored solutions<br/>for every industry.</h1>
          <p className="text-xl text-gray-500 max-w-2xl mx-auto tracking-tight">Codera adapts to your unique operational challenges, providing unparalleled visibility no matter what you manage.</p>
        </motion.div>

        <motion.div variants={fadeInUp} className="w-full relative h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden mb-24 shadow-2xl">
          <Image src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2940&auto=format&fit=crop" fill className="object-cover" alt="Warehouse logistics" priority />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          <div className="absolute bottom-10 left-10 right-10 text-white">
            <h2 className="text-3xl font-semibold mb-2 tracking-tight">Built for scale.</h2>
            <p className="text-white/80 max-w-lg">From 10 to 10,000 vehicles, our infrastructure grows with you seamlessly.</p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {industries.map((ind, idx) => (
            <motion.div key={idx} variants={fadeInUp} whileHover={{ y: -5, scale: 1.01 }} className="bg-white p-10 rounded-[2rem] border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex gap-6 items-start group transition-all">
              <div className="bg-gray-50 p-4 rounded-2xl group-hover:bg-black group-hover:text-white transition-colors duration-300">
                {ind.icon}
              </div>
              <div>
                <h3 className="text-2xl font-semibold text-gray-900 mb-3 tracking-tight">{ind.title}</h3>
                <p className="text-gray-500 leading-relaxed">{ind.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

