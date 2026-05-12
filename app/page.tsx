'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronDown, 
  Settings, 
  Cpu, 
  Layers, 
  Clock, 
  Plus, 
  Minus,
  ArrowRight
} from 'lucide-react';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

export default function Page() {
  const [openFaq, setOpenFaq] = useState<number>(0);

  const faqs = [
    { question: "How quickly can I start using your solutions?", answer: "Our solutions are easy to implement and can be up and running in just a few days, depending on your fleet size and system integration needs." },
    { question: "Which types of vehicles are compatible with your system?", answer: "Our flexible hardware and software are designed to be compatible with almost any vehicle type, from light delivery vans to heavy-duty, long-haul trucks and specialized equipment." },
    { question: "Can I integrate your systems with existing hardware?", answer: "Yes, our platform is hardware-agnostic and connects seamlessly via our flexible APIs with most standard GPS trackers and telematics devices on the market." },
    { question: "How can I access fleet data?", answer: "You can securely access real-time and historical fleet data through our centralized web platform, available on any desktop or mobile browser, anytime." },
    { question: "Do you provide technical support?", answer: "Absolutely. We offer 24/7 dedicated technical support, as well as an extensive knowledge base and personalized onboarding programs for your team." },
    { question: "How do your solutions help reduce costs?", answer: "By optimizing routes, preventing unauthorized vehicle use, encouraging safer and more fuel-efficient driving habits, and predicting maintenance needs before they cause breakdowns." },
    { question: "Are my data secure?", answer: "Yes, we utilize enterprise-grade encryption for data at rest and in transit. Our infrastructure complies with stringent global security standards to protect all fleet information." },
    { question: "Do you offer a free trial?", answer: "Yes. Reach out to our sales team to arrange a customized, no-obligation trial tailored specifically to your company's operational requirements." }
  ];

  return (
    <div className="flex flex-col min-h-screen overflow-hidden">
      {/* Navbar */}
      <motion.nav 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center justify-between py-6 px-6 md:px-12 max-w-[1400px] w-full mx-auto backdrop-blur-sm z-50"
      >
        <div className="flex items-center gap-12">
          <motion.div whileHover={{ scale: 1.05 }} className="font-bold text-lg flex items-center gap-2 tracking-tight cursor-pointer">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 4H10V10H4V4Z" fill="black" />
              <path d="M14 14H20V20H14V14Z" fill="black" />
              <path d="M4 14H10V20H4V14Z" fill="black" opacity="0.3" />
              <path d="M14 4H20V10H14V4Z" fill="black" opacity="0.3" />
            </svg>
            CODERA
          </motion.div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-800">
            <a href="#" className="flex items-center gap-1 hover:text-black transition-colors">Solutions <ChevronDown className="w-3 h-3 text-gray-400" /></a>
            <a href="#" className="flex items-center gap-1 hover:text-black transition-colors">Products <ChevronDown className="w-3 h-3 text-gray-400" /></a>
            <a href="#" className="hover:text-black transition-colors">About</a>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-1 text-sm font-medium hover:text-black cursor-pointer transition-colors">
            En <ChevronDown className="w-3 h-3 text-gray-400" />
          </div>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-[#111111] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-black transition-colors shadow-sm"
          >
            Get a Demo
          </motion.button>
        </div>
      </motion.nav>

      <main className="flex-grow">
        {/* Hero Section */}
        <motion.section 
          initial="initial"
          animate="animate"
          variants={staggerContainer}
          className="pt-24 pb-16 px-6 max-w-7xl mx-auto flex flex-col items-center flex-grow flex-shrink-0"
        >
          <motion.h1 variants={fadeInUp} className="text-6xl md:text-[5.5rem] font-semibold tracking-tighter text-gray-900 leading-[1.05] text-center mb-6">
            Control your fleet<br className="hidden md:block"/> like never before.
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto text-center mb-16 leading-tight tracking-tight">
            Real-time tracking, advanced analytics, and seamless<br className="hidden md:block"/> management - all in one powerful platform.
          </motion.p>
          <motion.div 
            variants={fadeInUp}
            className="w-full max-w-6xl h-[60vh] min-h-[400px] md:h-[500px] relative rounded-[2rem] overflow-hidden"
          >
            <motion.div 
              initial={{ scale: 1.1 }}
              animate={{ scale: 1 }}
              transition={{ duration: 1.5, ease: 'easeOut' }}
              className="w-full h-full relative"
            >
              <Image 
                src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2940&auto=format&fit=crop" 
                fill 
                sizes="(max-width: 1400px) 100vw, 1400px"
                priority
                className="object-cover" 
                alt="Heavy truck driving on a desert road at golden hour" 
              />
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Features Section */}
        <section className="py-24 px-6 max-w-[1400px] mx-auto flex flex-col items-center overflow-hidden">
          <motion.div 
            initial="initial" 
            whileInView="animate" 
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="w-full flex flex-col items-center"
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4 text-center">
              Useful for business.
            </motion.h2>
            <motion.p variants={fadeInUp} className="text-gray-500 mb-16 text-lg text-center tracking-tight">
              Our technologies enhance business efficiency and driver safety.
            </motion.p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-6xl">
              {[
                { title: "Time saving", stat: "20%", subtitle: "less mundanity", desc: "Process automation frees you to focus on other tasks." },
                { title: "Safety", stat: "50%", subtitle: "fewer accidents.", desc: "Analyzing driving behavior improves road safety." },
                { title: "Improving efficiency", stat: "30%", subtitle: "reduction in fuel costs.", desc: "Route optimization saves up to a third on fuel." }
              ].map((feature, idx) => (
                <motion.div 
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-[2rem] p-10 flex flex-col justify-between shadow-[0_2px_10px_-4px_rgba(0,0,0,0.05)] border border-gray-100/50 transition-all duration-300"
                >
                  <div className="mb-20">
                    <span className="inline-flex items-center text-[10px] font-semibold uppercase tracking-widest text-gray-500 bg-gray-100 px-3 py-1.5 rounded-full">
                      {feature.title}
                    </span>
                  </div>
                  <div>
                    <div className="text-[3.5rem] font-bold tracking-tighter text-gray-900 leading-none mb-4">{feature.stat}</div>
                    <div className="text-xl font-medium text-gray-900 mb-3 tracking-tight">{feature.subtitle}</div>
                    <p className="text-gray-500 text-sm leading-relaxed max-w-[260px] italic">
                      {feature.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Text Highlight Section */}
        <section className="py-24 px-6 max-w-4xl mx-auto flex justify-center text-center">
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight text-gray-800 leading-[1.4] md:leading-[1.5]"
          >
            Our fleet management solutions include{' '}
            <span className="relative group inline-block cursor-default whitespace-nowrap z-20">
              <span className="bg-[#1a1a1a] text-white px-2 py-0.5 rounded-lg mx-0.5 shadow-sm inline-block transition-transform group-hover:scale-105">
                vehicle tracking
              </span>
              
              {/* Tooltip */}
              <div className="absolute opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-95 group-hover:scale-100 bottom-[calc(100%+12px)] left-1/2 -translate-x-1/2 w-72 bg-white rounded-2xl shadow-2xl border border-gray-100 p-4 z-30 pointer-events-none">
                <div className="relative w-full h-32 rounded-lg overflow-hidden mb-4 bg-gray-100">
                  <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2940&auto=format&fit=crop" fill className="object-cover" alt="Dashboard map UI" />
                </div>
                <p className="text-[13px] text-gray-600 leading-relaxed text-left font-normal mb-3 whitespace-normal">
                  Track your trucks, vans, cars, trailers and assets with GPS.
                </p>
                <div className="text-[11px] font-semibold text-black flex items-center gap-1 uppercase tracking-wider justify-start">
                  Show more <ArrowRight className="w-3 h-3" />
                </div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-white border-b border-r border-gray-100 transform rotate-45"></div>
              </div>

            </span>{' '}
            for real-time updates and tools for <span className="underline decoration-2 decoration-gray-300 underline-offset-4 hover:decoration-gray-400 transition-colors mx-0.5">predictive maintenance</span> to prevent breakdowns. We streamline operations with <span className="underline decoration-2 decoration-gray-300 underline-offset-4 hover:decoration-gray-400 transition-colors mx-0.5">workforce management</span> and ensure <span className="underline decoration-2 decoration-gray-300 underline-offset-4 hover:decoration-gray-400 transition-colors mx-0.5">regulatory compliance</span>. Additionally, we support <span className="underline decoration-2 decoration-gray-300 underline-offset-4 hover:decoration-gray-400 transition-colors mx-0.5">sustainability efforts and EV integration</span>, optimizing costs through efficient <span className="underline decoration-2 decoration-gray-300 underline-offset-4 hover:decoration-gray-400 transition-colors mx-0.5">business administration</span>.
          </motion.p>
        </section>

        {/* Results Section */}
        <section className="py-24 px-6 max-w-[1400px] mx-auto flex flex-col items-center">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4 leading-tight">
              Results that speak<br/> for themselves.
            </h2>
            <p className="text-gray-500 text-lg">Learn how we help companies around the world.</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-4xl bg-white rounded-[2.5rem] p-10 md:p-16 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 mx-auto"
          >
            <p className="text-2xl md:text-3xl font-medium tracking-tight text-gray-900 leading-[1.4] mb-12">
              Since implementing the telematics system from <span className="underline decoration-[3px] decoration-green-400 underline-offset-4">Codera</span>, our fleet has reached an entirely new level of efficiency. Over six months, we have <span className="bg-[#111] text-white px-2 py-0.5 rounded-lg whitespace-nowrap">reduced costs by 27%.</span>
            </p>

            <div className="flex items-center gap-4 mb-20">
              <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0">
                <Image src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2940&auto=format&fit=crop" fill className="object-cover" alt="James Anderson" />
              </div>
              <div className="flex flex-col">
                <span className="font-semibold text-gray-900 text-sm tracking-tight mb-0.5">James Anderson</span>
                <span className="text-[13px] text-gray-500 tracking-tight">Chief Operating Officer, Scan Global Logistics</span>
              </div>
            </div>

            {/* Custom SVG Chart */}
            <div className="relative w-full h-[160px] md:h-[200px]">
              <svg width="100%" height="100%" viewBox="0 0 800 200" preserveAspectRatio="none" className="overflow-visible">
                {/* Horizontal grid lines */}
                <line x1="0" y1="160" x2="800" y2="160" stroke="#f0f0f0" strokeDasharray="4 4" strokeWidth="2" />
                
                {/* Vertical guides & Labels */}
                <line x1="100" y1="0" x2="100" y2="160" stroke="#f0f0f0" strokeDasharray="4 4" strokeWidth="2" />
                <text x="100" y="185" textAnchor="middle" className="fill-gray-400 text-xs font-medium uppercase tracking-wider">March</text>
                
                <line x1="300" y1="0" x2="300" y2="160" stroke="#f0f0f0" strokeDasharray="4 4" strokeWidth="2" />
                <text x="300" y="185" textAnchor="middle" className="fill-gray-400 text-xs font-medium uppercase tracking-wider">May</text>
                
                <line x1="500" y1="0" x2="500" y2="160" stroke="#f0f0f0" strokeDasharray="4 4" strokeWidth="2" />
                <text x="500" y="185" textAnchor="middle" className="fill-gray-400 text-xs font-medium uppercase tracking-wider">Jul</text>
                
                <line x1="700" y1="0" x2="700" y2="160" stroke="#f0f0f0" strokeDasharray="4 4" strokeWidth="2" />
                <text x="700" y="185" textAnchor="middle" className="fill-gray-400 text-xs font-medium uppercase tracking-wider">Sep</text>

                {/* Right side labels */}
                <text x="815" y="55" className="fill-gray-400 text-sm font-medium">100%</text>
                <text x="815" y="155" className="fill-green-600 font-bold text-sm">73%</text>
                
                {/* Animated Curved Data Line */}
                <motion.path 
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: "easeInOut" }}
                  d="M 100 50 C 300 50, 500 150, 700 150" 
                  fill="none" 
                  stroke="#22c55e" 
                  strokeWidth="3.5" 
                  strokeLinecap="round" 
                />
                
                {/* Highlight Point on March */}
                <motion.circle 
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 0.2 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.5, duration: 0.5 }}
                  cx="100" cy="50" r="16" fill="#22c55e" 
                />
                <motion.circle 
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.5, duration: 0.3 }}
                  cx="100" cy="50" r="6" fill="#22c55e" 
                />
              </svg>
            </div>
          </motion.div>

          {/* Logos */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 0.4 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="flex flex-wrap justify-center items-center gap-10 md:gap-16 mt-20 px-4 filter grayscale"
          >
            <span className="text-xl font-bold tracking-tighter">XPOLogistics</span>
            <span className="text-lg font-bold tracking-tighter border-2 border-current px-2 py-0.5 rounded-full text-[10px]">SCAN GLOBAL LOGISTICS</span>
            <span className="text-2xl font-black tracking-tighter text-blue-900">FedEx</span>
            <span className="text-2xl font-bold font-serif tracking-tighter mt-1">amazon</span>
            <span className="text-xl font-bold tracking-widest text-red-600">ExxonMobil</span>
          </motion.div>
        </section>

        {/* Compatibility Section */}
        <section className="py-24 px-6 max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center overflow-hidden">
          <motion.div 
            initial="initial" 
            whileInView="animate" 
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 variants={fadeInUp} className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-12 leading-[1.1]">
              Compatible with<br/>your business.
            </motion.h2>
            <div className="space-y-10">
              {[
                { icon: <Layers className="w-5 h-5 text-gray-800" strokeWidth={1.5} />, title: "Wide range of integrations.", desc: "Our systems support integration with leading software solutions for fleet management, accounting, and analytics, including SAP, QuickBooks, Fleetio." },
                { icon: <Cpu className="w-5 h-5 text-gray-800" strokeWidth={1.5} />, title: "Hardware compatibility.", desc: "We work with GPS trackers, fuel sensors, driver behavior monitoring devices, and other standard telematics hardware." },
                { icon: <div className="w-5 h-5 border-[1.5px] border-gray-800 rounded-md rotate-45 flex items-center justify-center"><div className="w-1.5 h-1.5 bg-gray-800 rounded-full"></div></div>, title: "API for custom solutions", desc: "Leverage our flexible API to create a tailored solution that fits your business specific needs." },
                { icon: <Clock className="w-5 h-5 text-gray-800" strokeWidth={1.5} />, title: "Fast setup.", desc: "Integration takes just a few hours, allowing you to immediately start optimizing your processes." }
              ].map((item, idx) => (
                <motion.div key={idx} variants={fadeInUp} className="flex gap-5">
                  <div className="mt-1 shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg text-gray-900 mb-2 tracking-tight">{item.title}</h3>
                    <p className="text-gray-500 leading-relaxed text-sm">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[600px] md:h-[800px] rounded-[2.5rem] overflow-hidden bg-gray-100 shadow-xl"
          >
             <Image src="https://images.unsplash.com/photo-1553413077-190dd305871c?q=80&w=2940&auto=format&fit=crop" fill className="object-cover" alt="Delivery driver scanning package at white van" />
          </motion.div>
        </section>

        {/* News Section */}
        <section className="py-24 px-6 mx-auto w-full">
          <motion.div 
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="max-w-6xl mx-auto"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-4">News and updates.</h2>
              <p className="text-gray-500 tracking-tight text-lg max-w-xl mx-auto">Stay up-to-date with the latest developments and innovations in fleet management.</p>
            </motion.div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Card 1 */}
              <motion.div variants={fadeInUp} whileHover={{ y: -10 }} className="bg-white rounded-3xl overflow-hidden p-2.5 pb-6 shadow-sm border border-gray-100/60 flex flex-col transition-shadow hover:shadow-md cursor-pointer group">
                <div className="relative w-full aspect-[4/3] rounded-[1.25rem] overflow-hidden mb-6 bg-gray-100 shrink-0">
                   <Image src="https://images.unsplash.com/photo-1494412651409-8963ce7935a7?q=80&w=2940&auto=format&fit=crop" fill className="object-cover group-hover:scale-105 transition-transform duration-500" alt="White delivery van on a scenic road" />
                </div>
                <div className="px-3 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold mb-3 leading-[1.3] text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors">Integration with SAP is now complete and fully operational.</h3>
                  <p className="text-gray-500 text-[13px] mb-6 flex-grow leading-relaxed">Users can now integrate Codera with SAP for comprehensive financial and...</p>
                  <div className="text-[11px] font-semibold text-gray-900 tracking-wider">Dec 24</div>
                </div>
              </motion.div>

              {/* Card 2 */}
              <motion.div variants={fadeInUp} whileHover={{ y: -10 }} className="bg-white rounded-3xl overflow-hidden p-2.5 pb-6 shadow-sm border border-gray-100/60 flex flex-col transition-shadow hover:shadow-md cursor-pointer group">
                <div className="relative w-full aspect-[4/3] rounded-[1.25rem] overflow-hidden mb-6 bg-gray-100 shrink-0">
                   <Image src="https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2940&auto=format&fit=crop" fill className="object-cover group-hover:scale-105 transition-transform duration-500" alt="Electric vehicle charging port being plugged in" />
                </div>
                <div className="px-3 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold mb-3 leading-[1.3] text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors">Codera supports electric vehicles and fleet tools.</h3>
                  <p className="text-gray-500 text-[13px] mb-6 flex-grow leading-relaxed">We've added tools for managing EV fleets, including battery level monito...</p>
                  <div className="text-[11px] font-semibold text-gray-900 tracking-wider">Dec 17</div>
                </div>
              </motion.div>

              {/* Card 3 */}
              <motion.div variants={fadeInUp} whileHover={{ y: -10 }} className="bg-white rounded-3xl overflow-hidden p-2.5 pb-6 shadow-sm border border-gray-100/60 flex flex-col transition-shadow hover:shadow-md cursor-pointer group">
                <div className="relative w-full aspect-[4/3] rounded-[1.25rem] overflow-hidden mb-6 bg-gray-100 shrink-0">
                   <Image src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=2940&auto=format&fit=crop" fill className="object-cover group-hover:scale-105 transition-transform duration-500" alt="White semi truck in scenic landscape" />
                </div>
                <div className="px-3 flex flex-col flex-grow">
                  <h3 className="text-lg font-semibold mb-3 leading-[1.3] text-gray-900 tracking-tight group-hover:text-blue-600 transition-colors">Big data technology: The future of fleet optimization.</h3>
                  <p className="text-gray-500 text-[13px] mb-6 flex-grow leading-relaxed">Real-time data analysis unlocks new opportunities for cost reduction and...</p>
                  <div className="text-[11px] font-semibold text-gray-900 tracking-wider">Dec 14</div>
                </div>
              </motion.div>
            </div>

            <motion.div variants={fadeInUp} className="flex justify-center gap-3 mt-12">
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-[#111] text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-black transition-colors shadow-sm">
                Subscribe
              </motion.button>
              <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} className="bg-transparent text-gray-900 border border-gray-200 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-white transition-colors">
                Show All
              </motion.button>
            </motion.div>
          </motion.div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-4"
          >
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 mb-8 md:mb-12 leading-[1.05]">
              Frequently<br/>Asked<br/>Questions.
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed">
              Didn't find an answer to your question?<br/>
              <a href="#" className="text-black underline decoration-gray-300 underline-offset-4 hover:decoration-gray-600 transition-colors font-medium">Contact us</a>, and we'll be happy to help!
            </p>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8 flex flex-col"
          >
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="border-b border-gray-100 last:border-0">
                  <button 
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full flex items-start justify-between py-6 group text-left gap-4"
                  >
                    <span className="text-lg font-medium text-gray-900 tracking-tight leading-snug">
                      {faq.question}
                    </span>
                    <span className="mt-1 text-gray-400 group-hover:text-black transition-colors shrink-0">
                      {isOpen ? <Minus className="w-5 h-5" strokeWidth={1.5} /> : <Plus className="w-5 h-5" strokeWidth={1.5} />}
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
                        <p className="text-sm text-gray-600 leading-relaxed max-w-2xl pr-12 pb-6">
                          {faq.answer}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              )
            })}
          </motion.div>
        </section>

        {/* CTA Banner Section */}
        <section className="py-12 md:py-24 px-6 max-w-6xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-[#0a0a0a] text-white rounded-[2rem] p-12 md:p-16 lg:p-20 flex flex-col gap-14 relative overflow-hidden shadow-2xl"
          >
            <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-white/5 blur-[100px] rounded-full pointer-events-none"></div>

            <h2 className="text-3xl md:text-5xl lg:text-[3.5rem] font-medium tracking-tight max-w-3xl leading-[1.1] relative z-10 text-white/95">
              Increase efficiency, reduce costs, and enhance safety with Codera's solutions.
            </h2>
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 relative z-10">
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-black px-8 py-4 rounded-full font-medium text-sm hover:bg-gray-100 transition-colors"
              >
                Get a Demo
              </motion.button>
              <span className="text-gray-400 font-medium text-sm cursor-pointer hover:text-white transition-colors">info@codera-fleet.com</span>
            </div>
          </motion.div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-16 md:py-20 border-t border-gray-100 px-6 max-w-[1400px] mx-auto w-full text-sm">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-12 md:gap-8 mb-24">
          <div className="col-span-2 md:col-span-4 flex flex-col justify-between">
            <div className="font-bold flex items-center gap-2 tracking-tight">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4 4H10V10H4V4Z" fill="black" />
                <path d="M14 14H20V20H14V14Z" fill="black" />
                <path d="M4 14H10V20H4V14Z" fill="black" opacity="0.3" />
                <path d="M14 4H20V10H14V4Z" fill="black" opacity="0.3" />
              </svg>
              CODERA
            </div>
            
            <div className="flex gap-6 mt-12 md:mt-0">
              <a href="#" className="font-medium text-gray-900 hover:text-gray-600 transition-colors">x.com</a>
              <a href="#" className="font-medium text-gray-900 hover:text-gray-600 transition-colors">facebook.com</a>
            </div>
          </div>

          <div className="flex flex-col gap-5 md:col-span-2">
            <a href="#" className="font-medium text-gray-900 hover:text-black">Solutions</a>
            <a href="#" className="text-gray-500 hover:text-black transition-colors">Services</a>
            <a href="#" className="text-gray-500 hover:text-black transition-colors">Products</a>
            <a href="#" className="text-gray-500 hover:text-black transition-colors">Case Studies</a>
            <a href="#" className="text-gray-500 hover:text-black transition-colors">Pricing</a>
          </div>

          <div className="flex flex-col gap-5 md:col-span-2">
            <a href="#" className="text-gray-500 hover:text-black transition-colors">About Us</a>
            <a href="#" className="text-gray-500 hover:text-black transition-colors">Blog</a>
            <a href="#" className="text-gray-500 hover:text-black transition-colors">News</a>
            <a href="#" className="text-gray-500 hover:text-black transition-colors">FAQ</a>
            <a href="#" className="text-gray-500 hover:text-black transition-colors">Support</a>
          </div>

          <div className="flex flex-col gap-5 md:col-span-2">
            <a href="#" className="text-gray-500 hover:text-black transition-colors">Contact Us</a>
            <a href="#" className="text-gray-500 hover:text-black transition-colors">Locations</a>
          </div>

          <div className="flex flex-col gap-5 md:col-span-2">
            <a href="#" className="text-gray-500 hover:text-black transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-black transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-black transition-colors">Cookies Policy</a>
          </div>
        </div>

        <div className="text-center md:text-left text-gray-400 text-[11px] font-medium tracking-wide">
          © 2024 Codera Inc. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
