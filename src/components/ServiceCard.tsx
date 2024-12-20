'use client';

import { motion } from 'framer-motion';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard = ({ icon, title, description }: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative p-8 rounded-2xl backdrop-blur-lg bg-white/30 dark:bg-neutral-800/30 border border-white/20 dark:border-neutral-700/30 shadow-xl hover:shadow-2xl transition-shadow"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent rounded-2xl" />
      <div className="relative">
        <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/20 rounded-xl flex items-center justify-center mb-6">
          <span className="text-2xl">{icon}</span>
        </div>
        <h3 className="text-xl font-semibold text-neutral-900 dark:text-white mb-3">
          {title}
        </h3>
        <p className="text-neutral-600 dark:text-neutral-300">
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default ServiceCard;
