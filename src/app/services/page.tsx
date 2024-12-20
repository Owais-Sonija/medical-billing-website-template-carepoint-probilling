'use client';

import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: 'Medical Billing',
      description: 'Comprehensive medical billing services to maximize your revenue',
      features: [
        'Claims Processing & Submission',
        'Payment Posting & Reconciliation',
        'Denial Management',
        'Patient Billing'
      ]
    },
    {
      title: 'Revenue Cycle Management',
      description: 'End-to-end revenue cycle management solutions',
      features: [
        'Eligibility Verification',
        'AR Management',
        'Financial Reporting',
        'Revenue Analytics'
      ]
    },
    {
      title: 'Coding Services',
      description: 'Expert medical coding for accurate reimbursement',
      features: [
        'ICD-10 Coding',
        'CPT/HCPCS Coding',
        'Coding Audits',
        'Documentation Review'
      ]
    },
    {
      title: 'Practice Management',
      description: 'Streamline your practice operations',
      features: [
        'Appointment Scheduling',
        'Patient Registration',
        'Insurance Verification',
        'Practice Analytics'
      ]
    },
    {
      title: 'Credentialing Services',
      description: 'Comprehensive provider credentialing solutions',
      features: [
        'Provider Enrollment',
        'CAQH Management',
        'License Renewals',
        'Payer Enrollment'
      ]
    },
    {
      title: 'Analytics & Reporting',
      description: 'Data-driven insights for your practice',
      features: [
        'Financial Analytics',
        'Performance Metrics',
        'Custom Reports',
        'Trend Analysis'
      ]
    }
  ];

  const stats = [
    { value: '98%', label: 'Clean Claim Rate' },
    { value: '45%', label: 'Faster Payments' },
    { value: '35%', label: 'Revenue Increase' },
    { value: '24/7', label: 'Support Available' }
  ];

  const process = [
    {
      title: 'Submit',
      description: 'We process and submit claims electronically within 24 hours of service.',
      icon: "1"
    },
    {
      title: 'Track',
      description: 'Monitor claim status and handle any issues proactively.',
      icon: "2"
    },
    {
      title: 'Resolve',
      description: 'Quick resolution of denials and efficient payment posting.',
      icon: "3"
    }
  ];

  return (
    <main className="min-h-screen bg-blue-50 dark:bg-slate-800">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent dark:from-slate-700/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold text-slate-800 dark:text-blue-200 sm:text-5xl md:text-6xl"
            >
              Our Services
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-xl text-slate-800 dark:text-blue-200 max-w-3xl mx-auto"
            >
              Comprehensive medical billing solutions tailored to your practice
            </motion.p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent dark:from-slate-700/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  features={service.features}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent dark:from-slate-700/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-6 rounded-2xl backdrop-blur-lg bg-white/80 dark:bg-slate-700/80 border border-blue-200/50 dark:border-slate-600/30 shadow-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-slate-600/5 rounded-2xl" />
                <div className="relative text-center">
                  <div className="text-3xl font-bold text-slate-800 dark:text-blue-200 mb-2">
                    {stat.value}
                  </div>
                  <div className="text-slate-800 dark:text-blue-200">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Advanced Claims Processing Section */}
      <section className="relative py-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent dark:from-slate-700/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl group"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 to-transparent z-10" />
              <Image
                src="/images/doctor-tablet.jpg"
                alt="Doctor using tablet for medical billing"
                fill
                className="object-cover transform group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-slate-800 dark:text-blue-200">
                Advanced Claims Processing
              </h2>
              <p className="text-slate-800 dark:text-blue-200">
                Our advanced claims processing system combines cutting-edge technology with expert
                human oversight to ensure maximum accuracy and efficiency. We handle everything from
                initial submission to follow-up and appeals.
              </p>
              <ul className="space-y-4 text-slate-800 dark:text-blue-200">
                {[
                  "Real-time claim status tracking",
                  "Automated error detection",
                  "Fast electronic submission",
                  "Denial management and appeals"
                ].map((item, index) => (
                  <motion.li 
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <span className="text-blue-500 dark:text-blue-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative bg-blue-100 dark:bg-slate-700">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-200/20 to-transparent dark:from-slate-600/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-slate-800 dark:text-blue-200 mb-12"
          >
            Our Process
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-8 rounded-2xl backdrop-blur-lg bg-white/30 dark:bg-slate-700/30 border border-blue-200/50 dark:border-slate-600/30 shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-slate-600/5 rounded-2xl" />
                <div className="relative text-center">
                  <div className="w-16 h-16 bg-blue-100 dark:bg-slate-600/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-blue-600 dark:text-blue-400">{step.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-800 dark:text-blue-200 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-slate-800 dark:text-blue-200">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}
