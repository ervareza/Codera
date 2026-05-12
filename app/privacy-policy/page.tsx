'use client';

import React from 'react';
import { motion, Variants } from 'motion/react';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-3xl mx-auto w-full">
      <motion.div initial="initial" animate="animate" variants={fadeInUp}>
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-gray-500 font-medium">Last updated: May 13, 2026</p>
        </div>

        <div className="space-y-8 text-gray-600 leading-relaxed text-[15px]">
          <p className="text-lg text-gray-900 font-medium">Codera takes your privacy and data security seriously. We comply with GDPR, CCPA, and global data protection standards.</p>
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">1. Information We Collect</h2>
            <p>When operating our Services, we collect live telematics data including GPS coordinates, vehicle speed, engine diagnostics, fuel consumption, and dashcam video footage. We also collect account information such as names, emails, and billing details required to maintain your account.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">2. How We Use Information</h2>
            <p>The telematics data collected is processed in real-time to provide you with dashboard analytics, predictive maintenance alerts, and driver coaching capabilities. We do not sell your personal data or fleet telemetry to third-party brokers or insurance companies without your explicit, opt-in consent.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">3. Data Security</h2>
            <p>We use state-of-the-art encryption (AES-256) to protect data both at rest and in transit. Our cloud infrastructure is hosted on secure, SOC2 compliant AWS data centers.</p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}

