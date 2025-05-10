import React from 'react';
import Chart1 from './Chart1';
import Chart2 from './Chart2';
import Chart3 from './Chart3';

const ResearchCards = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 font-manrope mt-6">
            {/* Total Users Card */}
            <div className="bg-gradient-to-r from-white to-green-150/20 rounded-[20px] p-6 flex flex-col border border-gray-250 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center space-x-3">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M16.4546 10.8337C17.1137 9.88883 17.5002 8.73966 17.5002 7.50033C17.5002 4.27867 14.8885 1.66699 11.6668 1.66699C8.44516 1.66699 5.8335 4.27866 5.8335 7.50033C5.8335 8.39499 6.0349 9.24258 6.39485 10.0003" stroke="#727A90" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.6667 5.00033C10.7462 5.00033 10 5.55997 10 6.25033C10 6.94068 10.7462 7.50033 11.6667 7.50033C12.5872 7.50033 13.3333 8.05997 13.3333 8.75033C13.3333 9.44066 12.5872 10.0003 11.6667 10.0003M11.6667 5.00033C12.3923 5.00033 13.0097 5.34816 13.2385 5.83366M11.6667 5.00033V4.16699M11.6667 10.0003C10.941 10.0003 10.3237 9.65249 10.0948 9.16699M11.6667 10.0003V10.8337" stroke="#727A90" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M2.5 11.667H4.49568C4.74081 11.667 4.98257 11.7222 5.20181 11.8283L6.90346 12.6517C7.1227 12.7577 7.36446 12.8129 7.60958 12.8129H8.47842C9.31875 12.8129 10 13.4722 10 14.2853C10 14.3182 9.9775 14.3471 9.94483 14.3561L7.82739 14.9416C7.44756 15.0466 7.04083 15.01 6.6875 14.839L4.86843 13.9589M10 13.7503L13.8273 12.5744C14.5058 12.363 15.2392 12.6137 15.6642 13.2022C15.9716 13.6277 15.8464 14.2372 15.3987 14.4955L9.13575 18.1091C8.73742 18.3389 8.26745 18.395 7.8293 18.265L2.5 16.6836" stroke="#727A90" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <h2 className="text-base font-medium text-gray-350">Check Ins</h2>
                </div>
                <div className="flex items-baseline space-x-3">
                    <p className="text-2xl font-bold text-black-150 font-averia mt-3">45%</p>

                </div>
                <div className='flex justify-end'>
                    <Chart3 />
                </div>
                <div className="flex items-center space-x-1 text-gray-350 gap-1">
                    <span className="text-base font-medium">All users count</span>

                </div>
            </div>

            {/* Total Revenue Card */}
            <div className="bg-gradient-to-r from-white to-green-150/20 rounded-[20px] p-6 flex flex-col border border-gray-250 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center space-x-3">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_2_11384)">
                            <path d="M18.3332 10.0003C18.3332 14.6027 14.6022 18.3337 9.99984 18.3337C5.39746 18.3337 1.6665 14.6027 1.6665 10.0003C1.6665 5.39795 5.39746 1.66699 9.99984 1.66699C14.6022 1.66699 18.3332 5.39795 18.3332 10.0003Z" stroke="#727A90" stroke-width="1.5" />
                            <path d="M12.2583 8.38457C12.1758 7.74902 11.446 6.72217 10.1338 6.72215C8.60917 6.72212 7.96763 7.56654 7.83746 7.98875C7.63438 8.55349 7.67499 9.71457 9.46208 9.84116C11.696 9.99949 12.5909 10.2632 12.4771 11.6303C12.3632 12.9974 11.1179 13.2928 10.1338 13.2611C9.14967 13.2295 7.53953 12.7774 7.47705 11.5614M9.97767 5.83203V6.72517M9.97767 13.2529V14.1653" stroke="#727A90" stroke-width="1.5" stroke-linecap="round" />
                        </g>
                        <defs>
                            <clipPath id="clip0_2_11384">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                    <h2 className="text-base font-medium text-gray-350">Check Outs</h2>
                </div>
                <div className="flex items-baseline space-x-3">
                    <p className="text-2xl font-bold text-black-150 font-averia mt-3">65%</p>

                </div>
                <div className='flex justify-end'>
                    <Chart1 />
                </div>
                <div className="flex items-center space-x-1 text-green-350 gap-1">
                    <span className="text-base font-medium">5%</span>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.27325 5.66656H8.72658C8.85843 5.66601 8.98715 5.62638 9.09647 5.55267C9.2058 5.47896 9.29081 5.37449 9.34076 5.25247C9.39071 5.13045 9.40336 4.99635 9.3771 4.86714C9.35084 4.73794 9.28686 4.61941 9.19325 4.52657L5.47325 0.806574C5.41127 0.744088 5.33754 0.694492 5.2563 0.660646C5.17506 0.626801 5.08792 0.609375 4.99991 0.609375C4.91191 0.609375 4.82477 0.626801 4.74353 0.660646C4.66229 0.694492 4.58856 0.744088 4.52658 0.806574L0.80658 4.52657C0.712966 4.61941 0.648985 4.73794 0.622728 4.86714C0.596471 4.99635 0.609118 5.13045 0.659068 5.25247C0.709018 5.37449 0.79403 5.47896 0.903352 5.55267C1.01267 5.62638 1.1414 5.66601 1.27325 5.66656V5.66656Z" fill="#009499" />
                    </svg>
                    <span className="text-base font-medium text-gray-350">156</span>
                </div>
            </div>
            <div className="bg-gradient-to-r from-white to-green-150/20 rounded-[20px] p-6 flex flex-col border border-gray-250 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center space-x-3">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.93182 8.58849C2.60844 7.69346 2.44675 7.24596 2.5157 6.9592C2.59111 6.64555 2.81416 6.40103 3.09927 6.31946C3.35994 6.24488 3.76544 6.4251 4.57644 6.78555C5.29377 7.10438 5.65244 7.26378 5.98943 7.25492C6.36047 7.24515 6.7174 7.09636 7.00133 6.83308C7.25921 6.59397 7.43217 6.21293 7.77811 5.45086L8.5405 3.77137C9.17733 2.36845 9.49575 1.66699 10 1.66699C10.5042 1.66699 10.8227 2.36845 11.4595 3.77137L12.2219 5.45086C12.5678 6.21293 12.7408 6.59397 12.9987 6.83308C13.2826 7.09636 13.6395 7.24515 14.0106 7.25492C14.3476 7.26378 14.7062 7.10438 15.4236 6.78555C16.2346 6.4251 16.6401 6.24488 16.9007 6.31946C17.1858 6.40103 17.4089 6.64555 17.4843 6.9592C17.5532 7.24596 17.3916 7.69346 17.0682 8.58841L15.6782 12.4355C15.0835 14.0812 14.7862 14.904 14.164 15.3688C13.5418 15.8337 12.7378 15.8337 11.1298 15.8337H8.87016C7.26216 15.8337 6.45814 15.8337 5.83596 15.3688C5.21378 14.904 4.91647 14.0812 4.32185 12.4355L2.93182 8.58849Z" stroke="#727A90" stroke-width="1.5" />
                        <path d="M10 11.667H10.0075" stroke="#727A90" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5.83301 18.333H14.1663" stroke="#727A90" stroke-width="1.5" stroke-linecap="round" />
                    </svg>


                    <h2 className="text-base font-medium text-gray-350">Problem solving tool</h2>
                </div>
                <div className="flex items-baseline space-x-3">
                    <p className="text-2xl font-bold text-black-150 font-averia mt-3">50%</p>

                </div>
                <div className='flex justify-end'>
                    <Chart3 />
                </div>
                <div className="flex items-center space-x-1 text-green-350 gap-1">
                    <span className="text-base font-medium">5%</span>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.27325 5.66656H8.72658C8.85843 5.66601 8.98715 5.62638 9.09647 5.55267C9.2058 5.47896 9.29081 5.37449 9.34076 5.25247C9.39071 5.13045 9.40336 4.99635 9.3771 4.86714C9.35084 4.73794 9.28686 4.61941 9.19325 4.52657L5.47325 0.806574C5.41127 0.744088 5.33754 0.694492 5.2563 0.660646C5.17506 0.626801 5.08792 0.609375 4.99991 0.609375C4.91191 0.609375 4.82477 0.626801 4.74353 0.660646C4.66229 0.694492 4.58856 0.744088 4.52658 0.806574L0.80658 4.52657C0.712966 4.61941 0.648985 4.73794 0.622728 4.86714C0.596471 4.99635 0.609118 5.13045 0.659068 5.25247C0.709018 5.37449 0.79403 5.47896 0.903352 5.55267C1.01267 5.62638 1.1414 5.66601 1.27325 5.66656V5.66656Z" fill="#009499" />
                    </svg>
                    <span className="text-base font-medium text-gray-350">8</span>
                </div>
            </div>
            {/* Avg. User Active Time Card */}
            <div className="bg-gradient-to-r from-white to-green-150/20 rounded-[20px] p-6 flex flex-col border border-gray-250 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center space-x-3">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M2.93182 8.58849C2.60844 7.69346 2.44675 7.24596 2.5157 6.9592C2.59111 6.64555 2.81416 6.40103 3.09927 6.31946C3.35994 6.24488 3.76544 6.4251 4.57644 6.78555C5.29377 7.10438 5.65244 7.26378 5.98943 7.25492C6.36047 7.24515 6.7174 7.09636 7.00133 6.83308C7.25921 6.59397 7.43217 6.21293 7.77811 5.45086L8.5405 3.77137C9.17733 2.36845 9.49575 1.66699 10 1.66699C10.5042 1.66699 10.8227 2.36845 11.4595 3.77137L12.2219 5.45086C12.5678 6.21293 12.7408 6.59397 12.9987 6.83308C13.2826 7.09636 13.6395 7.24515 14.0106 7.25492C14.3476 7.26378 14.7062 7.10438 15.4236 6.78555C16.2346 6.4251 16.6401 6.24488 16.9007 6.31946C17.1858 6.40103 17.4089 6.64555 17.4843 6.9592C17.5532 7.24596 17.3916 7.69346 17.0682 8.58841L15.6782 12.4355C15.0835 14.0812 14.7862 14.904 14.164 15.3688C13.5418 15.8337 12.7378 15.8337 11.1298 15.8337H8.87016C7.26216 15.8337 6.45814 15.8337 5.83596 15.3688C5.21378 14.904 4.91647 14.0812 4.32185 12.4355L2.93182 8.58849Z" stroke="#727A90" stroke-width="1.5" />
                        <path d="M10 11.667H10.0075" stroke="#727A90" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M5.83301 18.333H14.1663" stroke="#727A90" stroke-width="1.5" stroke-linecap="round" />
                    </svg>


                    <h2 className="text-base font-medium text-gray-350">Tasha</h2>
                </div>
                <div className="flex items-baseline space-x-3">
                    <p className="text-2xl font-bold text-black-150 font-averia mt-3">40%</p>

                </div>
                <div className='flex justify-end'>
                    <Chart3 />
                </div>
                <div className="flex items-center space-x-1 text-green-350 gap-1">
                    <span className="text-base font-medium">20%</span>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.27325 5.66656H8.72658C8.85843 5.66601 8.98715 5.62638 9.09647 5.55267C9.2058 5.47896 9.29081 5.37449 9.34076 5.25247C9.39071 5.13045 9.40336 4.99635 9.3771 4.86714C9.35084 4.73794 9.28686 4.61941 9.19325 4.52657L5.47325 0.806574C5.41127 0.744088 5.33754 0.694492 5.2563 0.660646C5.17506 0.626801 5.08792 0.609375 4.99991 0.609375C4.91191 0.609375 4.82477 0.626801 4.74353 0.660646C4.66229 0.694492 4.58856 0.744088 4.52658 0.806574L0.80658 4.52657C0.712966 4.61941 0.648985 4.73794 0.622728 4.86714C0.596471 4.99635 0.609118 5.13045 0.659068 5.25247C0.709018 5.37449 0.79403 5.47896 0.903352 5.55267C1.01267 5.62638 1.1414 5.66601 1.27325 5.66656V5.66656Z" fill="#009499" />
                    </svg>
                    <span className="text-base font-medium text-gray-350">+8</span>

                </div>
            </div>
        </div>
    );
};

export default ResearchCards;