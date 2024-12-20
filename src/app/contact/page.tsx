'use client';

import { motion } from "framer-motion";
import Image from "next/image";

export default function Contact() {
  const contactInfo = [
    {
      title: "Email Us",
      description: "Send us an email anytime",
      detail: "contact@medbill.com",
      icon: "📧"
    },
    {
      title: "Call Us",
      description: "Mon-Fri from 9am to 6pm EST",
      detail: "(555) 123-4567",
      icon: "📞"
    },
    {
      title: "Visit Us",
      description: "Come meet us in person",
      detail: "123 Medical Plaza, Suite 100, New York, NY",
      icon: "📍"
    }
  ];

  return (
    <main className="min-h-screen bg-blue-50 dark:bg-slate-800">
      {/* Hero Section */}
      <section className="relative py-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-100/50 to-transparent dark:from-slate-700/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold text-slate-800 dark:text-blue-200 sm:text-5xl md:text-6xl mb-6">
              Get in Touch
            </h1>
            <p className="text-xl text-slate-800 dark:text-blue-200 max-w-3xl mx-auto">
              We're here to help with all your medical billing needs
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="relative py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative p-8 rounded-2xl backdrop-blur-lg bg-white/80 dark:bg-slate-700/80 
                          border border-blue-200/50 dark:border-slate-600/30 shadow-xl 
                          hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-slate-600/5 rounded-2xl" />
                <div className="relative space-y-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-3xl">{info.icon}</span>
                    <h3 className="text-2xl font-semibold text-slate-800 dark:text-blue-200">
                      {info.title}
                    </h3>
                  </div>
                  <p className="text-slate-700 dark:text-blue-100">
                    {info.description}
                  </p>
                  <p className="text-lg font-medium text-blue-600 dark:text-blue-400">
                    {info.detail}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="relative py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative p-8 rounded-2xl backdrop-blur-lg bg-white/80 dark:bg-slate-700/80 
                      border border-blue-200/50 dark:border-slate-600/30 shadow-xl"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-slate-600/5 rounded-2xl" />
            <div className="relative">
              <h2 className="text-3xl font-bold text-slate-800 dark:text-blue-200 mb-8">
                Send us a Message
              </h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-slate-700 dark:text-blue-200 mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 rounded-xl border border-blue-200/50 dark:border-slate-600/30 
                               bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm
                               focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 
                               focus:border-transparent outline-none transition-all duration-200
                               text-slate-800 dark:text-blue-200"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-blue-200 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-xl border border-blue-200/50 dark:border-slate-600/30 
                               bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm
                               focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 
                               focus:border-transparent outline-none transition-all duration-200
                               text-slate-800 dark:text-blue-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-slate-700 dark:text-blue-200 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-xl border border-blue-200/50 dark:border-slate-600/30 
                             bg-white/50 dark:bg-slate-800/50 backdrop-blur-sm
                             focus:ring-2 focus:ring-blue-500 dark:focus:ring-blue-400 
                             focus:border-transparent outline-none transition-all duration-200
                             text-slate-800 dark:text-blue-200"
                    placeholder="Your message"
                  ></textarea>
                </div>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <button
                    type="submit"
                    className="w-full px-8 py-4 rounded-xl bg-primary-500 hover:bg-primary-600 
                             dark:bg-primary-600 dark:hover:bg-primary-700 text-white font-semibold 
                             shadow-lg shadow-primary-500/25 dark:shadow-primary-900/50 
                             transition-all duration-200"
                  >
                    Send Message
                  </button>
                </motion.div>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="relative h-[400px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900/10 to-transparent z-10" />
            <Image
              src="/images/map.jpg"
              alt="Office location map"
              fill
              className="object-cover"
              sizes="100vw"
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
