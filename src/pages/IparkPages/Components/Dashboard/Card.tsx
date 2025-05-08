import React, { useState } from 'react';
import IndividualCard from './IndividualCard';
import { Link } from 'react-router-dom';
import FetchdataForCards from './FetchdataForCards';
export default function Card() {
  const [hotelcount, sethotelcount] = useState(0);
  const [branchcount, setbranchcount] = useState(0);
  return (
    <div>
      <FetchdataForCards
        sethotelcount={sethotelcount}
        setbranchcount={setbranchcount}
      />
      <div className="mb-8 grid grid-cols-4 gap-20 px-6">
        <Link to="/hotel" className="no-underline">
          <IndividualCard
            title="Total Hotels"
            value={hotelcount}
            percentage="+15.03%"
            bgColor="bg-gradient-to-b from-neutral-900 to-gray-600"
            textColor="text-white"
          />
        </Link>
        <Link to="/HotelBranch" className="no-underline">
          <IndividualCard
            title="Total Branches"
            value={branchcount}
            percentage="+15.03%"
            bgColor="bg-gradient-to-b from-blue-800 to-blue-400"
            textColor="text-white"
          />
        </Link>
        <Link to="/Valet" className="no-underline">
          <IndividualCard
            title="Total Valet"
            value="256"
            percentage="+15.03%"
            bgColor="bg-gradient-to-b from-neutral-900 to-gray-600"
            textColor="text-white"
          />
        </Link>

        <Link to="#" className="no-underline">
          <IndividualCard
            title="New Guest"
            value="256"
            percentage="+15.03%"
            bgColor="bg-gradient-to-b from-blue-800 to-blue-400"
            textColor="text-white"
          />
        </Link>
      </div>
    </div>
  );
}
