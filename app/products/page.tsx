'use client';

import React from 'react';
import { motion, Variants } from 'motion/react';
import Image from 'next/image';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

export default function Products() {
  const products = [
    { name: "C1 OBD-II Tracker", type: "Plug & Play", desc: "Installs in seconds. Perfect for light commercial vehicles and sales fleets. Reads engine RPM, fuel level, and diagnostic codes.", img: "https://images.unsplash.com/photo-1517524008697-84bbe3c3fd98?q=80&w=2940&auto=format&fit=crop" },
    { name: "H4 Heavy-Duty Unit", type: "Hardwired", desc: "Built for trucks. IP67 waterproof rating, backup battery, and support for multiple temperature and fuel sensors.", img: "https://images.unsplash.com/photo-1621695420310-74b88b0a514e?q=80&w=2940&auto=format&fit=crop" },
    { name: "Vision AI Dashcam", type: "Video Telematics", desc: "Dual-facing camera that uses AI to detect distracted driving, phone usage, and harsh braking. Auto-uploads critical events.", img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2940&auto=format&fit=crop" }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-[1400px] mx-auto w-full">
      <motion.div initial="initial" animate="animate" variants={{ animate: { transition: { staggerChildren: 0.2 } } }} className="flex flex-col items-center">
        
        <motion.div variants={fadeInUp} className="text-center mb-20">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-900 mb-6">Hardware that just works.</h1>
          <p className="text-xl text-gray-500 tracking-tight max-w-2xl mx-auto">Enterprise-grade tracking devices built to survive the harshest environments on earth.</p>
        </motion.div>

        <div className="w-full space-y-12 md:space-y-32">
          {products.map((prod, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeInUp} 
              className={`flex flex-col ${idx % 2 !== 0 ? 'md:flex-row-reverse' : 'md:flex-row'} gap-12 md:gap-24 items-center`}
            >
              <div className="w-full md:w-1/2 relative aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden bg-gray-100 shadow-xl group">
                <Image src={prod.img} fill className="object-cover group-hover:scale-105 transition-transform duration-700" alt={prod.name} />
              </div>
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <span className="text-sm font-bold tracking-widest uppercase text-gray-400 mb-4">{prod.type}</span>
                <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-6">{prod.name}</h2>
                <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-lg">{prod.desc}</p>
                <button className="bg-black text-white px-8 py-3.5 rounded-full font-medium hover:bg-gray-800 transition-colors w-max">
                  View Specifications
                </button>
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </div>
  );
}

