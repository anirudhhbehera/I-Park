// import React from 'react'
// import { DonutChart } from "../ui/DonutChart";
// import loginImg from "@/assets/logo.svg"
// export default function HotelValetContactSection() {
//   return (
//     <div className="grid grid-cols-2 gap-6">
//     {/* Contact Information */}
//     <div className="bg-[#f7f7f7] rounded-lg p-6">
//       <div className="grid grid-cols-3 gap-4 mb-4">
//         <div className="text-sm text-gray-500">Hotel Name</div>
//         <div className="text-sm text-gray-500">Valley Boy</div>
//         <div className="text-sm text-gray-500">Contact Number</div>
//       </div>
//       <div className="space-y-4">
//         {["Natali Craig", "Drew Cano", "Andi Lane", "Koray Okumus", "Kate Morrison", "Melody Macy"].map(
//           (name, index) => (
//             <div key={index} className="grid grid-cols-3 gap-4 py-2">
//               <div className="text-sm">{name}</div>
//               <div className="flex items-center gap-2">
//                 <div className="h-6 w-6 bg-gray-300 rounded-full overflow-hidden">
//                   <img src={loginImg} alt={name} width={24} height={24} />
//                 </div>
//                 <span className="text-sm">{name}</span>
//               </div>
//               <div className="flex items-center gap-2">
//                 <div className="h-5 w-5 bg-black rounded-full flex items-center justify-center">
//                   <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
//                     <path
//                       d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
//                       stroke="white"
//                       strokeWidth="2"
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                     />
//                   </svg>
//                 </div>
//                 <span className="text-sm">9125454547</span>
//               </div>
//             </div>
//           )
//         )}
//       </div>
//     </div>

//     {/* Traffic by Location */}
//     <div className="bg-[#f7f7f7] rounded-lg p-6">
//       <h2 className="text-lg font-medium mb-6">Traffic by Location</h2>
//       <div className="flex items-center justify-between">
//         <div className="w-[180px] h-[180px] relative">
//           <DonutChart />
//         </div>
//         <div className="space-y-3">
//           {[
//             ["#111111", "Maharashtra", "52.1%"],
//             ["#aec7ed", "Uttar Pradesh", "22.8%"],
//             ["#94e9b8", "Karnataka", "13.9%"],
//             ["#666666", "Other", "11.2%"],
//           ].map(([color, name, percent], index) => (
//             <div key={index} className="flex items-center gap-2">
//               <span
//                 className="inline-block h-3 w-3 rounded-full"
//                 style={{ backgroundColor: color }}
//               ></span>
//               <span className="text-sm">{name}</span>
//               <span className="ml-auto text-sm font-medium">{percent}</span>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   </div>
//   )
// }
// import React from 'react';
// import { DonutChart } from "../ui/DonutChart";
// import loginImg from "@/assets/logo.svg";

// const valetContacts = {
//   headers: ["Hotel Name", "Valley Boy", "Contact Number"],
//   data: [
//     { hotelName: "Natali Craig", valleyBoy: "Natali Craig", contact: "9125454547" },
//     { hotelName: "Drew Cano", valleyBoy: "Drew Cano", contact: "9125454547" },
//     { hotelName: "Andi Lane", valleyBoy: "Andi Lane", contact: "9125454547" },
//     { hotelName: "Koray Okumus", valleyBoy: "Koray Okumus", contact: "9125454547" },
//     { hotelName: "Kate Morrison", valleyBoy: "Kate Morrison", contact: "9125454547" },
//     { hotelName: "Melody Macy", valleyBoy: "Melody Macy", contact: "9125454547" },
//   ],
// };

// export default function HotelValetContactSection() {
//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//       {/* Contact Info */}
//       <div className="bg-[#f7f7f7] rounded-xl p-6 shadow-sm">
//         <div className="grid grid-cols-3 gap-4 mb-4 text-xs text-gray-500 font-semibold">
//           {valetContacts.headers.map((header, index) => (
//             <div key={index}>{header}</div>
//           ))}
//         </div>

//         <div className="space-y-3 max-h-[100px] overflow-y-auto pr-2">
//   {valetContacts.data.map(({ hotelName, valleyBoy, contact }, index) => (
//     <div key={index} className="grid grid-cols-3 gap-4 items-center text-xs">
//       {/* Hotel Name */}
//       <div>{hotelName}</div>

//       {/* Valet Boy */}
//       <div className="flex items-center gap-2">
//         <div className="h-6 w-6 rounded-full overflow-hidden bg-gray-300">
//           <img src={loginImg} alt={valleyBoy} className="h-full w-full object-cover" />
//         </div>
//         <span>{valleyBoy}</span>
//       </div>

//       {/* Contact */}
//       <div className="flex items-center gap-2">
//         <div className="h-5 w-5 bg-black rounded-full flex items-center justify-center">
//           <svg width="12" height="12" viewBox="0 0 24 24" fill="none">
//             <path
//               d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
//               stroke="white"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             />
//           </svg>
//         </div>
//         <span>{contact}</span>
//       </div>
//     </div>
//   ))}
// </div>

//       </div>

//       {/* Traffic by Location */}
//       <div className="bg-[#f7f7f7] rounded-xl p-6 shadow-sm">
//         <h2 className="text-base font-semibold mb-6 text-gray-800">Traffic by Location</h2>
//         <div className="flex items-center justify-between gap-6">
//           <div className="w-[180px] h-[180px] relative">
//             <DonutChart />
//           </div>
//           <div className="space-y-3 flex-1">
//             {[
//               ["#111111", "Maharashtra", "52.1%"],
//               ["#aec7ed", "Uttar Pradesh", "22.8%"],
//               ["#94e9b8", "Karnataka", "13.9%"],
//               ["#666666", "Other", "11.2%"],
//             ].map(([color, name, percent], index) => (
//               <div key={index} className="flex items-center gap-3 text-xs">
//                 <span className="inline-block h-3 w-3 rounded-full" style={{ backgroundColor: color }}></span>
//                 <span className="text-gray-700">{name}</span>
//                 <span className="ml-auto font-semibold text-gray-800">{percent}</span>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

import React, { useState, useRef, useEffect } from 'react';

import loginImg from '@/assets/logo.svg';
import { MoreHorizontal } from 'lucide-react';
import PDFExporter from '../Reusablecode/PDFExporter';
import ExcelExporter from '../Reusablecode/ExcelExporter';
import Header from '@/components/shared/header';
import { StyledTablePagination } from '../Reusablecode/TablePaginationStyles';
import TablePagination from '@mui/material/TablePagination';
import TrafficByLocation from './TrafficByLocation';

const valetContacts = {
  headers: ['Hotel Name', 'Valley Boy', 'Contact Number'],
  data: [
    {
      hotelName: 'Natali Craig',
      valleyBoy: 'Natali Craig',
      contact: '9125454547'
    },
    { hotelName: 'Drew Cano', valleyBoy: 'Drew Cano', contact: '9125454547' },
    { hotelName: 'Andi Lane', valleyBoy: 'Andi Lane', contact: '9125454547' },
    {
      hotelName: 'Koray Okumus',
      valleyBoy: 'Koray Okumus',
      contact: '9125454547'
    },
    {
      hotelName: 'Kate Morrison',
      valleyBoy: 'Kate Morrison',
      contact: '9125454547'
    },
    {
      hotelName: 'Melody Macy',
      valleyBoy: 'Melody Macy',
      contact: '9125454547'
    }
  ]
};

export default function HotelValetContactSection() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleDownload = (type) => {
    alert(`Download as ${type} clicked`);
    setMenuOpen(false);
  };

  const exportToPDF = PDFExporter({
    title: 'Parking Status Report',
    columns: [
      { Header: valetContacts.headers[0], accessor: 'hotelName' },
      { Header: valetContacts.headers[1], accessor: 'valleyBoy' },
      { Header: valetContacts.headers[2], accessor: 'contact' }
    ],
    data: valetContacts.data,
    fileName: 'ParkingStatus.pdf'
  });

  const exportToExcel = ExcelExporter({
    columns: [
      { Header: valetContacts.headers[0], accessor: 'hotelName' },
      { Header: valetContacts.headers[1], accessor: 'valleyBoy' },
      { Header: valetContacts.headers[2], accessor: 'contact' }
    ],
    data: valetContacts.data,
    fileName: 'ParkingStatus.xlsx',
    mytitle: 'Parking Status Report'
  });
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0); // Reset to first page
  };

  const paginatedData =
    rowsPerPage > 0
      ? valetContacts.data.slice(
          page * rowsPerPage,
          page * rowsPerPage + rowsPerPage
        )
      : valetContacts.data;
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
      {/* Valet Contact Info */}
      <div className="relative flex h-[400px] flex-col rounded-xl bg-white p-6 shadow-md">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-800">
            Valet Contact Info
          </h2>
          <div className="relative" ref={menuRef}>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="rounded-lg p-2 transition-colors hover:bg-gray-100"
            >
              <MoreHorizontal className="h-5 w-5 text-gray-500" />
            </button>
            {menuOpen && (
              <div className="absolute right-0 z-10 mt-2 w-40 rounded-md border border-gray-200 bg-white shadow-lg">
                <button
                  onClick={exportToPDF}
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                >
                  Download PDF
                </button>
                <button
                  onClick={exportToExcel}
                  className="block w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-gray-100"
                >
                  Download Excel
                </button>
              </div>
            )}
          </div>
        </div>

        {/* <div className="overflow-y-auto flex-1 pr-2">
          <table className="w-full">
          <thead>
  <tr className="text-left text-sm border-b border-gray-200 sticky top-0 bg-white hover:bg-transparent">
    {valetContacts.headers.map((header, index) => (
      <th
        key={index}
        className="pb-4 font-medium text-gray-700 uppercase tracking-wide hover:bg-transparent"
      >
        {header}
      </th>
    ))}
  </tr>
</thead>

<tbody className="text-sm divide-y divide-gray-200">
  {paginatedData.map(({ hotelName, valleyBoy, contact }, index) => (

                <tr key={index} className="hover:bg-gray-50 transition-colors">
                  <td className="py-3 text-gray-900 font-medium">{hotelName}</td>
                  <td className="py-3 text-gray-700 flex items-center gap-2">
                    <div className="h-6 w-6 rounded-full overflow-hidden bg-gray-300">
                      <img
                        src={loginImg}
                        alt={valleyBoy}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    {valleyBoy}
                  </td>
                  <td className="py-3 text-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="h-5 w-5 bg-black rounded-full flex items-center justify-center">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span>{contact}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div> */}
        <div className="max-h-[500px] flex-1 overflow-y-auto pr-2">
          <table className="w-full">
            <thead>
              <tr className="sticky top-0 border-b border-gray-200 bg-white text-left text-sm hover:bg-transparent">
                {valetContacts.headers.map((header, index) => (
                  <th
                    key={index}
                    className="pb-4 font-medium uppercase tracking-wide text-gray-700 hover:bg-transparent"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200 text-sm">
              {paginatedData.map(({ hotelName, valleyBoy, contact }, index) => (
                <tr key={index} className="transition-colors hover:bg-gray-50">
                  <td className="py-3 font-medium text-gray-900">
                    {hotelName}
                  </td>
                  <td className="flex items-center gap-2 py-3 text-gray-700">
                    <div className="h-6 w-6 overflow-hidden rounded-full bg-gray-300">
                      <img
                        src={loginImg}
                        alt={valleyBoy}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    {valleyBoy}
                  </td>
                  <td className="py-3 text-gray-700">
                    <div className="flex items-center gap-2">
                      <div className="flex h-5 w-5 items-center justify-center rounded-full bg-black">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"
                            stroke="white"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>
                      <span>{contact}</span>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-4">
          <StyledTablePagination>
            <TablePagination
              rowsPerPageOptions={[{ label: 'All', value: -1 }, 1, 10, 25, 100]}
              component="div"
              count={valetContacts.data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          </StyledTablePagination>
        </div>
      </div>
      <TrafficByLocation />
      {/* Traffic by Location */}
    </div>
  );
}
