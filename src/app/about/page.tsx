import Image from "next/image";

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">About MedBill Pro</h1>
            <p className="text-xl text-blue-100">
              Your Trusted Partner in Medical Billing Solutions
            </p>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-6">
                <div className="text-4xl text-blue-500 mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-800 mb-6">Our Story</h2>
              <p className="text-gray-600 mb-4">
                At MedBill Pro, we understand the complexities of medical billing and the challenges healthcare providers face in managing their revenue cycle. Founded with a mission to simplify healthcare billing, we've built our reputation on delivering reliable, efficient, and compliant billing services.
              </p>
              <p className="text-gray-600">
                Our team of certified billing specialists combines years of industry experience with cutting-edge technology to ensure optimal results for our clients. We take pride in our role as a trusted partner to healthcare providers, helping them focus on what matters most – patient care.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/placeholder-about.jpg"
                alt="Medical billing professionals at work"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

const values = [
  {
    title: "Integrity",
    description: "We uphold the highest ethical standards in all our operations, ensuring transparency and honesty in every interaction.",
    icon: "⚖️"
  },
  {
    title: "Excellence",
    description: "Our commitment to excellence drives us to deliver superior service and optimal results for our clients.",
    icon: "🌟"
  },
  {
    title: "Innovation",
    description: "We leverage cutting-edge technology and best practices to streamline the billing process and maximize efficiency.",
    icon: "💡"
  }
];
