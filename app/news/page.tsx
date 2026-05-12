'use client';

import React from 'react';
import { motion, Variants } from 'motion/react';
import { ArrowRight } from 'lucide-react';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

export default function News() {
  const news = [
    { date: "May 12, 2026", type: "Product Update", title: "Codera Launches Native EV Fleet Management Tools", desc: "Our platform now fully supports Electric Vehicles (EV), offering live battery SOC monitoring, charging station routing, and precise EV range estimation algorithms." },
    { date: "April 04, 2026", type: "Company News", title: "Codera Secures $50M Series C Funding", desc: "We are thrilled to announce our latest funding round led by Sequoia Capital, which will accelerate our AI R&D and global expansion into the European market." },
    { date: "March 18, 2026", type: "Integration", title: "Deep Integration with SAP Logistics Released", desc: "Enterprise customers can now bi-directionally sync vehicle diagnostics and driver logs directly into their SAP environment without any custom middleware." },
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-4xl mx-auto w-full">
      <motion.div initial="initial" animate="animate" variants={{ animate: { transition: { staggerChildren: 0.15 } } }}>
        <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-16">Press & News.</motion.h1>
        
        <div className="space-y-8">
          {news.map((item, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeInUp}
              className="group bg-white border border-gray-200 hover:border-black rounded-[2rem] p-8 md:p-10 transition-colors cursor-pointer"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <span className="text-sm font-bold tracking-widest uppercase text-blue-600">{item.type}</span>
                <span className="text-sm font-medium text-gray-400">{item.date}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">{item.title}</h2>
              <p className="text-gray-600 leading-relaxed mb-6">{item.desc}</p>
              <div className="flex items-center gap-2 text-sm font-bold text-black group-hover:translate-x-2 transition-transform">
                Read Full Release <ArrowRight className="w-4 h-4" />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

