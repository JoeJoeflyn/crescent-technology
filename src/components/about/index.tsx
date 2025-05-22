"use client";
import Counter from "@/components/animations/counter";
import Image from "next/image";

export default function About() {
  return (
    <div className="py-20 mx-auto w-full max-w-7xl px-4">
      <div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
          Company History and Overview
        </h1>
        <p className="text-lg text-primary">
          Founded in 2006, Crescent Technology started as an IT consulting
          company in Atlanta. Over the past 15+ years, we have expanded our
          services and geographical footprint, now serving clients across the
          Middle East and USA.
        </p>
      </div>

      {/* Stats Section */}
      <div className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Years in operation",
              value: 15,
              bgColor: "bg-primary",
            },
            {
              title: "Raised from Investors",
              value: 2,
              bgColor: "bg-cyan-blue",
            },
            {
              title: "Clients Worldwide",
              value: 76,
              bgColor: "bg-primary",
            },
          ].map(({ title, value, bgColor }) => (
            <div key={title} className={`${bgColor} p-8 rounded-lg shadow-md`}>
              <p className="text-4xl font-bold text-white mb-2">
                {value === 2 ? `$` : ``}
                <span className="hidden">{value}</span>
                <Counter targetValue={value} />
                {value === 2 ? `M` : `+`}
              </p>
              <p className="text-white text-lg">{title}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Who We Are
        </h1>
        <p className="text-lg text-primary">
          Crescent Technology is a digitaltransformation leader, founded in
          Atlanta,Georgia in 2006. With a Headquarters in Atlanta, Georgia,
          Riyadh, KSA, and USA.We are committed to deliveringinnovative
          solutions that help businessesunlock new opportunities and
          achievesustainable growth.
        </p>
        <div className="flex flex-col gap-4">
          <p className="flex items-center gap-2 font-semibold">
            <Image src="/about-1.webp" alt="" width={50} height={50} /> To be
            recognized as a leading provider of digital transformation solutions
            across the Middle East
          </p>
          <p className="flex items-center gap-2 font-semibold">
            <Image src="/about-2.png" alt="" width={50} height={50} /> To
            deliver exceptional service, personalized solutions, and ensure
          </p>
        </div>
        <p className="text-primary text-lg">
          Our commitment to excellence has driven us to the forefront of digital
          transformation, helping businesses embrace the future with confidence.
        </p>
      </div>
    </div>
  );
}
