'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaYoutube, FaXTwitter } from 'react-icons/fa6';
import { Button } from '../ui/Button';

export default function Footer() {
  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.6, staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <footer className="bg-slate-900 text-slate-300 py-16 mt-20 relative overflow-hidden">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
      >
        
        {/* Brand Block */}
        <motion.div variants={itemVariants} className="space-y-6">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-[var(--color-primary)] flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/30">
              T
            </div>
            <span className="font-bold text-xl tracking-tight text-white">
              T-Mobile Shop
            </span>
          </Link>
          <p className="text-sm leading-relaxed text-slate-400">
            A 100% "No-Hassle Return Exchange" guarantee handles any issues. 2-year warranty on premium repairs.
          </p>
          <div className="flex gap-4">
            <a href="#" aria-label="Instagram" className="w-10 h-10 rounded-full bg-slate-800 flex flex-col items-center justify-center hover:bg-[#E4405F] transition-all hover:scale-110"><FaInstagram size={18} className="text-white" /></a>
            <a href="#" aria-label="Facebook" className="w-10 h-10 rounded-full bg-slate-800 flex flex-col items-center justify-center hover:bg-[#1877F2] transition-all hover:scale-110"><FaFacebookF size={18} className="text-white" /></a>
            <a href="#" aria-label="YouTube" className="w-10 h-10 rounded-full bg-slate-800 flex flex-col items-center justify-center hover:bg-[#FF0000] transition-all hover:scale-110"><FaYoutube size={18} className="text-white" /></a>
            <a href="#" aria-label="X (Twitter)" className="w-10 h-10 rounded-full bg-slate-800 flex flex-col items-center justify-center hover:bg-black transition-all hover:scale-110"><FaXTwitter size={18} className="text-white" /></a>
          </div>
        </motion.div>

        {/* Quick Links */}
        <motion.div variants={itemVariants}>
          <h3 className="text-white font-semibold mb-6">Quick Links</h3>
          <ul className="space-y-4 text-sm">
            <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">Home</Link></li>
            <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">Services</Link></li>
            <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">Products</Link></li>
            <li><Link href="#" className="hover:text-[var(--color-primary)] transition-colors">Bookings</Link></li>
          </ul>
        </motion.div>

        {/* Contact Us */}
        <motion.div variants={itemVariants}>
          <h3 className="text-white font-semibold mb-6">Contact</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex gap-3">
              <Phone size={18} className="shrink-0 text-[var(--color-primary)]" />
              <span>(123) 456-7890</span>
            </li>
            <li className="flex gap-3">
              <Phone size={18} className="shrink-0 text-[var(--color-primary)]" />
              <span>(987) 654-3210</span>
            </li>
            <li className="flex gap-3 break-all">
              <Mail size={18} className="shrink-0 text-[var(--color-primary)]" />
              <span>support@tmobileshop.com</span>
            </li>
          </ul>
        </motion.div>

        {/* Newsletter */}
        <motion.div variants={itemVariants}>
          <h3 className="text-white font-semibold mb-6">Free Updates</h3>
          <p className="text-sm text-slate-400 mb-4">Sign up to get our latest tech and repair offers.</p>
          <div className="flex flex-col gap-3">
            <input type="email" placeholder="Email Address" className="px-4 py-3 bg-slate-800 border-none rounded-md focus:ring-2 focus:ring-[var(--color-primary)] focus:outline-none text-white text-sm transition-shadow" />
            <Button variant="primary" className="w-full rounded-md py-3 text-sm">SUBSCRIBE</Button>
          </div>
        </motion.div>

      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 pt-8 border-t border-slate-800 text-center text-sm text-slate-500 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10"
      >
        <p>&copy; {new Date().getFullYear()} T-Mobile Shop. All rights reserved.</p>
        <div className="flex gap-4">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </motion.div>
      
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-900/10 rounded-full blur-3xl -mr-32 -mt-32 pointer-events-none"></div>
    </footer>
  );
}
