'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  const scrollToServices = () => {
    const servicesSection = document.getElementById('services');
    servicesSection?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-bg.jpg"
          alt="Medical Billing Background"
          fill
          className="object-cover object-center"
          priority
          quality={100}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/70 via-neutral-900/50 to-neutral-900/80" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight">
            <span className="block">Streamline Your</span>
            <span className="block mt-2 bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">
              Medical Billing Process
            </span>
          </h1>

          {/* Subheading */}
          <p className="max-w-2xl mx-auto text-lg sm:text-xl text-neutral-200 leading-relaxed">
            Maximize your revenue and reduce administrative burden with our advanced medical billing solutions. Experience faster payments and fewer denials.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link
                href="/contact"
                className="inline-flex items-center px-8 py-3 rounded-xl bg-primary-500 text-white font-semibold 
                         transition-all duration-200 hover:bg-primary-600 hover:shadow-lg hover:shadow-primary-500/30"
              >
                Get Started
                <svg
                  className="ml-2 -mr-1 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </Link>
            </motion.div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToServices}
              className="inline-flex items-center px-8 py-3 rounded-xl bg-white/10 text-white font-semibold 
                       backdrop-blur-sm border border-white/20 transition-all duration-200 
                       hover:bg-white/20 hover:shadow-lg"
            >
              Learn More
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </motion.button>
          </div>

          {/* Stats or Trust Indicators */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 max-w-3xl mx-auto"
          >
            {[
              { number: '98%', label: 'Claims Acceptance Rate' },
              { number: '2x', label: 'Faster Payments' },
              { number: '24/7', label: 'Support Available' },
            ].map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl sm:text-4xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-sm sm:text-base text-neutral-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-white" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
