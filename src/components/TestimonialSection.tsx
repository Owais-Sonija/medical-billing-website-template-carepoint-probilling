'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import Section from './Section';

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
    <Section className="bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4 py-16">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900"
        >
          What Our Clients Say
        </motion.h2>
        
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg p-8 md:p-12"
          >
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img
                src={testimonials[currentIndex].image}
                alt={testimonials[currentIndex].name}
                className="w-24 h-24 rounded-full object-cover"
              />
              <div className="flex-1">
                <p className="text-gray-700 text-lg italic mb-6">"{testimonials[currentIndex].content}"</p>
                <h3 className="font-semibold text-xl text-gray-900">{testimonials[currentIndex].name}</h3>
                <p className="text-primary-600">{testimonials[currentIndex].role}</p>
              </div>
            </div>
          </motion.div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="p-2 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <button
              onClick={nextTestimonial}
              className="p-2 rounded-full bg-primary-500 text-white hover:bg-primary-600 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default TestimonialSection;
