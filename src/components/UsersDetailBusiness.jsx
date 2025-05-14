import React, { useState } from 'react';
import profile from "../assets/profile1.png"
import Posts from './Posts';
const UsersDetailBusiness = ({ isOpen, onClose }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black-150/20 flex items-center justify-center z-50">
            <div className="bg-white rounded-3xl shadow-lg w-full max-w-[950px] p-4 sm:p-6 md:p-8 absolute top-6 right-6 overflow-y-auto h-screen sm:h-auto max-h-[90vh] sm:max-h-[80vh]">
                <div>
                    <button
                        className="absolute top-4 right-4 cursor-pointer text-gray-500 hover:text-gray-700"
                        onClick={onClose}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <h2 className="text-base sm:text-lg font-medium text-black-150 mb-2 sm:mb-4 border-b border-gray-250 pb-2 sm:pb-4">View Details</h2>
                    <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 mb-4 sm:mb-6 border border-gray-250 rounded-2xl p-4 sm:p-6">
                        <div className="mb-4 sm:mb-0">
                            <img src={profile} alt="" className="w-[70px] h-[70px] sm:w-[94px] sm:h-[94px] rounded-full object-cover" />
                            <p className="text-xs sm:text-sm font-semibold text-black-150 mt-2 sm:mt-3">Ameanda M.</p>
                            <p className="text-xs sm:text-sm text-gray-350 font-medium">abc@gmail.com</p>
                        </div>
                        <div className="w-[1px] h-[50px] sm:h-[62px] bg-green-150 hidden sm:block"></div>
                        <div className="pl-0 sm:pl-6 w-full">
                            <h2 className="text-xs sm:text-sm font-bold text-black-150 mb-2 sm:mb-4">Info Details</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-xs sm:text-sm w-full">
                                <div>
                                    <p className="font-medium text-gray-350 mb-1">Onboarding Date</p>
                                    <p>26 October 2024</p>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-350 mb-1">Time Spent</p>
                                    <p>5hrs</p>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-350 mb-1">Last Feeling</p>
                                    <p>Energetic</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div><Posts /></div>
                <div className='flex justify-end w-full'>
                    <button onClick={onClose} className="mt-4  cursor-pointer sm:mt-6 bg-green-150 text-white py-2 sm:py-3 px-8 rounded-xl transition duration-200 text-xs sm:text-sm ">
                        Done
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UsersDetailBusiness;