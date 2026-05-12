'use client';

import React from 'react';
import { motion, Variants } from 'motion/react';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

export default function Blog() {
  const articles = [
    { tag: "Guide", title: "5 Proven Ways to Reduce Fleet Fuel Consumption by 20%", readTime: "8 min read", img: "https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=2940&auto=format&fit=crop" },
    { tag: "Tech", title: "Why AI Dashcams are the Future of Driver Safety", readTime: "5 min read", img: "https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=2940&auto=format&fit=crop" },
    { tag: "Compliance", title: "Navigating the New 2026 Electronic Logging Device (ELD) Mandates", readTime: "12 min read", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop" },
    { tag: "Logistics", title: "The Hidden Costs of Unplanned Maintenance", readTime: "6 min read", img: "https://images.unsplash.com/photo-1486006920555-c77dcf18193c?q=80&w=2940&auto=format&fit=crop" },
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] pt-32 pb-24 px-6">
      <div className="max-w-[1400px] mx-auto">
        <motion.div initial="initial" animate="animate" variants={{ animate: { transition: { staggerChildren: 0.1 } } }}>
          
          <motion.div variants={fadeInUp} className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-gray-900 mb-4">The Compass.</h1>
              <p className="text-xl text-gray-500 tracking-tight">Insights, guides, and strategies for modern fleet managers.</p>
            </div>
            <div className="flex gap-2">
              <input type="text" placeholder="Search articles..." className="bg-white border border-gray-200 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-black transition-colors w-64" />
            </div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {articles.map((art, idx) => (
              <motion.div key={idx} variants={fadeInUp} whileHover={{ y: -10 }} className="bg-white rounded-3xl overflow-hidden p-3 pb-6 border border-gray-100 shadow-sm group cursor-pointer flex flex-col">
                <div className="relative w-full aspect-[4/3] rounded-[1.5rem] overflow-hidden mb-6">
                  <Image src={art.img} fill className="object-cover group-hover:scale-105 transition-transform duration-500" alt={art.title} />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full">
                    {art.tag}
                  </div>
                </div>
                <div className="px-3 flex flex-col flex-grow">
                  <h3 className="text-lg font-bold text-gray-900 mb-4 leading-snug group-hover:text-blue-600 transition-colors flex-grow">{art.title}</h3>
                  <div className="flex items-center justify-between mt-auto pt-4 border-t border-gray-50">
                    <span className="text-xs font-medium text-gray-400">{art.readTime}</span>
                    <ArrowRight className="w-4 h-4 text-gray-300 group-hover:text-blue-600 transition-colors" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </div>
  );
}


