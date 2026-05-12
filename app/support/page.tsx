'use client';

import React from 'react';
import { motion, Variants } from 'motion/react';
import { LifeBuoy, FileText, PlayCircle, MessageSquare } from 'lucide-react';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

export default function Support() {
  const resources = [
    { title: "Documentation", desc: "Detailed manuals on API integration, hardware installation, and dashboard setup.", icon: <FileText className="w-8 h-8" /> },
    { title: "Video Tutorials", desc: "Step-by-step visual guides on using the Codera platform features.", icon: <PlayCircle className="w-8 h-8" /> },
    { title: "Community Forum", desc: "Connect with other fleet managers, share tips, and discuss industry trends.", icon: <MessageSquare className="w-8 h-8" /> },
    { title: "Submit a Ticket", desc: "Can't find what you need? Our engineering team is available 24/7.", icon: <LifeBuoy className="w-8 h-8" /> }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <motion.div initial="initial" animate="animate" variants={{ animate: { transition: { staggerChildren: 0.1 } } }} className="flex flex-col items-center">
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">How can we help?</h1>
          <div className="max-w-xl mx-auto relative">
            <input 
              type="text" 
              placeholder="Search for articles, guides, or hardware..." 
              className="w-full bg-white border border-gray-200 rounded-full px-8 py-5 text-lg shadow-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black transition-all"
            />
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl">
          {resources.map((res, idx) => (
            <motion.div key={idx} variants={fadeInUp} whileHover={{ y: -5 }} className="bg-white rounded-[2rem] p-10 border border-gray-100 shadow-[0_4px_20px_-4px_rgba(0,0,0,0.05)] flex gap-6 cursor-pointer group">
              <div className="text-gray-400 group-hover:text-blue-600 transition-colors shrink-0">
                {res.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">{res.title}</h3>
                <p className="text-gray-500 leading-relaxed text-sm">{res.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}

