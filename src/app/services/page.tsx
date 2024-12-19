import Image from "next/image";
import ServiceCard from "@/components/ServiceCard";

export default function Services() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-blue-700 text-white py-16">
        <div className="absolute inset-0 z-0 overflow-hidden">
          <Image
            src="/images/healthcare-technology.jpg"
            alt="Healthcare technology"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Our Services</h1>
            <p className="text-xl text-blue-100">
              Comprehensive Medical Billing Solutions for Healthcare Providers
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Service */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/doctor-tablet.jpg"
                alt="Doctor using tablet for medical billing"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">
                Advanced Claims Processing
              </h2>
              <p className="text-gray-600 mb-4">
                Our advanced claims processing system combines cutting-edge technology with expert
                human oversight to ensure maximum accuracy and efficiency. We handle everything from
                initial submission to follow-up and appeals.
              </p>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span>
                  Real-time claim status tracking
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span>
                  Automated error detection
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span>
                  Fast electronic submission
                </li>
                <li className="flex items-center">
                  <span className="text-blue-500 mr-2">✓</span>
                  Denial management and appeals
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl text-blue-600">{step.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {step.title}
                </h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

const services = [
  {
    title: "Claims Processing",
    description: "Efficient and accurate claims submission with real-time tracking and follow-up.",
    icon: "📋"
  },
  {
    title: "Revenue Cycle Management",
    description: "Comprehensive management of your revenue cycle from charge capture to payment posting.",
    icon: "💰"
  },
  {
    title: "Denial Management",
    description: "Expert handling of claim denials and appeals to maximize reimbursement.",
    icon: "🔄"
  },
  {
    title: "Compliance Support",
    description: "Stay compliant with healthcare regulations and billing requirements.",
    icon: "✓"
  },
  {
    title: "Patient Billing",
    description: "Professional handling of patient statements and payment collection.",
    icon: "👥"
  },
  {
    title: "Reporting & Analytics",
    description: "Detailed financial reports and analytics to track your practice's performance.",
    icon: "📊"
  }
];

const process = [
  {
    title: "Submit",
    description: "We process and submit claims electronically within 24 hours of service.",
    icon: "1"
  },
  {
    title: "Track",
    description: "Monitor claim status and handle any issues proactively.",
    icon: "2"
  },
  {
    title: "Resolve",
    description: "Quick resolution of denials and efficient payment posting.",
    icon: "3"
  }
];
