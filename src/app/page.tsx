import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import TradeInBanner from '@/components/sections/TradeInBanner';
import FeaturedProducts from '@/components/sections/FeaturedProducts';
import TrustedService from '@/components/sections/TrustedService';
import FeaturesGrid from '@/components/sections/FeaturesGrid';
import Testimonials from '@/components/sections/Testimonials';
import CTABanner from '@/components/sections/CTABanner';
import Showroom from '@/components/sections/Showroom';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="flex-grow">
        <Hero />

        {/* Banner - White */}
        <div className="bg-white">
          <TradeInBanner />
        </div>

        {/* Featured Products - Slate Tint */}
        <div className="bg-slate-50/80">
          <FeaturedProducts />
        </div>

        {/* Trusted Service - White */}
        <div className="bg-white">
          <TrustedService />
        </div>

        {/* Features - Blue Tint */}
        <div className="bg-blue-50/20">
          <FeaturesGrid />
        </div>

        {/* Testimonials - White */}
        <div className="bg-white">
          <Testimonials />
        </div>

        {/* Trade-In / CTA - Slate Tint */}
        <div className="bg-slate-50/50 py-12">
          <CTABanner />
        </div>

        {/* Showroom - Transparent */}
        <div className="bg-transparent">
          <Showroom />
        </div>
      </main>
      <Footer />
    </>
  );
}
