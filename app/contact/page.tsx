'use client';

import React from 'react';
import { motion, Variants } from 'motion/react';
import { Mail, Phone, MapPin } from 'lucide-react';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

export default function Contact() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <motion.div initial="initial" animate="animate" variants={{ animate: { transition: { staggerChildren: 0.15 } } }} className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
        
        <div className="flex flex-col">
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6 leading-tight">Get in touch.</motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-gray-500 tracking-tight mb-16">Whether you need a custom demo, pricing details, or technical help, our team is ready.</motion.p>
          
          <motion.div variants={fadeInUp} className="space-y-10">
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shrink-0"><Phone className="w-5 h-5 text-black" /></div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 tracking-tight">Sales & Enquiries</h3>
                <p className="text-gray-500">+1 (800) 555-0199</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shrink-0"><Mail className="w-5 h-5 text-black" /></div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 tracking-tight">Email Support</h3>
                <p className="text-gray-500">hello@codera-fleet.com</p>
              </div>
            </div>
            <div className="flex gap-6 items-start">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center shrink-0"><MapPin className="w-5 h-5 text-black" /></div>
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-1 tracking-tight">Global Headquarters</h3>
                <p className="text-gray-500 leading-relaxed">100 Tech Corridor, Suite 400<br/>San Francisco, CA 94107<br/>United States</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div variants={fadeInUp} className="bg-white rounded-[2rem] p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 tracking-tight">Send a message</h2>
          <form className="space-y-6 flex flex-col">
            <div className="grid grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-900">First Name</label>
                <input type="text" className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors" placeholder="John" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-900">Last Name</label>
                <input type="text" className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors" placeholder="Doe" />
              </div>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-900">Work Email</label>
              <input type="email" className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors" placeholder="john@company.com" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-900">Company Size (Vehicles)</label>
              <select className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors">
                <option>1 - 50</option>
                <option>51 - 250</option>
                <option>251 - 1000</option>
                <option>1000+</option>
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-900">Message</label>
              <textarea rows={4} className="bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-black transition-colors resize-none" placeholder="How can we help your fleet?"></textarea>
            </div>
            <button type="button" className="bg-black text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors mt-4">
              Send Message
            </button>
          </form>
        </motion.div>

      </motion.div>
    </div>
  );
}

