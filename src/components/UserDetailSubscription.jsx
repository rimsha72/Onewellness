import React, { useState } from 'react';
import profile from "../assets/profile1.png"
import Posts from './Posts';
import Subscription from './Subscription';

const UserDetailSubscription = ({ isOpen, onClose, user }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black-150/20 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg shadow-lg w-full max-w-[950px] p-4 sm:p-6 md:p-8 relative overflow-y-auto h-screen sm:h-auto max-h-[90vh] sm:max-h-[80vh]">
                <div>
                    <button
                        className="absolute cursor-pointer top-4 right-4 text-gray-500 hover:text-gray-700"
                        onClick={onClose}
                    >
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <h2 className="text-base sm:text-lg font-medium text-black-150 mb-2 sm:mb-4 border-b border-gray-250 pb-2 sm:pb-4">View Details</h2>
                    <div className="flex flex-col sm:flex-row items-center space-x-0 sm:space-x-4 mb-4 sm:mb-6 border border-gray-250 rounded-2xl p-4 sm:p-6">
                        <div className="mb-4 sm:mb-0">
                            <img src={user ? user.avatar : profile} alt="" className="w-[70px] h-[70px] sm:w-[94px] sm:h-[94px] rounded-full object-cover" />
                            <p className="text-xs sm:text-sm font-semibold text-black-150 mt-2 sm:mt-3">{user ? user.name : 'Ameanda M.'}</p>
                            <p className="text-xs sm:text-sm text-gray-350 font-medium">{user ? user.email : 'abc@gmail.com'}</p>
                        </div>
                        <div className="w-[1px] h-[50px] sm:h-[62px] bg-green-150 hidden sm:block"></div>
                        <div className="pl-0 sm:pl-6 w-full">
                            <h2 className="text-xs sm:text-sm font-bold text-black-150 mb-2 sm:mb-4">Info Details</h2>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 text-xs sm:text-sm w-full">
                                <div>
                                    <p className="font-medium text-gray-350 mb-1">Subscription End Date</p>
                                    <p>{user ? user.date : '26 October 2024'}</p>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-350 mb-1">Email</p>
                                    <p>abc@gmail.com</p>
                                </div>
                                <div>
                                    <p className="font-medium text-gray-350 mb-1">Last Feeling</p>
                                    <p className='flex gap-2 text-green-150 font-medium'> <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M3.26483 8.58849C2.94145 7.69346 2.77976 7.24596 2.84871 6.9592C2.92411 6.64555 3.14717 6.40103 3.43228 6.31946C3.69295 6.24488 4.09845 6.4251 4.90945 6.78555C5.62678 7.10438 5.98545 7.26378 6.32244 7.25492C6.69348 7.24515 7.05041 7.09636 7.33434 6.83308C7.59221 6.59397 7.76518 6.21293 8.11111 5.45086L8.87351 3.77137C9.51034 2.36845 9.82876 1.66699 10.333 1.66699C10.8373 1.66699 11.1557 2.36845 11.7925 3.77137L12.5549 5.45086C12.9008 6.21293 13.0738 6.59397 13.3317 6.83308C13.6156 7.09636 13.9725 7.24515 14.3436 7.25492C14.6806 7.26378 15.0393 7.10438 15.7566 6.78555C16.5676 6.4251 16.9731 6.24488 17.2338 6.31946C17.5188 6.40103 17.7419 6.64555 17.8173 6.9592C17.8863 7.24596 17.7246 7.69346 17.4012 8.58841L16.0112 12.4355C15.4165 14.0812 15.1193 14.904 14.497 15.3688C13.8748 15.8337 13.0708 15.8337 11.4628 15.8337H9.20317C7.59516 15.8337 6.79115 15.8337 6.16896 15.3688C5.54679 14.904 5.24948 14.0812 4.65486 12.4355L3.26483 8.58849Z" stroke="#6EB9AD" stroke-width="1.5" />
                                        <path d="M10.333 11.667H10.3405" stroke="#6EB9AD" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                        <path d="M6.16602 18.333H14.4993" stroke="#6EB9AD" stroke-width="1.5" stroke-linecap="round" />
                                    </svg>
                                        Premium</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div><Subscription /></div>
                <div className='flex justify-end w-full'>
                    <button className="mt-4 sm:mt-6 cursor-pointer bg-green-150 text-white py-2 sm:py-3 px-8 rounded-xl transition duration-200 text-xs sm:text-sm ">
                        Done
                    </button>
                </div>
            </div>
        </div>
    );
};

export default UserDetailSubscription;