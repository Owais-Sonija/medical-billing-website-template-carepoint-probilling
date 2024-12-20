'use client';

import { motion, useInView } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import Section from './Section';

interface Stat {
  id: number;
  value: number;
  label: string;
  prefix?: string;
  suffix?: string;
}

interface CounterProps {
  value: number;
  prefix?: string;
  suffix?: string;
}

const stats: Stat[] = [
  {
    id: 1,
    value: 500,
    label: "Clients Served",
    prefix: "",
    suffix: "+"
  },
  {
    id: 2,
    value: 95,
    label: "Claims Success Rate",
    prefix: "",
    suffix: "%"
  },
  {
    id: 3,
    value: 25,
    label: "Years Experience",
    prefix: "",
    suffix: "+"
  },
  {
    id: 4,
    value: 1,
    label: "Million Claims Processed",
    prefix: "$",
    suffix: "M+"
  }
];

const Counter = ({ value, prefix = "", suffix = "" }: CounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref);

  useEffect(() => {
    if (isInView) {
      const duration = 2000; // 2 seconds
      const steps = 60;
      const stepValue = value / steps;
      let current = 0;
      
      const timer = setInterval(() => {
        current += stepValue;
        if (current >= value) {
          setCount(value);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [value, isInView]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-primary-500 dark:from-primary-400 dark:to-primary-300 text-transparent bg-clip-text">
      {prefix}{count}{suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <Section className="bg-gradient-to-br from-gray-50 to-white dark:from-neutral-900 dark:to-neutral-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
            Our Impact in Numbers
          </h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            Delivering exceptional results through expertise and dedication
          </p>
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ 
                scale: 1.05,
                transition: { duration: 0.2 }
              }}
              className="relative text-center p-8 rounded-2xl bg-white dark:bg-neutral-800 shadow-lg dark:shadow-neutral-900/50 border border-neutral-100 dark:border-neutral-700"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent rounded-2xl" />
              <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              <p className="mt-4 text-sm md:text-base font-medium text-neutral-600 dark:text-neutral-300">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default StatsSection;
