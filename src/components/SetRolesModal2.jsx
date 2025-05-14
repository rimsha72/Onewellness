import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import PersonalDetails from './PersonalDetails';
import RoleActivities from './RoleActivities';

const SetRolesModal2 = ({ isOpen, onClose }) => {
    const [activeTab, setActiveTab] = useState('personal');
   
    if (!isOpen) return null;

    return ReactDOM.createPortal(
        <div className="fixed inset-0 bg-black-150/20 flex items-center justify-center z-50">
            <div className="bg-white rounded-3xl shadow-lg w-full max-w-[950px] p-4 sm:p-6 md:p-8 absolute top-6 right-6 overflow-y-auto h-screen sm:h-auto max-h-[90vh] sm:max-h-[80vh]">
                <button
                    className="absolute  cursor-pointer top-6 right-4 text-gray-500 hover:text-gray-700"
                    onClick={onClose}
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <h2 className="text-base sm:text-lg font-medium text-black-150 mb-2 sm:mb-4 border-b border-gray-250 pb-2 sm:pb-4">View Details</h2>

                <div className="w-full">
                    <div className="flex border border-green-150 rounded-[16px] p-1 bg-white max-w-[300px]">
                        <button
                            className={`flex-1 cursor-pointer py-3 px-4 text-sm font-semibold rounded-[12px] transition-colors duration-200 ${
                                activeTab === 'personal'
                                    ? 'bg-green-150 text-white'
                                    : 'bg-transparent text-black-350 hover:bg-gray-100'
                            }`}
                            onClick={() => setActiveTab('personal')}
                        >
                            Personal Details
                        </button>
                        <button
                            className={`flex-1 py-3 cursor-pointer px-4 text-sm font-semibold rounded-[12px] transition-colors duration-200 ${
                                activeTab === 'activities'
                                    ? 'bg-green-150 text-white'
                                    : 'bg-transparent text-black-350 hover:bg-gray-100'
                            }`}
                            onClick={() => setActiveTab('activities')}
                        >
                            Role Activities
                        </button>
                    </div>

                    <div className="mt-4">
                        {activeTab === 'personal' && (
                            <div>
                                <PersonalDetails />
                            </div>
                        )}
                        {activeTab === 'activities' && (
                            <div>
                                <RoleActivities />
                            </div>
                        )}
                    </div>
                </div>
                
                <div className="flex justify-end mt-6">
                    <button
                        onClick={onClose}
                        className="bg-green-150 cursor-pointer text-white text-sm font-medium py-3 px-7 rounded-xl hover:bg-green-150/80 transition duration-200"
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>,
        document.body
    );
};

export default SetRolesModal2;