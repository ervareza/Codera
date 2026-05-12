import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
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
            <Link href="#" className="font-medium text-gray-900 hover:text-gray-600 transition-colors">x.com</Link>
            <Link href="#" className="font-medium text-gray-900 hover:text-gray-600 transition-colors">facebook.com</Link>
          </div>
        </div>

        <div className="flex flex-col gap-5 md:col-span-2">
          <Link href="/solutions" className="font-medium text-gray-900 hover:text-black">Solutions</Link>
          <Link href="/services" className="text-gray-500 hover:text-black transition-colors">Services</Link>
          <Link href="/products" className="text-gray-500 hover:text-black transition-colors">Products</Link>
          <Link href="/case-studies" className="text-gray-500 hover:text-black transition-colors">Case Studies</Link>
          <Link href="/pricing" className="text-gray-500 hover:text-black transition-colors">Pricing</Link>
        </div>

        <div className="flex flex-col gap-5 md:col-span-2">
          <Link href="/about" className="text-gray-500 hover:text-black transition-colors">About Us</Link>
          <Link href="/blog" className="text-gray-500 hover:text-black transition-colors">Blog</Link>
          <Link href="/news" className="text-gray-500 hover:text-black transition-colors">News</Link>
          <Link href="/faq" className="text-gray-500 hover:text-black transition-colors">FAQ</Link>
          <Link href="/support" className="text-gray-500 hover:text-black transition-colors">Support</Link>
        </div>

        <div className="flex flex-col gap-5 md:col-span-2">
          <Link href="/contact" className="text-gray-500 hover:text-black transition-colors">Contact Us</Link>
          <Link href="/locations" className="text-gray-500 hover:text-black transition-colors">Locations</Link>
        </div>

        <div className="flex flex-col gap-5 md:col-span-2">
          <Link href="/terms-of-service" className="text-gray-500 hover:text-black transition-colors">Terms of Service</Link>
          <Link href="/privacy-policy" className="text-gray-500 hover:text-black transition-colors">Privacy Policy</Link>
          <Link href="/cookies-policy" className="text-gray-500 hover:text-black transition-colors">Cookies Policy</Link>
        </div>
      </div>

      <div className="text-center md:text-left text-gray-400 text-[11px] font-medium tracking-wide">
        © 2026 Codera Inc. All rights reserved. Powered by New Saint Digital.
      </div>
    </footer>
  );
}
