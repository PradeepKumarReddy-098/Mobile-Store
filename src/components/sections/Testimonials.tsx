'use client';

import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    quote: "The service was phenomenal. My iPhone screen was fixed in less than an hour. Highly recommend for anyone needing fast, quality repairs!",
    author: "Marcus Stephens",
    role: "Business Owner",
    date: "A day ago",
    rating: 5,
    gradient: "from-blue-500 to-indigo-600",
    initials: "MS"
  },
  {
    quote: "Traded in my old S22 for a new S24 Ultra. The valuation was higher than expected and the whole process was seamless. Great shop!",
    author: "Olivia Larson",
    role: "Tech Enthusiast",
    date: "2 days ago",
    rating: 5,
    gradient: "from-rose-500 to-pink-600",
    initials: "OL"
  },
  {
    quote: "My MacBook had a liquid spill and the team here fixed it perfectly. The 2-year warranty gave me real peace of mind. Will be back!",
    author: "David Wright",
    role: "Designer",
    date: "1 week ago",
    rating: 5,
    gradient: "from-indigo-500 to-purple-600",
    initials: "DW"
  }
];

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } }
};

const item = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' as const } }
};

export default function Testimonials() {
  return (
    <section className="py-10 bg-transparent relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-72 bg-gradient-to-b from-slate-50 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase text-amber-600 bg-amber-50 border border-amber-100 rounded-full">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-slate-500 leading-relaxed">
            Join thousands of satisfied customers who trust us with their most important devices.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              variants={item}
              className="relative bg-white rounded-3xl p-7 border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col"
            >
              {/* Quote icon */}
              <div className={`w-10 h-10 rounded-2xl bg-gradient-to-br ${t.gradient} flex items-center justify-center mb-5 shadow-lg`}>
                <Quote size={18} className="text-white" fill="white" />
              </div>

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, i) => (
                  <Star key={i} size={15} className="text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote text */}
              <p className="text-slate-600 leading-relaxed mb-6 flex-1 text-sm">
                "{t.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100 mt-auto">
                <div className={`w-11 h-11 rounded-full bg-gradient-to-br ${t.gradient} flex items-center justify-center text-white font-bold text-sm shadow-md`}>
                  {t.initials}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{t.author}</h4>
                  <p className="text-xs text-slate-400">{t.role} · {t.date}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Summary stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-8 md:gap-16 mt-16 pt-12 border-t border-slate-100"
        >
          {[
            { value: '5,000+', label: 'Happy Customers', color: 'text-blue-600' },
            { value: '4.9★', label: 'Average Rating', color: 'text-amber-500' },
            { value: '98%', label: 'Satisfaction Rate', color: 'text-emerald-500' },
            { value: '< 60 min', label: 'Avg. Repair Time', color: 'text-rose-500' },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className={`text-2xl md:text-3xl font-black mb-1 ${stat.color}`}>{stat.value}</div>
              <div className="text-xs font-medium text-slate-500 uppercase tracking-wide">{stat.label}</div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
