'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import Section from './Section';
import Image from 'next/image';

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    role: "Medical Director",
    content: "The billing service has transformed our practice's efficiency. We've seen a 40% reduction in claim processing time.",
    image: "/images/healthcare-team.jpg"
  },
  {
    id: 2,
    name: "Mark Thompson",
    role: "Practice Manager",
    content: "Outstanding service! Our revenue collection has improved significantly since we started working with them.",
    image: "/images/healthcare-finance.jpg"
  },
  {
    id: 3,
    name: "Dr. Michael Chen",
    role: "Pediatrician",
    content: "Their attention to detail and prompt support have made billing management effortless for our clinic.",
    image: "/images/medical-consultation.jpg"
  }
];

const TestimonialSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <Section className="bg-gradient-to-br from-gray-50 to-white dark:from-neutral-900 dark:to-neutral-800">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-neutral-900 dark:text-white"
          >
            What Our Clients Say
          </motion.h2>
          <p className="text-lg text-neutral-600 dark:text-neutral-300">
            Trusted by healthcare providers across the country
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative bg-white dark:bg-neutral-800 rounded-2xl shadow-lg dark:shadow-neutral-900/50 p-8 md:p-12 border border-neutral-100 dark:border-neutral-700"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-transparent rounded-2xl" />
              <div className="relative flex flex-col md:flex-row items-center gap-8">
                <div className="relative w-24 h-24 rounded-full overflow-hidden ring-4 ring-primary-500/20">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 text-center md:text-left">
                  <p className="text-neutral-700 dark:text-neutral-300 text-lg md:text-xl italic mb-6">
                    &ldquo;{testimonials[currentIndex].content}&rdquo;
                  </p>
                  <h3 className="font-semibold text-xl text-neutral-900 dark:text-white">
                    {testimonials[currentIndex].name}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center gap-4 mt-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-primary-500 text-white hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-500 transition-colors shadow-lg dark:shadow-primary-500/20"
              aria-label="Previous testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-primary-500 text-white hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-500 transition-colors shadow-lg dark:shadow-primary-500/20"
              aria-label="Next testimonial"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2.5 h-2.5 rounded-full transition-colors ${
                  index === currentIndex
                    ? 'bg-primary-500 dark:bg-primary-400'
                    : 'bg-neutral-300 dark:bg-neutral-600'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TestimonialSection;
