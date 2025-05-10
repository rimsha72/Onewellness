import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/profile3.png";
import profile4 from "../assets/profile4.png";
import profile5 from "../assets/profile5.png";
import React from 'react';

const PremiumUsers = () => {
    const users = [
        { name: 'John Bushmill', date: '26 September 2024', email: 'John123b@email.com', feeling: 'Energetic', avatar: profile1 },
        { name: 'Sarah Thompson', date: '27 September 2024', email: 'Alice456c@email.com', feeling: 'Sad', avatar: profile2 },
        { name: 'Michael Chang', date: '28 September 2024', email: 'Bob789d@email.com', feeling: 'Motivated', avatar: profile3 },
        { name: 'Emily Rodriguez', date: '29 September 2024', email: 'Eve012e@email.com', feeling: 'Happy', avatar: profile4 },
        { name: 'David Patel', date: '30 September 2024', email: 'Grace345f@email.com', feeling: 'Confused', avatar: profile5 },
    ];

    return (
        <div className="w-full font-manrope">
            {/* Header */}
            <div className="flex justify-between items-center px-6 pt-2">
                <h2 className="text-[20px] font-semibold text-black-250">Premium Users</h2>
                <button className="flex items-center space-x-2 cursor-pointer font-medium text-sm text-gray-350 hover:text-gray-800 border border-gray-250 rounded-[10px] p-2">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_2_3904)">
                            <path d="M18.3337 9.99984C18.3337 5.39746 14.6027 1.6665 10.0003 1.6665C5.39795 1.6665 1.66699 5.39746 1.66699 9.99984C1.66699 14.6022 5.39795 18.3332 10.0003 18.3332C14.6027 18.3332 18.3337 14.6022 18.3337 9.99984Z" stroke="#727A90" stroke-width="1.5" />
                            <path d="M7.5 10H12.5001" stroke="#727A90" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M8.33301 12.9165H11.6663" stroke="#727A90" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M6.66699 7.0835H13.3337" stroke="#727A90" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_2_3904">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                    <span>Filters</span>
                </button>
            </div>

            {/* Table */}
            <div className="overflow-x-auto mt-4">
                <table className="w-full text-left text-base text-gray-350">
                    <thead className="border-b border-t border-gray-250 font-medium">
                        <tr>
                            <th className="py-4 px-4 font-medium">Name</th>
                            <th className="py-4 px-4 font-medium">Onboarding Date</th>
                            <th className="py-4 px-4 font-medium">Email</th>
                            <th className="py-4 px-4 font-medium">Last Feeling</th>
                            <th className="py-4 px-4 font-medium flex gap-2 items-center">Actions <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M4.81039 6.75H13.1894C13.3377 6.75003 13.4827 6.79404 13.606 6.87645C13.7293 6.95886 13.8254 7.07598 13.8821 7.21301C13.9389 7.35003 13.9538 7.50081 13.9248 7.64627C13.8959 7.79174 13.8245 7.92536 13.7196 8.03025L9.53014 12.2197C9.38949 12.3603 9.19876 12.4393 8.99989 12.4393C8.80101 12.4393 8.61028 12.3603 8.46964 12.2197L4.28014 8.03025C4.17528 7.92536 4.10388 7.79174 4.07495 7.64627C4.04602 7.50081 4.06088 7.35003 4.11763 7.21301C4.17438 7.07598 4.27049 6.95886 4.39379 6.87645C4.5171 6.79404 4.66207 6.75003 4.81039 6.75Z" fill="#8E95A6" />
                            </svg>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user, index) => (
                            <tr key={index} className="border-b border-gray-250 hover:bg-gray-50 text-black-150 font-medium">
                                <td className="py-4 px-4 flex items-center space-x-3">
                                    <img src={user.avatar} className="w-[40px] h-[40px] rounded-full bg-gray-200" /> {/* Placeholder for avatar */}
                                    <span>{user.name}</span>
                                </td>
                                <td className="py-4 px-4">{user.date}</td>
                                <td className="py-4 px-4 text-gray-350">{user.email}</td>
                                <td className="py-4 px-4">{user.feeling}</td>
                                <td className="py-4 px-4">
                                    <button className="bg-green-150 cursor-pointer cursor-pointer font-medium text-white text-sm py-2 px-3 rounded-xl transition duration-200">
                                        View Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-4 text-sm text-gray-350 font-medium px-4">
                <span>Showing 1–5 of 100</span>
                <div className="flex space-x-2">
                    <button className="px-4 py-2 border border-gray-250 rounded-[10px] hover:bg-gray-100 flex items-center justify-center"><svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.86015 9.39328L1.14015 5.66661C1.01598 5.5417 0.946289 5.37274 0.946289 5.19661C0.946289 5.02049 1.01598 4.85152 1.14015 4.72661L4.86015 0.999945C4.9534 0.905925 5.07253 0.841805 5.20236 0.815759C5.3322 0.789712 5.46684 0.80292 5.58914 0.853698C5.71144 0.904475 5.81584 0.990523 5.88904 1.10087C5.96224 1.21122 6.00092 1.34086 6.00015 1.47328V8.91994C6.00092 9.05236 5.96224 9.18201 5.88904 9.29235C5.81584 9.4027 5.71144 9.48875 5.58914 9.53952C5.46684 9.5903 5.3322 9.60351 5.20236 9.57746C5.07253 9.55142 4.9534 9.4873 4.86015 9.39328Z" fill="#686F83" />
                    </svg>
                    </button>
                    <button className="px-4 py-2 border border-gray-250 rounded-[10px] hover:bg-gray-100">1</button>
                    <button className="px-4 py-2 border border-gray-250 rounded-[10px] hover:bg-gray-100">2</button>
                    <button className="px-4 py-2 border border-gray-250 rounded-[10px] hover:bg-gray-100">3</button>
                    <button className="px-4 py-2 border border-gray-250 rounded-[10px] hover:bg-gray-100 flex items-center justify-center">
                        <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1.12779e-05 8.91994V1.47328C-0.000758787 1.34086 0.0379226 1.21122 0.111123 1.10087C0.184324 0.990523 0.288728 0.904475 0.411024 0.853698C0.53332 0.80292 0.667968 0.789712 0.7978 0.815759C0.927632 0.841805 1.04677 0.905925 1.14001 0.999945L4.86002 4.72661C4.98419 4.85152 5.05388 5.02049 5.05388 5.19661C5.05388 5.37274 4.98419 5.5417 4.86002 5.66661L1.14001 9.39328C1.04677 9.4873 0.927632 9.55142 0.7978 9.57746C0.667968 9.60351 0.53332 9.5903 0.411024 9.53952C0.288728 9.48875 0.184324 9.4027 0.111123 9.29235C0.0379226 9.18201 -0.000758787 9.05236 1.12779e-05 8.91994Z" fill="#686F83" />
                        </svg>
                    </button>


                </div>
            </div>
        </div>
    );
};

export default PremiumUsers;