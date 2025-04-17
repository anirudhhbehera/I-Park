import { Bell, ChevronDown, Search } from "lucide-react";
import { Link } from "react-router-dom";
import placeholderImg from "@/assets/logo.svg";

export function Navbar() {
  return (
    <header className="border-b border-gray-200 px-8 py-4 flex items-center justify-between">
      <div className="flex items-center gap-12">
        <div className="font-serif text-xl font-bold">
          <span className="inline-block mr-1">I</span>
          <span className="inline-block mr-1">-</span>
          <Link to="/" className="font-medium text-[#111111]">
              <span>PARK</span>
          </Link>
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
          <Link to="/login" className="text-gray-600">
            Login
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
          <img src={placeholderImg} alt="Profile" width={32} height={32} />
        </div>
      </div>
    </header>
  );
}
