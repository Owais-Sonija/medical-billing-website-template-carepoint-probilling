'use client';

import Image from "next/image";
import { motion } from "framer-motion";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 }
};

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function About() {
  return (
    <main className="bg-gradient-to-br from-gray-50 to-white dark:from-neutral-900 dark:to-neutral-800">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/medical-professional.jpg"
            alt="Medical professional"
            fill
            className="object-cover opacity-20 dark:opacity-10"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-primary-600/90 to-primary-800/90 dark:from-primary-900/90 dark:to-primary-950/90 mix-blend-multiply" />
        <motion.div 
          initial="initial"
          animate="animate"
          variants={fadeIn}
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-white">
            About CarePoint Billing
          </h1>
          <p className="text-xl sm:text-2xl text-primary-50 max-w-3xl mx-auto">
            Your Trusted Partner in Medical Billing Solutions
          </p>
        </motion.div>
      </section>

      {/* Core Values Section */}
      <section className="py-24">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="relative p-8 rounded-2xl backdrop-blur-lg bg-white/30 dark:bg-neutral-800/30 border border-white/20 dark:border-neutral-700/30 shadow-xl hover:shadow-2xl transition-shadow"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent rounded-2xl" />
                <div className="relative">
                  <div className="text-5xl mb-6">{value.icon}</div>
                  <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-4">
                    {value.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-300">
                    {value.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Company Story */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent dark:from-primary-950/20 dark:to-transparent" />
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div variants={fadeIn} className="space-y-6">
              <h2 className="text-4xl font-bold text-neutral-900 dark:text-white">
                Our Story
              </h2>
              <div className="space-y-4">
                <p className="text-lg text-neutral-600 dark:text-neutral-300">
                  At CarePoint Billing, we understand the complexities of medical billing and the challenges healthcare providers face in managing their revenue cycle. Founded with a mission to simplify healthcare billing, we've built our reputation on delivering reliable, efficient, and compliant billing services.
                </p>
                <p className="text-lg text-neutral-600 dark:text-neutral-300">
                  Our team of certified billing specialists combines years of industry experience with cutting-edge technology to ensure optimal results for our clients. We take pride in our role as a trusted partner to healthcare providers, helping them focus on what matters most – patient care.
                </p>
              </div>
            </motion.div>
            <motion.div 
              variants={fadeIn}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent z-10" />
              <Image
                src="/images/medical-records.jpg"
                alt="Medical billing professionals at work"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Team Section */}
      <section className="py-24 relative">
        <motion.div 
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={stagger}
          className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        >
          <motion.div variants={fadeIn} className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-4xl font-bold text-neutral-900 dark:text-white mb-6">
              Our Expert Team
            </h2>
            <p className="text-lg text-neutral-600 dark:text-neutral-300">
              Meet the dedicated professionals who make excellence in medical billing possible
            </p>
          </motion.div>
          <motion.div 
            variants={fadeIn}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent z-10" />
            <Image
              src="/images/medical-team-meeting.jpg"
              alt="Our medical billing team"
              fill
              className="object-cover"
            />
          </motion.div>
        </motion.div>
      </section>
    </main>
  );
}

const values = [
  {
    title: "Integrity",
    description: "We uphold the highest ethical standards in all our operations, ensuring transparency and honesty in every interaction.",
    icon: "⚖️"
  },
  {
    title: "Excellence",
    description: "Our commitment to excellence drives us to deliver superior service and optimal results for our clients.",
    icon: "🌟"
  },
  {
    title: "Innovation",
    description: "We leverage cutting-edge technology and best practices to streamline the billing process and maximize efficiency.",
    icon: "💡"
  }
];
