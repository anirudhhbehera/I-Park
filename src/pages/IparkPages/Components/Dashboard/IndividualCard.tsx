import React from 'react';
import { TrendingUp } from 'lucide-react';

export default function IndividualCard({
  title,
  value,
  percentage,
  bgColor = 'bg-black',
  textColor = 'text-white'
}) {
  return (
    <div
      className={`h-full w-full rounded-2xl px-4 py-2 shadow-lg ${bgColor} ${textColor}  transform transition duration-1000 hover:scale-105`}
    >
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm font-medium">{title}</p>
        <div className="rounded-full bg-white/10 p-2">
          <TrendingUp className="h-4 w-4" />
        </div>
      </div>
      <div className="flex items-end justify-between">
        <p className="text-3xl font-semibold">{value}</p>
        <p className="pb-1 text-sm text-green-400">{percentage}</p>
      </div>
    </div>
  );
}
