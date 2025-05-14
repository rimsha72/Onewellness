import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const DeleteRole = ({ isOpen, onClose }) => {

    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 bg-black-150/20 flex items-center justify-center z-50">
            <div className="bg-white rounded-3xl cursor-pointer shadow-lg w-full max-w-[550px] p-4 sm:p-6 md:p-8 absolute top-6 right-6 overflow-y-auto h-screen sm:h-auto max-h-[90vh] sm:max-h-[80vh]">
                <button
                    className="absolute top-6 right-4 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <h2 className="text-base sm:text-lg font-medium text-black-150 mb-2 sm:mb-4 border-b border-gray-250 pb-2 sm:pb-4">Delete Role</h2>
                <div className='mt-3'>
                    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="26" cy="26" r="26" fill="#EB001B" />
                        <circle opacity="0.06" cx="26" cy="26" r="26" />
                        <path d="M33.5404 19.2402L32.8959 29.6663C32.7312 32.3301 32.6489 33.662 31.9813 34.6197C31.6511 35.0931 31.2261 35.4926 30.7332 35.7929C29.7362 36.4002 28.4018 36.4002 25.7328 36.4002C23.0605 36.4002 21.7243 36.4002 20.7266 35.7917C20.2334 35.491 19.8083 35.0907 19.4783 34.6164C18.8108 33.6573 18.7303 32.3235 18.5692 29.656L17.9404 19.2402" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M16.3809 19.2401H35.1009M29.9588 19.2401L29.2489 17.7755C28.7772 16.8026 28.5414 16.3162 28.1346 16.0128C28.0445 15.9455 27.9489 15.8856 27.8489 15.8338C27.3985 15.6001 26.8579 15.6001 25.7767 15.6001C24.6684 15.6001 24.1143 15.6001 23.6564 15.8436C23.5549 15.8975 23.458 15.9598 23.3668 16.0298C22.9554 16.3455 22.7255 16.8497 22.2658 17.8582L21.6359 19.2401" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M23.1406 30.6799V24.4399" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                        <path d="M28.3408 30.6799V24.4399" stroke="white" stroke-width="1.5" stroke-linecap="round" />
                    </svg>
                    <h1 className='font-bold text-black-150 text-xl my-2'>Delete Role</h1>
                    <p className='text-gray-650 font-medium'>Are you sure, you want to delete this role.</p>
                </div>
                <div className="space-y-6 border border-gray-250 rounded-[20px] p-4 mt-4">
                    {/* Add New Role Section */}
                    <div>
                        <h3 className="text-sm font-bold text-black-150 mb-3">Info Details</h3>
                        <div className="flex justify-between flex-wrap gap-2 sm:gap-4 text-xs text-black-150 font-medium sm:text-sm w-full">
                            <div>
                                <p className="font-medium text-gray-350 mb-1">Name</p>
                                <p>John Bushmill</p>
                            </div>
                            <div>
                                <p className="font-medium text-gray-350 mb-1">Email</p>
                                <p>John123b@mail.com</p>
                            </div>
                            <div>
                                <p className="font-medium text-gray-350 mb-1">Role</p>
                                <p>Manager</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-end mt-6">
                    <button
                        onClick={onClose}
                        className="bg-green-150 cursor-pointer text-white text-sm font-medium py-3 px-7 rounded-xl hover:bg-green-150/80 transition duration-200"
                    >
                        Yes, Delete
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default DeleteRole;