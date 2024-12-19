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
            >
              <Heading>Why Choose Us?</Heading>
              <div className="mt-6 space-y-4">
                {[
                  { icon: <FiCheckCircle />, text: 'High claim acceptance rate' },
                  { icon: <FiDollarSign />, text: 'Maximize your revenue' },
                  { icon: <FiClock />, text: 'Fast turnaround time' },
                  { icon: <FiShield />, text: 'Secure and compliant' },
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <span className="text-primary-500 text-xl">{feature.icon}</span>
                    <span className="text-neutral-700 dark:text-neutral-300">{feature.text}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <Button variant="primary" size="lg">
                  Learn More
                  <FiArrowRight className="ml-2" />
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="relative h-[400px] rounded-2xl overflow-hidden"
            >
              <Image
                src="/images/features.jpg"
                alt="Medical Billing Features"
                fill
                className="object-cover"
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
