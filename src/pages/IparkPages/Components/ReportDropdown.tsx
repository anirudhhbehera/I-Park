import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
// REMOVE this line unless you're using <DayWiseVehicle /> directly in this file
import DayWiseVehicle from './Master/DayWiseVehicle/DayWiseVehicle.tsx';
import DayWiseVehicleBranch from './Master/DayWiseVehicleBranch/DayWiseVehicleBranch.tsx';

import { useLocation } from 'react-router-dom';
import { useSelector, UseSelector } from 'react-redux';

const MasterDropdown = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const Location = useLocation();

  const token = useSelector((state) => state.auth.token);
  const user = useSelector((state) => state.auth.user);
  console.log('my user is ', user);
  const role = useSelector((state) => state.auth.user.role);
  console.log('my role is ', role);
  const isMasterActive =
    Location.pathname.startsWith('/DayWiseVehicle') ||
    Location.pathname.startsWith('/DayWiseVehicleBranch') ||
    Location.pathname.startsWith('/branchgroup') ||
    Location.pathname.startsWith('/Valet');
  const toggleDropdown = () => setOpen(!open);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      <button
        onClick={toggleDropdown}
        className={`px-4 py-2 font-medium text-[#111111] focus:outline-none ${isMasterActive ? 'underline decoration-2 underline-offset-4' : 'no-underline'}`}
      >
        Report
      </button>

      {open && (
        <div className="absolute left-0 z-50 mt-2 w-48 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5">
          <div className="py-1">
            {role == 1 ? (
              <>
                <Link
                  to="/DayWiseVehicle"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  Day Wise Vehicle Report
                </Link>
                <Link
                  to="/DayWiseVehicleBranch"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  New Guest
                </Link>
              </>
            ) : role == 2 ? (
              <>
                <Link
                  to="/DayWiseVehicle"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  Day Wise Vehicle Report
                </Link>
                <Link
                  to="/DayWiseVehicleBranch"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  New Guest
                </Link>
              </>
            ) : (
              <>
                <Link
                  to="/DayWiseVehicle"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  Day Wise Vehicle Report
                </Link>
                <Link
                  to="/DayWiseVehicleBranch"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  onClick={() => setOpen(false)}
                >
                  New Guest
                </Link>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MasterDropdown;
