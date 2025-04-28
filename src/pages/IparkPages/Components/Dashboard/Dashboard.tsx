import { Bell, ChevronDown, Search, TrendingUp } from 'lucide-react';

import { Link } from 'react-router-dom';

import ParkingStatus from './ParkingStatus';
import HotelValetContactSection from './HotelValetContactSection';
// import placeholderImg from "@/assets/placeholder.svg";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Card from './Card';
export default function DashboardPage() {
  return (
    <div className="h-full w-full overflow-auto bg-white">
      <div className="h-full w-full overflow-auto bg-white">
        {/* Main Content */}
        <main className="px-8 py-6">
          {/* Overview Section */}
          {/* <div className="flex items-center justify-between mb-6">
    <h2 className="text-lg font-medium">Overview</h2>
    <div className="flex items-center gap-2">
      <span className="text-sm">Today</span>
      <ChevronDown className="h-4 w-4" />
    </div>
  </div> */}

          <Card />
          {/* Parking Status Section */}
          <ParkingStatus />
          <HotelValetContactSection />
          {/* Bottom Section */}
        </main>
      </div>
    </div>
  );
}
