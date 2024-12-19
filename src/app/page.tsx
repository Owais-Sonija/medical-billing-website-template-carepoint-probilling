import Image from "next/image";
import Link from "next/link";
import ServiceCard from "@/components/ServiceCard";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative bg-blue-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight mb-4">
              Streamline Your Medical Billing
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-blue-100 mb-8">
              Professional medical billing services that save you time and maximize your revenue
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-blue-700 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors"
            >
              Get Started
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
            Why Choose Us?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <ServiceCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Optimize Your Medical Billing?
          </h2>
          <p className="text-xl mb-8">
            Contact us today for a free consultation
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-blue-600 px-8 py-3 rounded-md font-semibold hover:bg-blue-50 transition-colors"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}

const features = [
  {
    title: "Expert Team",
    description: "Our certified billing specialists ensure accurate and timely processing of all claims.",
    icon: "👥"
  },
  {
    title: "Maximum Revenue",
    description: "Optimize your revenue cycle with our proven billing strategies and expertise.",
    icon: "💰"
  },
  {
    title: "Compliance Assured",
    description: "Stay compliant with all healthcare regulations and billing requirements.",
    icon: "✓"
  }
];
