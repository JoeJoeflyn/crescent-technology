import { cn } from "@/lib/utils";
import Image from "next/image";

const services = [
  {
    id: 1,
    title: "AI/IOT Custom Development",
    description: "Embedding machine learning, IoT, and automation into physical infrastructure, we enable digital transformation that is both scalable and locally relevant. Our team delivers custom-built systems with a focus on low-cost deployment, real-time analytics, and adaptive intelligence tailored to client needs.",
    image: "/IOT.png",
    alt: "IOT",
    reverse: false
  },
  {
    id: 2,
    title: "Artificial Intelligence - Generative AI",
    description: "Enhance AI capabilities with solutions in computer vision, object recognition, and generative AI, automating content generation and driving efficiencies across industries.",
    image: "/AI.png",
    alt: "AI",
    reverse: true
  },
  {
    id: 3,
    title: "Data Analytics - Insights",
    description: "Unlock the potential of your data with advanced analytics solutions. We integrate multiple data sources, transforming data into actionable insights using tools like Power BI, Oracle Analytics Cloud, and AWS Quick sight.",
    image: "/Analytics.png",
    alt: "Analytics",
    reverse: false
  },
  {
    id: 4,
    title: "IT Strategy & Consulting",
    description: "Streamline your business operations with our specialized cybersecurity, IT, and business process consulting. We ensure a smooth transition that minimizes downtime and maximizes efficiency.",
    image: "/consulting.png",
    alt: "consulting",
    reverse: true
  },
  {
    id: 5,
    title: "Cloud Migration & Modernization",
    description: "Specializing in AWS migration, we provide expert guidance through the complexities of moving applications, databases, and entire IT infrastructures to leading cloud platforms like AWS, Azure, GCP, and Oracle Cloud, ensuring smooth, secure, and scalable transitions.",
    image: "/cloud.png",
    alt: "consulting",
    reverse: false
  },
  {
    id: 6,
    title: "Machine Learning & Predictive Analytics",
    description: "Explore machine learning and predictive analytics, leveraging your data to build models that forecast trends and automate decision-making processes.",
    image: "/machine.png",
    alt: "machine",
    reverse: true
  },
  {
    id: 7,
    title: "Custom Application & Mobile App Development",
    description: "Delivering tailored software solutions, we focus on custom application and mobile app development for iOS and Android, ensuring superb user experience and performance.",
    image: "/development.png",
    alt: "development",
    reverse: false
  }
];

export default function Service() {
  return (
    <div className="py-20 mx-auto w-full max-w-7xl px-4 space-y-16">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Our Services
        </h1>
        <p className="text-lg text-primary">
          At Crescent Technology, we offer a comprehensive range of digital
          solutions designed to meet the evolving needs of businesses. Our
          expertise spans across various domains, ensuring that we deliver
          transformative results that drive your success.
        </p>
      </div>

      <div className="space-y-16">
        {services.map((service) => (
          <div
            key={service.id}
            className={cn("grid md:grid-cols-2 gap-8 items-center", {
              "md:[&>*:first-child]:order-2 md:[&>*:last-child]:order-1":
                service.reverse,
            })}
          >
            <div
              className={cn("flex", {
                "justify-start": service.reverse,
                "justify-end": !service.reverse,
              })}
            >
              <div
                className={cn("rounded-lg", {
                  "bg-primary": !service.reverse,
                  "bg-royal-blue": service.reverse,
                })}
              >
                <Image
                  src={service.image}
                  alt={service.alt}
                  width={300}
                  height={300}
                  className="rounded-lg"
                />
              </div>
            </div>
            <div
              className={cn("space-y-4", {
                "text-right": service.reverse,
              })}
            >
              <h2 className="text-2xl font-bold text-primary">
                {service.title}
              </h2>
              <p className="text-primary">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}