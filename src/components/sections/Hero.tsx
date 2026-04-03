'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Shield, Zap, CheckCircle2 } from 'lucide-react';
import { Button } from '../ui/Button';

const badges = [
  { icon: <Star size={13} className="text-amber-500 fill-amber-500" />, text: '4.9 Rating' },
  { icon: <Shield size={13} className="text-emerald-500" />, text: '2-Year Warranty' },
  { icon: <Zap size={13} className="text-blue-500" />, text: 'Same-Day Repair' },
];

const mobileStats = [
  { value: '10K+', label: 'Repairs Done' },
  { value: '4.9★', label: 'Avg Rating' },
  { value: '2 Yrs', label: 'Warranty' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#eef2ff] via-white to-[#f0f4ff]">

      {/* Background ambient blobs */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-blue-200/30 blur-3xl -mr-40 -mt-40 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-indigo-200/25 blur-3xl -ml-32 -mb-32 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-0 lg:gap-8">

          {/* ── LEFT: Text ─────────────────────────────────── */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="w-full lg:w-1/2 pt-28 pb-6 lg:pt-24 lg:pb-16 text-center lg:text-left space-y-5"
          >
            {/* Trust badges */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="flex flex-wrap items-center justify-center lg:justify-start gap-2"
            >
              {badges.map((b, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-slate-200/80 rounded-full text-xs font-semibold text-slate-600 shadow-sm"
                >
                  {b.icon} {b.text}
                </span>
              ))}
            </motion.div>

            {/* Heading */}
            <h1 className="text-[2.6rem] sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-black tracking-tight text-slate-900 leading-[1.06]">
              Your Hub for{' '}
              <span className="relative inline-block">
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] via-blue-500 to-indigo-600">
                  Premium Tech
                </span>
                <svg
                  className="absolute -bottom-1 left-0 w-full"
                  viewBox="0 0 300 6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                >
                  <path
                    d="M0 5 Q75 0 150 4 Q225 8 300 3"
                    stroke="url(#ug)"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                  <defs>
                    <linearGradient id="ug" x1="0" y1="0" x2="300" y2="0" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#0055ff" />
                      <stop offset="1" stopColor="#6366f1" />
                    </linearGradient>
                  </defs>
                </svg>
              </span>
              {' '}&{' '}
              <br />
              Expert Repairs
            </h1>

            {/* Description */}
            <p className="text-base md:text-lg text-slate-500 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              Experience the latest from Apple and beyond. Professional multi-brand
              repairs with our signature 2-year peace of mind warranty. Walk in, walk out fixed.
            </p>

            {/* Perks */}
            <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-2">
              {['Certified Technicians', 'Genuine OEM Parts', 'No Fix, No Fee'].map((p, i) => (
                <div key={i} className="flex items-center gap-1.5 text-sm text-slate-600 font-medium">
                  <CheckCircle2 size={15} className="text-emerald-500 shrink-0" />
                  {p}
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
              <Button
                size="lg"
                className="w-full sm:w-auto bg-gradient-to-r from-[var(--color-primary)] to-blue-700 rounded-full font-bold shadow-xl shadow-blue-500/30 hover:shadow-blue-500/40 gap-2"
              >
                SHOP NOW <ArrowRight size={17} />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto rounded-full border-slate-300 text-slate-700 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:bg-blue-50"
              >
                BOOK A REPAIR
              </Button>
            </div>

            {/* Mobile stat strip */}
            <div className="flex lg:hidden items-center justify-center gap-0 bg-white border border-slate-100 rounded-2xl shadow-sm overflow-hidden mt-2">
              {mobileStats.map((s, i) => (
                <div
                  key={i}
                  className={`flex-1 text-center py-3.5 ${i < mobileStats.length - 1 ? 'border-r border-slate-100' : ''}`}
                >
                  <p className="text-base font-black text-slate-900">{s.value}</p>
                  <p className="text-[10px] text-slate-500 font-medium mt-0.5">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Social proof (desktop only) */}
            <p className="hidden lg:block text-xs text-slate-400 font-medium pt-1">
              Trusted by <span className="text-slate-700 font-bold">5,000+</span> customers in Hyderabad ·{' '}
              <span className="text-emerald-600 font-bold">Open Now</span>
            </p>
          </motion.div>

          {/* ── RIGHT: Device showcase card ────────────────── */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9, delay: 0.2, ease: 'easeOut' }}
            className="w-full lg:w-1/2 flex items-center justify-center pb-10 lg:pt-24 lg:pb-16"
          >
            {/* Premium dark card */}
            <div className="relative w-full max-w-sm sm:max-w-md mx-auto lg:mx-0">
              <div className="relative bg-gradient-to-br from-[#0d1226] via-[#101730] to-[#050b1a] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-900/40 border border-white/5">

                {/* Inner top reflection */}
                <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />

                {/* Corner glows */}
                <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-blue-600/15 blur-3xl -mr-16 -mt-16 pointer-events-none" />
                <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-indigo-600/20 blur-2xl -ml-12 -mb-12 pointer-events-none" />

                {/* Devices image */}
                <motion.div
                  animate={{ y: [0, -8, 0] }}
                  transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
                  className="relative px-3 pt-5 pb-3"
                >
                  <Image
                    src="/images/hero-devices-dark.png"
                    alt="Premium Apple Devices - iPhone, MacBook, AirPods, iPad"
                    width={480}
                    height={340}
                    sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 480px"
                    className="w-full h-auto object-contain"
                    priority
                  />
                </motion.div>

                {/* Bottom info strip inside card */}
                <div className="bg-white/5 border-t border-white/10 px-6 py-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span className="text-white/70 text-xs font-semibold">Available in-store</span>
                  </div>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={12} className="text-amber-400 fill-amber-400" />
                    ))}
                    <span className="text-white/60 text-xs ml-1">4.9</span>
                  </div>
                </div>
              </div>

              {/* Floating cards — desktop only */}
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="hidden lg:flex absolute -left-12 top-1/8 bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3 items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-emerald-100 flex items-center justify-center shrink-0">
                  <Shield size={18} className="text-emerald-600" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-medium">Warranty</div>
                  <div className="text-sm font-black text-slate-900">2 Years</div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="hidden lg:flex absolute -right-10 bottom-1/6 bg-white rounded-2xl shadow-xl border border-slate-100 px-4 py-3 items-center gap-3"
              >
                <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center shrink-0">
                  <Star size={18} className="text-amber-500 fill-amber-500" />
                </div>
                <div>
                  <div className="text-[11px] text-slate-400 font-medium">Rating</div>
                  <div className="text-sm font-black text-slate-900">4.9 / 5.0</div>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
