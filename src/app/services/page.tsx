import ServiceCard from "@/components/ServiceCard";

export default function Services() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

      {/* Process Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-blue-500 text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  {index + 1}
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
    description: "Expert handling of insurance claims with maximum accuracy and minimal rejections.",
    icon: "📝"
  },
  {
    title: "Revenue Cycle Management",
    description: "Comprehensive management of your revenue cycle from patient registration to payment collection.",
    icon: "💰"
  },
  {
    title: "Insurance Verification",
    description: "Thorough verification of patient insurance coverage and benefits.",
    icon: "✓"
  },
  {
    title: "Denial Management",
    description: "Efficient handling and resolution of claim denials to maximize reimbursement.",
    icon: "🔄"
  },
  {
    title: "Compliance Support",
    description: "Ensuring adherence to healthcare regulations and billing requirements.",
    icon: "⚖️"
  },
  {
    title: "Financial Reporting",
    description: "Detailed financial reports and analytics to track your practice's performance.",
    icon: "📊"
  }
];

const process = [
  {
    title: "Information Gathering",
    description: "Collect and verify patient and insurance information"
  },
  {
    title: "Claims Submission",
    description: "Process and submit claims with proper documentation"
  },
  {
    title: "Follow-up",
    description: "Track claims and handle any necessary follow-up"
  },
  {
    title: "Payment Posting",
    description: "Record and reconcile payments accurately"
  }
];
