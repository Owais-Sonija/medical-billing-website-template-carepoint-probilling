'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

const team = [
  {
    name: 'Dr. Sarah Johnson',
    role: 'CEO & Founder',
    image: '/images/team/sarah.jpg',
    bio: '20+ years of healthcare experience'
  },
  {
    name: 'Michael Chen',
    role: 'Head of Operations',
    image: '/images/team/michael.jpg',
    bio: 'Expert in healthcare operations'
  },
  {
    name: 'Emily Rodriguez',
    role: 'Billing Director',
    image: '/images/team/emily.jpg',
    bio: 'Certified billing specialist'
  }
];

export default function About() {
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
              About Us
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mt-4 text-xl text-slate-800 dark:text-blue-200 max-w-3xl mx-auto"
            >
              Dedicated to revolutionizing medical billing through expertise and innovation
            </motion.p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent dark:from-slate-700/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative rounded-2xl overflow-hidden h-[500px] shadow-2xl"
            >
              <Image
                src="/images/medical-team.jpg"
                alt="Medical Team"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative p-6 rounded-2xl backdrop-blur-lg bg-white/80 dark:bg-slate-700/80 border border-blue-200/50 dark:border-slate-600/30 shadow-xl">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-slate-600/5 rounded-2xl" />
                <div className="relative">
                  <h2 className="text-3xl font-bold text-slate-800 dark:text-blue-200 mb-6">Our Mission</h2>
                  <div className="space-y-4 text-slate-800 dark:text-blue-200">
                    <p>
                      At CarePoint ProBilling, we're committed to transforming healthcare billing through innovation,
                      expertise, and unwavering dedication to our clients' success.
                    </p>
                    <p>
                      Our mission is to simplify the complex world of medical billing, enabling healthcare providers
                      to focus on what matters most – patient care.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent dark:from-slate-700/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-slate-800 dark:text-blue-200">Our Leadership Team</h2>
            <p className="mt-4 text-xl text-slate-800 dark:text-blue-200">
              Meet the experts behind our success
            </p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative p-8 rounded-2xl backdrop-blur-lg bg-white/80 dark:bg-slate-700/80 border border-blue-200/50 dark:border-slate-600/30 shadow-xl group hover:shadow-2xl transition-all duration-300"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-slate-600/5 rounded-2xl" />
                <div className="relative">
                  <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white/20 shadow-xl group-hover:scale-105 transition-transform duration-300">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 33vw, 192px"
                    />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-800 dark:text-blue-200 mb-2">{member.name}</h3>
                  <p className="text-blue-600 dark:text-blue-400 font-medium mb-3">{member.role}</p>
                  <p className="text-slate-800 dark:text-blue-200">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
