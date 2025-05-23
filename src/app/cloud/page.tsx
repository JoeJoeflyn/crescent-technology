import { CLOUD_SOLUTIONS } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Solutions",
};

export default function CloudPage() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 sm:py-24 lg:py-32">
      <div className="flex flex-col gap-6 mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-primary font-semibold">
          Cloud Solutions
        </h1>
        <p className="text-xl text-primary max-w-5xl">
          Crescent Technology specializes in seamless cloud migrations and
          scalable cloud infrastructure management, ensuring minimal downtime
          and maximum efficiency. Our expertise spans major platforms like
          Google Cloud Platform and Azure.
        </p>
      </div>

      <div className="text-primary grid grid-cols-1 sm:grid-cols-2 gap-6">
        {CLOUD_SOLUTIONS.map((solution, index) => {
          const Icon = solution.icon;
          return (
            <div
              key={index}
              className="rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 h-full flex flex-col"
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-2 bg-primary/10 rounded-lg">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h2 className="text-xl font-bold text-primary">
                  {solution.title}
                </h2>
              </div>
              <p className="text-gray-700">{solution.description}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
