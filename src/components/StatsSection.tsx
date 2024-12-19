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
    <span ref={ref} className="text-4xl md:text-5xl font-bold text-primary-600">
      {prefix}{count}{suffix}
    </span>
  );
};

const StatsSection = () => {
  return (
    <Section className="bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12"
        >
          {stats.map((stat) => (
            <motion.div
              key={stat.id}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 rounded-lg bg-white shadow-lg"
            >
              <Counter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
              <p className="mt-2 text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </Section>
  );
};

export default StatsSection;
