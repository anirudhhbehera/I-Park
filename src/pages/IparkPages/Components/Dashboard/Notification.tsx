import React, { useState, useEffect, useRef } from 'react';
import { Bell } from 'lucide-react';
import DeleteIcon from '@mui/icons-material/Delete';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
export default function Notification() {
  const [open, setOpen] = useState(false);
  const [volumeup, setvolumeup] = useState(true);
  const dropdownRef = useRef(null);

  function toggleNotification() {
    setOpen(!open);
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    if (open) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [open]);
  return (
    <div className="relative z-50" ref={dropdownRef}>
      {' '}
      {/* <-- ADD z-50 here */}
      <button onClick={toggleNotification} className="relative">
        <Bell className="h-5 w-5 text-gray-700" />
      </button>
      {open ? (
        <div className="absolute right-0 top-8 z-50 w-60 rounded-md bg-white p-4 shadow-lg">
          <div className="flex justify-between">
            <DeleteIcon className="text-gray-500" />
            <div onClick={() => setvolumeup(!volumeup)}>
              {volumeup ? (
                <VolumeUpIcon className="text-gray-500" />
              ) : (
                <VolumeOffIcon className="text-gray-500" />
              )}
            </div>
          </div>
          {/* Your notification content here */}
          <div className="mt-2 flex flex-col items-center">
            <p className="mt-2 text-sm text-gray-700">
              You have a new message!
            </p>
          </div>
        </div>
      ) : null}
    </div>
  );
}
