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
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-slate-800 dark:to-slate-900">
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
            <p className="text-xl text-slate-600 dark:text-blue-200 max-w-3xl mx-auto">
              We're here to help with all your medical billing needs. Reach out to us through any of the channels below.
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
                className="group cursor-pointer"
              >
                <div className="h-full relative p-8 rounded-2xl backdrop-blur-lg bg-white/80 dark:bg-slate-800/80 
                            border border-blue-200/50 dark:border-slate-600/30 shadow-xl 
                            hover:shadow-2xl transition-all duration-300
                            hover:bg-gradient-to-br hover:from-blue-50 hover:to-white
                            dark:hover:from-slate-700 dark:hover:to-slate-800">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-slate-600/5 rounded-2xl" />
                  <div className="relative space-y-4">
                    <div className="flex items-center space-x-3">
                      <span className="text-4xl group-hover:scale-110 transition-transform duration-300">{info.icon}</span>
                      <h3 className="text-2xl font-semibold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-blue-200 dark:to-blue-400 bg-clip-text text-transparent">
                        {info.title}
                      </h3>
                    </div>
                    <p className="text-slate-600 dark:text-blue-100">
                      {info.description}
                    </p>
                    <p className="text-lg font-medium text-blue-600 dark:text-blue-400">
                      {info.detail}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative p-8 rounded-2xl backdrop-blur-lg bg-white/80 dark:bg-slate-800/80 
                        border border-blue-200/50 dark:border-slate-600/30 shadow-xl"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-slate-600/5 rounded-2xl" />
              <div className="relative">
                <h2 className="text-3xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 dark:from-blue-200 dark:to-blue-400 bg-clip-text text-transparent mb-8">
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
                      placeholder="How can we help you?"
                    ></textarea>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <button
                      type="submit"
                      className="w-full px-8 py-4 rounded-xl bg-gradient-to-r from-primary-500 to-primary-600
                               hover:from-primary-600 hover:to-primary-700
                               dark:from-primary-600 dark:to-primary-700
                               dark:hover:from-primary-700 dark:hover:to-primary-800 
                               text-white font-semibold shadow-lg 
                               shadow-primary-500/25 dark:shadow-primary-900/50 
                               transition-all duration-200"
                    >
                      Send Message
                    </button>
                  </motion.div>
                </form>
              </div>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="relative rounded-2xl overflow-hidden shadow-2xl h-full min-h-[500px]"
            >
              <div className="absolute inset-0">
                <Image
                  src="/images/map-bg.jpg"
                  alt="Office location map"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  quality={90}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-blue-900/40 to-blue-900/20" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-8">
                <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
                  <h3 className="text-2xl font-bold text-white mb-2">Our Office</h3>
                  <p className="text-white/90 mb-4">123 Medical Plaza, Suite 100<br />New York, NY 10001</p>
                  <div className="flex items-center text-white/80">
                    <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <span>Mon-Fri: 9:00 AM - 6:00 PM EST</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
