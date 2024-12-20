'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiDollarSign, FiClock, FiShield, FiArrowRight } from 'react-icons/fi';
import Button from '@/components/Button';
import ServiceCard from '@/components/ServiceCard';
import Card from '@/components/Card';
import Section from '@/components/Section';
import Container from '@/components/Container';
import Heading from '@/components/Heading';
import TestimonialSection from '@/components/TestimonialSection';
import StatsSection from '@/components/StatsSection';
import Hero from '@/components/Hero';

export default function Home() {
  const services = [
    {
      icon: '💰',
      title: 'Insurance Billing',
      description: 'Expert handling of insurance claims and billing processes for healthcare providers.',
    },
    {
      icon: '📋',
      title: 'Claims Processing',
      description: 'Efficient processing and tracking of medical claims for faster reimbursement.',
    },
    {
      icon: '🏥',
      title: 'Practice Management',
      description: 'Comprehensive solutions for managing your medical practice effectively.',
    },
    {
      icon: '📊',
      title: 'Revenue Analysis',
      description: 'Detailed analysis and reporting of your practice revenue and performance.',
    },
  ];

  return (
    <main className="flex min-h-screen flex-col">
      <Hero />
      
      {/* Services Section */}
      <Section id="services" className="bg-white dark:bg-neutral-900">
        <Container>
          <div className="text-center mb-12">
            <Heading>Our Services</Heading>
            <p className="mt-4 text-lg text-neutral-600 dark:text-neutral-300">
              Comprehensive medical billing solutions tailored to your practice
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
              />
            ))}
          </div>
        </Container>
      </Section>

      {/* Features Section */}
      <Section className="bg-neutral-50 dark:bg-neutral-800">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="space-y-6"
            >
              <Heading className="text-4xl font-bold">Why Choose Us?</Heading>
              <p className="text-lg text-neutral-600 dark:text-neutral-300">
                We deliver excellence in medical billing services with proven results and dedicated support.
              </p>
              <div className="space-y-6">
                {[
                  { 
                    icon: <FiCheckCircle className="w-6 h-6" />, 
                    title: 'High Acceptance Rate',
                    text: '98% first-pass claim acceptance rate' 
                  },
                  { 
                    icon: <FiDollarSign className="w-6 h-6" />, 
                    title: 'Revenue Optimization',
                    text: 'Maximize your revenue through expert billing' 
                  },
                  { 
                    icon: <FiClock className="w-6 h-6" />, 
                    title: 'Fast Processing',
                    text: '24-48 hour turnaround time on claims' 
                  },
                  { 
                    icon: <FiShield className="w-6 h-6" />, 
                    title: 'Secure & Compliant',
                    text: 'HIPAA compliant with advanced security' 
                  },
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-white dark:hover:bg-neutral-700/50 transition-colors"
                  >
                    <span className="text-primary-500 p-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
                      {feature.icon}
                    </span>
                    <div>
                      <h3 className="font-semibold text-lg text-neutral-900 dark:text-white">
                        {feature.title}
                      </h3>
                      <p className="text-neutral-600 dark:text-neutral-300">
                        {feature.text}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="pt-4">
                <Button variant="primary" size="lg" className="group ">
                  Learn More
                  <FiArrowRight className="inline ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-[500px] rounded-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-transparent z-10" />
              <Image
                src="/images/healthcare-technology.jpg"
                alt="Advanced Medical Billing Technology"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Stats Section */}
      <StatsSection />

      {/* Testimonials */}
      <TestimonialSection />

      {/* CTA Section */}
      <Section className="bg-primary-500">
        <Container>
          <div className="text-center text-white">
            <Heading className="text-white">Ready to Get Started?</Heading>
            <p className="mt-4 text-lg text-primary-100">
              Join thousands of healthcare providers who trust us with their medical billing
            </p>
            <div className="mt-8">
              <Button variant="outline" size="lg">
                Contact Us Today
                <FiArrowRight className="ml-2" />
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </main>
  );
}
