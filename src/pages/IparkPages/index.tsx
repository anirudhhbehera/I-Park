import {
    Bell,
    ChevronDown,
    MoreHorizontal,
    Search,
    TrendingUp
  } from "lucide-react"
  import { Link } from "react-router-dom"
  import loginImg from "@/assets/logo.svg"
  import DashboardPage from "./Components/Dashboard.js";



  
  export default function IparkDashboard() {
    return (
    <div className="bg-white w-full h-full overflow-auto">
      <DashboardPage />
    </div>
    )
  }
  
  function DonutChart() {
    return (
      <svg width="180" height="180" viewBox="0 0 180 180">
        <circle cx="90" cy="90" r="60" fill="transparent" stroke="#111111" strokeWidth="30" strokeDasharray="377" />
        <circle cx="90" cy="90" r="60" fill="transparent" stroke="#aec7ed" strokeWidth="30" strokeDasharray="377" strokeDashoffset="188.5" />
        <circle cx="90" cy="90" r="60" fill="transparent" stroke="#94e9b8" strokeWidth="30" strokeDasharray="377" strokeDashoffset="290" />
        <circle cx="90" cy="90" r="60" fill="transparent" stroke="#666666" strokeWidth="30" strokeDasharray="377" strokeDashoffset="335" />
        <circle cx="90" cy="90" r="45" fill="white" />
      </svg>
    )
  }
  // ------------------------Reusable code -------------------------------------


  <div className="bg-white w-full h-full overflow-auto">

  {/* Header */}
  <header className="border-b border-gray-200 px-8 py-4 flex items-center justify-between">
    <div className="flex items-center gap-12">
      <div className="font-serif text-xl font-bold">
        <span className="inline-block mr-1">I</span>
        <span className="inline-block mr-1">-</span>
        <span>PARK</span>
      </div>
      <nav className="flex items-center gap-8">
        <Link to="/dashboard" className="font-medium text-[#111111]">
          Dashboard
        </Link>
        <Link to="#" className="text-gray-600">
          My Account
        </Link>
        <Link to="#" className="text-gray-600">
          Customer Feedback
        </Link>
      </nav>
    </div>
    <div className="flex items-center gap-4">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
        <input
          type="text"
          placeholder="Search"
          className="bg-gray-100 rounded-full pl-10 pr-4 py-2 w-[300px] text-sm focus:outline-none"
        />
      </div>
      {/* <div className="flex items-center gap-1 text-gray-700">
        <span>English (United States)</span>
        <ChevronDown className="h-4 w-4" />
      </div> */}
      <button className="relative">
        <Bell className="h-5 w-5 text-gray-700" />
      </button>
      <div className="h-8 w-8 bg-gray-300 rounded-full overflow-hidden">
        <img src={loginImg} alt="Profile" width={32} height={32} />
      </div>
    </div>
  </header>

  {/* Main Content */}
  <main className="px-8 py-6">
    {/* Overview Section */}
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-lg font-medium">Overview</h2>
      <div className="flex items-center gap-2">
        <span className="text-sm">Today</span>
        <ChevronDown className="h-4 w-4" />
      </div>
    </div>

    <div className="grid grid-cols-4 gap-4 mb-8">
      {["Total Hotels", "Total Customers", "Current Users", "New Users"].map((label, index) => {
        const bgColor = index % 2 === 0 ? "#111111" : "#92bfff"
        const textColor = index % 2 === 0 ? "text-[#94e9b8]" : "text-white"
        return (
          <div
            key={label}
            className={`rounded-lg p-4 text-white`}
            style={{ backgroundColor: bgColor }}
          >
            <div className="flex justify-between items-center mb-2">
              <span>{label}</span>
              <TrendingUp className="h-5 w-5" />
            </div>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-semibold">256</span>
              <span className={`text-sm pb-1 ${textColor}`}>+15.03%</span>
            </div>
          </div>
        )
      })}
    </div>

    {/* Parking Status Section */}
    <div className="bg-[#f9f9fa] rounded-lg p-6 mb-8">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-lg font-medium">Parking Status</h2>
        <button>
          <MoreHorizontal className="h-5 w-5 text-gray-500" />
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="text-left text-gray-500 text-sm">
              <th className="pb-4 font-normal">Customer</th>
              <th className="pb-4 font-normal">Valley Boy</th>
              <th className="pb-4 font-normal">Date</th>
              <th className="pb-4 font-normal">Time</th>
              <th className="pb-4 font-normal">Status</th>
            </tr>
          </thead>
          <tbody>
            {[
              ["ByeWind", "Jun 24, 2025", "14:02", "In Progress", "#c9b3ed"],
              ["Natali Craig", "Mar 10, 2025", "09:00", "Complete", "#94e9b8"],
              ["Drew Cano", "Nov 10, 2025", "06:36", "Pending", "#92bfff"],
              ["Orlando Diggs", "Dec 20, 2025", "18:00", "Approved", "#ffdb56"],
              ["Andi Lane", "Jul 25, 2025", "10:30", "Rejected", "gray"],
            ].map(([name, date, time, status, color], index) => (
              <tr key={index} className="border-t border-gray-100">
                <td className="py-4 flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-black"></span>
                  {name}
                </td>
                <td className="py-4 flex items-center gap-2">
                  <span className="inline-block h-2 w-2 rounded-full bg-black"></span>
                  {name}
                </td>
                <td className="py-4">{date}</td>
                <td className="py-4">{time}</td>
                <td className="py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs`}
                    style={{
                      backgroundColor:
                        color === "gray" ? "#e5e7eb" : `${color}33`,
                      color: color === "gray" ? "#6b7280" : color,
                    }}
                  >
                    {status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>

    {/* Bottom Section */}
    <div className="grid grid-cols-2 gap-6">
      {/* Contact Information */}
      <div className="bg-[#f9f9fa] rounded-lg p-6">
        <div className="grid grid-cols-3 gap-4 mb-4">
          <div className="text-sm text-gray-500">Hotel Name</div>
          <div className="text-sm text-gray-500">Valley Boy</div>
          <div className="text-sm text-gray-500">Contact Number</div>
        </div>
        <div className="space-y-4">
          {["Natali Craig", "Drew Cano", "Andi Lane", "Koray Okumus", "Kate Morrison", "Melody Macy"].map(
            (name, index) => (
              <div key={index} className="grid grid-cols-3 gap-4 py-2">
                <div className="text-sm">{name}</div>
                <div className="flex items-center gap-2">
                  <div className="h-6 w-6 bg-gray-300 rounded-full overflow-hidden">
                    <img src={loginImg} alt={name} width={24} height={24} />
                  </div>
                  <span className="text-sm">{name}</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 bg-black rounded-full flex items-center justify-center">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>
                  <span className="text-sm">9125454547</span>
                </div>
              </div>
            )
          )}
        </div>
      </div>

      {/* Traffic by Location */}
      <div className="bg-[#f9f9fa] rounded-lg p-6">
        <h2 className="text-lg font-medium mb-6">Traffic by Location</h2>
        <div className="flex items-center justify-between">
          <div className="w-[180px] h-[180px] relative">
            <DonutChart />
          </div>
          <div className="space-y-3">
            {[
              ["#111111", "Maharashtra", "52.1%"],
              ["#aec7ed", "Uttar Pradesh", "22.8%"],
              ["#94e9b8", "Karnataka", "13.9%"],
              ["#666666", "Other", "11.2%"],
            ].map(([color, name, percent], index) => (
              <div key={index} className="flex items-center gap-2">
                <span
                  className="inline-block h-3 w-3 rounded-full"
                  style={{ backgroundColor: color }}
                ></span>
                <span className="text-sm">{name}</span>
                <span className="ml-auto text-sm font-medium">{percent}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </main>

  {/* Footer */}
  <footer className="px-8 py-4 border-t border-gray-200 mt-8 flex justify-between text-sm text-gray-500">
    <div className="flex gap-4">
      <Link to="#">Terms & Conditions</Link>
      <Link to="#">Privacy Policy</Link>
    </div>
    <div>© 2025 I-PARK. All rights reserved.</div>
  </footer>
</div>