import React from "react";
import CountUp from "react-countup";

const StatsSection = () => {
  return (
    <div className="py-12">
      <div className="text-center bg-gray-100 py-12">
        <h2 className="text-4xl text-bolder">Our Achivements</h2>
      </div>
      <div className="bg-gray-100">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center bg-white p-6 rounded-lg shadow-lg">
          <div className="">
            <h3 className="text-3xl font-semibold text-gray-800">Projects</h3>
            <CountUp
              start={0}
              end={250}
              duration={3}
              className="text-5xl font-bold text-blue-600"
            />
            <p className="text-gray-600 mt-2">Completed Projects</p>
          </div>
          <div className="">
            <h3 className="text-3xl font-semibold text-gray-800">Clients</h3>
            <CountUp
              start={0}
              end={120}
              duration={3}
              className="text-5xl font-bold text-blue-600"
            />
            <p className="text-gray-600 mt-2">Happy Clients</p>
          </div>
          <div className="">
            <h3 className="text-3xl font-semibold text-gray-800">Numbers</h3>
            <CountUp
              start={0}
              end={500}
              duration={3}
              className="text-5xl font-bold text-blue-600"
            />
            <p className="text-gray-600 mt-2">Total Engagements</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;
