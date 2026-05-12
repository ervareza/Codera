'use client';

import React from 'react';
import { motion, Variants } from 'motion/react';
import { Check } from 'lucide-react';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

export default function Pricing() {
  const plans = [
    { name: "Starter", price: "$15", desc: "Perfect for small local fleets.", features: ["Live GPS Tracking", "Basic Route History (30 days)", "Standard Email Support", "Mobile App Access"] },
    { name: "Professional", price: "$29", desc: "For growing regional businesses.", featured: true, features: ["Everything in Starter", "Predictive Maintenance Alerts", "Driver Behavior Scoring", "1 Year Data Retention", "API Access", "24/7 Priority Support"] },
    { name: "Enterprise", price: "Custom", desc: "Advanced logistics operations.", features: ["Everything in Professional", "Custom ERP Integrations", "AI Dashcam Video Storage", "Dedicated Account Manager", "White-label Platform"] }
  ];

  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-7xl mx-auto">
      <motion.div initial="initial" animate="animate" variants={{ animate: { transition: { staggerChildren: 0.15 } } }} className="flex flex-col items-center">
        
        <motion.div variants={fadeInUp} className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-6">Simple, transparent pricing.</h1>
          <p className="text-xl text-gray-500 tracking-tight">No hidden fees. Cancel anytime. Prices are per vehicle, per month.</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {plans.map((plan, idx) => (
            <motion.div 
              key={idx} 
              variants={fadeInUp} 
              className={`relative bg-white rounded-[2rem] p-10 flex flex-col ${plan.featured ? 'shadow-2xl border-2 border-black scale-105 z-10' : 'border border-gray-100 shadow-sm'}`}
            >
              {plan.featured && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-black text-white text-xs font-bold tracking-widest uppercase px-4 py-1.5 rounded-full">
                  Most Popular
                </div>
              )}
              <h3 className="text-2xl font-semibold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-sm text-gray-500 mb-8 h-10">{plan.desc}</p>
              
              <div className="flex items-baseline gap-1 mb-8">
                <span className="text-5xl font-bold tracking-tighter text-gray-900">{plan.price}</span>
                {plan.price !== "Custom" && <span className="text-gray-500 font-medium">/mo</span>}
              </div>

              <button className={`w-full py-4 rounded-full font-medium transition-colors mb-8 ${plan.featured ? 'bg-black text-white hover:bg-gray-800' : 'bg-gray-100 text-black hover:bg-gray-200'}`}>
                {plan.price === "Custom" ? "Contact Sales" : "Start Free Trial"}
              </button>

              <div className="space-y-4 flex-grow">
                {plan.features.map((feat, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center shrink-0 ${plan.featured ? 'bg-black text-white' : 'bg-green-100 text-green-600'}`}>
                      <Check className="w-3 h-3" strokeWidth={3} />
                    </div>
                    <span className="text-sm text-gray-700 font-medium">{feat}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

      </motion.div>
    </div>
  );
}

