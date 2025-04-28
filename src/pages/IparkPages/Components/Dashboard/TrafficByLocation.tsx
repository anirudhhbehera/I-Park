import React from 'react';
import { DonutChart } from '../ui/DonutChart';
export default function TrafficByLocation() {
  return (
    <div className="flex h-[400px] flex-col rounded-xl bg-white p-6 shadow-md">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">
          Traffic by Location
        </h2>
      </div>
      <div className="flex flex-1 items-center justify-between gap-6">
        <div className="relative h-[180px] w-[180px]">
          <DonutChart />
        </div>
        <div className="flex-1 space-y-3">
          {[
            ['#111111', 'Maharashtra', '52.1%'],
            ['#aec7ed', 'Uttar Pradesh', '22.8%'],
            ['#94e9b8', 'Karnataka', '13.9%'],
            ['#666666', 'Other', '11.2%']
          ].map(([color, name, percent], index) => (
            <div key={index} className="flex items-center gap-3 text-sm">
              <span
                className="inline-block h-3 w-3 rounded-full"
                style={{ backgroundColor: color }}
              ></span>
              <span className="text-gray-700">{name}</span>
              <span className="ml-auto font-semibold text-gray-800">
                {percent}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
