'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import Card from './Card';

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  const MotionDiv = motion.div;

  return (
    <Card className="p-6 shadow-soft group">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center text-center">
          <motion.div 
            className="w-16 h-16 bg-primary-50 dark:bg-primary-900/20 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
            whileHover={{ rotate: [0, -10, 10, -10, 0] }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-3xl text-primary-500 dark:text-primary-400">{icon}</span>
          </motion.div>
          <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors duration-300">
            {title}
          </h3>
          <p className="text-neutral-600 dark:text-neutral-400">{description}</p>
        </div>

        <div className="mt-4 w-full h-1 bg-primary-100 dark:bg-primary-900/20 rounded-full overflow-hidden">
          <MotionDiv
            className="h-full bg-primary-500 dark:bg-primary-400"
            initial={{ width: 0 }}
            whileInView={{ width: '100%' }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          />
        </div>
      </MotionDiv>
    </Card>
  );
};

export default ServiceCard;
