'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiCheckCircle, FiDollarSign, FiClock, FiShield } from 'react-icons/fi';
import Button from '@/components/Button';
import ServiceCard from '@/components/ServiceCard';
import Card from '@/components/Card';

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

  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/medical-professional.jpg"
            alt="Medical professional"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary-900/90 to-primary-800/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Streamline Your Medical Billing Process
            </h1>
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
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-neutral-900 mb-4"
            >
              Our Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-neutral-600"
            >
              Comprehensive medical billing solutions tailored to your needs
            </motion.p>
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
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-neutral-900 mb-6">
                Why Choose Our Medical Billing Services?
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
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
              className="relative h-[600px] rounded-lg overflow-hidden"
            >
              <Image
                src="/images/medical-billing-desk.jpg"
                alt="Medical billing professional at work"
                fill
                className="object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-primary-900">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/medical-team-meeting.jpg"
            alt="Medical team meeting"
            fill
            className="object-cover opacity-10"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Optimize Your Medical Billing?
            </h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Join thousands of healthcare providers who trust us with their medical billing needs.
            </p>
            <Link href="/contact">
              <Button size="lg" variant="secondary">
                Contact Us Today
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
