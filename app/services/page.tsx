'use client';

import React from 'react';
import { motion, Variants } from 'motion/react';
import { ShieldCheck, Activity, Code2, Headphones } from 'lucide-react';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

const staggerContainer: Variants = {
  animate: { transition: { staggerChildren: 0.15 } }
};

export default function Services() {
  const services = [
    { title: "24/7 Live Monitoring", desc: "Our command center keeps an eye on your assets round the clock. Receive instant alerts for unauthorized movement or route deviations.", icon: <Activity className="w-6 h-6" /> },
    { title: "Predictive Maintenance", desc: "Our AI analyzes engine diagnostics to predict failures before they happen, saving you thousands in towing and repair costs.", icon: <ShieldCheck className="w-6 h-6" /> },
    { title: "Custom API Integration", desc: "Connect Codera directly into your existing ERP or dispatch software. Our engineering team helps you build custom bridges.", icon: <Code2 className="w-6 h-6" /> },
    { title: "Driver Safety Training", desc: "We provide automated coaching modules based on harsh braking and speeding data, improving overall fleet safety scores.", icon: <Headphones className="w-6 h-6" /> }
  ];

  return (
    <div className="min-h-screen bg-[#F8F9FA] pt-32 pb-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 w-full">
        <motion.div initial="initial" animate="animate" variants={staggerContainer} className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          <div className="flex flex-col pr-8">
            <motion.div variants={fadeInUp} className="inline-flex items-center text-xs font-bold uppercase tracking-widest text-blue-600 bg-blue-50 px-4 py-2 rounded-full mb-8 w-max">
              Professional Services
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-4xl md:text-6xl font-bold tracking-tight text-gray-900 mb-8 leading-[1.1]">
              More than just software.
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-gray-600 leading-relaxed mb-12">
              We don't just sell you a license. We partner with you to ensure your fleet operations reach maximum efficiency through dedicated services.
            </motion.p>
            
            <motion.div variants={fadeInUp} className="flex gap-4">
              <button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-colors">Consult an Expert</button>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {services.map((srv, idx) => (
              <motion.div 
                key={idx} 
                variants={fadeInUp} 
                whileHover={{ y: -10 }}
                className={`bg-white p-8 rounded-3xl shadow-sm border border-gray-100 ${idx % 2 !== 0 ? 'sm:mt-12' : ''}`}
              >
                <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center mb-6">
                  {srv.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{srv.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{srv.desc}</p>
              </motion.div>
            ))}
          </div>

        </motion.div>
      </div>
    </div>
  );
}

