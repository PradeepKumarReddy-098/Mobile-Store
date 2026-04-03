'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { ShieldCheck, Wrench, Clock, CheckCircle2 } from 'lucide-react';

const features = [
  {
    icon: ShieldCheck,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    title: '2-Year Warranty',
    description: 'Standard on all premium repairs. If something is not right, we fix it — no questions asked.',
  },
  {
    icon: Wrench,
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    title: 'All Major Brands',
    description: 'Apple, Samsung, Google, and more. Certified technicians using genuine OEM parts.',
  },
  {
    icon: Clock,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    title: 'Same-Day Turnaround',
    description: 'Most screen and battery replacements completed in under 2 hours while you wait.',
  },
];

const perks = ['Free diagnostics', 'No fix, no fee', 'Apple certified', 'Data protected'];

export default function TrustedService() {
  return (
    <section className="py-10 bg-transparent relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl -mr-36 -mt-36 pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-indigo-100/30 rounded-full blur-3xl -ml-36 -mb-36 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row gap-16 xl:gap-24 items-center">

          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="w-full lg:w-1/2 space-y-10"
          >
            <div>
              <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase text-[var(--color-primary)] bg-blue-50 border border-blue-100 rounded-full">
                Our Promise
              </span>
              <h2 className="text-3xl md:text-5xl font-black tracking-tight text-slate-900 leading-[1.1]">
                Trusted Service,{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-indigo-600">
                  Guaranteed.
                </span>
              </h2>
            </div>

            <div className="space-y-6">
              {features.map((f, idx) => {
                const Icon = f.icon;
                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex gap-5"
                  >
                    <div className={`shrink-0 w-12 h-12 rounded-2xl ${f.bg} flex items-center justify-center`}>
                      <Icon className={`w-6 h-6 ${f.color}`} />
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-slate-900 mb-1">{f.title}</h3>
                      <p className="text-sm text-slate-500 leading-relaxed">{f.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Perks */}
            <div className="grid grid-cols-2 gap-3 pt-2">
              {perks.map((perk, i) => (
                <div key={i} className="flex items-center gap-2 text-sm text-slate-600 font-medium">
                  <CheckCircle2 size={16} className="text-emerald-500 shrink-0" />
                  {perk}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: 'easeOut' }}
            className="w-full lg:w-1/2"
          >
            <div className="relative">
              {/* Main image */}
              <div className="rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/60 aspect-[4/3] w-full relative">
                <Image
                  src="/images/technician-repair.png"
                  alt="Expert Technician Repairing Device"
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover object-center"
                />
                {/* Dark overlay for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-slate-900/10 to-transparent"></div>
                {/* Top label */}
                <div className="absolute top-4 left-4 bg-white/10 backdrop-blur-sm border border-white/20 px-3 py-1.5 rounded-full">
                  <span className="text-white text-xs font-bold">🔧 Expert Tech Repairs</span>
                </div>
              </div>

              {/* Floating stat cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="absolute -bottom-5 -left-5 bg-white rounded-2xl shadow-xl border border-slate-100 p-4 flex items-center gap-3"
              >
                <div className="w-11 h-11 rounded-xl bg-emerald-100 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <p className="text-xs text-slate-500 font-medium">Repairs done</p>
                  <p className="text-lg font-black text-slate-900">10,000+</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.65, duration: 0.5 }}
                className="absolute -top-5 -right-5 bg-white rounded-2xl shadow-xl border border-slate-100 p-4"
              >
                <p className="text-xs text-slate-500 font-medium mb-1">Customer Rating</p>
                <div className="flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map(s => (
                    <svg key={s} className="w-4 h-4 text-amber-400 fill-amber-400" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
                  ))}
                  <span className="text-sm font-black text-slate-900 ml-1">4.9</span>
                </div>
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
