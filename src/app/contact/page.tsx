'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const contactInfo = [
    {
      icon: <FiMapPin className="w-6 h-6" />,
      title: 'Address',
      details: ['123 Healthcare Avenue', 'Suite 456', 'Medical City, MC 12345']
    },
    {
      icon: <FiPhone className="w-6 h-6" />,
      title: 'Phone',
      details: ['(555) 123-4567', 'Toll Free: 1-800-123-4567']
    },
    {
      icon: <FiMail className="w-6 h-6" />,
      title: 'Email',
      details: ['info@carepointprobilling.com', 'support@carepointprobilling.com']
    },
    {
      icon: <FiClock className="w-6 h-6" />,
      title: 'Business Hours',
      details: ['Monday - Friday: 9:00 AM - 6:00 PM', 'Saturday - Sunday: Closed']
    }
  ];

  return (
    <main className="bg-gradient-to-br from-gray-50 to-white dark:from-neutral-900 dark:to-neutral-800">
      {/* Hero Section */}
      <section className="relative min-h-[60vh] flex items-center">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/medical-office.jpg"
            alt="Medical office"
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
          className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
        >
          <h1 className="text-4xl sm:text-6xl font-bold mb-6 text-white">
            Contact Us
          </h1>
          <p className="text-xl sm:text-2xl text-primary-50 max-w-3xl mx-auto">
            Get in touch with our medical billing experts
          </p>
        </motion.div>
      </section>

      {/* Contact Form and Info */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent dark:from-primary-950/20 dark:to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative p-8 rounded-2xl backdrop-blur-lg bg-white/30 dark:bg-neutral-800/30 border border-white/20 dark:border-neutral-700/30 shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent rounded-2xl" />
              <div className="relative">
                <h2 className="text-3xl font-bold text-neutral-900 dark:text-white mb-8">
                  Send us a Message
                </h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-neutral-900 dark:text-white mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent dark:text-white backdrop-blur-sm transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-neutral-900 dark:text-white mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent dark:text-white backdrop-blur-sm transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-neutral-900 dark:text-white mb-2">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent dark:text-white backdrop-blur-sm transition-colors"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-neutral-900 dark:text-white mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-700 focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 focus:border-transparent dark:text-white backdrop-blur-sm transition-colors"
                      required
                    />
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    type="submit"
                    className="w-full px-8 py-4 rounded-xl bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 text-white font-semibold shadow-lg shadow-primary-500/25 dark:shadow-primary-900/50 transition-colors"
                  >
                    Send Message
                  </motion.button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="relative p-6 rounded-2xl backdrop-blur-lg bg-white/30 dark:bg-neutral-800/30 border border-white/20 dark:border-neutral-700/30 shadow-xl hover:shadow-2xl transition-shadow"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent rounded-2xl" />
                  <div className="relative flex items-start space-x-4">
                    <div className="flex-shrink-0 p-3 bg-primary-100 dark:bg-primary-900/20 rounded-xl">
                      <span className="text-primary-600 dark:text-primary-400">
                        {info.icon}
                      </span>
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-neutral-900 dark:text-white mb-2">
                        {info.title}
                      </h3>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-neutral-600 dark:text-neutral-300">
                            {detail}
                          </p>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
