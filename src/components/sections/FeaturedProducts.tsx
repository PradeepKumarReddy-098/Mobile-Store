'use client';

import { useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowLeft, ShoppingCart, Star } from 'lucide-react';

const products = [
  {
    id: 1,
    badge: 'NEW 2025',
    badgeColor: 'bg-blue-500',
    name: 'iPhone 17 Pro Max',
    category: 'Smartphones',
    description: 'Next-gen titanium powerhouse with A19 chip.',
    price: '₹1,34,900',
    originalPrice: '₹1,49,900',
    rating: 4.9,
    reviews: 128,
    image: '/images/iphone-17-pro-max.png',
    bgGradient: 'from-[#0f172a] to-[#1e3a5f]',
    accentColor: 'bg-blue-500/15',
  },
  {
    id: 2,
    badge: 'HOT',
    badgeColor: 'bg-violet-500',
    name: 'Galaxy S26 Ultra',
    category: 'Smartphones',
    description: 'AI-powered photography meets S Pen precision.',
    price: '₹1,24,999',
    originalPrice: '₹1,39,999',
    rating: 4.8,
    reviews: 94,
    image: '/images/galaxy-s26-ultra.png',
    bgGradient: 'from-[#12002f] to-[#1a0a3d]',
    accentColor: 'bg-violet-500/15',
  },
  {
    id: 3,
    badge: 'POPULAR',
    badgeColor: 'bg-slate-500',
    name: 'AirPods Pro',
    category: 'Audio',
    description: 'Active noise cancellation. Spatial audio. All day.',
    price: '₹24,999',
    originalPrice: '₹29,900',
    rating: 4.9,
    reviews: 312,
    image: '/images/airpods-pro.png',
    bgGradient: 'from-[#1a1a1a] to-[#2d2d2d]',
    accentColor: 'bg-slate-400/10',
  },
  {
    id: 4,
    badge: 'ESSENTIAL',
    badgeColor: 'bg-amber-500',
    name: 'iPhone Fast Charger',
    category: 'Accessories',
    description: '30W USB-C charger with braided cable.',
    price: '₹2,499',
    originalPrice: '₹3,499',
    rating: 4.7,
    reviews: 215,
    image: '/images/iphone-charger.png',
    bgGradient: 'from-[#1c1917] to-[#292524]',
    accentColor: 'bg-amber-500/10',
  },
  {
    id: 5,
    badge: 'TRENDING',
    badgeColor: 'bg-emerald-500',
    name: 'Premium Back Covers',
    category: 'Protection',
    description: 'Military-grade protection with style.',
    price: '₹799',
    originalPrice: '₹1,299',
    rating: 4.6,
    reviews: 480,
    image: '/images/phone-back-cover.png',
    bgGradient: 'from-[#0f2417] to-[#1a3a26]',
    accentColor: 'bg-emerald-500/10',
  },
  {
    id: 6,
    badge: 'MUST HAVE',
    badgeColor: 'bg-rose-500',
    name: 'Tempered Glass',
    category: 'Protection',
    description: '9H hardness, full-glue oleophobic screen guard.',
    price: '₹299',
    originalPrice: '₹599',
    rating: 4.5,
    reviews: 760,
    image: '/images/tempered-glass.png',
    bgGradient: 'from-[#1f0a10] to-[#2d1018]',
    accentColor: 'bg-rose-500/10',
  },
];

export default function FeaturedProducts() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIdx, setActiveIdx] = useState(0);

  const scroll = (dir: 'left' | 'right') => {
    const el = scrollRef.current;
    if (!el) return;
    const cardWidth = el.querySelector('div')?.offsetWidth ?? 300;
    const gap = 20;
    const amount = (cardWidth + gap) * (dir === 'right' ? 1 : -1);
    el.scrollBy({ left: amount, behavior: 'smooth' });

    setActiveIdx((prev) =>
      dir === 'right'
        ? Math.min(prev + 1, products.length - 1)
        : Math.max(prev - 1, 0)
    );
  };

  return (
    <section className="py-10 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-2"
        >
          <div>
            <span className="inline-block px-3 py-1 mb-3 text-xs font-bold tracking-widest uppercase text-[var(--color-primary)] bg-blue-50 border border-blue-100 rounded-full">
              Flagship Devices & Accessories
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-slate-900">Featured Products</h2>
            <p className="text-sm md:text-base text-slate-500 mt-1">
              Latest tech and must-have accessories — all in one place.
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* View All Products link */}
            <a
              href="#"
              className="hidden sm:inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full border border-[var(--color-primary)] text-[var(--color-primary)] text-sm font-semibold hover:bg-[var(--color-primary)] hover:text-white transition-all duration-200 group"
            >
              View All Products
              <ArrowRight size={15} className="group-hover:translate-x-0.5 transition-transform" />
            </a>

            {/* Arrow nav buttons - Desktop Only */}
            <button
              onClick={() => scroll('left')}
              aria-label="Scroll left"
              className="hidden lg:flex w-10 h-10 rounded-full border border-slate-200 items-center justify-center text-slate-500 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:bg-blue-50 transition-all"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              onClick={() => scroll('right')}
              aria-label="Scroll right"
              className="hidden lg:flex w-10 h-10 rounded-full border border-slate-200 items-center justify-center text-slate-500 hover:border-[var(--color-primary)] hover:text-[var(--color-primary)] hover:bg-blue-50 transition-all"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>

        {/* Mobile view all link */}
        <div className="flex sm:hidden justify-end mb-4">
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[var(--color-primary)] hover:underline"
          >
            View All Products <ArrowRight size={14} />
          </a>
        </div>

        {/* Scrollable cards row */}
        <div
          ref={scrollRef}
          className="flex overflow-x-auto pb-4 gap-5 no-scrollbar snap-x snap-mandatory"
          style={{ scrollSnapType: 'x mandatory' }}
        >
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="snap-start shrink-0 w-[260px] sm:w-[290px] rounded-3xl overflow-hidden border border-slate-100 bg-white shadow-md hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 group cursor-pointer flex flex-col"
            >
              {/* Image Area */}
              <div className={`relative h-56 w-full bg-gradient-to-br ${product.bgGradient} flex items-center justify-center overflow-hidden`}>
                {/* Badge */}
                <span className={`absolute top-3 left-3 z-10 ${product.badgeColor} text-white text-[10px] font-black px-2.5 py-1 rounded-full tracking-wider uppercase`}>
                  {product.badge}
                </span>

                {/* Product image */}
                <div className="relative w-[75%] h-[85%] group-hover:scale-105 transition-transform duration-700 ease-out">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    sizes="(max-width: 768px) 200px, 240px"
                    className="object-contain drop-shadow-2xl"
                  />
                </div>

                {/* Ambient glow */}
                <div className={`absolute bottom-0 inset-x-0 h-24 ${product.accentColor} blur-2xl`}></div>
              </div>

              {/* Card Info */}
              <div className="p-5 flex flex-col flex-1">
                <p className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{product.category}</p>
                <h3 className="text-base font-bold text-slate-900 leading-snug mb-1">{product.name}</h3>
                <p className="text-xs text-slate-500 mb-3 leading-relaxed flex-1">{product.description}</p>

                {/* Rating */}
                <div className="flex items-center gap-1.5 mb-4">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star
                        key={s}
                        size={11}
                        className={s <= Math.round(product.rating) ? 'text-amber-400 fill-amber-400' : 'text-slate-200 fill-slate-200'}
                      />
                    ))}
                  </div>
                  <span className="text-[11px] font-semibold text-slate-600">{product.rating}</span>
                  <span className="text-[11px] text-slate-400">({product.reviews})</span>
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-lg font-black text-slate-900">{product.price}</span>
                    <span className="ml-2 text-xs text-slate-400 line-through">{product.originalPrice}</span>
                  </div>
                  <button
                    aria-label={`Add ${product.name} to cart`}
                    className="w-9 h-9 rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-[var(--color-primary)] transition-colors duration-200 shadow-md"
                  >
                    <ShoppingCart size={15} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {products.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to product ${i + 1}`}
              onClick={() => {
                const el = scrollRef.current;
                if (!el) return;
                const cardWidth = (el.querySelector('div') as HTMLElement)?.offsetWidth ?? 300;
                el.scrollTo({ left: i * (cardWidth + 20), behavior: 'smooth' });
                setActiveIdx(i);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${activeIdx === i ? 'w-6 bg-[var(--color-primary)]' : 'w-2 bg-slate-300'}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
