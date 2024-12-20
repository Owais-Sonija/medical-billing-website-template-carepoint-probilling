'use client';

import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  features: string[];
  icon: string;
}

const ServiceCard = ({ title, description, features, icon }: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="h-full relative p-8 rounded-2xl backdrop-blur-lg bg-white/80 dark:bg-slate-700/80 
                 border border-blue-200/50 dark:border-slate-600/30 shadow-xl group 
                 hover:shadow-2xl transition-all duration-300"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-transparent dark:from-slate-600/5 rounded-2xl" />
      <div className="relative space-y-6">
        <div className="flex items-center space-x-3">
          <span className="text-3xl">{icon}</span>
          <h3 className="text-2xl font-semibold text-slate-800 dark:text-blue-200">
            {title}
          </h3>
        </div>
        <p className="text-slate-700 dark:text-blue-100 text-lg">
          {description}
        </p>
        <ul className="space-y-4">
          {features.map((feature, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className="flex items-start space-x-3"
            >
              <span className="text-blue-500 dark:text-blue-400 mt-1 flex-shrink-0">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <span className="text-slate-700 dark:text-blue-100">{feature}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
