'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import PerformanceGraph from '@/components/PerformanceGraph';

export default function Home() {
  const features = [
    {
      title: "98% Clean Claim Rate",
      description: "Our advanced billing system ensures high first-pass acceptance rates.",
      icon: "✓"
    },
    {
      title: "45% Faster Payments",
      description: "Accelerated revenue cycle with optimized billing processes.",
      icon: "⚡"
    },
    {
      title: "24/7 Support",
      description: "Round-the-clock assistance for all your billing needs.",
      icon: "🔄"
    }
  ];

  const testimonials = [
    {
      quote: "Our revenue increased by 35% within the first three months.",
      author: "Dr. Sarah Johnson",
      role: "Medical Director",
      practice: "Family Care Clinic"
    },
    {
      quote: "The team's expertise has been invaluable to our practice growth.",
      author: "Dr. Michael Chen",
      role: "Owner",
      practice: "Advanced Medical Center"
    },
    {
      quote: "Billing processes are now seamless and efficient.",
      author: "Dr. Emily Rodriguez",
      role: "Practice Manager",
      practice: "Wellness Medical Group"
    }
  ];

  const stats = [
    { value: "$2.5M+", label: "Revenue Collected" },
    { value: "15k+", label: "Claims Processed" },
    { value: "98%", label: "Clean Claim Rate" },
    { value: "50+", label: "Healthcare Providers" }
  ];

  return (
    <main className="bg-blue-50 dark:bg-slate-800">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/hero-bg.jpg"
            alt="Medical Billing Hero"
            fill
            className="object-cover"
            sizes="100vw"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/80 via-blue-900/70 to-blue-900/90 dark:from-slate-900/90 dark:via-slate-900/80 dark:to-slate-900/95 mix-blend-multiply" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white dark:text-blue-100 mb-6">
              <span className="block">Streamline Your</span>
              <span className="block mt-2 bg-gradient-to-r from-blue-200 to-blue-400 dark:from-blue-300 dark:to-blue-500 bg-clip-text text-transparent">
                Medical Billing
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-blue-100 dark:text-blue-200 max-w-3xl mx-auto mb-8 leading-relaxed">
              Maximize revenue and reduce administrative burden with our comprehensive medical billing solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/contact"
                  className="inline-block px-8 py-4 rounded-xl bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 
                           dark:hover:bg-primary-700 text-white font-semibold shadow-lg shadow-primary-500/25 
                           dark:shadow-primary-900/50 transition-all duration-300"
                >
                  Get Started
                </Link>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href="/services"
                  className="inline-block px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white 
                           font-semibold backdrop-blur-sm border border-white/20 transition-all duration-300"
                >
                  Learn More
                </Link>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative bg-blue-50 dark:bg-slate-800">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent dark:from-slate-700/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative p-6 rounded-2xl backdrop-blur-lg bg-white/80 dark:bg-slate-700/80 border border-blue-200/50 dark:border-slate-600/30 shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-slate-600/5 rounded-2xl" />
                <div className="relative">
                  <div className="text-4xl font-bold text-slate-800 dark:text-blue-200 mb-2">{stat.value}</div>
                  <div className="text-slate-800 dark:text-blue-200">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 relative bg-blue-50 dark:bg-slate-800">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent dark:from-slate-700/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-800 dark:text-blue-200 mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-slate-800 dark:text-blue-200">
              Industry-leading solutions for your medical billing needs
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative p-6 rounded-2xl backdrop-blur-lg bg-white/80 dark:bg-slate-700/80 border border-blue-200/50 dark:border-slate-600/30 shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-slate-600/5 rounded-2xl" />
                <div className="relative">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-blue-200 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-slate-800 dark:text-blue-200">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Graphs */}
      <section className="py-24 relative bg-blue-50 dark:bg-slate-800">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent dark:from-slate-700/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-800 dark:text-blue-200 mb-4">
              Performance Metrics
            </h2>
            <p className="text-lg text-slate-800 dark:text-blue-200">
              Track your success with our comprehensive analytics
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-6 rounded-2xl backdrop-blur-lg bg-white/80 dark:bg-slate-700/80 border border-blue-200/50 dark:border-slate-600/30 shadow-xl"
            >
              <h3 className="text-xl font-semibold text-slate-800 dark:text-blue-200 mb-4">Revenue Growth</h3>
              <PerformanceGraph type="revenue" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-6 rounded-2xl backdrop-blur-lg bg-white/80 dark:bg-slate-700/80 border border-blue-200/50 dark:border-slate-600/30 shadow-xl"
            >
              <h3 className="text-xl font-semibold text-slate-800 dark:text-blue-200 mb-4">Claims Performance</h3>
              <PerformanceGraph type="claims" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative bg-blue-50 dark:bg-slate-800">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent dark:from-slate-700/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-800 dark:text-blue-200 mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-slate-800 dark:text-blue-200">
              Success stories from healthcare providers
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="relative p-6 rounded-2xl backdrop-blur-lg bg-white/80 dark:bg-slate-700/80 border border-blue-200/50 dark:border-slate-600/30 shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-slate-600/5 rounded-2xl" />
                <div className="relative">
                  <p className="text-lg text-slate-800 dark:text-blue-200 mb-4">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-slate-800 dark:text-blue-200">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-slate-800/80 dark:text-blue-200/80">
                      {testimonial.role} at {testimonial.practice}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative bg-blue-50 dark:bg-slate-800">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent dark:from-slate-700/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-slate-800 dark:text-blue-200 mb-4">
              Ready to Optimize Your Medical Billing?
            </h2>
            <p className="text-lg text-slate-800 dark:text-blue-200 mb-8">
              Join hundreds of healthcare providers who trust us with their billing needs
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 rounded-xl bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 text-white font-semibold shadow-lg shadow-primary-500/25 dark:shadow-primary-900/50 transition-colors"
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
