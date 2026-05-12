'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'motion/react';
import { Plus, Minus } from 'lucide-react';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

export default function FAQ() {
  const [openFaq, setOpenFaq] = useState<number>(0);

  const faqs = [
    { q: "Is the hardware difficult to install?", a: "Our OBD-II trackers are plug-and-play and take less than 60 seconds to install. For heavy-duty hardwired trackers or dashcams, we recommend using a certified mechanic, which we can help coordinate." },
    { q: "Can I track vehicles across international borders?", a: "Yes. Our devices come with global roaming SIM cards that automatically connect to the strongest local network in over 150 countries without extra roaming fees." },
    { q: "How long is the historical data kept?", a: "Starter plans retain data for 30 days. Professional plans hold data for 1 year, and Enterprise plans offer unlimited data retention." },
    { q: "What happens if a vehicle enters a dead zone?", a: "The tracking devices have built-in memory storage. If they lose cellular connection, they continue recording GPS points and events, uploading all stored data automatically once connection is restored." },
    { q: "Can I set up geofence alerts?", a: "Absolutely. You can draw custom geofences on the map and receive instant SMS, email, or push notifications when vehicles enter or exit designated zones." }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-4xl mx-auto w-full">
      <motion.div initial="initial" animate="animate" variants={{ animate: { transition: { staggerChildren: 0.1 } } }}>
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <h1 className="text-5xl font-bold tracking-tight text-gray-900 mb-6">Frequently Asked.</h1>
          <p className="text-xl text-gray-500 tracking-tight">Everything you need to know about our product and billing.</p>
        </motion.div>

        <motion.div variants={fadeInUp} className="bg-white rounded-[2rem] p-8 md:p-12 shadow-sm border border-gray-100">
          {faqs.map((faq, idx) => {
            const isOpen = openFaq === idx;
            return (
              <div key={idx} className="border-b border-gray-100 last:border-0">
                <button 
                  onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                  className="w-full flex items-start justify-between py-6 group text-left gap-4"
                >
                  <span className="text-lg font-bold text-gray-900 tracking-tight leading-snug">{faq.q}</span>
                  <span className="mt-1 text-gray-400 group-hover:text-black transition-colors shrink-0">
                    {isOpen ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                  </span>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 leading-relaxed pb-6 pr-12">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            )
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

