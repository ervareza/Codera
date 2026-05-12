'use client';

import React from 'react';
import { motion, Variants } from 'motion/react';
import Image from 'next/image';
import { ArrowUpRight } from 'lucide-react';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

export default function CaseStudies() {
  const cases = [
    { title: "Scan Global Logistics", stat: "27%", metric: "Fuel Cost Reduction", desc: "How SGL implemented Codera's predictive routing to bypass traffic and reduce idle engine times across Europe.", img: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2940&auto=format&fit=crop" },
    { title: "Metro Transit Authority", stat: "40%", metric: "Drop in Accidents", desc: "Using AI Dashcams, MTA identified risky driver behaviors and implemented automated coaching, drastically improving safety.", img: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?q=80&w=2940&auto=format&fit=crop" },
    { title: "BuildCorp Heavy", stat: "15x", metric: "ROI in 6 Months", desc: "Asset trackers prevented the theft of three excavators, paying for the entire fleet's software subscription 15 times over.", img: "https://images.unsplash.com/photo-1541888086925-0c770f4e8587?q=80&w=2940&auto=format&fit=crop" },
    { title: "Fresh Foods Delivery", stat: "99.9%", metric: "On-Time Delivery", desc: "Integrating Codera API with their ERP allowed dynamic re-routing based on live temperature sensor data.", img: "https://images.unsplash.com/photo-1505322022379-7c3353ee6291?q=80&w=2940&auto=format&fit=crop" }
  ];

  return (
    <div className="bg-[#F8F9FA] min-h-screen pt-32 pb-24 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div initial="initial" animate="animate" variants={{ animate: { transition: { staggerChildren: 0.1 } } }}>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-900 mb-6">Success Stories.</motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-gray-500 tracking-tight max-w-2xl mb-16">See how global leaders are transforming their operations using Codera's intelligent fleet platform.</motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {cases.map((cs, idx) => (
              <motion.div key={idx} variants={fadeInUp} whileHover={{ y: -8 }} className="bg-white rounded-[2rem] overflow-hidden group border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] cursor-pointer">
                <div className="relative h-64 w-full bg-gray-100 overflow-hidden">
                  <Image src={cs.img} fill className="object-cover group-hover:scale-105 transition-transform duration-700" alt={cs.title} />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full flex items-center gap-1 font-bold text-sm tracking-tight text-black">
                    Read Story <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>
                <div className="p-8 md:p-10">
                  <div className="flex justify-between items-end mb-6">
                    <div>
                      <div className="text-4xl font-black tracking-tighter text-blue-600 mb-1">{cs.stat}</div>
                      <div className="text-sm font-bold tracking-widest uppercase text-gray-400">{cs.metric}</div>
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 tracking-tight">{cs.title}</h3>
                  <p className="text-gray-500 leading-relaxed text-sm">{cs.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}


