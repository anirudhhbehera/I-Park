// import React from 'react'
// import {  MoreHorizontal} from 'lucide-react'
// export default function ParkingStatus() {
//   return (
//     <div className="bg-[#f7f7f7] rounded-lg p-6 mb-8">
//     <div className="flex justify-between items-center mb-6">
//       <h2 className="text-lg font-medium">Parking Status</h2>
//       <button>
//         <MoreHorizontal className="h-5 w-5 text-gray-500" />
//       </button>
//     </div>

//     <div className="overflow-x-auto">
//       <table className="w-full">
//         <thead>
//           <tr className="text-left text-gray-500 text-sm">
//             <th className="pb-4 font-normal">Customer</th>
//             <th className="pb-4 font-normal">Valley Boy</th>
//             <th className="pb-4 font-normal">Date</th>
//             <th className="pb-4 font-normal">Time</th>
//             <th className="pb-4 font-normal">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {[
//             ["ByeWind", "Jun 24, 2025", "14:02", "In Progress", "#c9b3ed"],
//             ["Natali Craig", "Mar 10, 2025", "09:00", "Complete", "#94e9b8"],
//             ["Drew Cano", "Nov 10, 2025", "06:36", "Pending", "#92bfff"],
//             ["Orlando Diggs", "Dec 20, 2025", "18:00", "Approved", "#ffdb56"],
//             ["Andi Lane", "Jul 25, 2025", "10:30", "Rejected", "gray"],
//           ].map(([name, date, time, status, color], index) => (
//             <tr key={index} className="border-t border-gray-100">
//               <td className="py-4 flex items-center gap-2">
//                 <span className="inline-block h-2 w-2 rounded-full bg-black"></span>
//                 {name}
//               </td>
//               <td className="py-4 flex items-center gap-2">
//                 <span className="inline-block h-2 w-2 rounded-full bg-black"></span>
//                 {name}
//               </td>
//               <td className="py-4">{date}</td>
//               <td className="py-4">{time}</td>
//               <td className="py-4">
//                 <span
//                   className={`px-3 py-1 rounded-full text-xs`}
//                   style={{
//                     backgroundColor:
//                       color === "gray" ? "#e5e7eb" : `${color}33`,
//                     color: color === "gray" ? "#6b7280" : color,
//                   }}
//                 >
//                   {status}
//                 </span>
//               </td>
//             </tr>
//           ))}
//         </tbody>
//       </table>
//     </div>
//   </div>
//   )
// }
// import React from 'react'
// import { MoreHorizontal } from 'lucide-react'
// import './Dashboard.css'
// export default function ParkingStatus() {
//   return (
//     <div className="bg-[#f7f7f7] rounded-lg p-6 mb-8">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-lg font-large">Parking Status</h2>
//         <button>
//           <MoreHorizontal className="h-5 w-5 text-gray-500" />
//         </button>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="w-full">
//           <thead>
//             <tr className="text-left text-gray-500 text-sm">
//               <th className="pb-4 font-normal">Customer</th>
//               <th className="pb-4 font-normal">Valley Boy</th>
//               <th className="pb-4 font-normal">Hotel</th>
//               <th className="pb-4 font-normal">HotelBranch</th>
//               <th className="pb-4 font-normal">Date</th>
//               <th className="pb-4 font-normal">Time</th>
//               <th className="pb-4 font-normal">Status</th>
//             </tr>
//           </thead>
//           <tbody className="text-xs"> {/* Apply small text to entire tbody */}
//   {[
//     ["ByeWind", "ByeWind","Radison","Nagpur", "Jun 24, 2025", "14:02", "In Progress", "#c9b3ed"],
//     ["Natali Craig", "Natali Craig","center point","Airport", "Mar 10, 2025", "09:00", "Complete", "#94e9b8"],
//     ["Drew Cano", "Drew Cano","Rejenta","mumbai", "Nov 10, 2025", "06:36", "Pending", "#92bfff"],
//     ["Orlando Diggs", "Orlando Diggs","Taj","delhi", "Dec 20, 2025", "18:00", "Approved", "#ffdb56"],
//     ["Andi Lane", "Andi Lane","Radison","Nagpur", "Jul 25, 2025", "10:30", "Rejected", "#6b7280"],
//   ].map(([customer, valleyBoy,Hotel,HotelBranch, date, time, status, color], index) => (
//     <tr key={index} className="border-t border-gray-100">
//       <td className="py-2">{customer}</td>
//       <td className="py-2">{valleyBoy}</td>
//       <td className="py-2">{Hotel}</td>
//       <td className="py-2">{HotelBranch}</td>
//       <td className="py-2">{date}</td>
//       <td className="py-2">{time}</td>
//       <td className="py-2">
//         <span
//           className={`px-3 py-1 rounded-full text-xs`} // Already small
//           style={{
//             backgroundColor: `${color}33`,
//             color: color,
//           }}
//         >
//           {status}
//         </span>
//       </td>
//     </tr>
//   ))}
// </tbody>

//         </table>
//       </div>
//     </div>
//   )
// }
// import React from 'react'
// import { MoreHorizontal } from 'lucide-react'

// export default function ParkingStatus() {
//   return (
//     <div className="bg-white rounded-xl p-6 mb-8 shadow-md">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-xl font-semibold text-gray-800">Parking Status</h2>
//         <button className="hover:bg-gray-100 p-2 rounded-lg transition-colors">
//           <MoreHorizontal className="h-5 w-5 text-gray-500" />
//         </button>
//       </div>

//       <div className="overflow-x-auto">
//         <table className="w-full">
//           <thead>
//             <tr className="text-left text-sm border-b border-gray-200">
//               <th className="pb-4 font-medium text-gray-700 uppercase tracking-wide">Customer</th>
//               <th className="pb-4 font-medium text-gray-700 uppercase tracking-wide">Valley Boy</th>
//               <th className="pb-4 font-medium text-gray-700 uppercase tracking-wide">Hotel</th>
//               <th className="pb-4 font-medium text-gray-700 uppercase tracking-wide">Branch</th>
//               <th className="pb-4 font-medium text-gray-700 uppercase tracking-wide">Date</th>
//               <th className="pb-4 font-medium text-gray-700 uppercase tracking-wide">Time</th>
//               <th className="pb-4 font-medium text-gray-700 uppercase tracking-wide">Status</th>
//             </tr>
//           </thead>
//           <tbody className="text-sm divide-y divide-gray-200">
//             {[
//               ["ByeWind", "ByeWind", "Radison", "Nagpur", "Jun 24, 2025", "14:02", "In Progress"],
//               ["Natali Craig", "Natali Craig", "Center Point", "Airport", "Mar 10, 2025", "09:00", "Complete"],
//               ["Drew Cano", "Drew Cano", "Régenta", "Mumbai", "Nov 10, 2025", "06:36", "Pending"],
//               ["Orlando Diggs", "Orlando Diggs", "Taj", "Delhi", "Dec 20, 2025", "18:00", "Approved"],
//               ["Andi Lane", "Andi Lane", "Radison", "Nagpur", "Jul 25, 2025", "10:30", "Rejected"],
//             ].map(([customer, valleyBoy, Hotel, HotelBranch, date, time, status], index) => (
//               <tr key={index} className="hover:bg-gray-50 transition-colors">
//                 <td className="py-3 text-gray-900 font-medium">{customer}</td>
//                 <td className="py-3 text-gray-600">{valleyBoy}</td>
//                 <td className="py-3 text-gray-600">{Hotel}</td>
//                 <td className="py-3 text-gray-600">{HotelBranch}</td>
//                 <td className="py-3 text-gray-600">{date}</td>
//                 <td className="py-3 text-gray-600">{time}</td>
//                 <td className="py-3">
//                   <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
//                     status === 'In Progress' ? 'bg-purple-100 text-purple-800' :
//                     status === 'Complete' ? 'bg-green-100 text-green-800' :
//                     status === 'Pending' ? 'bg-blue-100 text-blue-800' :
//                     status === 'Approved' ? 'bg-yellow-100 text-yellow-800' :
//                     'bg-red-100 text-red-800'
//                   }`}>
//                     {status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }
// import React from 'react'
// import { MoreHorizontal } from 'lucide-react'

// export default function ParkingStatus() {
//   return (
//     <div className="bg-white rounded-xl p-6 mb-8 shadow-md h-[400px] flex flex-col">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-xl font-semibold text-gray-800">Parking Status</h2>
//         <button className="hover:bg-gray-100 p-2 rounded-lg transition-colors">
//           <MoreHorizontal className="h-5 w-5 text-gray-500" />
//         </button>
//       </div>

//       <div className="overflow-x-auto flex-1">
//         <table className="w-full">
//           <thead>
//             <tr className="text-left text-sm border-b border-gray-200 sticky top-0 bg-white">
//               <th className="pb-4 font-medium text-gray-700 uppercase tracking-wide">Customer</th>
//               <th className="pb-4 font-medium text-gray-700 uppercase tracking-wide">Valley Boy</th>
//               <th className="pb-4 font-medium text-gray-700 uppercase tracking-wide">Hotel</th>
//               <th className="pb-4 font-medium text-gray-700 uppercase tracking-wide">Branch</th>
//               <th className="pb-4 font-medium text-gray-700 uppercase tracking-wide">Date</th>
//               <th className="pb-4 font-medium text-gray-700 uppercase tracking-wide">Time</th>
//               <th className="pb-4 font-medium text-gray-700 uppercase tracking-wide">Status</th>
//             </tr>
//           </thead>
//           <tbody className="text-sm divide-y divide-gray-200">
//             {[
//               ["ByeWind", "ByeWind", "Radison", "Nagpur", "Jun 24, 2025", "14:02", "In Progress"],
//               ["Natali Craig", "Natali Craig", "Center Point", "Airport", "Mar 10, 2025", "09:00", "Complete"],
//               ["Drew Cano", "Drew Cano", "Régenta", "Mumbai", "Nov 10, 2025", "06:36", "Pending"],
//               ["Orlando Diggs", "Orlando Diggs", "Taj", "Delhi", "Dec 20, 2025", "18:00", "Approved"],
//               ["Andi Lane", "Andi Lane", "Radison", "Nagpur", "Jul 25, 2025", "10:30", "Rejected"],
//               // Add more dummy data to test scrolling
//               ...Array(10).fill(["John Doe", "John Doe", "Grand Hotel", "Central", "Jan 1, 2025", "12:00", "Pending"])
//             ].map(([customer, valleyBoy, Hotel, HotelBranch, date, time, status], index) => (
//               <tr key={index} className="hover:bg-gray-50 transition-colors">
//                 <td className="py-3 text-gray-900 font-medium">{customer}</td>
//                 <td className="py-3 text-gray-600">{valleyBoy}</td>
//                 <td className="py-3 text-gray-600">{Hotel}</td>
//                 <td className="py-3 text-gray-600">{HotelBranch}</td>
//                 <td className="py-3 text-gray-600">{date}</td>
//                 <td className="py-3 text-gray-600">{time}</td>
//                 <td className="py-3">
//                   <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
//                     status === 'In Progress' ? 'bg-purple-100 text-purple-800' :
//                     status === 'Complete' ? 'bg-green-100 text-green-800' :
//                     status === 'Pending' ? 'bg-blue-100 text-blue-800' :
//                     status === 'Approved' ? 'bg-yellow-100 text-yellow-800' :
//                     'bg-red-100 text-red-800'
//                   }`}>
//                     {status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   )
// }
// import React, { useState, useRef, useEffect } from 'react';
// import { MoreHorizontal } from 'lucide-react';
// import PDFExporter from '../Reusablecode/PDFExporter';
// import ExcelExporter from '../Reusablecode/ExcelExporter';
// import Header from '@/components/shared/header';
// export default function ParkingStatus() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const menuRef = useRef(null);

//   const tableContent = {
//     headers: ["Customer", "Valley Boy", "Hotel", "Branch", "Date", "Time", "Status"],
//     data: [
//       ["ByeWind", "ByeWind", "Radison", "Nagpur", "Jun 24, 2025", "14:02", "In Progress"],
//       ["Natali Craig", "Natali Craig", "Center Point", "Airport", "Mar 10, 2025", "09:00", "Complete"],
//       ["Drew Cano", "Drew Cano", "Régenta", "Mumbai", "Nov 10, 2025", "06:36", "Pending"],
//       ["Orlando Diggs", "Orlando Diggs", "Taj", "Delhi", "Dec 20, 2025", "18:00", "Approved"],
//       ["Andi Lane", "Andi Lane", "Radison", "Nagpur", "Jul 25, 2025", "10:30", "Rejected"],
//       ...Array(10).fill(["John Doe", "John Doe", "Grand Hotel", "Central", "Jan 1, 2025", "12:00", "Pending"])
//     ]
//   };

//   useEffect(() => {
//     const handleClickOutside = (event) => {
//       if (menuRef.current && !menuRef.current.contains(event.target)) {
//         setMenuOpen(false);
//       }
//     };
//     document.addEventListener('mousedown', handleClickOutside);
//     return () => document.removeEventListener('mousedown', handleClickOutside);
//   }, []);

//   const handleDownload = (type) => {
//     alert(`Download as ${type} clicked`);
//     setMenuOpen(false);
//   };
//   const exportToPDF = PDFExporter({
//   title: 'Parking Status Report',
//   columns: tableContent.headers.map((header, index) => ({
//     Header: header,
//     accessor: index, // We'll use index to access data in the row array
//   })),
//   data: tableContent.data.map(row => {
//     const rowObj = {};
//     tableContent.headers.forEach((header, i) => {
//       rowObj[i] = row[i]; // use index as key
//     });
//     return rowObj;
//   }),
//   fileName: 'ParkingStatus.pdf',
// });
// const exportToExcel = ExcelExporter({
//   columns: tableContent.headers.map((header, index) => ({
//     Header: header,
//     accessor: index.toString(), // accessor should be a string for most libraries
//   })),
//   data: tableContent.data.map(row => {
//     const rowObj = {};
//     tableContent.headers.forEach((_, i) => {
//       rowObj[i.toString()] = row[i]; // use string key for consistency
//     });
//     return rowObj;
//   }),
//   fileName: 'ParkingStatus.xlsx', // corrected extension
//   mytitle: 'Parking Status Report',
// });

//   return (
//     <div className="bg-white rounded-xl p-6 mb-8 shadow-md h-[400px] flex flex-col relative">
//       <div className="flex justify-between items-center mb-6">
//         <h2 className="text-xl font-semibold text-gray-800">Parking Status</h2>
//         <div className="relative" ref={menuRef}>
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="hover:bg-gray-100 p-2 rounded-lg transition-colors"
//           >
//             <MoreHorizontal className="h-5 w-5 text-gray-500" />
//           </button>
//           {menuOpen && (
//             <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg z-10">
//               <button
//                 onClick={exportToPDF}
//                 className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//               >
//                 Download PDF
//               </button>
//               <button
//                 onClick={exportToExcel}
//                 className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
//               >
//                 Download Excel
//               </button>
//             </div>
//           )}
//         </div>
//       </div>

//       <div className="overflow-x-auto flex-1">
//         <table className="w-full">
//           <thead>
//             <tr className="text-left text-sm border-b border-gray-200 sticky top-0 bg-white">
//               {tableContent.headers.map((header, idx) => (
//                 <th key={idx} className="pb-4 font-medium text-gray-700 uppercase tracking-wide hover:bg-transparent">
//                   {header}
//                 </th>
//               ))}
//             </tr>
//           </thead>
//           <tbody className="text-sm divide-y divide-gray-200">
//             {tableContent.data.map(([customer, valleyBoy, Hotel, HotelBranch, date, time, status], index) => (
//               <tr key={index} >
//                 <td className="py-3 text-gray-900 font-medium">{customer}</td>
//                 <td className="py-3 text-gray-600">{valleyBoy}</td>
//                 <td className="py-3 text-gray-600">{Hotel}</td>
//                 <td className="py-3 text-gray-600">{HotelBranch}</td>
//                 <td className="py-3 text-gray-600">{date}</td>
//                 <td className="py-3 text-gray-600">{time}</td>
//                 <td className="py-3">
//                   <span className={`px-2.5 py-1 rounded-full text-xs font-medium ${
//                     status === 'In Progress' ? 'bg-purple-100 text-purple-800' :
//                     status === 'Complete' ? 'bg-green-100 text-green-800' :
//                     status === 'Pending' ? 'bg-blue-100 text-blue-800' :
//                     status === 'Approved' ? 'bg-yellow-100 text-yellow-800' :
//                     'bg-red-100 text-red-800'
//                   }`}>
//                     {status}
//                   </span>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// }
import React, { useState, useRef, useEffect } from 'react';
import { MoreHorizontal } from 'lucide-react';
import PDFExporter from '../Reusablecode/PDFExporter';
import ExcelExporter from '../Reusablecode/ExcelExporter';
import Header from '@/components/shared/header';
import { StyledTablePagination } from '../Reusablecode/TablePaginationStyles';
import TablePagination from '@mui/material/TablePagination';

export default function ParkingStatus() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const tableContent = {
    headers: [
      'Customer',
      'Valley Boy',
      'Hotel',
      'Branch',
      'Date',
      'Time',
      'Status'
    ],
    data: [
      [
        'ByeWind',
        'ByeWind',
        'Radison',
        'Nagpur',
        'Jun 24, 2025',
        '14:02',
        'In Progress'
      ],
      [
        'Natali Craig',
        'Natali Craig',
        'Center Point',
        'Airport',
        'Mar 10, 2025',
        '09:00',
        'Complete'
      ],
      [
        'Drew Cano',
        'Drew Cano',
        'Régenta',
        'Mumbai',
        'Nov 10, 2025',
        '06:36',
        'Pending'
      ],
      [
        'Orlando Diggs',
        'Orlando Diggs',
        'Taj',
        'Delhi',
        'Dec 20, 2025',
        '18:00',
        'Approved'
      ],
      [
        'Andi Lane',
        'Andi Lane',
        'Radison',
        'Nagpur',
        'Jul 25, 2025',
        '10:30',
        'Rejected'
      ],
      ...Array(10).fill([
        'John Doe',
        'John Doe',
        'Grand Hotel',
        'Central',
        'Jan 1, 2025',
        '12:00',
        'Pending'
      ])
    ]
  };

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
    columns: tableContent.headers.map((header, index) => ({
      Header: header,
      accessor: index
    })),
    data: tableContent.data.map((row) => {
      const rowObj = {};
      tableContent.headers.forEach((header, i) => {
        rowObj[i] = row[i];
      });
      return rowObj;
    }),
    fileName: 'ParkingStatus.pdf'
  });

  const exportToExcel = ExcelExporter({
    columns: tableContent.headers.map((header, index) => ({
      Header: header,
      accessor: index.toString()
    })),
    data: tableContent.data.map((row) => {
      const rowObj = {};
      tableContent.headers.forEach((_, i) => {
        rowObj[i.toString()] = row[i];
      });
      return rowObj;
    }),
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
      ? tableContent.data.slice(
          page * rowsPerPage,
          page * rowsPerPage + rowsPerPage
        )
      : tableContent.data;

  return (
    <div className="relative mb-8 flex max-h-[calc(100vh-200px)] flex-col rounded-xl bg-white p-6 pb-0 shadow-md">
      <div className="mb-6 flex items-center justify-between">
        <h2 className="text-xl font-semibold text-gray-800">Parking Status</h2>
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

      <div className="flex-1 overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="sticky top-0 border-b border-gray-200 bg-white text-left text-sm">
              {tableContent.headers.map((header, idx) => (
                <th
                  key={idx}
                  className="pb-4 font-medium uppercase tracking-wide text-gray-700 hover:bg-transparent"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-sm">
            {paginatedData.map(
              (
                [customer, valleyBoy, Hotel, HotelBranch, date, time, status],
                index
              ) => (
                <tr key={index}>
                  <td className="py-3 font-medium text-gray-900">{customer}</td>
                  <td className="py-3 text-gray-600">{valleyBoy}</td>
                  <td className="py-3 text-gray-600">{Hotel}</td>
                  <td className="py-3 text-gray-600">{HotelBranch}</td>
                  <td className="py-3 text-gray-600">{date}</td>
                  <td className="py-3 text-gray-600">{time}</td>
                  <td className="py-3">
                    <span
                      className={`rounded-full px-2.5 py-1 text-xs font-medium ${
                        status === 'In Progress'
                          ? 'bg-purple-100 text-purple-800'
                          : status === 'Complete'
                            ? 'bg-green-100 text-green-800'
                            : status === 'Pending'
                              ? 'bg-blue-100 text-blue-800'
                              : status === 'Approved'
                                ? 'bg-yellow-100 text-yellow-800'
                                : 'bg-red-100 text-red-800'
                      }`}
                    >
                      {status}
                    </span>
                  </td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
      <div className="mt-4">
        <StyledTablePagination>
          <TablePagination
            rowsPerPageOptions={[{ label: 'All', value: -1 }, 1, 10, 25, 100]}
            component="div"
            count={tableContent.data.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </StyledTablePagination>
      </div>
    </div>
  );
}
