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

export default function Home() {
  const services = [
    {
      icon: '💰',
      title: 'Insurance Billing',
      description: 'Expert handling of insurance claims and billing processes for healthcare providers.',
    },
    {
      icon: '📊',
      title: 'Revenue Management',
      description: 'Optimize your revenue cycle with our comprehensive management solutions.',
    },
    {
      icon: '📱',
      title: 'Digital Solutions',
      description: 'Modern digital tools to streamline your medical billing operations.',
    },
  ];

  const features = [
    {
      icon: <FiCheckCircle className="w-6 h-6" />,
      title: 'Accurate Billing',
      description: '99.9% accuracy in medical billing processes',
    },
    {
      icon: <FiDollarSign className="w-6 h-6" />,
      title: 'Cost Effective',
      description: 'Reduce operational costs by up to 40%',
    },
    {
      icon: <FiClock className="w-6 h-6" />,
      title: 'Fast Processing',
      description: '48-hour turnaround time for claims',
    },
    {
      icon: <FiShield className="w-6 h-6" />,
      title: 'HIPAA Compliant',
      description: 'Secure and compliant billing processes',
    },
  ];

  const stats = [
    { number: '98%', label: 'Claims Acceptance Rate' },
    { number: '40%', label: 'Cost Reduction' },
    { number: '24h', label: 'Average Response Time' },
    { number: '15k+', label: 'Healthcare Providers' },
  ];

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <Section className="bg-gradient-to-br from-primary-50 via-white to-secondary-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <Container className="relative">
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/medical-professional.jpg"
              alt="Medical professional"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary-900/95 to-primary-800/80" />
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <Heading level={1} color="light" className="mb-6">
              Streamline Your Medical Billing Process
            </Heading>
            <p className="text-xl text-white/90 mb-8">
              Professional medical billing services that help healthcare providers maximize revenue
              and reduce administrative burden.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg">Get Started</Button>
              <Button variant="outline" size="lg" className="text-white border-white hover:bg-white/10">
                Learn More
              </Button>
            </div>
          </motion.div>
        </Container>
      </Section>

      {/* Stats Section */}
      <StatsSection />

      {/* Services Section */}
      <Section className="bg-white relative">
        <div className="absolute inset-0 bg-dots-pattern opacity-5" />
        <Container>
          <div className="text-center mb-16">
            <Heading level={2} align="center" withAccent>
              Our Services
            </Heading>
            <p className="text-lg text-neutral-600 mt-4">
              Comprehensive medical billing solutions tailored to your needs
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <ServiceCard {...service} />
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Features Section */}
      <Section color="white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Heading level={2} withAccent>
                Why Choose Our Medical Billing Services?
              </Heading>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                {features.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Card className="p-6" hover={false}>
                      <div className="text-primary-500 mb-4">{feature.icon}</div>
                      <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-neutral-600">{feature.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative h-[600px] rounded-lg overflow-hidden shadow-2xl"
            >
              <Image
                src="/images/medical-billing-desk.jpg"
                alt="Medical billing professional at work"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary-900/20 to-transparent" />
            </motion.div>
          </div>
        </Container>
      </Section>

      {/* Testimonials Section */}
      <TestimonialSection />

      {/* CTA Section */}
      <Section className="bg-primary-900 text-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Streamline Your Medical Billing?</h2>
            <p className="text-lg text-primary-100 mb-8">Join hundreds of satisfied healthcare providers who trust our services</p>
            <Button
              variant="secondary"
              size="lg"
              className="group"
            >
              Get Started Today
              <FiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </motion.div>
        </Container>
      </Section>
    </main>
  );
}
