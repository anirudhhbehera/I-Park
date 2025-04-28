import React, { useState, useEffect, useRef } from 'react';
import { User, Hotel, MapPin } from 'lucide-react'; // Using Lucide icons
import placeholderImg from '@/assets/logo.svg';

export default function Profile() {
  const [openPopup, setOpenPopup] = useState(false);
  const popupRef = useRef(null);
  const togglePopup = () => {
    setOpenPopup(!openPopup);
  };
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popupRef.current &&
        !popupRef.current.contains(event.target as Node)
      ) {
        setOpenPopup(false); // Close popup
      }
    };

    // Add event listener to detect clicks outside
    document.addEventListener('mousedown', handleClickOutside);

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div>
      {/* Profile Icon */}
      {/* <div 
        onClick={togglePopup} 
        className="relative z-50 h-8 w-8 bg-gray-300 rounded-full overflow-hidden cursor-pointer"
      >
        <img src={placeholderImg} alt="Profile" width={32} height={32} />
      </div> */}
      <div
        onClick={togglePopup}
        className="relative z-50 flex h-8 w-8 cursor-pointer items-center justify-center overflow-hidden rounded-full bg-gray-300"
      >
        <User className="h-5 w-5 text-gray-700" />
      </div>
      {/* Popup centered on the whole screen */}
      {openPopup && (
        <div className="fixed inset-0 z-40 flex items-center justify-center bg-black bg-opacity-50">
          <div
            ref={popupRef}
            className="relative w-96 rounded-2xl bg-white p-8 text-center shadow-2xl"
          >
            {/* Profile Image */}
            <img
              src={placeholderImg}
              alt="Profile"
              className="mx-auto mb-4 h-24 w-24 rounded-full border-4 border-gray-200"
            />

            {/* User Info */}
            <div className="mt-4 space-y-4 text-gray-700">
              <div className="flex items-center justify-start gap-3">
                <User className="text-blue-500" size={20} />
                <div className="text-left">
                  <div className="text-xs text-gray-400">Username</div>
                  <div className="font-semibold">DemoUser</div>
                </div>
              </div>

              <div className="flex items-center justify-start gap-3">
                <Hotel className="text-green-500" size={20} />
                <div className="text-left">
                  <div className="text-xs text-gray-400">Hotel Name</div>
                  <div className="font-semibold">Rejenta</div>
                </div>
              </div>

              <div className="flex items-center justify-start gap-3">
                <MapPin className="text-red-500" size={20} />
                <div className="text-left">
                  <div className="text-xs text-gray-400">Branch</div>
                  <div className="font-semibold">Nagpur</div>
                </div>
              </div>
            </div>

            {/* Close Button */}
            <button
              className="absolute right-3 top-3 text-gray-400 hover:text-gray-700"
              onClick={togglePopup}
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
