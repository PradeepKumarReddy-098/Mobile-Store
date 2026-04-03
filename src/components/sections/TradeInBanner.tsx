'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Smartphone, Banknote, RefreshCw } from 'lucide-react';

const perks = [
  { icon: Smartphone, text: 'Any brand accepted' },
  { icon: Banknote, text: 'Instant cash or credit' },
  { icon: RefreshCw, text: 'Seamless swap process' },
];

export default function TradeInBanner() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10"
    >
      <div className="relative overflow-hidden rounded-[2rem] text-white shadow-2xl shadow-rose-900/25">
        {/* Gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-rose-600 via-[var(--color-accent)] to-pink-700"></div>

        {/* Noise / grid overlay */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="tradein-grid" width="32" height="32" patternUnits="userSpaceOnUse">
                <path d="M 32 0 L 0 0 0 32" fill="none" stroke="white" strokeWidth="0.6" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#tradein-grid)" />
          </svg>
        </div>

        {/* Decorative blobs */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-white/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-rose-900/30 rounded-full blur-2xl -ml-16 -mb-16 pointer-events-none"></div>

        <div className="relative z-10 px-7 py-12 md:py-14 md:px-14 flex flex-col lg:flex-row lg:items-center justify-between gap-10">

          {/* Left */}
          <div className="space-y-5 max-w-xl">
            <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/15 border border-white/25 backdrop-blur-sm rounded-full text-xs font-bold tracking-widest uppercase">
              <RefreshCw size={12} />
              Trade-In Store
            </span>
            <h2 className="text-2xl md:text-4xl font-black leading-tight">
              Trade-in your old mobile<br className="hidden md:block" /> for a discount or cash!
            </h2>
            <p className="text-sm md:text-base text-rose-100 leading-relaxed">
              Exchange smartphones, tablets and smartwatches for instant value. Visit our technicians today for a free, no-obligation valuation.
            </p>

            {/* Perks */}
            <div className="flex flex-wrap gap-4 pt-1">
              {perks.map((p, i) => {
                const Icon = p.icon;
                return (
                  <div key={i} className="flex items-center gap-2 text-xs font-semibold text-rose-100">
                    <div className="w-7 h-7 rounded-full bg-white/15 flex items-center justify-center">
                      <Icon size={13} className="text-white" />
                    </div>
                    {p.text}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right CTA */}
          <div className="shrink-0 flex flex-col items-start lg:items-end gap-3">
            <a
              href="#"
              className="inline-flex items-center gap-2 px-7 py-3.5 bg-white text-rose-600 font-bold rounded-full text-sm shadow-xl hover:shadow-rose-300/40 hover:scale-[1.02] transition-all duration-200"
            >
              FIND OUT MORE <ArrowRight size={16} />
            </a>
            <p className="text-rose-200 text-xs font-medium">No appointment needed · Walk-ins welcome</p>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
