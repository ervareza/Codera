'use client';

import React from 'react';
import { motion } from 'motion/react';

export default function Page() {
  return (
    <div className="flex flex-col min-h-[80vh] pt-40 pb-24 px-6 max-w-4xl mx-auto w-full">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-8">Products</h1>
        
        <div className="space-y-6 text-gray-600 leading-relaxed">
          <p className="text-lg">This is a premium placeholder page for Products.</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
          
          <div className="bg-white rounded-3xl p-8 border border-gray-100 mt-12 shadow-sm">
            <h2 className="text-xl font-semibold text-black mb-4">Dynamic Content Area</h2>
            <p className="text-sm">Content related to Products will go here. The dynamic layout structure is ready and fully integrated into the global animated site architecture. Replace this text with your specific business details.</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
