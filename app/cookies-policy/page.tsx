'use client';

import React from 'react';
import { motion, Variants } from 'motion/react';

const fadeInUp: Variants = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: 'easeOut' } }
};

export default function CookiesPolicy() {
  return (
    <div className="min-h-screen pt-32 pb-24 px-6 max-w-3xl mx-auto w-full">
      <motion.div initial="initial" animate="animate" variants={fadeInUp}>
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900 mb-4">Cookies Policy</h1>
          <p className="text-gray-500 font-medium">Last updated: May 13, 2026</p>
        </div>

        <div className="space-y-8 text-gray-600 leading-relaxed text-[15px]">
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">1. What Are Cookies?</h2>
            <p>Cookies are small text files that are placed on your computer or mobile device by websites that you visit. They are widely used to make websites work, or work more efficiently, as well as to provide reporting information.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">2. How We Use Cookies</h2>
            <p>Codera uses essential cookies to authenticate users, prevent fraudulent use of login accounts, and maintain session states across our dashboard. We also use analytics cookies to track how users interact with our landing page to improve our marketing efforts.</p>
          </section>
          <section>
            <h2 className="text-xl font-bold text-gray-900 mb-4">3. Managing Cookies</h2>
            <p>You can set your browser to refuse all or some browser cookies, or to alert you when websites set or access cookies. However, disabling essential cookies will prevent you from logging into the fleet management dashboard.</p>
          </section>
        </div>
      </motion.div>
    </div>
  );
}

