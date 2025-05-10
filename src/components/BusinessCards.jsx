import React from 'react';
import Chart1 from './Chart1';
import Chart2 from './Chart2';
import Chart3 from './Chart3';

const BusinessCards = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 font-manrope">
            {/* Total Users Card */}
            <div className="bg-gradient-to-r from-white to-green-150/20 rounded-[20px] p-6 flex flex-col border border-gray-250 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center space-x-3">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5.48131 12.9014C4.30234 13.6034 1.21114 15.0369 3.09389 16.8306C4.01359 17.7068 5.03791 18.3334 6.32573 18.3334H13.6743C14.9621 18.3334 15.9864 17.7068 16.9061 16.8306C18.7888 15.0369 15.6977 13.6034 14.5187 12.9014C11.754 11.2552 8.24599 11.2552 5.48131 12.9014Z" stroke="#727A90" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M13.75 5.41675C13.75 7.48781 12.0711 9.16675 10 9.16675C7.92893 9.16675 6.25 7.48781 6.25 5.41675C6.25 3.34568 7.92893 1.66675 10 1.66675C12.0711 1.66675 13.75 3.34568 13.75 5.41675Z" stroke="#727A90" stroke-width="1.5" />
                    </svg>
                    <h2 className="text-base font-medium text-gray-350">Total Users</h2>
                </div>
                <div className="flex items-baseline space-x-3">
                    <p className="text-2xl font-bold text-black-150 font-averia mt-3">150</p>

                </div>
                <div className='flex justify-end'>
                    <Chart1 />
                </div>
                <div className="flex items-center space-x-1 text-green-350 gap-1">
                    <span className="text-base font-medium">10%</span>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.27325 5.66656H8.72658C8.85843 5.66601 8.98715 5.62638 9.09647 5.55267C9.2058 5.47896 9.29081 5.37449 9.34076 5.25247C9.39071 5.13045 9.40336 4.99635 9.3771 4.86714C9.35084 4.73794 9.28686 4.61941 9.19325 4.52657L5.47325 0.806574C5.41127 0.744088 5.33754 0.694492 5.2563 0.660646C5.17506 0.626801 5.08792 0.609375 4.99991 0.609375C4.91191 0.609375 4.82477 0.626801 4.74353 0.660646C4.66229 0.694492 4.58856 0.744088 4.52658 0.806574L0.80658 4.52657C0.712966 4.61941 0.648985 4.73794 0.622728 4.86714C0.596471 4.99635 0.609118 5.13045 0.659068 5.25247C0.709018 5.37449 0.79403 5.47896 0.903352 5.55267C1.01267 5.62638 1.1414 5.66601 1.27325 5.66656V5.66656Z" fill="#009499" />
                    </svg>
                    <span className="text-base font-medium text-gray-350">750</span>
                </div>
            </div>

            {/* Total Revenue Card */}
            <div className="bg-gradient-to-r from-white to-green-150/20 rounded-[20px] p-6 flex flex-col border border-gray-250 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center space-x-3">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M4.31656 12.7471C3.26858 13.3613 0.520847 14.6156 2.1944 16.1851C3.01192 16.9517 3.92242 17.5001 5.06714 17.5001H11.5992C12.7439 17.5001 13.6544 16.9517 14.4719 16.1851C16.1455 14.6156 13.3978 13.3613 12.3498 12.7471C9.89225 11.3066 6.77405 11.3066 4.31656 12.7471Z" stroke="#727A90" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        <path d="M11.6667 5.83333C11.6667 7.67428 10.1742 9.16667 8.33333 9.16667C6.49238 9.16667 5 7.67428 5 5.83333C5 3.99238 6.49238 2.5 8.33333 2.5C10.1742 2.5 11.6667 3.99238 11.6667 5.83333Z" stroke="#727A90" stroke-width="1.5" />
                        <path d="M13.9678 2.73013C14.6383 2.34936 15.2234 2.5028 15.5749 2.74723C15.719 2.84744 15.7911 2.89755 15.8335 2.89755C15.8759 2.89755 15.948 2.84744 16.0921 2.74723C16.4436 2.5028 17.0288 2.34936 17.6992 2.73013C18.579 3.22985 18.7781 4.87844 16.7486 6.26929C16.3621 6.53421 16.1688 6.66667 15.8335 6.66667C15.4982 6.66667 15.3049 6.53421 14.9184 6.26929C12.8889 4.87844 13.088 3.22985 13.9678 2.73013Z" stroke="#727A90" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                    <h2 className="text-base font-medium text-gray-350">Revenue Generated</h2>
                </div>
                <div className="flex items-baseline space-x-3">
                    <p className="text-2xl font-bold text-black-150 font-averia mt-3">$500</p>

                </div>
                <div className='flex justify-end'>
                    <Chart2 />
                </div>
                <div className="flex items-center space-x-1 text-green-350 gap-1">
                    <span className="text-base font-medium">5%</span>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.27325 5.66656H8.72658C8.85843 5.66601 8.98715 5.62638 9.09647 5.55267C9.2058 5.47896 9.29081 5.37449 9.34076 5.25247C9.39071 5.13045 9.40336 4.99635 9.3771 4.86714C9.35084 4.73794 9.28686 4.61941 9.19325 4.52657L5.47325 0.806574C5.41127 0.744088 5.33754 0.694492 5.2563 0.660646C5.17506 0.626801 5.08792 0.609375 4.99991 0.609375C4.91191 0.609375 4.82477 0.626801 4.74353 0.660646C4.66229 0.694492 4.58856 0.744088 4.52658 0.806574L0.80658 4.52657C0.712966 4.61941 0.648985 4.73794 0.622728 4.86714C0.596471 4.99635 0.609118 5.13045 0.659068 5.25247C0.709018 5.37449 0.79403 5.47896 0.903352 5.55267C1.01267 5.62638 1.1414 5.66601 1.27325 5.66656V5.66656Z" fill="#009499" />
                    </svg>
                    <span className="text-base font-medium text-gray-350">156</span>
                </div>
            </div>

            {/* Avg. User Active Time Card */}
            <div className="bg-gradient-to-r from-white to-green-150/20 rounded-[20px] p-6 flex flex-col border border-gray-250 transition-all duration-300 transform hover:-translate-y-1">
                <div className="flex items-center space-x-3">
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0_2_3870)">
                            <path d="M10.8337 18.2922C10.5596 18.3195 10.2816 18.3334 10.0003 18.3334C5.39795 18.3334 1.66699 14.6024 1.66699 10.0001C1.66699 5.39771 5.39795 1.66675 10.0003 1.66675C14.6027 1.66675 18.3337 5.39771 18.3337 10.0001C18.3337 10.2813 18.3197 10.5593 18.2925 10.8334" stroke="#727A90" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M6.25 14.1666C7.41872 12.9425 9.18433 12.42 10.8333 12.6617M12.0792 7.91659C12.0792 9.06717 11.1452 9.99992 9.99292 9.99992C8.84075 9.99992 7.90664 9.06717 7.90664 7.91659C7.90664 6.76599 8.84075 5.83325 9.99292 5.83325C11.1452 5.83325 12.0792 6.76599 12.0792 7.91659Z" stroke="#727A90" stroke-width="1.5" stroke-linecap="round" />
                            <path d="M15.4167 18.3333C17.0275 18.3333 18.3333 17.0275 18.3333 15.4167C18.3333 13.8058 17.0275 12.5 15.4167 12.5C13.8058 12.5 12.5 13.8058 12.5 15.4167C12.5 17.0275 13.8058 18.3333 15.4167 18.3333Z" stroke="#727A90" stroke-width="1.5" />
                        </g>
                        <defs>
                            <clipPath id="clip0_2_3870">
                                <rect width="20" height="20" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                    <h2 className="text-base font-medium text-gray-350">New Users</h2>
                </div>
                <div className="flex items-baseline space-x-3">
                    <p className="text-2xl font-bold text-black-150 font-averia mt-3">120</p>

                </div>
                <div className='flex justify-end'>
                    <Chart3 />
                </div>
                <div className="flex items-center space-x-1 text-green-350 gap-1">
                    <span className="text-base font-medium">10%</span>
                    <svg width="10" height="6" viewBox="0 0 10 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M1.27325 5.66656H8.72658C8.85843 5.66601 8.98715 5.62638 9.09647 5.55267C9.2058 5.47896 9.29081 5.37449 9.34076 5.25247C9.39071 5.13045 9.40336 4.99635 9.3771 4.86714C9.35084 4.73794 9.28686 4.61941 9.19325 4.52657L5.47325 0.806574C5.41127 0.744088 5.33754 0.694492 5.2563 0.660646C5.17506 0.626801 5.08792 0.609375 4.99991 0.609375C4.91191 0.609375 4.82477 0.626801 4.74353 0.660646C4.66229 0.694492 4.58856 0.744088 4.52658 0.806574L0.80658 4.52657C0.712966 4.61941 0.648985 4.73794 0.622728 4.86714C0.596471 4.99635 0.609118 5.13045 0.659068 5.25247C0.709018 5.37449 0.79403 5.47896 0.903352 5.55267C1.01267 5.62638 1.1414 5.66601 1.27325 5.66656V5.66656Z" fill="#009499" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default BusinessCards;