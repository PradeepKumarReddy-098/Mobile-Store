'use client';

import { motion } from 'framer-motion';
import { Zap, Phone } from 'lucide-react';
import { Button } from '../ui/Button';

export default function CTABanner() {
  return (
    <section className="px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.6 }}
          className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-700 px-8 py-16 md:p-20 text-white shadow-2xl shadow-blue-900/30"
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 pointer-events-none">
            <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -mr-36 -mt-36"></div>
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-indigo-900/30 rounded-full blur-3xl -ml-32 -mb-32"></div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl"></div>
            {/* Grid pattern overlay */}
            <div className="absolute inset-0 opacity-5">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="cta-grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#cta-grid)" />
              </svg>
            </div>
          </div>

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">
            {/* Left content */}
            <div className="text-center lg:text-left max-w-2xl">
              <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 bg-white/15 backdrop-blur-sm border border-white/20 rounded-full text-sm font-semibold">
                <Zap size={14} className="text-amber-300" fill="currentColor" />
                Same-Day Service Available
              </div>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight mb-4">
                Ready to restore<br className="hidden md:block" /> your device?
              </h2>
              <p className="text-blue-100 text-base md:text-lg leading-relaxed max-w-lg mx-auto lg:mx-0">
                Join thousands of satisfied customers. Expert repairs, genuine parts, and a 2-year warranty — all under one roof.
              </p>
            </div>

            {/* Right CTA */}
            <div className="flex flex-col items-center lg:items-end gap-4 shrink-0 w-full lg:w-auto">
              <Button
                size="lg"
                className="w-full lg:w-auto bg-white text-blue-700 hover:bg-slate-50 border-none font-bold shadow-xl rounded-full px-8 gap-2"
              >
                <Phone size={18} />
                BOOK REPAIR NOW
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full lg:w-auto text-white border-white/30 hover:bg-white/15 hover:text-white rounded-full"
              >
                CONTACT SUPPORT
              </Button>
              <p className="text-blue-200 text-xs font-medium">No booking fee · Walk-ins welcome</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
