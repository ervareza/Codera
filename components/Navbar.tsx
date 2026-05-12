'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav 
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="flex items-center justify-between py-6 px-6 md:px-12 max-w-[1400px] w-full mx-auto backdrop-blur-sm z-50 absolute top-0 left-1/2 -translate-x-1/2"
    >
      <div className="flex items-center gap-12">
        <Link href="/">
          <motion.div whileHover={{ scale: 1.05 }} className="font-bold text-lg flex items-center gap-2 tracking-tight cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H10V10H4V4Z" fill="black" />
              <path d="M14 14H20V20H14V14Z" fill="black" />
              <path d="M4 14H10V20H4V14Z" fill="black" opacity="0.3" />
              <path d="M14 4H20V10H14V4Z" fill="black" opacity="0.3" />
            </svg>
            CODERA
          </motion.div>
        </Link>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-800">
          <div className="relative group">
            <span className="flex items-center gap-1 hover:text-black cursor-pointer transition-colors">Products <ChevronDown className="w-3 h-3 text-gray-400" /></span>
            <div className="absolute top-full left-0 mt-2 w-40 bg-white rounded-xl shadow-xl border border-gray-100 p-2 opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto transition-opacity flex flex-col gap-1">
              <Link href="/solutions" className="px-3 py-2 hover:bg-gray-50 rounded-lg">Solutions</Link>
              <Link href="/services" className="px-3 py-2 hover:bg-gray-50 rounded-lg">Services</Link>
              <Link href="/products" className="px-3 py-2 hover:bg-gray-50 rounded-lg">Hardware</Link>
            </div>
          </div>
          <Link href="/about" className="hover:text-black transition-colors">About Us</Link>
          <Link href="/case-studies" className="hover:text-black transition-colors">Case Studies</Link>
          <Link href="/pricing" className="hover:text-black transition-colors">Pricing</Link>
        </div>
      </div>
      <div className="flex items-center gap-6">
        <div className="hidden md:flex items-center gap-1 text-sm font-medium hover:text-black cursor-pointer transition-colors">
          En <ChevronDown className="w-3 h-3 text-gray-400" />
        </div>
        <Link href="/contact">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#111111] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-black transition-colors shadow-sm"
          >
            Get a Demo
          </motion.button>
        </Link>
      </div>
    </motion.nav>
  );
}
