import { IOT } from "@/constants";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "IoT",
};

const IotPage = () => (
  <div className="w-full max-w-7xl mx-auto px-4 py-16 sm:py-24 lg:py-32">
    <div className="flex flex-col gap-12 mb-12">
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-primary font-semibold">
        Our IoT Solutions
      </h1>
      <p className="text-xl text-primary">
        Innovative technology solutions designed to transform the way we live
        and work
      </p>
    </div>

    <div className="text-primary grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {IOT.map((iot, index) => (
        <div key={index} className="transition-shadow duration-300 hover:shadow-xl rounded-lg shadow-lg p-6">
          <div className="flex items-center gap-2 mb-4">
            <span className="inline-flex items-center justify-center p-2 bg-primary/20 rounded-full">
              <iot.icon size={24} />
            </span>
            <h2 className="text-lg font-bold">{iot.title}</h2>
          </div>
          <p>{iot.description}</p>
        </div>
      ))}
    </div>
  </div>
);

export default IotPage;
