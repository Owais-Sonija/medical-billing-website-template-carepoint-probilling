'use client';

import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";
import { motion } from "framer-motion";

export default function Services() {
  return (
    <main className="bg-primary-950 dark:bg-black">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/healthcare-technology.jpg"
            alt="Healthcare technology"
            fill
            className="object-cover opacity-20 dark:opacity-10"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-600/90 to-primary-800/90 dark:from-primary-900/90 dark:to-primary-950/90 mix-blend-multiply" />
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">Our Services</h1>
            <p className="text-xl text-primary-50">
              Comprehensive Medical Billing Solutions for Healthcare Providers
            </p>
          </div>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  icon={service.icon}
                  features={service.features}
                />
              </motion.div>
            ))}
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

      {/* Featured Service */}
      <section className="py-24 relative bg-primary-900 dark:bg-neutral-950">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-800/20 to-transparent dark:from-primary-900/10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center"
          >
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent z-10" />
              <Image
                src="/images/doctor-tablet.jpg"
                alt="Doctor using tablet for medical billing"
                fill
                className="object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-neutral-900 dark:text-white">
                Advanced Claims Processing
              </h2>
              <p className="text-neutral-600 dark:text-neutral-300">
                Our advanced claims processing system combines cutting-edge technology with expert
                human oversight to ensure maximum accuracy and efficiency. We handle everything from
                initial submission to follow-up and appeals.
              </p>
              <ul className="space-y-4 text-neutral-600 dark:text-neutral-300">
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
                    <span className="text-primary-500 dark:text-primary-400">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 relative bg-primary-950 dark:bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 to-transparent dark:from-primary-950/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center text-neutral-900 dark:text-white mb-12"
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
                className="relative p-8 rounded-2xl backdrop-blur-lg bg-white/30 dark:bg-neutral-800/30 border border-white/20 dark:border-neutral-700/30 shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent rounded-2xl" />
                <div className="relative text-center">
                  <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl text-primary-600 dark:text-primary-400">{step.icon}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </main>
  );
}

const services = [
  {
    title: "Medical Billing",
    description: "Complete end-to-end medical billing services with 98% clean claim rate and faster reimbursements.",
    icon: "💼",
    features: [
      "Insurance verification and eligibility checks",
      "Claims submission and tracking",
      "Denial management and appeals",
      "Payment posting and reconciliation"
    ]
  },
  {
    title: "Revenue Cycle Management",
    description: "Comprehensive management of your revenue cycle from charge to payment.",
    icon: "💰",
    features: [
      "Charge capture optimization",
      "AR management and follow-up",
      "Performance analytics and reporting",
      "Revenue leakage prevention"
    ]
  },
  {
    title: "Coding Services",
    description: "Expert medical coding services ensuring accuracy and compliance with latest regulations.",
    icon: "📋",
    features: [
      "ICD-10 and CPT coding",
      "Coding audits and reviews",
      "Documentation improvement",
      "Compliance monitoring"
    ]
  },
  {
    title: "Practice Management",
    description: "Streamline your practice operations and improve efficiency with our comprehensive solutions.",
    icon: "🏥",
    features: [
      "Appointment scheduling",
      "Patient registration",
      "Insurance verification",
      "Practice analytics"
    ]
  },
  {
    title: "Credentialing Services",
    description: "Professional provider credentialing and enrollment services for all major insurance payers.",
    icon: "✅",
    features: [
      "Provider enrollment",
      "CAQH maintenance",
      "Credential verification",
      "Expiration tracking"
    ]
  },
  {
    title: "Analytics & Reporting",
    description: "Data-driven insights and comprehensive reporting for informed decision-making.",
    icon: "📊",
    features: [
      "Financial performance metrics",
      "Claims analysis",
      "Provider productivity reports",
      "Custom dashboards"
    ]
  }
];

const stats = [
  { value: "98%", label: "Clean Claim Rate" },
  { value: "45%", label: "Faster Payments" },
  { value: "35%", label: "Revenue Increase" },
  { value: "24/7", label: "Support Available" }
];

const process = [
  {
    title: "Submit",
    description: "We process and submit claims electronically within 24 hours of service.",
    icon: "1"
  },
  {
    title: "Track",
    description: "Monitor claim status and handle any issues proactively.",
    icon: "2"
  },
  {
    title: "Resolve",
    description: "Quick resolution of denials and efficient payment posting.",
    icon: "3"
  }
];
