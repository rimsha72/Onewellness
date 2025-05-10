import React from 'react';
import { useNavigate } from 'react-router-dom';
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/profile3.png";
import profile4 from "../assets/profile4.png";
import profile5 from "../assets/profile5.png";

const BusinessTable = () => {
  const navigate = useNavigate();

  const users = [
    { id: 1, name: 'John Bushmill', date: '26 September 2024', email: 'John123b@email.com', subscription: 'Annual - $150', avatar: profile1, noOfEmployees: 50 },
    { id: 2, name: 'Sarah Thompson', date: '27 September 2024', email: 'Alice456c@email.com', subscription: 'Annual - $150', avatar: profile2, noOfEmployees: 60 },
    { id: 3, name: 'Michael Chang', date: '28 September 2024', email: 'Bob789d@email.com', subscription: 'Annual - $150', avatar: profile3, noOfEmployees: 78 },
    { id: 4, name: 'Emily Rodriguez', date: '29 September 2024', email: 'Eve012e@email.com', subscription: 'Annual - $150', avatar: profile4, noOfEmployees: 52 },
    { id: 5, name: 'David Patel', date: '30 September 2024', email: 'Grace345f@email.com', subscription: 'Annual - $150', avatar: profile5, noOfEmployees: 41 },
  ];

  const handleViewDetails = (id) => {
    navigate(`/businesses/${id}`);
  };

  return (
    <div className="w-full font-manrope">
      {/* Header */}
      <div className="flex justify-between items-center px-6 py-4">
        <h2 className="text-[20px] font-semibold text-black-250">All Businesses</h2>
        <button className="cursor-pointer flex items-center space-x-2 font-medium text-sm text-gray-350 hover:text-gray-800 border border-gray-250 rounded-[10px] p-2">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M15 1.66699V3.33366M5 1.66699V3.33366" stroke="#727A90" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.99658 10.833H10.0041M9.99658 14.1663H10.0041M13.3262 10.833H13.3337M6.66699 10.833H6.67447M6.66699 14.1663H6.67447" stroke="#727A90" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M2.91699 6.66699H17.0837" stroke="#727A90" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M2.08301 10.2027C2.08301 6.57162 2.08301 4.75607 3.12644 3.62803C4.16987 2.5 5.84925 2.5 9.20801 2.5H10.7913C14.1501 2.5 15.8295 2.5 16.8729 3.62803C17.9163 4.75607 17.9163 6.57162 17.9163 10.2027V10.6307C17.9163 14.2617 17.9163 16.0773 16.8729 17.2053C15.8295 18.3333 14.1501 18.3333 10.7913 18.3333H9.20801C5.84925 18.3333 4.16987 18.3333 3.12644 17.2053C2.08301 16.0773 2.08301 14.2617 2.08301 10.6307V10.2027Z" stroke="#727A90" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M2.5 6.66699H17.5" stroke="#727A90" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
          </svg>
          <span>Date</span>
        </button>
      </div>

      {/* Table */}
      <div className="overflow-x-auto my-4">
        <table className="w-full text-left text-base text-gray-350">
          <thead className="border-b border-t border-gray-250 font-medium">
            <tr>
              <th className="py-4 px-4 font-medium">Business Name</th>
              <th className="py-4 px-4 font-medium">Onboarding Date</th>
              <th className="py-4 px-4 font-medium">No of Employees</th>
              <th className="py-4 px-4 font-medium">Subscription</th>
              <th className="py-4 px-4 font-medium flex gap-2 items-center">Actions <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M4.81039 6.75H13.1894C13.3377 6.75003 13.4827 6.79404 13.606 6.87645C13.7293 6.95886 13.8254 7.07598 13.8821 7.21301C13.9389 7.35003 13.9538 7.50081 13.9248 7.64627C13.8959 7.79174 13.8245 7.92536 13.7196 8.03025L9.53014 12.2197C9.38949 12.3603 9.19876 12.4393 8.99989 12.4393C8.80101 12.4393 8.61028 12.3603 8.46964 12.2197L4.28014 8.03025C4.17528 7.92536 4.10388 7.79174 4.07495 7.64627C4.04602 7.50081 4.06088 7.35003 4.11763 7.21301C4.17438 7.07598 4.27049 6.95886 4.39379 6.87645C4.5171 6.79404 4.66207 6.75003 4.81039 6.75Z" fill="#8E95A6" />
              </svg>
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="border-b border-gray-250 hover:bg-gray-50 text-black-150 font-medium">
                <td className="py-4 px-4 flex flex-col space-y-1">
                  <span>{user.name}</span>
                  <td className="text-gray-350">{user.email}</td>
                </td>
                <td className="py-4 px-4">{user.date}</td>
                <td className="py-4 px-4 text-gray-350">{user.noOfEmployees}</td>
                <td className="py-4 px-4">{user.subscription}</td>
                <td className="py-4 px-4">
                  <button
                    className="cursor-pointer bg-green-150 font-medium hover:translate-0.5 text-white text-sm py-2 px-3 rounded-xl transition duration-200"
                    onClick={() => handleViewDetails(user.id)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex justify-between items-center mt-4 text-sm text-gray-350 font-medium px-4 mb-4">
        <span>Showing 1–5 of 100</span>
        <div className="flex space-x-2">
          <button className="px-4 py-2 border border-gray-250 rounded-[10px] hover:bg-gray-100 flex items-center justify-center">
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4.86015 9.39328L1.14015 5.66661C1.01598 5.5417 0.946289 5.37274 0.946289 5.19661C0.946289 5.02049 1.01598 4.85152 1.14015 4.72661L4.86015 0.999945C4.9534 0.905925 5.07253 0.841805 5.20236 0.815759C5.3322 0.789712 5.46684 0.80292 5.58914 0.853698C5.71144 0.904475 5.81584 0.990523 5.88904 1.10087C5.96224 1.21122 6.00092 1.34086 6.00015 1.47328V8.91994C6.00092 9.05236 5.96224 9.18201 5.88904 9.29235C5.81584 9.4027 5.71144 9.48875 5.58914 9.53952C5.46684 9.5903 5.3322 9.60351 5.20236 9.57746C5.07253 9.55142 4.9534 9.4873 4.86015 9.39328Z" fill="#686F83" />
            </svg>
          </button>
          <button className="px-4 py-2 border border-gray-250 rounded-[10px] hover:bg-gray-100">1</button>
          <button className="px-4 py-2 border border-gray-250 rounded-[10px] hover:bg-gray-100">2</button>
          <button className="px-4 py-2 border border-gray-250 rounded-[10px] hover:bg-gray-100">3</button>
          <button className="px-4 py-2 border border-gray-250 rounded-[10px] hover:bg-gray-100 flex items-center justify-center hover:translate-2">
            <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.12779e-05 8.91994V1.47328C-0.000758787 1.34086 0.0379226 1.21122 0.111123 1.10087C0.184324 0.990523 0.288728 0.904475 0.411024 0.853698C0.53332 0.80292 0.667968 0.789712 0.7978 0.815759C0.927632 0.841805 1.04677 0.905925 1.14001 0.999945L4.86002 4.72661C4.98419 4.85152 5.05388 5.02049 5.05388 5.19661C5.05388 5.37274 4.98419 5.5417 4.86002 5.66661L1.14001 9.39328C1.04677 9.4873 0.927632 9.55142 0.7978 9.57746C0.667968 9.60351 0.53332 9.5903 0.411024 9.53952C0.288728 9.48875 0.184324 9.4027 0.111123 9.29235C0.0379226 9.18201 -0.000758787 9.05236 1.12779e-05 8.91994Z" fill="#686F83" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default BusinessTable;