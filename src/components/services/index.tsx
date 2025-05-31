import { SERVICES } from "@/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";

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
        {SERVICES.map((service) => (
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