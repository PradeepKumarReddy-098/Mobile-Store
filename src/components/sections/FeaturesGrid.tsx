'use client';

import { motion } from 'framer-motion';
import { Award, ShieldCheck, Box, Zap, Clock, ThumbsUp } from 'lucide-react';

const features = [
  {
    icon: Award,
    color: 'text-blue-600',
    bg: 'bg-blue-50',
    border: 'border-blue-100',
    glow: 'shadow-blue-500/10',
    title: 'Certified Technicians',
    description: 'Expertly trained and certified to all major manufacturer standards.',
    stat: '50+ Experts'
  },
  {
    icon: ShieldCheck,
    color: 'text-emerald-600',
    bg: 'bg-emerald-50',
    border: 'border-emerald-100',
    glow: 'shadow-emerald-500/10',
    title: '2-Year Warranty',
    description: 'Industry-leading coverage on every repair — zero questions asked.',
    stat: '100% Covered'
  },
  {
    icon: Box,
    color: 'text-indigo-600',
    bg: 'bg-indigo-50',
    border: 'border-indigo-100',
    glow: 'shadow-indigo-500/10',
    title: 'Genuine Apple Parts',
    description: 'We use only genuine Apple-certified parts for every single repair.',
    stat: 'OEM Only'
  },
  {
    icon: Zap,
    color: 'text-amber-600',
    bg: 'bg-amber-50',
    border: 'border-amber-100',
    glow: 'shadow-amber-500/10',
    title: 'Instant Valuation',
    description: 'Get immediate store credit or cash for your old device on the spot.',
    stat: 'Best Rates'
  },
  {
    icon: Clock,
    color: 'text-rose-600',
    bg: 'bg-rose-50',
    border: 'border-rose-100',
    glow: 'shadow-rose-500/10',
    title: 'Fast Turnaround',
    description: 'Most repairs completed while you wait — less than 60 minutes.',
    stat: '< 60 Mins'
  },
  {
    icon: ThumbsUp,
    color: 'text-purple-600',
    bg: 'bg-purple-50',
    border: 'border-purple-100',
    glow: 'shadow-purple-500/10',
    title: 'Price Match',
    description: 'We guarantee the best local price and will match any competitor.',
    stat: 'Best Price'
  }
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' as const } }
};

export default function FeaturesGrid() {
  return (
    <section className="py-10 bg-transparent relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/50 rounded-full blur-3xl -ml-48 -mb-48"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase text-[var(--color-primary)] bg-blue-50 border border-blue-100 rounded-full">
            Why Us
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 mb-4">
            Why Choose T-Mobile Shop?
          </h2>
          <p className="text-slate-500 text-base leading-relaxed">
            We combine premium value with expert technical service to provide an unmatched experience every time.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, idx) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={idx}
                variants={item}
                className={`group relative bg-white rounded-2xl p-7 border ${feature.border} shadow-sm hover:shadow-xl ${feature.glow} hover:-translate-y-1.5 transition-all duration-300 overflow-hidden`}
              >
                {/* Card top accent */}
                <div className={`absolute top-0 left-0 h-1 w-full ${feature.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>

                <div className="flex items-start justify-between mb-5">
                  <div className={`w-13 h-13 w-12 h-12 rounded-2xl ${feature.bg} border ${feature.border} flex items-center justify-center shrink-0`}>
                    <Icon className={`w-6 h-6 ${feature.color}`} />
                  </div>
                  <span className={`text-xs font-bold px-2.5 py-1 rounded-full ${feature.bg} ${feature.color} border ${feature.border}`}>
                    {feature.stat}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
