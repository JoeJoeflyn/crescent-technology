import { DT_SOLUTIONS } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digital Transformation",
};

export default function DigitalTransformation() {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 sm:py-24 lg:py-32">
      <div className="flex flex-col gap-6 mb-12">
        <h1 className="text-4xl sm:text-5xl md:text-6xl text-primary font-semibold">
          Digital Transformation
        </h1>
        <p className="text-xl text-primary max-w-5xl">
          Crescent Technology leads businesses into the future with
          comprehensive digital transformation strategies, combining IoT, AI,
          analytics, and consulting to drive sustainable growth.
        </p>
      </div>

      <div className="text-primary grid grid-cols-1 sm:grid-cols-2 gap-6">
        {DT_SOLUTIONS.map((solution, index) => {
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
