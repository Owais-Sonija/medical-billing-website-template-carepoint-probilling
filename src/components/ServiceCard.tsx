'use client';

import { motion } from 'framer-motion';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
  features?: string[];
}

const ServiceCard = ({ title, description, icon, features }: ServiceCardProps) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="relative p-6 rounded-2xl backdrop-blur-lg bg-primary-800/80 dark:bg-neutral-900/80 border border-primary-700/20 dark:border-neutral-800/30 shadow-xl hover:shadow-2xl transition-all"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent rounded-2xl" />
      <div className="relative">
        <div className="flex items-center space-x-4 mb-4">
          <div className="text-4xl">{icon}</div>
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
        <p className="text-primary-200 dark:text-primary-300 mb-6">{description}</p>
        {features && features.length > 0 && (
          <ul className="space-y-2">
            {features.map((feature, index) => (
              <motion.li
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="flex items-center text-primary-100 dark:text-primary-200"
              >
                <span className="mr-2">•</span>
                {feature}
              </motion.li>
            ))}
          </ul>
        )}
      </div>
    </motion.div>
  );
};

export default ServiceCard;
