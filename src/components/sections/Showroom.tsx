'use client';

import { motion } from 'framer-motion';
import { MapPin, Clock, Phone, ExternalLink } from 'lucide-react';

const hours = [
  { day: 'Monday – Friday', time: '08:00 – 18:00', open: true },
  { day: 'Saturday', time: '10:00 – 15:00', open: true },
  { day: 'Sunday', time: 'Closed', open: false },
];

const contactInfo = [
  { icon: Phone, label: 'Phone', value: '(123) 456-7890' },
  { icon: MapPin, label: 'Address', value: 'Ranjeet Tower, Dilsukhnagar, Hyderabad 500060' },
];

export default function Showroom() {
  return (
    <section className="bg-transparent relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl -mr-48 -mb-48"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-14"
        >
          <span className="inline-block px-4 py-1.5 mb-4 text-xs font-bold tracking-widest uppercase text-[var(--color-primary)] bg-blue-50 border border-blue-100 rounded-full">
            Find Us
          </span>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-slate-900">
            Visit Our Showroom
          </h2>
          <p className="mt-3 text-slate-500 max-w-xl mx-auto text-sm md:text-base">
            Certified technicians available for walk-in consultations and same-day repairs.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-8 items-stretch">

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="w-full lg:w-[60%]"
          >
            <div className="relative w-full h-full min-h-[360px] md:min-h-[440px] bg-slate-200 rounded-[2rem] overflow-hidden shadow-xl shadow-slate-200/60 border border-slate-200/80">
              <iframe
                title="Google Maps Location"
                src="https://maps.google.com/maps?q=16-11-740/9/7/C/3+Ranjeet+Tower,+Gaddiannaram,+Dilsukhnagar,+Hyderabad,+Telangana+500060&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>

              {/* Floating card on map */}
              <div className="absolute bottom-5 left-5 right-5 md:right-auto md:max-w-xs bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl flex items-center gap-3 border border-white z-10">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[var(--color-primary)] to-blue-700 flex items-center justify-center shrink-0 shadow-md shadow-blue-500/30">
                  <MapPin size={18} className="text-white" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm leading-snug">T-Mobile Shop & Apple Store</h4>
                  <p className="text-[11px] text-slate-500 leading-snug mt-0.5">Ranjeet Tower, Dilsukhnagar, Hyderabad</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Info Panel */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15 }}
            className="w-full lg:w-[40%] flex flex-col gap-5"
          >

            {/* Opening Hours Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm flex-1">
              <div className="flex items-center gap-2 mb-5">
                <div className="w-8 h-8 rounded-xl bg-blue-50 flex items-center justify-center">
                  <Clock size={16} className="text-[var(--color-primary)]" />
                </div>
                <h3 className="font-bold text-slate-900">Opening Hours</h3>
              </div>

              <div className="space-y-3">
                {hours.map((h, i) => (
                  <div key={i} className={`flex justify-between items-center py-3 ${i < hours.length - 1 ? 'border-b border-slate-100' : ''}`}>
                    <span className="text-sm text-slate-600 font-medium">{h.day}</span>
                    <span className={`text-sm font-bold ${h.open ? 'text-slate-900' : 'text-rose-500'}`}>
                      {h.time}
                    </span>
                  </div>
                ))}
              </div>

              {/* Today's status pill */}
              <div className="mt-5 flex items-center gap-2">
                <span className="flex h-2.5 w-2.5">
                  <span className="animate-ping absolute h-2.5 w-2.5 rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
                </span>
                <span className="text-xs font-semibold text-emerald-600">Open Now</span>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm">
              {contactInfo.map((c, i) => {
                const Icon = c.icon;
                return (
                  <div key={i} className={`flex items-start gap-3 ${i < contactInfo.length - 1 ? 'mb-4 pb-4 border-b border-slate-100' : ''}`}>
                    <div className="w-8 h-8 rounded-xl bg-slate-50 flex items-center justify-center shrink-0">
                      <Icon size={15} className="text-slate-500" />
                    </div>
                    <div>
                      <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-0.5">{c.label}</p>
                      <p className="text-sm text-slate-700 font-medium leading-snug">{c.value}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Directions Button */}
            <a
              href="https://maps.app.goo.gl/h4KcH9RBHNx2ECrZ6?g_st=iw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-4 bg-gradient-to-r from-[var(--color-primary)] to-blue-700 text-white rounded-2xl font-bold hover:opacity-90 transition-opacity shadow-lg shadow-blue-500/25 text-sm"
            >
              <MapPin size={16} />
              GET DIRECTIONS
              <ExternalLink size={14} className="opacity-70" />
            </a>

          </motion.div>
        </div>
      </div>
    </section>
  );
}
