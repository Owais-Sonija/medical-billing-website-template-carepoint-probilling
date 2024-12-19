'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import Card from './Card';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: string;
}

const ServiceCard = ({ title, description, icon }: ServiceCardProps) => {
  const MotionDiv = motion.div;

  return (
    <Card className="p-6 shadow-soft">
      <MotionDiv
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-col items-center text-center">
          <div className="w-16 h-16 bg-primary-50 dark:bg-primary-900/20 rounded-full flex items-center justify-center mb-4">
            <span className="text-3xl">{icon}</span>
          </div>
          <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-100 mb-2">{title}</h3>
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
