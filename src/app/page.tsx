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
    <main className="bg-primary-950 dark:bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/medical-billing-hero.jpg"
            alt="Medical Billing Hero"
            fill
            className="object-cover opacity-20 dark:opacity-10"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-600/90 to-primary-800/90 dark:from-primary-900/90 dark:to-primary-950/90 mix-blend-multiply" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-4xl sm:text-6xl font-bold text-white mb-6">
              Streamline Your Medical Billing
            </h1>
            <p className="text-xl sm:text-2xl text-primary-50 max-w-3xl mx-auto mb-8">
              Maximize revenue and reduce administrative burden with our comprehensive medical billing solutions
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-xl bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 text-white font-semibold shadow-lg shadow-primary-500/25 dark:shadow-primary-900/50 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 rounded-xl bg-white/10 hover:bg-white/20 text-white font-semibold backdrop-blur-sm transition-colors"
              >
                Learn More
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 relative bg-primary-900 dark:bg-neutral-950">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800/20 to-transparent dark:from-primary-900/10" />
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
                className="relative p-6 rounded-2xl backdrop-blur-lg bg-primary-800/80 dark:bg-neutral-900/80 border border-primary-700/20 dark:border-neutral-800/30 shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent rounded-2xl" />
                <div className="relative">
                  <div className="text-4xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-primary-200 dark:text-primary-300">{stat.label}</div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-24 relative bg-primary-950 dark:bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-transparent dark:from-primary-950/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Why Choose Us
            </h2>
            <p className="text-lg text-primary-200 dark:text-primary-300">
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
                className="relative p-6 rounded-2xl backdrop-blur-lg bg-primary-800/80 dark:bg-neutral-900/80 border border-primary-700/20 dark:border-neutral-800/30 shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent rounded-2xl" />
                <div className="relative">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-primary-200 dark:text-primary-300">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Performance Graphs */}
      <section className="py-24 relative bg-primary-900 dark:bg-neutral-950">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800/20 to-transparent dark:from-primary-900/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Performance Metrics
            </h2>
            <p className="text-lg text-primary-200 dark:text-primary-300">
              Track your success with our comprehensive analytics
            </p>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-6 rounded-2xl backdrop-blur-lg bg-primary-800/80 dark:bg-neutral-900/80 border border-primary-700/20 dark:border-neutral-800/30 shadow-xl"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Revenue Growth</h3>
              <PerformanceGraph type="revenue" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-6 rounded-2xl backdrop-blur-lg bg-primary-800/80 dark:bg-neutral-900/80 border border-primary-700/20 dark:border-neutral-800/30 shadow-xl"
            >
              <h3 className="text-xl font-semibold text-white mb-4">Claims Performance</h3>
              <PerformanceGraph type="claims" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 relative bg-primary-950 dark:bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-transparent dark:from-primary-950/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              What Our Clients Say
            </h2>
            <p className="text-lg text-primary-200 dark:text-primary-300">
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
                className="relative p-6 rounded-2xl backdrop-blur-lg bg-primary-800/80 dark:bg-neutral-900/80 border border-primary-700/20 dark:border-neutral-800/30 shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent rounded-2xl" />
                <div className="relative">
                  <p className="text-lg text-white mb-4">"{testimonial.quote}"</p>
                  <div>
                    <p className="font-semibold text-primary-200 dark:text-primary-300">
                      {testimonial.author}
                    </p>
                    <p className="text-sm text-primary-300 dark:text-primary-400">
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
      <section className="py-24 relative bg-primary-900 dark:bg-neutral-950">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800/20 to-transparent dark:from-primary-900/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
            <h2 className="text-3xl font-bold text-white mb-4">
              Ready to Optimize Your Medical Billing?
            </h2>
            <p className="text-lg text-primary-200 dark:text-primary-300 mb-8">
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
